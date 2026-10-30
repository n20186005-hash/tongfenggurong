import type { GuideContent } from './types';
import { SITE } from '../data/site';

export const en: GuideContent = {
  locale: 'en',
  title: `${SITE.fullNameEn} (${SITE.cityEn}) – Visitor Guide & Location`,
  description: `Discover the ${SITE.fullNameEn}, a landmark in ${SITE.cityEn}, ${SITE.governorateEn}, ${SITE.countryEn}. Find the location and map, visit details, ${SITE.nearbyLandmarksEn[0]} and ${SITE.nearbyLandmarksEn[1]}, and how to get there.`,
  heroImageAlt: 'Original abstract sea illustration for Alexandria, Egypt; not a photograph of the memorial',
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
    rating: '★ 4.4 / 5 · 18,437 reviews · 29 Oct 2026',
    location: 'Mansheya · Alexandria',
    entry: 'Check local access',
    duration: '15–30 minutes'
  },
  about: {
    eyebrow: 'About',
    title: 'About the Alexandria Naval Unknown Soldier Memorial',
    paras: [
      `Welcome to the <strong>${SITE.fullNameEn}</strong>, widely known in Alexandria as the <strong>“Unknown Soldier”</strong>. It stands in the heart of <strong>${SITE.cityEn}</strong>, ${SITE.governorateEn}, <strong>${SITE.countryEn}</strong>, and is a natural starting point for visitors beginning their tour from the old city centre.`,
      'Other places to consider in Alexandria include <strong>Qaitbay Citadel</strong>, <strong>Abu al-Abbas al-Mursi Mosque</strong>, Mansheya markets and Bahari. Check the route and access to each destination separately.',
      'Spatial hierarchy: Alexandria Naval Unknown Soldier Memorial ← Mansheya ← Alexandria ← Alexandria Governorate ← Egypt ← Mediterranean coast.'
    ],
    factsTitle: 'Memorial & address facts',
    facts: [
      { k: 'Memorial name', v: 'Alexandria Naval Unknown Soldier Memorial (النصب التذكاري للجندي البحري المجهول)' },
      { k: 'Common name', v: 'Unknown Soldier — Mansheya' },
      { k: 'City / Governorate', v: 'Alexandria — Alexandria Governorate, Egypt' },
      { k: 'Address', v: 'Al Gonday Al Maghool Sq., Al Mansheyah Al Kubra, Qesm Al Mansheyah, Alexandria 5361033' },
      { k: 'Plus Code', v: '5VXV+XG' },
      { k: 'Coordinates', v: '31.199999° N, 29.8937569° E' },
      { k: 'Access hours', v: 'Google Maps lists 24-hour access (29 October 2026); no official schedule verified' },
      { k: 'Cost', v: 'No official admission tariff verified; check posted local guidance' },
      { k: 'Google Maps rating', v: '★ 4.4 from 18,437 reviews' },
      { k: 'Last content update', v: '29 October 2026' }
    ]
  },
  story: {
    eyebrow: 'Story',
    title: 'History & significance of the Naval Unknown Soldier Memorial',
    sub: 'From a Khedive’s memorial to the memory of the sea.',
    intro: 'The monument in its current architectural form predates its naval commemorative function. It was built in the 1930s on the initiative of the Italian community to honour Khedive Ismail, then shifted with Egypt’s political changes to become a memorial for the unknown naval soldier.',
    timeline: [
      { when: '1930s · A classical architectural origin', text: 'The first structure honoured the memory of Khedive Ismail. The surviving colonnade reflects its earlier commemorative purpose; Alexandria Archive describes the former Khedive Ismail monument.' },
      { when: 'After the 1952 Revolution · A new meaning for the square', text: 'The political and symbolic significance of the site changed, and over time the monument shifted from commemorating a ruler to commemorating soldiers lost at sea.' },
      { when: 'Mid-1960s · The Naval Unknown Soldier', text: 'The conversion decision was issued in the 1960s, and the name and commemorative function linked to the naval forces and fallen in sea battles settled in.' },
      { when: 'Today · A memory point in daily life', text: 'The monument remains part of daily life in Mansheya, while also framing official ceremonies and wreath-laying on state occasions.' }
    ]
  },
  visit: {
    eyebrow: 'Visit & location',
    title: 'Location & how to visit the Unknown Soldier in Alexandria',
    sub: 'A short visit — but not a passing one.',
    intro: 'The memorial is not a closed museum and needs no long programme. Its strength is its position: you stand before a naval memory, then step straight out into Mansheya, the markets and the eastern harbour front.',
    cards: [
      { title: 'Tickets / cost', text: 'No official admission tariff has been verified. Check any posted charges and distinguish nearby paid activities from memorial access.' },
      { title: 'Access hours', text: 'Google Maps displayed 24-hour access on 29 October 2026. This is a third-party listing, not an official guarantee; follow on-site security and ceremony restrictions.' },
      { title: 'Best time', text: 'Morning for calm and photos; just before sunset for warm light on the stone; evening for the corniche atmosphere.' },
      { title: 'Good duration', text: '15–30 minutes for the memorial alone; two hours or more if combined with a Mansheya–Bahari walk.' }
    ],
    routeTitle: 'From Mansheya to Bahari, to the rhythm of the sea',
    routeSub: 'Suggested route',
    route: [
      { title: 'Start at the memorial.', text: 'See the façade, columns and inscriptions, and take a wide shot from the square.' },
      { title: 'Head west toward Anfushi.', text: 'The path runs through harbour-linked quarters and old markets.' },
      { title: 'Pass Abu al-Abbas al-Mursi Mosque.', text: 'A Bahari landmark; check the current route and crossings before setting out.' },
      { title: 'Finish at Qaitbay Citadel.', text: 'A separate stop by the harbour; check the walking route or choose transport.' }
    ]
  },
  map: {
    eyebrow: 'Getting there',
    title: 'Unknown Soldier Square, Mansheya.',
    address: 'Address: Al Gonday Al Maghool Sq., Al Mansheyah Al Kubra, Qesm Al Mansheyah, Alexandria Governorate 5361033. Plus Code: 5VXV+XG.',
    cards: [
      { title: 'Check your starting point', text: 'If starting from Raml, Saint Catherine or Misr Station, check current services, the exact route and safe crossings before travelling. No station-to-memorial journey time is verified.' },
      { title: 'By taxi', text: 'Show the memorial map pin and address to the driver; confirm the intended drop-off and fare before setting off.' }
    ],
    sourceNote: 'For updated official information, consult the official authorities and the Google Maps link below the map.'
  },
  parking: [
    { eyebrow: 'Parking', title: 'Don’t count on parking right in front of the memorial.', text: 'Mansheya is a busy district and street parking changes quickly and may be limited. If driving, look for a legal public lot in the city centre and walk the last part. At peak times a taxi or ride app is usually more comfortable.' },
    { eyebrow: 'Mobility tip', title: 'Make walking part of the visit.', text: 'Check each journey separately: distance, safe crossings, access and current transport options. A continuous walking route connecting the listed places has not been verified.' }
  ],
  around: {
    eyebrow: 'Around',
    title: 'Sights & bites around the Unknown Soldier',
    intro: 'Consider Qaitbay Citadel, Abu al-Abbas al-Mursi Mosque and Bibliotheca Alexandrina as separate additions to your visit. The list does not establish a short or continuous walking itinerary. Check each route before travelling.',
    foodEyebrow: 'Around · Alexandrian food',
    foodTitle: 'From the square to the table.',
    foods: [
      { tag: 'Food ideas', name: 'Sandwiches', desc: 'Choose an open business after checking its address, menu and prices.' },
      { tag: 'Food ideas', name: 'Fish and seafood', desc: 'Check the exact business and current menu before travelling.' },
      { tag: 'Food ideas', name: 'Foul and taameya', desc: 'Look for a suitable meal; no restaurant branch has been verified for this guide.' }
    ],
    foodNote: 'Restaurant hours and prices change; check before you go.',
    landmarkEyebrow: 'Around · Sights',
    landmarkTitle: 'Continue the harbour line.',
    landmarks: [
      { distance: 'Check route', name: 'Abu al-Abbas al-Mursi Mosque', desc: 'One of Bahari’s most prominent landmarks, with a dome standing out in the townscape near the harbour.' },
      { distance: 'Check route', name: 'Qaitbay Citadel', desc: 'A Mamluk citadel at the tip of the eastern harbour, built in the 15th century on the site of the ancient Alexandria Pharos.' },
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
    { q: `Where is the ${SITE.fullNameEn}?`, a: `It stands at Al Gonday Al Maghool Sq., Al Mansheyah Al Kubra, Qesm Al Mansheyah, ${SITE.cityEn} ${SITE.postalCode}, ${SITE.countryEn}. The Plus Code is ${SITE.plusCode}, if starting from Raml or Saint Catherine, check the route, safe crossings and final access separately; walking access has not been verified.` },
    { q: 'Is the memorial free to visit?', a: 'No official admission tariff has been verified. Check posted guidance on arrival; nearby commercial activities have separate prices.' },
    { q: 'What is the best time to visit?', a: 'Early morning is good for calm and photos; just before sunset the stone gets warmer light. In the evening the scene becomes more urban with the area lit up and the corniche moving.' },
    { q: 'How much time do I need?', a: 'Usually 15–30 minutes is enough to see the memorial, read its details and take photos; the visit can be extended by linking it with a Mansheya–Bahari walk.' },
    { q: 'Is it open all day?', a: 'Google Maps displayed 24-hour access on 29 October 2026. This third-party listing is not an official schedule; follow security and ceremony restrictions on site.' },
    { q: 'How do I get there by public transport?', a: 'Treat Raml, Saint Catherine and Misr as possible starting points only. Check current services, the exact route, crossings and access before travelling. Direct vehicle drop-off is unverified: agree a safe permitted stopping point and check the final part of the journey.' },
    { q: 'Is there a dedicated car park?', a: 'Do not rely on a dedicated memorial car park. Street parking in Mansheya is limited and changes with congestion, so prefer a nearby public lot or a taxi if visiting at peak times.' },
    { q: 'Is it suitable for visitors with reduced mobility?', a: 'The memorial can be viewed from square level, but the design includes steps and raised platforms. It is best to assess the path on arrival and choose viewing points that rely less on stairs.' },
    { q: `What are the nearby landmarks to ${SITE.shortNameEn}?`, a: 'Destinations to consider include Qaitbay Citadel, Abu al-Abbas al-Mursi Mosque, Kom El Dikka and Bibliotheca Alexandrina. Check the route, distance and access for each destination; this guide does not rank them by proximity.' }
  ],
  sources: {
    eyebrow: 'Trusted sources',
    title: 'For history, context & planning',
    intro: 'This guide relies on the site data provided by Google Maps, encyclopaedic references, local maps and official sources for nearby landmarks. Changeable information such as external schedules and tickets deserves re-verification before visiting.',
    links: [
      { label: 'ICOM Egypt — Alexandria sightseeing brochure', url: 'https://www.usenghor-francophonie.org/wp-content/uploads/2018/06/ICOM-Alexandrie.pdf' },
      { label: 'Alexandria Archive — Khedive Ismail', url: 'https://www.alexandria-archive.com/article/162' },
      { label: 'Google Maps — checked 29 October 2026', url: SITE.mapsShareUrl },
      { label: 'Egyptian Tourism Authority ↗', url: SITE.govtTourismUrl },
      { label: 'Alexandria Governorate — Official Portal ↗', url: SITE.alexandriaGovUrl },
      { label: 'Ministry of Tourism & Antiquities — Qaitbay Citadel ↗', url: SITE.monumentsUrl },
      { label: 'Bibliotheca Alexandrina — Visit info ↗', url: 'https://www.bibalex.org/en/Page/visits' },
      { label: 'Wikipedia — Naval memorial ↗', url: SITE.wikipediaUrl },
      { label: 'Wikidata — coordinates & identity ↗', url: SITE.wikidataUrl },
    ],
    updated: 'Last content update: 29 October 2026.',
    credit: 'Original abstract sea illustration created for this guide, released under CC0; not a photograph or depiction of the memorial. Responsive display may crop the illustration.'
  }
};
