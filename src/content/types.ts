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

export interface GuideContent {
  locale: Locale;
  title: string;
  description: string;
  heroImageAlt: string;
  /** نصوص بديلة للصور الأربع (بالترتيب: واجهة/أعمدة/جانبي/ميدان). */
  photosAlt: [string, string, string, string];
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
  gallery: {
    eyebrow: string;
    title: string;
    note: string;
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
