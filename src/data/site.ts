// مصدر واحد لبيانات الكيان (الاسم الرسمي، العنوان NAP، الإحداثيات، الروابط الرسمية).
// عدّل هذا الملف فقط عند تغيّر بيانات النصب، وستتحدّث معه الصفحة والبيانات المنظّمة والوسوم الوصفية.

export const SITE = {
  // النطاق
  domain: 'tongfenggurong.com',
  url: 'https://tongfenggurong.com',

  // أسماء الكيان (الرسمي + المتداول) — تُستخدم في H1 والبيانات المنظّمة والوسوم
  fullNameAr: 'النصب التذكاري للجندي البحري المجهول',
  fullNameEn: 'Alexandria Naval Unknown Soldier Memorial',
  shortNameAr: 'الجندي المجهول',
  shortNameEn: 'Naval Unknown Soldier Memorial',

  // NAP — يجب أن يطابق الاسم والعنوان ما هو مسجّل في خرائط Google
  cityAr: 'الإسكندرية',
  districtAr: 'المنشية',
  districtFullAr: 'المنشية الكبرى',
  governorateAr: 'محافظة الإسكندرية',
  countryAr: 'مصر',
  countryCode: 'EG',
  postalCode: '5361033',
  plusCode: '5VXV+XG',
  streetAddressAr: 'ميدان الجندي المجهول، المنشية الكبرى، قسم المنشية',
  streetAddressEn: 'Al Gonday Al Maghool Sq., Al Mansheyah Al Kubra, Qesm Al Mansheyah',

  // الإحداثيات (مركز الخريطة المضمّنة المقدّمة للمشروع)
  latitude: 31.199999,
  longitude: 29.891177,

  // روابط الخرائط
  mapsShareUrl: 'https://maps.app.goo.gl/Hzrwki23zawzREuz8',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6070.070081511815!2d29.89117661285759!3d31.19999877425533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3ef832cefdb%3A0x304d50967e6abf61!2sAlexandria%20Naval%20Unknown%20Soldier%20Memorial!5e1!3m2!1sar!2seg!4v1789025602093!5m2!1sar!2seg',

  // الجهات الرسمية (روابط خارجية موثوقة)
  govtTourismUrl: 'https://www.egypt.travel/',
  govtTourismLabelAr: 'الهيئة المصرية العامة للتنشيط السياحي',
  alexandriaGovUrl: 'http://www.alexandria.gov.eg/',
  alexandriaGovLabelAr: 'محافظة الإسكندرية — البوابة الرسمية',
  monumentsUrl: 'https://egymonuments.gov.eg/monuments/qaitbay-citadel/',
  monumentsLabelAr: 'وزارة السياحة والآثار — قلعة قايتباي',
  wikidataUrl: 'https://www.wikidata.org/wiki/Q3013168',
  wikipediaUrl: 'https://en.wikipedia.org/wiki/Alexandria_Naval_Unknown_Soldier_Memorial',

  // بيانات المراجعات على خرائط Google
  rating: 4.4,
  reviewCount: 18296,

  // المعالم المجاورة (تُستخدم في النص والوسوم الوصفية)
  nearbyLandmarksAr: ['قلعة قايتباي', 'مسجد أبو العباس المرسي'],
  nearbyLandmarksEn: ['Qaitbay Citadel', 'Abu al-Abbas al-Mursi Mosque'],

  // الصورة الرئيسية المستخدمة في og:image والبيانات المنظّمة
  heroImage: '/images/memorial-front.jpg',
  heroImageWidth: 1600,
  heroImageHeight: 723,

  // التحليلات (لا تُحمّل قبل الموافقة)
  ga4Id: 'G-HXM22WWPKP',

  // تاريخ آخر تحديث للمحتوى
  lastUpdated: '2026-09-10'
} as const;

/** يبني رابطاً مطلقاً داخل النطاق الرسمي. */
export const absoluteUrl = (path: string): string => new URL(path, SITE.url).toString();
