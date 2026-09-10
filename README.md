# النصب التذكاري للجندي البحري المجهول — موقع إرشادي عربي

موقع ثابت أحادي الصفحة مخصص للنصب التذكاري للجندي البحري المجهول في المنشية، الإسكندرية. التصميم مستوحى من الأعمدة الحجرية، الأزرق البحري والنحاس، وليس قالباً عاماً للمعالم السياحية.

## التقنية

- Astro 7.3.2
- Tailwind CSS 4.3.3 عبر `@tailwindcss/vite`
- TypeScript 6.0.3
- Vite 8.2.2 (مثبت لتوحيد peer الخاص بـ Tailwind)
- @types/node 24.13.3
- pnpm 12.3.4
- Node.js 24.21.0 LTS
- Cloudflare Workers Static Assets عبر Wrangler 4.130.0
- PWA: `manifest.webmanifest` + `sw.js` + أيقونات 192/512/512-maskable
- GA4: `G-HXM22WWPKP` مع بوابة موافقة الزائر
- بدون قاعدة بيانات أو تسجيل دخول أو CMS

## النطاق — مكان واحد فقط للتعديل

النطاق الرسمي مفعّل حالياً:

```js
const site = 'https://tongfenggurong.com';
```

كل canonical وOpen Graph وJSON-LD وsitemap تعتمد على `Astro.site` المشتق من هذا الحقل.

## التشغيل

```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm dev
```

للنشر على Cloudflare Workers Static Assets:

```bash
pnpm deploy
```

ملف `wrangler.jsonc` يقدّم محتويات `dist/` كأصول ثابتة، لذلك لا يحتاج الموقع الثابت إلى adapter لـ Astro.

## الصور الحقيقية

الموقع يفضّل تلقائياً الصور المحلية التالية إذا كانت موجودة:

- `public/images/memorial-front.jpg`
- `public/images/memorial-columns.jpg`
- `public/images/memorial-side.jpg`
- `public/images/memorial-square.jpg`

وإذا لم تكن موجودة، يستخدم روابط Wikimedia Commons الأصلية كـ fallback حتى لا تنكسر الصفحة. لتنزيل النسخ المحلية مرة واحدة في بيئة متصلة بالإنترنت:

```bash
pnpm photos:download
```

انظر `PHOTO_SOURCES.md` للاعتمادات والتراخيص. لا تستبدل الاعتمادات إذا بقيت الصور المرخّصة من Commons.

## تهيئة الأصول (اختياري — Windows)

لضغط الصور المحلية وإعادة توليد أيقونات PWA (192/512/512-maskable):

```bash
pnpm assets:prepare
```

يحتاج السكربت إلى PowerShell مع `System.Drawing` (متوفر افتراضياً في Windows) ولا يُنفّذ أثناء البناء، بل يُشغّل مرة واحدة قبل الرفع.

## GA4 والخصوصية

معرّف GA4 هو `G-HXM22WWPKP`. لا يتم تحميل سكربت Google Analytics قبل موافقة الزائر. يمكن للزائر رفض التحليلات أو إعادة فتح إعدادات الخصوصية من التذييل. قرار الموافقة محفوظ في `localStorage` فقط.

## خريطة Google

الخريطة المضمنة تستخدم لغة عربية وسياق مصر (`ar` / `eg`) وتحتفظ بمعرّف المكان الوارد في رابط Google Maps المقدم للمشروع.

## قائمة موثوقية الكيان على خرائط Google

| البند | الحالة في هذا المستودع |
| --- | --- |
| الاسم الرسمي في الترويسة والتذييل | موجود: الاسم العربي الكامل + الاسم الإنجليزي في `header` و`footer` (`.brand-text` / `.footer-nap`). |
| تطابق NAP (الاسم/العنوان/الهاتف) | العنوان والرمز المختصر والإحداثيات مأخوذة من مصدر واحد `src/data/site.ts` وتظهر في بطاقة المعلومات، التذييل، وJSON-LD. لا يوجد هاتف معلن للكيان، لذلك لم يُختلق رقم. |
| تحقق Search Console | يتطلب إضافة رمز التحقق الخاص بالمالك إلى `BaseLayout.astro` بعد تسجيل النطاق (لم يُدرج رمز وهمي). |
| صفحة مستقلة قابلة للزحف | صفحة واحدة بمسار `/` مع `robots: index,follow,max-image-preview:large`، وصفحة `404` بـ`noindex`. |
| البيانات المنظّمة | ست عقد JSON-LD: `TouristAttraction`+`LocalBusiness` (بـ`@id`)، `Organization`، `WebSite`، `WebPage`، `BreadcrumbList`، `FAQPage`. |
| الاستشهادات المحلية | قسم المصادر + روابط رسمية `gov.eg` وWikimedia/Wikidata، مع `sameAs` في JSON-LD. |
| HTTPS + إمكانية الوصول | الموقع ثابت عبر Cloudflare Workers Static Assets، ولا يوجد حجب في `robots.txt` (`Allow: /`). |

## ملاحظات المحتوى

- بيانات التقييم الظاهرة: 4.4 من 18,296 مراجعة، وفق البيانات المقدمة للمشروع من Google Maps.
- الساحة العامة تعامل باعتبارها متاحة طوال اليوم، مع تنبيه لاحتمال وجود قيود مؤقتة أثناء المراسم الرسمية.
- لم تُثبت أسعار متغيرة لمعالم مجاورة داخل الصفحة؛ الزائر يُنصح بالرجوع للمصدر الرسمي قبل الزيارة.
- تم بناء البيانات المنظّمة (`TouristAttraction` + `LocalBusiness` + `FAQPage` + `BreadcrumbList` + `Organization/WebSite/WebPage`) لتعزيز ارتباط Google بالكيان.
- آخر تحديث للمحتوى: 10 سبتمبر 2026.
- لا يوجد نطاق تجريبي أو عنوان تطوير محلي داخل المحتوى.
