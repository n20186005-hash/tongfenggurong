// فحص مخرجات البناء مقابل قائمة متطلبات ربط الكيان (SEO) قبل النشر.
// الاستخدام: node scripts/check-dist.mjs
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const html = readFileSync(join(dist, 'index.html'), 'utf8');

let passed = 0;
const failures = [];

const check = (label, condition, detail = '') => {
  if (condition) {
    passed += 1;
    console.log(`PASS  ${label}`);
  } else {
    failures.push(`${label}${detail ? ` — ${detail}` : ''}`);
    console.log(`FAIL  ${label}${detail ? ` — ${detail}` : ''}`);
  }
};

const attr = (tag, name) => {
  const match = tag.match(new RegExp(`${name}=["']([^"']*)["']`));
  return match ? match[1] : null;
};

const meta = (key, value) => {
  const tags = html.match(/<meta\b[^>]*>/g) ?? [];
  const found = tags.find((tag) => {
    const keyAttr = attr(tag, 'property') ?? attr(tag, 'name');
    return keyAttr && keyAttr.toLowerCase() === key.toLowerCase() && (value === undefined || attr(tag, 'content') === value);
  });
  return found ? attr(found, 'content') : null;
};

const jsonLdBlocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => match[1]);
const nodes = jsonLdBlocks.map((block) => {
  try {
    return JSON.parse(block.replace(/&quot;/g, '"'));
  } catch (error) {
    check('JSON-LD 可解析', false, error.message);
    return {};
  }
});
const flat = nodes.flatMap((node) => (Array.isArray(node) ? node : [node]));

// 1. الوسوم الوصفية والعنوان
const titleTag = html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '';
check('Title يحتوي الاسم الرسمي + المدينة', titleTag.includes('النصب التذكاري للجندي البحري المجهول') && titleTag.includes('الإسكندرية'), titleTag);
check('Title ‏50–75 حرفاً', titleTag.length >= 50 && titleTag.length <= 75, `${titleTag.length}`);
const description = meta('description') ?? '';
check('Meta description ‏120–320 حرفاً', description.length >= 120 && description.length <= 320, `${description.length}`);
check('Meta description يذكر المدينة والمعالم المجاورة', description.includes('الإسكندرية') && description.includes('قلعة قايتباي'));
check('Canonical مطلق على النطاق الرسمي', html.includes('<link rel="canonical" href="https://tongfenggurong.com/"'));
check('robots index,follow', (meta('robots') ?? '').includes('index,follow'));

// 2. Open Graph / Twitter
check('og:type=website', meta('og:type') === 'website');
check('og:title', (meta('og:title') ?? '').length > 10);
check('og:description', (meta('og:description') ?? '').length > 50);
check('og:url مطلق', meta('og:url') === 'https://tongfenggurong.com/');
check('og:site_name', (meta('og:site_name') ?? '').includes('الإسكندرية'));
check('og:image مطلق', (meta('og:image') ?? '').startsWith('https://tongfenggurong.com/'), meta('og:image'));
check('og:image:alt يحتوي الاسم والمدينة', (meta('og:image:alt') ?? '').includes('الإسكندرية'));
check('twitter:card=summary_large_image', meta('twitter:card') === 'summary_large_image');
check('twitter:image مطلق', (meta('twitter:image') ?? '').startsWith('https://tongfenggurong.com/'));

// 3. PWA
check('manifest مرتبط', html.includes('rel="manifest" href="/manifest.webmanifest"'));
check('theme-color', meta('theme-color') === '#07151f');
check('apple-touch-icon', html.includes('rel="apple-touch-icon"'));
check('تسجيل Service Worker', html.includes("navigator.serviceWorker.register('/sw.js')"));

