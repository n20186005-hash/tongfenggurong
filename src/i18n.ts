// طبقة التعدد اللغوي: تعريف اللغات، البيانات الوصفية، مسارات الروابط،
// وروابط hreflang البديلة. اللغة العربية هي الافتراضية (بلا بادئة في المسار)،
// و x-default يشير إلى العربية.

import { SITE } from './data/site';

export const locales = ['ar', 'en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ar';

export interface LocaleMeta {
  htmlLang: string;
  ogLocale: string;
  dir: 'rtl' | 'ltr';
  label: string;
  shortLabel: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  ar: { htmlLang: 'ar', ogLocale: 'ar_EG', dir: 'rtl', label: 'العربية', shortLabel: 'العربية' },
  en: { htmlLang: 'en', ogLocale: 'en_US', dir: 'ltr', label: 'English', shortLabel: 'EN' },
  zh: { htmlLang: 'zh-Hans', ogLocale: 'zh_CN', dir: 'ltr', label: '简体中文', shortLabel: '中文' }
};

/** يبني مساراً داخلياً مع بادئة اللغة (العربية بلا بادئة). */
export const localizedPath = (locale: Locale, path: string): string => {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return `/${locale}${clean}`;
};

/** يبني رابطاً مطلقاً للغة معيّنة. */
export const localizedUrl = (locale: Locale, path: string): string =>
  new URL(localizedPath(locale, path), SITE.url).toString();

/**
 * روابط hreflang البديلة لصفحة ما. تُمرَّر المسار الحيادي (مثل '/' أو '/nearby-attractions/').
 * x-default يشير إلى العربية لأنها اللغة الافتراضية.
 */
export const hreflangAlternates = (path: string) => [
  { hreflang: 'ar', href: localizedUrl('ar', path) },
  { hreflang: 'en', href: localizedUrl('en', path) },
  { hreflang: 'zh', href: localizedUrl('zh', path) },
  { hreflang: 'x-default', href: localizedUrl('ar', path) }
];

/** اسم الكيان المترجم حسب اللغة (للعناوين والبيانات المنظّمة). */
export const entityName = (locale: Locale): string => {
  if (locale === 'en') return SITE.fullNameEn;
  if (locale === 'zh') return SITE.fullNameZh;
  return SITE.fullNameAr;
};

/** الاسم المختصر المترجم. */
export const entityShortName = (locale: Locale): string => {
  if (locale === 'en') return SITE.shortNameEn;
  if (locale === 'zh') return SITE.shortNameZh;
  return SITE.shortNameAr;
};

/** اسم المدينة المترجم. */
export const cityName = (locale: Locale): string => {
  if (locale === 'en') return SITE.cityEn;
  if (locale === 'zh') return SITE.cityZh;
  return SITE.cityAr;
};
