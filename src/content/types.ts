import type { Locale } from '../i18n';

export interface FaqItem {
  q: string;
  a: string;
}

export interface FoodPlace {
  tag: string;
  name: string;
  desc: string;
}

export interface NearbyLandmark {
  distance: string;
  name: string;
  desc: string;
}

/** بطاقة معلم/وجهة في صفحة المعالم المجاورة. */
export interface NearbySpot {
  tag: string;
  distance: string;
  name: string;
  desc: string;
}

/** بطاقة إرشادية قصيرة (عنوان + نص) في صفحة المعالم المجاورة. */
export interface NearbyCard {
  title: string;
  text: string;
}

/** محتوى صفحة «المعالم المجاورة» مستقلاً عن محتوى الصفحة الرئيسية. */
export interface NearbyContent {
  locale: Locale;
  title: string;
  description: string;
  eyebrow: string;
  hero: { title: string; sub: string; lead: string; cta: string };
  landmarks: { eyebrow: string; title: string; intro: string; spots: NearbySpot[] };
  foods: { eyebrow: string; title: string; intro: string; items: FoodPlace[]; note: string };
  transport: { eyebrow: string; title: string; intro: string; cards: NearbyCard[] };
  tips: { eyebrow: string; title: string; items: string[] };
  faq: FaqItem[];
}

/** معلومة سريعة (مفتاح/قيمة) في صفحة معلم مستقل. */
export interface SpotFact {
  k: string;
  v: string;
}

/**
 * محتوى صفحة معلم مستقل (قلعة قايتباي، المكتبة... إلخ) لكل لغة.
 * المعطيات القابلة للتغيّر (المواعيد/التذاكر) تُذكر دائماً كـ«غير مُتحقَّق منها».
 */
export interface SpotContent {
  locale: Locale;
  slug: string;
  name: string;
  title: string;
  description: string;
  eyebrow: string;
  hero: { name: string; sub: string; lead: string; cta: string };
  facts: { title: string; items: SpotFact[]; note: string };
  about: { eyebrow: string; title: string; paras: string[] };
  highlights: { eyebrow: string; title: string; intro: string; items: NearbyCard[] };
  visit: { eyebrow: string; title: string; intro: string; cards: NearbyCard[]; note: string };
  relation: { eyebrow: string; title: string; text: string };
  faq: FaqItem[];
}

export interface GuideContent {
  locale: Locale;
  title: string;
  description: string;
  heroImageAlt: string;
  nav: {
    about: string;
    story: string;
    visit: string;
    weather: string;
    around: string;
    faq: string;
    nearby: string;
  };
  hero: {
    eyebrow: string;
    titleMain: string;
    titleAccent: string;
    titleLoc: string;
    lead: string;
    alias: string;
    ctaPlan: string;
    ctaStory: string;
  };
  infoBox: {
    rating: string;
    location: string;
    entry: string;
    duration: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paras: string[];
    factsTitle: string;
    facts: { k: string; v: string }[];
  };
  story: {
    eyebrow: string;
    title: string;
    sub: string;
    intro: string;
    timeline: { when: string; text: string }[];
  };
  visit: {
    eyebrow: string;
    title: string;
    sub: string;
    intro: string;
    cards: { title: string; text: string }[];
    routeTitle: string;
    routeSub: string;
    route: { title: string; text: string }[];
  };
  map: {
    eyebrow: string;
    title: string;
    address: string;
    cards: { title: string; text: string }[];
    sourceNote: string;
  };
  parking: { eyebrow: string; title: string; text: string }[];
  around: {
    eyebrow: string;
    title: string;
    intro: string;
    foodEyebrow: string;
    foodTitle: string;
    foods: FoodPlace[];
    foodNote: string;
    landmarkEyebrow: string;
    landmarkTitle: string;
    landmarks: NearbyLandmark[];
  };
  climate: {
    eyebrow: string;
    title: string;
    sub: string;
    seasons: { season: string; text: string }[];
  };
  faq: FaqItem[];
  sources: {
    eyebrow: string;
    title: string;
    intro: string;
    links: { label: string; url: string }[];
    updated: string;
    credit: string;
  };
}
