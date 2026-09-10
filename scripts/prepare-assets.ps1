# سكربت تجهيز الأصول (يُشغَّل يدوياً على Windows عبر PowerShell).
# 1) ضغط صور المعرض إلى أقصى ضلع 1600 بكسل بجودة 82 مع مراعاة اتجاه EXIF.
# 2) توليد أيقونات PWA (192 / 512 / maskable 512) في public/icons.
# لا يُستدعى أثناء البناء، والملفات الناتجة تُحفظ في المستودع.

Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$imagesDir = Join-Path $root 'public/images'
$iconsDir = Join-Path $root 'public/icons'

if (-not (Test-Path $iconsDir)) { New-Item -ItemType Directory -Path $iconsDir | Out-Null }

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' }

function Save-Jpeg {
  param([System.Drawing.Bitmap]$Bitmap, [string]$Target, [int]$Quality)
  $parameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $parameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
    [System.Drawing.Imaging.Encoder]::Quality, [int64]$Quality)
  $temp = "$Target.tmp.jpg"
  $Bitmap.Save($temp, $jpegCodec, $parameters)
  Move-Item -Force -LiteralPath $temp -Destination $Target
}

function Get-ExifOrientation {
  param([System.Drawing.Image]$Image)
  try {
    $item = $Image.GetPropertyItem(274)
    if ($item) { return [BitConverter]::ToUInt16($item.Value, 0) }
  } catch { }
  return 1
}

function Compress-Photo {
  param([string]$Path, [int]$MaxEdge = 1600, [int]$Quality = 82)

  # نقرأ الملف في الذاكرة حتى لا يبقى مقفلاً عند استبداله لاحقاً.
  $bytes = [System.IO.File]::ReadAllBytes($Path)
  $stream = New-Object System.IO.MemoryStream($bytes, $false)
  $source = [System.Drawing.Image]::FromStream($stream)

  # تخطّي الصور التي سبق تجهيزها حتى لا تُعاد الجودة للانخفاض عند تكرار التشغيل.
  if ($source.Width -le $MaxEdge -and $source.Height -le $MaxEdge -and $bytes.Length -lt 500KB) {
    Write-Host ("{0}: مجهّزة مسبقاً ({1}x{2} · {3:N0} KB)" -f (Split-Path -Leaf $Path), $source.Width, $source.Height, ($bytes.Length / 1KB))
    $source.Dispose()
    $stream.Dispose()
    return
  }

  switch (Get-ExifOrientation -Image $source) {
    3 { $source.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
    6 { $source.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
    8 { $source.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
  }

  $ratio = [Math]::Min($MaxEdge / $source.Width, $MaxEdge / $source.Height)
  if ($ratio -gt 1) { $ratio = 1 }
  $width = [int][Math]::Round($source.Width * $ratio)
  $height = [int][Math]::Round($source.Height * $ratio)

  $target = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
  $graphics = [System.Drawing.Graphics]::FromImage($target)
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $graphics.DrawImage($source, 0, 0, $width, $height)
  $graphics.Dispose()
  $source.Dispose()
  $stream.Dispose()

  $before = (Get-Item -LiteralPath $Path).Length
  Save-Jpeg -Bitmap $target -Target $Path -Quality $Quality
  $target.Dispose()
  $after = (Get-Item -LiteralPath $Path).Length
  Write-Host ("{0}: {1}x{2} · {3:N0} KB -> {4:N0} KB" -f (Split-Path -Leaf $Path), $width, $height, ($before / 1KB), ($after / 1KB))
}

function New-MemorialIcon {
  param([int]$Size, [string]$Target, [switch]$Maskable)

  $bitmap = New-Object System.Drawing.Bitmap($Size, $Size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

  # خلفية متدرّجة (بحر داكن)
  $bounds = New-Object System.Drawing.Rectangle(0, 0, $Size, $Size)
  $background = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $bounds,
    [System.Drawing.ColorTranslator]::FromHtml('#07151f'),
    [System.Drawing.ColorTranslator]::FromHtml('#174052'),
    45)
  $graphics.FillRectangle($background, $bounds)
  $background.Dispose()

  # ميدالية دائرية
  $ring = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml('#d2aa68'), [float]($Size * 0.018))
  $graphics.DrawEllipse($ring, [float]($Size * 0.06), [float]($Size * 0.06), [float]($Size * 0.88), [float]($Size * 0.88))
  $ring.Dispose()

  # صندوق المحتوى (الهوامش الآمنة في نسخة maskable)
  $inner = if ($Maskable) { $Size * 0.58 } else { $Size * 0.72 }
  $offset = ($Size - $inner) / 2

  $brass = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#d2aa68'))
  $brassSoft = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#e6c58c'))

  # القبة + التاج
  $graphics.FillPie(
    $brassSoft,
    [float]($offset + 0.08 * $inner), [float]($offset + 0.04 * $inner),
    [float](0.84 * $inner), [float](0.46 * $inner),
    [float]180, [float]180)

  # التاج الأفقي
  $graphics.FillRectangle($brass,
    [float]($offset + 0.04 * $inner), [float]($offset + 0.27 * $inner),
    [float](0.92 * $inner), [float](0.1 * $inner))

  # الأعمدة الثلاثة
  foreach ($column in 0.16, 0.44, 0.72) {
    $graphics.FillRectangle($brassSoft,
      [float]($offset + $column * $inner), [float]($offset + 0.37 * $inner),
      [float](0.12 * $inner), [float](0.4 * $inner))
  }

  # القاعدة
  $graphics.FillRectangle($brass,
    [float]($offset + 0.02 * $inner), [float]($offset + 0.77 * $inner),
    [float](0.96 * $inner), [float](0.1 * $inner))

  $brass.Dispose()
  $brassSoft.Dispose()
  $graphics.Dispose()

  $bitmap.Save($Target, [System.Drawing.Imaging.ImageFormat]::Png)
  $bitmap.Dispose()
  Write-Host ("icon: {0} ({1}px)" -f (Split-Path -Leaf $Target), $Size)
}

Get-ChildItem -LiteralPath $imagesDir -Filter '*.jpg' | ForEach-Object { Compress-Photo -Path $_.FullName }

New-MemorialIcon -Size 192 -Target (Join-Path $iconsDir 'icon-192.png')
New-MemorialIcon -Size 512 -Target (Join-Path $iconsDir 'icon-512.png')
New-MemorialIcon -Size 512 -Target (Join-Path $iconsDir 'maskable-512.png') -Maskable

Write-Host 'done'
