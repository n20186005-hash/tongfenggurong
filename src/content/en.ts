import type { GuideContent } from './types';
import { SITE } from '../data/site';

export const en: GuideContent = {
  locale: 'en',
  title: `${SITE.fullNameEn} (${SITE.cityEn}) – Visitor Guide & Location`,
  description: `Discover the ${SITE.fullNameEn}, a landmark in ${SITE.cityEn}, ${SITE.governorateEn}, ${SITE.countryEn}. Find the location and map, visit details, ${SITE.nearbyLandmarksEn[0]} and ${SITE.nearbyLandmarksEn[1]}, and how to get there.`,
  heroImageAlt: `${SITE.fullNameEn} – the main view in ${SITE.cityEn}, ${SITE.countryEn}`,
  photosAlt: [
    `${SITE.fullNameEn} – the main view in ${SITE.cityEn}, ${SITE.countryEn}`,
    `Column and inscription details of the ${SITE.fullNameEn} in Mansheya, ${SITE.cityEn}`,
    `A side perspective of the ${SITE.fullNameEn} in ${SITE.cityEn}`,
    `The ${SITE.fullNameEn} as seen from Mansheya Square in ${SITE.cityEn}`
  ],
  nav: {
    about: 'About',
    story: 'Story',
    visit: 'Visit',
    weather: 'Weather',
    around: 'Around',
    faq: 'FAQ',
    nearby: 'Nearby'
  },
  hero: {
    eyebrow: 'A memory on the edge of the Mediterranean',
    titleMain: 'Naval Unknown Soldier',
    titleAccent: 'Memorial',
    titleLoc: 'Alexandria · Mansheya · Egypt',
    lead: 'A classical naval monument overlooking the eastern harbour from the heart of Mansheya — a short visit, a heavy memory, and an ideal starting point for a walk along Alexandria’s old corniche.',
    alias: 'Known locally as the “Unknown Soldier” and in English as the Alexandria Naval Unknown Soldier Memorial.',
    ctaPlan: 'Plan your visit ↓',
    ctaStory: 'Read the story'
  },
  infoBox: {
    rating: '★ 4.4 · 18,296 reviews',
    location: 'Mansheya · Alexandria',
    entry: 'Free',
    duration: '15–30 minutes'
  },
  about: {
    eyebrow: 'About',
    title: 'About the Alexandria Naval Unknown Soldier Memorial',
    paras: [
      `Welcome to the <strong>${SITE.fullNameEn}</strong>, widely known in Alexandria as the <strong>“Unknown Soldier”</strong>. It stands in the heart of <strong>${SITE.cityEn}</strong>, ${SITE.governorateEn}, <strong>${SITE.countryEn}</strong>, and is a natural starting point for visitors beginning their tour from the old city centre.`,
      `While visiting the ${SITE.fullNameEn}, travellers can easily explore the surrounding historic sights, including <strong>${SITE.nearbyLandmarksEn[0]}</strong> and <strong>${SITE.nearbyLandmarksEn[1]}</strong>, along with the Mansheya markets, the Bahari souks and the eastern harbour.`,
      'Spatial hierarchy: Alexandria Naval Unknown Soldier Memorial ← Mansheya ← Alexandria ← Alexandria Governorate ← Egypt ← Mediterranean coast.'
    ],
    factsTitle: 'Memorial & address facts',
    facts: [
      { k: 'Official name', v: 'Alexandria Naval Unknown Soldier Memorial (النصب التذكاري للجندي البحري المجهول)' },
      { k: 'Common name', v: 'Unknown Soldier — Mansheya' },
      { k: 'City / Governorate', v: 'Alexandria — Alexandria Governorate, Egypt' },
      { k: 'Address', v: 'Al Gonday Al Maghool Sq., Al Mansheyah Al Kubra, Qesm Al Mansheyah, Alexandria 5361033' },
      { k: 'Plus Code', v: '5VXV+XG' },
      { k: 'Coordinates', v: '31.199999° N, 29.891177° E' },
      { k: 'Access hours', v: 'Usually an open public square, available around the clock' },
      { k: 'Cost', v: 'Free — no tickets for the public square' },
      { k: 'Google Maps rating', v: '★ 4.4 from 18,296 reviews' },
      { k: 'Last content update', v: '10 September 2026' }
    ]
  },
  story: {
    eyebrow: 'Story',
    title: 'History & significance of the Naval Unknown Soldier Memorial',
    sub: 'From a Khedive’s memorial to the memory of the sea.',
    intro: 'The monument in its current architectural form predates its naval commemorative function. It was built in the 1930s on the initiative of the Italian community to honour Khedive Ismail, then shifted with Egypt’s political changes to become a memorial for the unknown naval soldier.',
    timeline: [
      { when: '1933 · A classical architectural origin', text: 'The first structure honoured the memory of Khedive Ismail. Italian architect Ernesto Verucci designed it in the spirit of classical monuments with columns and an imposing stone mass.' },
      { when: 'After the 1952 Revolution · A new meaning for the square', text: 'The political and symbolic significance of the site changed, and over time the monument shifted from commemorating a ruler to commemorating soldiers lost at sea.' },
      { when: 'Mid-1960s · The Naval Unknown Soldier', text: 'The conversion decision was issued in the 1960s, and the name and commemorative function linked to the naval forces and fallen in sea battles settled in.' },
      { when: 'Today · A memory point in daily life', text: 'The monument remains part of daily life in Mansheya, while also framing official ceremonies and wreath-laying on state occasions.' }
    ]
  },
  gallery: {
    eyebrow: 'Stone details',
    title: 'The memorial as you see it from the square.',
    note: 'Real photos documented from Wikimedia Commons. Credits and licences appear with each photo.'
  },
  visit: {
    eyebrow: 'Visit & location',
    title: 'Location & how to visit the Unknown Soldier in Alexandria',
    sub: 'A short visit — but not a passing one.',
    intro: 'The memorial is not a closed museum and needs no long programme. Its strength is its position: you stand before a naval memory, then step straight out into Mansheya, the markets and the eastern harbour front.',
    cards: [
      { title: 'Tickets / cost', text: 'No entry ticket for the public square; usual viewing is free.' },
      { title: 'Access hours', text: 'The square is usually open around the clock, with possible temporary limits during ceremonies.' },
      { title: 'Best time', text: 'Morning for calm and photos; just before sunset for warm light on the stone; evening for the corniche atmosphere.' },
      { title: 'Good duration', text: '15–30 minutes for the memorial alone; two hours or more if combined with a Mansheya–Bahari walk.' }
    ],
    routeTitle: 'From Mansheya to Bahari, to the rhythm of the sea',
    routeSub: 'Suggested route',
    route: [
      { title: 'Start at the memorial.', text: 'See the façade, columns and inscriptions, and take a wide shot from the square.' },
      { title: 'Head west toward Anfushi.', text: 'The path runs through harbour-linked quarters and old markets.' },
      { title: 'Pass Abu al-Abbas al-Mursi Mosque.', text: 'A major Bahari landmark, reachable in about twenty minutes on foot.' },
      { title: 'Finish at Qaitbay Citadel.', text: 'About half an hour on foot from the memorial, with a clear stretch of the eastern harbour front.' }
    ]
  },
  map: {
    eyebrow: 'Getting there',
    title: 'Unknown Soldier Square, Mansheya.',
    address: 'Address: Al Gonday Al Maghool Sq., Al Mansheyah Al Kubra, Qesm Al Mansheyah, Alexandria Governorate 5361033. Plus Code: 5VXV+XG.',
    cards: [
      { title: 'From Raml Station', text: 'About 12 minutes on foot by route, or a short taxi ride within the city centre.' },
      { title: 'From Saint Catherine', text: 'About 8 minutes on foot to the square’s surroundings; good if you arrive by tram or city transport.' },
      { title: 'From Misr Station', text: 'Roughly 20–25 minutes on foot, or take a taxi to avoid street congestion.' },
      { title: 'By taxi', text: 'Ask for “Midan Al-Gondy Al-Maghool – Mansheya”. The name is well known and drops you in the heart of the area.' }
    ],
    sourceNote: 'For updated official information, consult the official authorities and the Google Maps link below the map.'
  },
  parking: [
    { eyebrow: 'Parking', title: 'Don’t count on parking right in front of the memorial.', text: 'Mansheya is a busy district and street parking changes quickly and may be limited. If driving, look for a legal public lot in the city centre and walk the last part. At peak times a taxi or ride app is usually more comfortable.' },
    { eyebrow: 'Mobility tip', title: 'Make walking part of the visit.', text: 'The memorial is close to Alexandria’s central street network, so it is easy to combine it with Raml Station, Mansheya and Bahari in one route. Avoid random stopping on the corniche or in areas that block traffic.' }
  ],
  around: {
    eyebrow: 'Around',
    title: 'Sights & bites around the Unknown Soldier',
    intro: 'While visiting the Alexandria Naval Unknown Soldier Memorial, travellers can easily explore the surrounding historic sights, including <strong>Qaitbay Citadel</strong> and <strong>Abu al-Abbas al-Mursi Mosque</strong>, along with Mansheya eateries and the Bibliotheca Alexandrina.',
    foodEyebrow: 'Around · Alexandrian food',
    foodTitle: 'From the square to the table.',
    foods: [
      { tag: 'Quick sandwiches · Mansheya', name: 'Kebda Abou Helmy', desc: 'A straightforward local choice for Alexandrian liver sandwiches after a short loop of the square.' },
      { tag: 'Fish & seafood · Mansheya', name: 'Kadoura', desc: 'One of Alexandria’s well-known names for fish and seafood the local way.' },
      { tag: 'Foul & taameya · city centre', name: 'Mohamed Ahmed', desc: 'A classic restaurant near Raml Station, good for an Egyptian breakfast or simple meal before or after walking.' }
    ],
    foodNote: 'Restaurant hours and prices change; check before you go.',
    landmarkEyebrow: 'Around · Sights',
    landmarkTitle: 'Continue the harbour line.',
    landmarks: [
      { distance: 'About 20 minutes on foot', name: 'Abu al-Abbas al-Mursi Mosque', desc: 'One of Bahari’s most prominent landmarks, with a dome standing out in the townscape near the harbour.' },
      { distance: 'About 28–30 minutes on foot', name: 'Qaitbay Citadel', desc: 'A Mamluk citadel at the tip of the eastern harbour, built in the 15th century on the site of the ancient Alexandria Pharos.' },
      { distance: 'City centre', name: 'Kom El Dikka', desc: 'A Roman archaeological site adding a completely different layer of Alexandria’s history to the same day.' },
      { distance: 'East on the corniche', name: 'Bibliotheca Alexandrina', desc: 'A modern cultural landmark reachable by taxi or public transport from the city centre.' }
    ]
  },
  climate: {
    eyebrow: 'Weather & best time',
    title: 'When to visit? A seasonal guide to Alexandria',
    sub: 'A mild Mediterranean climate — here is when the square looks its best.',
    seasons: [
      { season: 'Spring (Mar–May)', text: 'The gentlest time: moderate warmth and lower humidity, ideal for photos and a corniche walk. The sea breeze may pick up now and then.' },
      { season: 'Summer (Jun–Aug)', text: 'High heat and humidity. Visit the memorial early or after sunset, and keep water and sun protection handy.' },
      { season: 'Autumn (Sep–Nov)', text: 'The mildness returns and crowds ease; one of the best seasons for a relaxed, longer visit in Mansheya and Bahari.' },
      { season: 'Winter (Dec–Feb)', text: 'On the cool side with occasional intermittent rain. Carry an extra light layer, and avoid rainy hours for open-air photography.' }
    ]
  },
  faq: [
    { q: `Where is the ${SITE.fullNameEn}?`, a: `It stands at Al Gonday Al Maghool Sq., Al Mansheyah Al Kubra, Qesm Al Mansheyah, ${SITE.cityEn} ${SITE.postalCode}, ${SITE.countryEn}. The Plus Code is ${SITE.plusCode}, and it is reachable on foot from Raml or Saint Catherine stations in the city centre.` },
    { q: 'Is the memorial free to visit?', a: 'Yes. The memorial sits in a public square in Mansheya and there is no ticket gate to the usual viewing area.' },
    { q: 'What is the best time to visit?', a: 'Early morning is good for calm and photos; just before sunset the stone gets warmer light. In the evening the scene becomes more urban with the area lit up and the corniche moving.' },
    { q: 'How much time do I need?', a: 'Usually 15–30 minutes is enough to see the memorial, read its details and take photos; the visit can be extended by linking it with a Mansheya–Bahari walk.' },
    { q: 'Is it open all day?', a: 'Local maps treat the square as open around the clock. Approaching the monument may change during official ceremonies or security arrangements, so follow the on-site guidance.' },
    { q: 'How do I get there by public transport?', a: 'Mansheya sits at the heart of Alexandria’s central network. Alight near city-centre stations such as Saint Catherine or Raml, then walk; taxis and ride apps also reach Unknown Soldier Square directly.' },
    { q: 'Is there a dedicated car park?', a: 'Do not rely on a dedicated memorial car park. Street parking in Mansheya is limited and changes with congestion, so prefer a nearby public lot or a taxi if visiting at peak times.' },
    { q: 'Is it suitable for visitors with reduced mobility?', a: 'The memorial can be viewed from square level, but the design includes steps and raised platforms. It is best to assess the path on arrival and choose viewing points that rely less on stairs.' },
    { q: `What are the nearby landmarks to ${SITE.shortNameEn}?`, a: `The closest landmarks are ${SITE.nearbyLandmarksEn[0]} (about 28–30 minutes on foot) and ${SITE.nearbyLandmarksEn[1]} (about 20 minutes on foot), plus Kom El Dikka in the city centre and the Bibliotheca Alexandrina to the east on the corniche.` }
  ],
  sources: {
    eyebrow: 'Trusted sources',
    title: 'For history, context & planning',
    intro: 'This guide relies on the site data provided by Google Maps, encyclopaedic references, local maps and official sources for nearby landmarks. Changeable information such as external schedules and tickets deserves re-verification before visiting.',
    links: [
      { label: 'Egyptian Tourism Authority ↗', url: SITE.govtTourismUrl },
      { label: 'Alexandria Governorate — Official Portal ↗', url: SITE.alexandriaGovUrl },
      { label: 'Ministry of Tourism & Antiquities — Qaitbay Citadel ↗', url: SITE.monumentsUrl },
      { label: 'Bibliotheca Alexandrina — Visit info ↗', url: 'https://www.bibalex.org/en/Page/visits' },
      { label: 'Wikipedia — Naval memorial ↗', url: SITE.wikipediaUrl },
      { label: 'Wikidata — coordinates & identity ↗', url: SITE.wikidataUrl },
      { label: 'Wikimedia Commons — photos ↗', url: 'https://commons.wikimedia.org/wiki/Category:Unknown_Soldier_Memorial_(Alexandria)' }
    ],
    updated: 'Last content update: 10 September 2026.',
    credit: 'The images used on this site are real photos of the memorial from Wikimedia Commons; all image rights and intellectual property belong to their original photographers under the licences shown with each photo and in PHOTO_SOURCES.md.'
  }
};
