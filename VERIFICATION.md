# تقرير التحقق

## فحوصات المصدر التي يمكن تنفيذها دون اتصال خارجي

- بنية المشروع أحادية الحزمة، لكن يوجد `pnpm-workspace.yaml` لضبط pnpm 12: يسمح بتشغيل سكربتات البناء لـ`esbuild` و`workerd` و`sharp` عبر `allowBuilds` (بدونه يفشل التثبيت بالخطأ `ERR_PNPM_IGNORED_BUILDS`).
- `pnpm-lock.yaml` مثبّت في المستودع لدعم `--frozen-lockfile`.
- النطاق النهائي `https://tongfenggurong.com` مضبوط في مكان واحد داخل `astro.config.mjs`.
- sitemap يعمل تلقائياً لأن `site` لم يعد فارغاً، وأصبح `dist/sitemap-index.xml` جزءاً من المخرجات.
- لا توجد قيم `lastmod` مكتوبة يدوياً؛ تاريخ آخر تحديث للمحتوى موحّد على 10 سبتمبر 2026.
- لا توجد نطاقات تجريبية أو عناوين تطوير محلية أو مخططات روابط خاصة بإضافات المتصفح في ملفات الموقع.
- iframe الخاص بـ Google Maps مضبوط على `ar` / `eg` مع معرّف المكان الوارد في رابط Google Maps المقدّم.
- GA4 لا يتم تحميله قبل موافقة المستخدم.
- صور المعرض محلية (max 1600px / JPEG q82) بلا أي رابط خارجي في وسم `img`، مع روابط Wikimedia كخطة بديلة فقط عند غياب الملف المحلي.

## فحوصات مخرجات البناء

شغّل بعد `pnpm build`:

```bash
pnpm check:dist
```

يفحص `scripts/check-dist.mjs` آلياً: العنوان ووسوم الوصف وCanonical وOpen Graph وTwitter، وربط manifest وService Worker، وكل عقد JSON-LD (`TouristAttraction` بـ`@id` و`image` مطلق و`isAccessibleForFree` و`geo` و`hasMap` و`sameAs` و`aggregateRating`، و`FAQPage` مطابق لعدد الأسئلة المرئية، و`BreadcrumbList`، و`Organization/WebSite/WebPage`)، وتفرّد `H1` واحتواءه الاسم الرسمي والمدينة، وعناوين `H2` الأربعة المرتبطة بالكيان، وalt الصور، وإعدادات iframe، وسلامة روابط `target="_blank"`، ووجود ملفات النشر (sitemap، robots، manifest، sw، الأيقونات، الصور).

آخر نتيجة محلية: **77 PASS / 0 FAIL**.

## التحقق من عدم الحذف (الحفاظ على الصفحة الأصلية)

تمت مقارنة بنية الصفحة بين نسخة `HEAD` السابقة والنسخة الحالية، مع عدّ العناصر في المصدر وفي `dist/index.html`:

| العنصر | HEAD | المصدر الحالي | dist |
| --- | --- | --- | --- |
| `info-cell` | 4 | 4 | 4 |
| `timeline-item` | 4 | 4 | 4 |
| `photo-frame` | 3 | 3 | 3 |
| `visit-card` | 8 | 8 | 8 |
| `place-card` | 7 | 7 | 7 |
| `brass-rule` / `arch-motif` / `map-wrap` | 1 / 1 / 1 | 1 / 1 / 1 | 1 / 1 / 1 |
| `section[id]` | 5 | 7 | 7 |
| `shell-border` | 5 | 6 | 6 |
| `H1` / `H2` / `H3` | 1 / 10 / 9 | 1 / 10 / 12 | 1 / 10 / 12 |

كل العناصر الأصلية محفوظة بالعدد نفسه، والإضافات جاءت في صورة عناصر جديدة فقط (قسمَا `#about` و`#sources`، وثلاثة عناوين `H3`، وسؤالا FAQ إضافيان ليصبح المجموع 9 أسئلة مرئية مطابقة تماماً لعدد أسئلة `FAQPage`).

## ملاحظة بيئة إنشاء الحزمة

بيئة الإنشاء المحلية لا تصل إلى جميع المواقع الخارجية، لذلك لا يمكن تنزيل صور جديدة عند الحاجة. أما دورة `pnpm install --frozen-lockfile → pnpm check → pnpm build → pnpm check:dist` فقد نُفّذت بنجاح في هذه البيئة. يبقى تنفيذ نفس الدورة في CI المتصل قبل كل نشر.