// 4. البيانات المنظّمة
const attraction = flat.find((node) => [node['@type']].flat().includes('TouristAttraction'));
check('TouristAttraction موجود', Boolean(attraction));
if (attraction) {
  check('@id للكيان', attraction['@id'] === 'https://tongfenggurong.com/#attraction');
  check('alternateName متعدد', Array.isArray(attraction.alternateName) && attraction.alternateName.length >= 3);
  check('image مطلق', Array.isArray(attraction.image) && attraction.image.every((src) => src.startsWith('https://tongfenggurong.com/')), JSON.stringify(attraction.image));
  check('isAccessibleForFree', attraction.isAccessibleForFree === true);
  check('PostalAddress كامل', attraction.address?.postalCode === '5361033' && attraction.address?.addressCountry === 'EG');
  check('geo إحداثيات', typeof attraction.geo?.latitude === 'number' && typeof attraction.geo?.longitude === 'number');
  check('hasMap = رابط المشاركة', attraction.hasMap === 'https://maps.app.goo.gl/Hzrwki23zawzREuz8');
  check('sameAs ≥ 3 روابط', (attraction.sameAs ?? []).length >= 3);
  check('openingHoursSpecification', Array.isArray(attraction.openingHoursSpecification) && attraction.openingHoursSpecification.length > 0);
  check('aggregateRating = 4.4 / 18296', attraction.aggregateRating?.ratingValue === 4.4 && attraction.aggregateRating?.reviewCount === 18296);
}
const faq = flat.find((node) => node['@type'] === 'FAQPage');
const faqDetails = (html.match(/<details class="faq"/g) ?? []).length;
check('FAQPage موجود', Boolean(faq));
check('عدد أسئلة FAQ مطابق للصفحة', faq?.mainEntity?.length === faqDetails, `${faq?.mainEntity?.length} schema / ${faqDetails} details`);
check('FAQ ‏5–8+ أسئلة', (faq?.mainEntity?.length ?? 0) >= 5);
const breadcrumb = flat.find((node) => node['@type'] === 'BreadcrumbList');
check('BreadcrumbList بخمسة مستويات', breadcrumb?.itemListElement?.length === 5);
check('Organization/WebSite/WebPage موجودة', ['Organization', 'WebSite', 'WebPage'].every((type) => flat.some((node) => node['@type'] === type)));
const webpage = flat.find((node) => node['@type'] === 'WebPage');
check('WebPage dateModified = 2026-09-10', webpage?.dateModified === '2026-09-10');

// 5. العناوين والصور
const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((match) => match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
check('H1 واحد فقط', h1s.length === 1, `${h1s.length}`);
const h1Text = h1s[0] ?? '';
check('H1 يحتوي الاسم الرسمي الكامل', h1Text.includes('النصب التذكاري') && h1Text.includes('البحري المجهول'), h1Text);
check('H1 يحتوي اسم المدينة', h1Text.includes('الإسكندرية'), h1Text);
const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((match) => match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
const requiredH2 = [
  'حول النصب التذكاري للجندي البحري المجهول',
  'الموقع وكيفية زيارة الجندي المجهول في الإسكندرية',
  'المعالم والتجاذبات حول الجندي المجهول',
  'تاريخ وأهمية النصب التذكاري للجندي البحري المجهول'
];
requiredH2.forEach((heading) => check(`H2 «${heading}»`, h2s.some((item) => item.includes(heading))));
const images = html.match(/<img\b[^>]*>/g) ?? [];
check('كل الصور تحمل alt', images.every((tag) => (attr(tag, 'alt') ?? '').length > 3), `${images.length} صورة`);
const heroImage = images.find((tag) => (attr(tag, 'src') ?? '').includes('memorial-front'));
check('صورة الواجهة (Hero) محلية وموجودة', Boolean(heroImage) && existsSync(join(dist, attr(heroImage, 'src').replace(/^\//, ''))));
check('وصف صورة الواجهة يربط الكيان بالمدينة والبلد', ['الإسكندرية', 'مصر'].every((word) => (attr(heroImage ?? '', 'alt') ?? '').includes(word)), attr(heroImage ?? '', 'alt'));
const contentImages = images.filter((tag) => /(memorial|images)\//.test(attr(tag, 'src') ?? ''));
check('صور المحتوى محلية بلا روابط خارجية', contentImages.every((tag) => (attr(tag, 'src') ?? '').startsWith('/images/')), `${contentImages.length} صورة`);

// 6. الخريطة والروابط الخارجية
const iframe = html.match(/<iframe\b[^>]*>/g)?.[0] ?? '';
check('iframe يستخدم رابط التضمين المقدّم', iframe.includes('0x14f5c3ef832cefdb%3A0x304d50967e6abf61'));
check('iframe ‏lazy + referrerpolicy + title', iframe.includes('loading="lazy"') && iframe.includes('referrerpolicy="strict-origin-when-cross-origin"') && iframe.includes('title='));
check('رابط خرائط Google ظاهر', (html.match(/https:\/\/maps\.app\.goo\.gl\/Hzrwki23zawzREuz8/g) ?? []).length >= 4);
const externalAnchors = html.match(/<a\b[^>]*target="_blank"[^>]*>/g) ?? [];
check('كل الروابط الخارجية rel=noopener noreferrer', externalAnchors.every((tag) => /rel="noopener noreferrer"/.test(tag)), `${externalAnchors.length} رابط`);
check('روابط رسمية .gov / جهة سياحية', html.includes('egypt.travel') && html.includes('alexandria.gov.eg'));

// 7. الخصوصية والتحليلات
check('GA4 داخل بوابة الموافقة فقط', html.includes('G-HXM22WWPKP') && html.includes("localStorage.getItem(key)"), '');
check('لا تحميل مباشر لـ gtag في head', !/<script[^>]+src="https:\/\/www\.googletagmanager\.com/.test(html));
check('بيان ملكية الصور', html.includes('جميع الصور المعروضة في هذا الموقع') || html.includes('جميع حقوق الصور'));
check('لا توجد بقايا AdSense أو عناوين تجريبية', !/ca-pub-|adsbygoogle|example\.com|localhost:/.test(html.replace(/localhost'\)/g, '')));

// 8. ملفات النشر
const requiredFiles = [
  'index.html', '404.html', 'robots.txt', 'sitemap-index.xml', 'manifest.webmanifest', 'sw.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png',
  'images/memorial-front.jpg', 'images/memorial-columns.jpg', 'images/memorial-side.jpg', 'images/memorial-square.jpg',
  'brand/logo.svg', 'favicon.svg', 'apple-touch-icon.png'
];
requiredFiles.forEach((file) => check(`ملف ${file}`, existsSync(join(dist, file)) && statSync(join(dist, file)).size > 0));
const sitemap = existsSync(join(dist, 'sitemap-index.xml')) ? readFileSync(join(dist, 'sitemap-index.xml'), 'utf8') : '';
check('sitemap يشير إلى خرائط الموقع', sitemap.includes('sitemap-0.xml'));
const sitemapUrls = existsSync(join(dist, 'sitemap-0.xml')) ? readFileSync(join(dist, 'sitemap-0.xml'), 'utf8') : '';
check('sitemap يتضمن الصفحة الرئيسية فقط', sitemapUrls.includes('https://tongfenggurong.com/') && !sitemapUrls.includes('404'));
const notFound = readFileSync(join(dist, '404.html'), 'utf8');
check('صفحة 404 بلا فهرسة', notFound.includes('name="robots" content="noindex,follow"'));
const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
check('robots.txt يسمح بالزحف ويشير للخريطة', robots.includes('Allow: /') && robots.includes('tongfenggurong.com/sitemap-index.xml'));
check('صور مضغوطة (أقل من 700KB للصورة الرئيسية)', statSync(join(dist, 'images/memorial-front.jpg')).size < 700 * 1024);

console.log(`\n${passed} PASS / ${failures.length} FAIL`);
if (failures.length) {
  failures.forEach((item) => console.log(` - ${item}`));
  process.exit(1);
}
