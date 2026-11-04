// محتوى صفحات المعالم المستقلة (ست معالم) بثلاث لغات، منفصل عن الصفحة الرئيسية
// وعن صفحة «المعالم المجاورة». المحتوى يقتصر على حقائق عامة قابلة للتحقق؛
// أي معلومة متغيّرة (المواعيد، أسعار التذاكر، الجولات) تُذكر صريحاً كـ«غير مُتحقَّق منها».
import type { SpotContent } from './types';
import type { Locale } from '../i18n';
import { SITE } from '../data/site';

export const SPOT_SLUGS = [
  'qaitbay-citadel',
  'abu-al-abbas-al-mursi-mosque',
  'bibliotheca-alexandrina',
  'kom-el-dikka',
  'pompeys-pillar',
  'mansheya-market'
] as const;

export type SpotSlug = (typeof SPOT_SLUGS)[number];

// ————————————————————————————————————————————————————————————
// 1) قلعة قايتباي — Qaitbay Citadel
// ————————————————————————————————————————————————————————————

const qaitbayAr: SpotContent = {
  locale: 'ar',
  slug: 'qaitbay-citadel',
  name: 'قلعة قايتباي',
  title: `قلعة قايتباي في ${SITE.cityAr} — معلومات الزيارة والموقع`,
  description: `قلعة قايتباي في ${SITE.cityAr}: حصن مملوكي من القرن الخامس عشر عند طرف الميناء الشرقي، في موضع فنار الإسكندرية القديم. معلومات عن الموقع والمتحف البحري، مع التنبيه أن المواعيد وأسعار التذاكر غير مُتحقَّق منها.`,
  eyebrow: 'قلعة · الإسكندرية',
  hero: {
    name: 'قلعة قايتباي',
    sub: 'حصن مملوكي عند طرف الميناء الشرقي، شُيّد في موضع فنار الإسكندرية القديم.',
    lead: 'المواعيد وأسعار التذاكر تتغيّر بحسب الموسم، ولم نتحقق منها هنا؛ راجع المصادر الرسمية قبل الانطلاق.',
    cta: 'العودة إلى دليل الزيارة ↓'
  },
  facts: {
    title: 'لمحة سريعة',
    items: [
      { k: 'النوع', v: 'قلعة · حصن' },
      { k: 'الفترة', v: 'القرن الخامس عشر (العصر المملوكي)' },
      { k: 'الموقع', v: 'طرف الميناء الشرقي' },
      { k: 'في الموقع', v: 'أسوار حجرية · إطلالات على البحر · متحف بحري صغير' },
      { k: 'المواعيد والتذاكر', v: 'غير مُتحقَّق منها — راجع المصادر الرسمية' }
    ],
    note: 'هذه المعطيات للتعريف العام فقط؛ المواعيد والأسعار تتغيّر ولا نضمنها.'
  },
  about: {
    eyebrow: 'نبذة',
    title: 'عن قلعة قايتباي',
    paras: [
      'قلعة قايتباي حصن مملوكي كبير يرتفع عند الطرف الشمالي للميناء الشرقي في الإسكندرية، وقد شُيّد في القرن الخامس عشر بأمر السلطان المملوكي الأشرف قايتباي.',
      'ما يميّز موقعها أنها تقوم على موضع فنار الإسكندرية القديم (الفاروس)، الذي كان يُعدّ من عجائب الدنيا السبع القديمة. وبعد أن دكّت الزلازل الفنار، أُعيد استخدام كثير من أحجاره في بناء القلعة.',
      'تعرّضت القلعة لأضرار بفعل الزلازل على مدى القرون، ثم جُدّدت في القرن التاسع عشر في عهد محمد علي، وتضم اليوم متحفاً بحرياً صغيراً.'
    ]
  },
  highlights: {
    eyebrow: 'أبرز ما تراه',
    title: 'داخل القلعة ومحيطها',
    intro: 'هذه إشارات عامة لما توقّعه، وليست جدولاً سياحياً منظّماً.',
    items: [
      { title: 'الأسوار والأبراج', text: 'أسوار حجرية سميكة وأبراج يمكن التجوّل بمحاذاتها، مع إطلالات مفتوحة على الميناء.' },
      { title: 'المتحف البحري', text: 'متحف صغير داخل القلعة يعرض قطعاً متعلقة بالبحر. تحقق من حالته وساعاته عند الزيارة.' },
      { title: 'إطلالات الميناء', text: 'الموقع عند رأس الميناء الشرقي يمنح مناظر واسعة نحو البحر والمدينة.' }
    ]
  },
  visit: {
    eyebrow: 'الزيارة عملياً',
    title: 'قبل أن تذهب',
    intro: 'هذه ملاحظات للتخطيط، وليست تعليمات رسمية.',
    cards: [
      { title: 'الوصول', text: 'تقع القلعة عند طرف الميناء الشرقي شمال بحري. المسافة من النصب التذكاري غير مُتحقَّق منها؛ استخدم سيارة أجرة أو راجع خيارات النقل.' },
      { title: 'التوقيت', text: 'الصباح أبرد وأهدأ. المواعيد تختلف بحسب الموسم والمناسبات؛ افحص الجدول الرسمي.' },
      { title: 'المناخ المحلي', text: 'الموقع مكشوف للشمس والريح البحرية؛ احمل ماءً ووقاية من الشمس.' },
      { title: 'الدخول', text: 'قد يُطلب تذكرة لبعض الأجزاء. لم نتحقق من الأسعار؛ راجع المصادر الرسمية.' }
    ],
    note: 'لم نتحقق من المواعيد أو الأسعار؛ راجع المصادر الرسمية قبل الانطلاق.'
  },
  relation: {
    eyebrow: 'من النصب إلى هنا',
    title: 'ضمن جولة أوسع',
    text: 'هذا المعلم إحدى محطات جولة أوسع تبدأ من النصب التذكاري للجندي المجهول في المنشية. راجع صفحة المعالم المجاورة لتخطيط أكثر من محطة، مع التنبيه أن المسافات والمواعيد هناك غير مُتحقَّق منها.'
  },
  faq: [
    { q: 'أين تقع قلعة قايتباي؟', a: 'عند الطرف الشمالي للميناء الشرقي في الإسكندرية، على موضع فنار الإسكندرية القديم.' },
    { q: 'متى بُنيت القلعة؟', a: 'في القرن الخامس عشر بأمر السلطان المملوكي الأشرف قايتباي، بعد أن دمّرت الزلازل الفنار القديم.' },
    { q: 'ما مواعيد العمل وأسعار التذاكر؟', a: 'غير مُتحقَّق منها هنا؛ تتغيّر بحسب الموسم. راجع المصادر الرسمية قبل الانطلاق.' },
    { q: 'هل يوجد متحف داخل القلعة؟', a: 'نعم، هناك متحف بحري صغير؛ تحقق من ساعاته عند الزيارة.' },
    { q: 'كم تبعد عن النصب التذكاري؟', a: 'المسافة غير مُتحقَّق منها؛ القلعة عند الميناء الشرقي والنصب في المنشية. راجع الطريق ووسيلة النقل.' }
  ]
};

const qaitbayEn: SpotContent = {
  locale: 'en',
  slug: 'qaitbay-citadel',
  name: 'Qaitbay Citadel',
  title: `Qaitbay Citadel, ${SITE.cityEn} — Visit Info & Location`,
  description: `Qaitbay Citadel in ${SITE.cityEn}: a 15th-century Mamluk fortress at the tip of the eastern harbour, on the site of the ancient Pharos lighthouse. Location and museum notes, with hours and tickets flagged as unverified.`,
  eyebrow: 'Fortress · Alexandria',
  hero: {
    name: 'Qaitbay Citadel',
    sub: 'A Mamluk fortress at the tip of the eastern harbour, raised on the site of the ancient Pharos of Alexandria.',
    lead: 'Opening hours and ticket prices change with the season and are not verified here; check official sources before you travel.',
    cta: 'Back to the visitor guide ↓'
  },
  facts: {
    title: 'Quick facts',
    items: [
      { k: 'Type', v: 'Fortress · citadel' },
      { k: 'Period', v: '15th century (Mamluk era)' },
      { k: 'Location', v: 'Tip of the eastern harbour' },
      { k: 'On site', v: 'Stone walls · sea views · small maritime museum' },
      { k: 'Hours & tickets', v: 'Not verified — check official sources' }
    ],
    note: 'These details are for general orientation only; hours and prices change and are not guaranteed.'
  },
  about: {
    eyebrow: 'Overview',
    title: 'About Qaitbay Citadel',
    paras: [
      'Qaitbay Citadel is a large Mamluk fortress standing at the northern tip of Alexandria’s eastern harbour. It was built in the 15th century by order of the Mamluk sultan Al-Ashraf Qa’it Bay.',
      'Its setting is what makes it unusual: the citadel occupies the site of the ancient Pharos of Alexandria, the lighthouse counted among the Seven Wonders of the Ancient World. After earthquakes brought the lighthouse down, much of its stone was reused in the fortress.',
      'The citadel was damaged by earthquakes over the centuries, then restored in the 19th century under Muhammad Ali Pasha, and today it holds a small maritime museum.'
    ]
  },
  highlights: {
    eyebrow: 'What to see',
    title: 'Inside and around the citadel',
    intro: 'These are general pointers, not a staged itinerary.',
    items: [
      { title: 'Walls and towers', text: 'Thick stone walls and towers you can walk alongside, with open views over the harbour.' },
      { title: 'Maritime museum', text: 'A small museum inside the citadel displays maritime material. Check its condition and hours when you visit.' },
      { title: 'Harbour views', text: 'Its position at the head of the eastern harbour gives wide views toward the sea and the city.' }
    ]
  },
  visit: {
    eyebrow: 'Practical visit',
    title: 'Before you go',
    intro: 'These are planning notes, not official instructions.',
    cards: [
      { title: 'Getting there', text: 'The citadel sits at the tip of the eastern harbour, north of Bahari. The distance from the memorial is not verified here; use a taxi or check your transport options.' },
      { title: 'Timing', text: 'Mornings are cooler and quieter. Hours vary with the season and holidays; check the official schedule.' },
      { title: 'Weather', text: 'The site is exposed to sun and sea breeze; carry water and sun protection.' },
      { title: 'Entry', text: 'A ticket may be required for some parts. No prices are verified here; check official sources.' }
    ],
    note: 'Hours and prices are not verified here; check official sources before you travel.'
  },
  relation: {
    eyebrow: 'From the memorial to here',
    title: 'Part of a wider walk',
    text: 'This is one stop in a wider outing that starts from the Naval Unknown Soldier Memorial in Mansheya. See the nearby-attractions guide to plan more than one stop, noting that distances and hours there are not verified.'
  },
  faq: [
    { q: 'Where is Qaitbay Citadel?', a: 'At the northern tip of Alexandria’s eastern harbour, on the site of the ancient Pharos lighthouse.' },
    { q: 'When was it built?', a: 'In the 15th century, by order of the Mamluk sultan Al-Ashraf Qa’it Bay, after the ancient lighthouse was destroyed by earthquakes.' },
    { q: 'What are the opening hours and ticket prices?', a: 'Not verified here; they change with the season. Check official sources before you travel.' },
    { q: 'Is there a museum inside?', a: 'Yes, a small maritime museum. Check its hours when you visit.' },
    { q: 'How far is it from the memorial?', a: 'The distance is not verified here; the citadel is at the eastern harbour and the memorial is in Mansheya. Check the route and transport.' }
  ]
};

const qaitbayZh: SpotContent = {
  locale: 'zh',
  slug: 'qaitbay-citadel',
  name: '盖特贝城堡',
  title: `亚历山大盖特贝城堡 — 参观信息与位置指南`,
  description: `亚历山大盖特贝城堡：位于东港尽头、古亚历山大法罗斯灯塔旧址的马穆鲁克城堡。提供位置与海事博物馆信息，开放时间与门票均标注为未核实。`,
  eyebrow: '城堡 · 亚历山大',
  hero: {
    name: '盖特贝城堡',
    sub: '东港尽头的马穆鲁克城堡，建于古亚历山大法罗斯灯塔旧址之上。',
    lead: '开放时间与门票随季节变化，本文未核实；出行前请查阅官方来源。',
    cta: '返回参观指南 ↓'
  },
  facts: {
    title: '快速概览',
    items: [
      { k: '类型', v: '城堡 · 要塞' },
      { k: '时期', v: '15 世纪（马穆鲁克王朝）' },
      { k: '位置', v: '东港尽头' },
      { k: '现场', v: '石墙 · 海景 · 小型海事博物馆' },
      { k: '时间与门票', v: '未核实——请查阅官方来源' }
    ],
    note: '以上信息仅供概览；开放时间与价格会变动，无法保证。'
  },
  about: {
    eyebrow: '简介',
    title: '关于盖特贝城堡',
    paras: [
      '盖特贝城堡是一座规模宏大的马穆鲁克城堡，位于亚历山大东港北端，于 15 世纪由马穆鲁克苏丹阿什拉夫·盖特贝下令建造。',
      '它的特别之处在于选址：城堡建于古亚历山大法罗斯灯塔旧址之上——那座灯塔曾位列古代世界七大奇迹。灯塔因地震倒塌后，其大量石料被重新用于城堡建造。',
      '数百年间城堡屡遭地震损毁，19 世纪在穆罕默德·阿里帕夏时期得到修缮，如今内部设有一家小型海事博物馆。'
    ]
  },
  highlights: {
    eyebrow: '看点',
    title: '城堡内外的看点',
    intro: '以下为一般性提示，并非固定游览路线。',
    items: [
      { title: '城墙与塔楼', text: '厚实的石墙与塔楼可沿墙行走，视野开阔，可俯瞰港湾。' },
      { title: '海事博物馆', text: '城堡内的小型博物馆展出海事相关藏品；参观时请确认其状态与开放时间。' },
      { title: '港湾景观', text: '地处东港顶端，可远眺大海与城市。' }
    ]
  },
  visit: {
    eyebrow: '实用信息',
    title: '出行之前',
    intro: '以下为规划提示，并非官方说明。',
    cards: [
      { title: '到达', text: '城堡位于东港尽头、巴赫里以北。与纪念碑的距离本文未核实；请乘出租车或核对交通方式。' },
      { title: '时间', text: '清晨更凉爽安静。开放时间随季节与假日变动，请查阅官方时间表。' },
      { title: '天气', text: '场地暴露于阳光与海风之中，请带水并做好防晒。' },
      { title: '入场', text: '部分区域可能需要门票。本文未核实价格，请查阅官方来源。' }
    ],
    note: '本文未核实开放时间与价格；出行前请查阅官方来源。'
  },
  relation: {
    eyebrow: '从纪念碑到这里',
    title: '更广行程的一部分',
    text: '这是以曼希亚海军无名烈士纪念碑为起点的更广行程中的一站。请查看周边景点指南来规划多站行程——注意其中的距离与时间均未核实。'
  },
  faq: [
    { q: '盖特贝城堡在哪里？', a: '位于亚历山大东港北端，古法罗斯灯塔旧址之上。' },
    { q: '城堡何时建造？', a: '15 世纪，由马穆鲁克苏丹阿什拉夫·盖特贝下令建造，古灯塔被地震摧毁之后。' },
    { q: '开放时间与门票是多少？', a: '本文未核实；随季节变动。出行前请查阅官方来源。' },
    { q: '内部有博物馆吗？', a: '有，一家小型海事博物馆。参观时请确认开放时间。' },
    { q: '离纪念碑有多远？', a: '本文未核实；城堡在东港，纪念碑在曼希亚。请核对路线与交通。' }
  ]
};

// ————————————————————————————————————————————————————————————
// 2) مسجد أبو العباس المرسي — Abu al-Abbas al-Mursi Mosque
// ————————————————————————————————————————————————————————————

const abbasAr: SpotContent = {
  locale: 'ar',
  slug: 'abu-al-abbas-al-mursi-mosque',
  name: 'مسجد أبو العباس المرسي',
  title: `مسجد أبو العباس المرسي في ${SITE.cityAr} — معلومات الزيارة`,
  description: `مسجد أبو العباس المرسي في ${SITE.cityAr}: من أشهر مساجد بحري، سُمّي على اسم متصوّف أندلسي من القرن الثالث عشر. معلومات عن الموقع والمقام، مع التنبيه أن أوقات الزيارة غير مُتحقَّق منها.`,
  eyebrow: 'مسجد · الإسكندرية',
  hero: {
    name: 'مسجد أبو العباس المرسي',
    sub: 'من أشهر مساجد بحري، بقبة عالية ومآذن بارزة في أفق الميناء الشرقي.',
    lead: 'غالباً يمكن الزيارة خارج أوقات الصلاة مع اللباس المحتشم؛ تحقق من التعليمات في يوم زيارتك.',
    cta: 'العودة إلى دليل الزيارة ↓'
  },
  facts: {
    title: 'لمحة سريعة',
    items: [
      { k: 'النوع', v: 'مسجد · مقام' },
      { k: 'الشخصية', v: 'أبو العباس المرسي (متصوّف أندلسي، القرن الثالث عشر)' },
      { k: 'المبنى الحالي', v: 'القرن العشرون' },
      { k: 'الموقع', v: 'بحري · قرب الميناء الشرقي' },
      { k: 'أوقات الزيارة', v: 'غير مُتحقَّق منها — تتبع أوقات الصلاة والمناسبات' }
    ],
    note: 'المعطيات للتعريف العام؛ الزيارة عادة ممكنة خارج أوقات الصلاة، لكن تحقق دائماً في يوم الزيارة.'
  },
  about: {
    eyebrow: 'نبذة',
    title: 'عن مسجد أبو العباس المرسي',
    paras: [
      'مسجد أبو العباس المرسي من أشهر معالم الإسكندرية، ويقع في حي بحري قريباً من الميناء الشرقي.',
      'سُمّي على اسم الشيخ أبو العباس المرسي، وهو متصوّف وُلد في الأندلس وعاش في القرن الثالث عشر، وأصبح من أعلام التصوّف في المدينة.',
      'المبنى الحالي حديث نسبياً؛ فقد أُعيد بناء المسجد في القرن العشرين على هيئته اليوم بقبة عالية ومآذن بارزة في أفق الميناء، ويضم مقام الشيخ.'
    ]
  },
  highlights: {
    eyebrow: 'أبرز ما تراه',
    title: 'داخل المسجد ومحيطه',
    intro: 'التزم بالهدوء والاحترام داخل قاعة الصلاة.',
    items: [
      { title: 'القبة والمآذن', text: 'تُرى القبة والمآذن العالية من مسافة بعيدة عبر أفق بحري والميناء.' },
      { title: 'المقام', text: 'يضم المسجد مقام الشيخ أبو العباس المرسي، وهو سبب شهرة المكان.' },
      { title: 'العمارة الداخلية', text: 'أعمدة وزخارف وقاعة واسعة. تحقق من إمكانية الدخول لغير المصلّين في وقت زيارتك.' }
    ]
  },
  visit: {
    eyebrow: 'الزيارة عملياً',
    title: 'قبل أن تذهب',
    intro: 'هذه ملاحظات عامة للاحترام السليم للمكان.',
    cards: [
      { title: 'الوصول', text: 'يقع في بحري قريباً من الميناء الشرقي. المسافة من النصب غير مُتحقَّق منها؛ راجع الطريق ووسيلة النقل.' },
      { title: 'التوقيت', text: 'الزيارة عادة ممكنة خارج أوقات الصلاة؛ تحقق من المواعيد وأوقات الصلاة في يوم الزيارة.' },
      { title: 'اللباس والسلوك', text: 'احرص على اللباس المحتشم، واخلع الحذاء حيث يُطلب منك، والتزم بالهدوء.' },
      { title: 'التصوير', text: 'قد تُقيَّد بعض الصور أو تُمنع داخل قاعة الصلاة؛ اتبع اللافتات وتعليمات العاملين.' }
    ],
    note: 'لم نتحقق من أوقات الزيارة؛ تتبع أوقات الصلاة والمناسبات وتتغيّر.'
  },
  relation: {
    eyebrow: 'من النصب إلى هنا',
    title: 'ضمن جولة أوسع',
    text: 'يقع المسجد ضمن محيط النصب التذكاري للجندي المجهول في المنشية عبر بحري. راجع صفحة المعالم المجاورة لتخطيط أكثر من محطة، مع التنبيه أن المسافات والمواعيد هناك غير مُتحقَّق منها.'
  },
  faq: [
    { q: 'من هو أبو العباس المرسي؟', a: 'متصوّف وُلد في الأندلس وعاش في الإسكندرية في القرن الثالث عشر، ويُعدّ من أعلام التصوّف في المدينة، ويقع مقامه في المسجد.' },
    { q: 'أين يقع المسجد؟', a: 'في حي بحري بالإسكندرية، قريباً من الميناء الشرقي.' },
    { q: 'هل يمكن لغير المسلمين الزيارة؟', a: 'غالباً يمكن الزيارة خارج أوقات الصلاة مع اللباس المحتشم؛ تحقق من التعليمات في يوم زيارتك.' },
    { q: 'ما مواعيد الزيارة؟', a: 'غير مُتحقَّق منها هنا؛ تتغيّر بحسب أوقات الصلاة والمناسبات.' },
    { q: 'هل هو قريب من قلعة قايتباي؟', a: 'كلاهما في نطاق بحري والميناء الشرقي، لكن المسافة غير مُتحقَّق منها؛ راجع الطريق.' }
  ]
};

const abbasEn: SpotContent = {
  locale: 'en',
  slug: 'abu-al-abbas-al-mursi-mosque',
  name: 'Abu al-Abbas al-Mursi Mosque',
  title: `Abu al-Abbas al-Mursi Mosque, ${SITE.cityEn} — Visit Info`,
  description: `Abu al-Abbas al-Mursi Mosque in ${SITE.cityEn}: one of Bahari’s best-known mosques, named after a 13th-century Andalusian Sufi. Location and shrine notes, with visiting times flagged as unverified.`,
  eyebrow: 'Mosque · Alexandria',
  hero: {
    name: 'Abu al-Abbas al-Mursi Mosque',
    sub: 'One of Bahari’s best-known mosques, with a tall dome and minarets on the eastern-harbour skyline.',
    lead: 'Visitors are usually welcome outside prayer times, dressed modestly; check on-site guidance on the day you visit.',
    cta: 'Back to the visitor guide ↓'
  },
  facts: {
    title: 'Quick facts',
    items: [
      { k: 'Type', v: 'Mosque · shrine' },
      { k: 'Namesake', v: 'Abu al-Abbas al-Mursi (13th-century Andalusian Sufi)' },
      { k: 'Present building', v: '20th century' },
      { k: 'Location', v: 'Bahari · near the eastern harbour' },
      { k: 'Visiting times', v: 'Not verified — follow prayer times and events' }
    ],
    note: 'General orientation only; visits are usually possible outside prayer times, but always check on the day.'
  },
  about: {
    eyebrow: 'Overview',
    title: 'About Abu al-Abbas al-Mursi Mosque',
    paras: [
      'Abu al-Abbas al-Mursi Mosque is one of Alexandria’s best-known landmarks, standing in the Bahari district near the eastern harbour.',
      'It is named after Sheikh Abu al-Abbas al-Mursi, a Sufi born in Al-Andalus who lived in the 13th century and became one of the city’s notable Sufi figures.',
      'The present building is relatively modern: the mosque was rebuilt in the 20th century in its current form, with a tall dome and minarets on the harbour skyline, and it holds the sheikh’s shrine.'
    ]
  },
  highlights: {
    eyebrow: 'What to see',
    title: 'Inside and around the mosque',
    intro: 'Keep quiet and respectful inside the prayer hall.',
    items: [
      { title: 'Dome and minarets', text: 'The tall dome and minarets are visible from a distance across the Bahari and harbour skyline.' },
      { title: 'The shrine', text: 'The mosque holds the shrine of Sheikh Abu al-Abbas al-Mursi, the reason for its fame.' },
      { title: 'Interior architecture', text: 'Columns, decoration and a wide hall. Check whether non-worshippers may enter at the time you visit.' }
    ]
  },
  visit: {
    eyebrow: 'Practical visit',
    title: 'Before you go',
    intro: 'These are general notes for respecting the place.',
    cards: [
      { title: 'Getting there', text: 'It stands in Bahari near the eastern harbour. The distance from the memorial is not verified here; check the route and transport.' },
      { title: 'Timing', text: 'Visits are usually possible outside prayer times; check the day’s timings and prayer schedule.' },
      { title: 'Dress and conduct', text: 'Dress modestly, remove your shoes where indicated, and keep your voice down.' },
      { title: 'Photography', text: 'Some photography may be restricted or barred inside the prayer hall; follow posted signs and staff guidance.' }
    ],
    note: 'Visiting times are not verified here; they follow prayer times and events and change.'
  },
  relation: {
    eyebrow: 'From the memorial to here',
    title: 'Part of a wider walk',
    text: 'The mosque sits within reach of the Naval Unknown Soldier Memorial in Mansheya via Bahari. See the nearby-attractions guide to plan more than one stop, noting that distances and hours there are not verified.'
  },
  faq: [
    { q: 'Who was Abu al-Abbas al-Mursi?', a: 'A Sufi born in Al-Andalus who lived in Alexandria in the 13th century and became one of the city’s notable Sufi figures; his shrine is in the mosque.' },
    { q: 'Where is the mosque?', a: 'In the Bahari district of Alexandria, near the eastern harbour.' },
    { q: 'Can non-Muslims visit?', a: 'Visits are usually possible outside prayer times with modest dress; check the guidance on the day you visit.' },
    { q: 'What are the visiting hours?', a: 'Not verified here; they change with prayer times and events.' },
    { q: 'Is it close to Qaitbay Citadel?', a: 'Both are within the Bahari and eastern-harbour area, but the distance is not verified here; check the route.' }
  ]
};

const abbasZh: SpotContent = {
  locale: 'zh',
  slug: 'abu-al-abbas-al-mursi-mosque',
  name: '阿布·阿巴斯·莫尔西清真寺',
  title: `亚历山大阿布·阿巴斯·莫尔西清真寺 — 参观信息`,
  description: `亚历山大阿布·阿巴斯·莫尔西清真寺：巴赫里最著名的清真寺之一，以 13 世纪安达卢西亚苏菲圣者命名。提供位置与陵墓信息，参观时间标注为未核实。`,
  eyebrow: '清真寺 · 亚历山大',
  hero: {
    name: '阿布·阿巴斯·莫尔西清真寺',
    sub: '巴赫里最著名的清真寺之一，高耸的圆顶与宣礼塔矗立于东港天际线。',
    lead: '通常可在礼拜时间之外、着装得体地参观；请于参观当天确认现场规定。',
    cta: '返回参观指南 ↓'
  },
  facts: {
    title: '快速概览',
    items: [
      { k: '类型', v: '清真寺 · 陵墓' },
      { k: '命名人物', v: '阿布·阿巴斯·莫尔西（13 世纪安达卢西亚苏菲圣者）' },
      { k: '现有建筑', v: '20 世纪' },
      { k: '位置', v: '巴赫里 · 东港附近' },
      { k: '参观时间', v: '未核实——需遵循礼拜时间与活动安排' }
    ],
    note: '以上仅供概览；通常在礼拜时间之外可参观，但请务必于当天确认。'
  },
  about: {
    eyebrow: '简介',
    title: '关于阿布·阿巴斯·莫尔西清真寺',
    paras: [
      '阿布·阿巴斯·莫尔西清真寺是亚历山大最著名的地标之一，位于东港附近的巴赫里区。',
      '它以前人谢赫阿布·阿巴斯·莫尔西命名——一位出生于安达卢西亚的苏菲圣者，13 世纪生活于此，成为当地著名的苏菲人物。',
      '现有建筑相对较新：清真寺于 20 世纪重建为今日的样貌，高耸的圆顶与宣礼塔矗立于港湾天际线，寺内设有谢赫的陵墓。'
    ]
  },
  highlights: {
    eyebrow: '看点',
    title: '寺院内外',
    intro: '进入礼拜殿后请保持安静与尊重。',
    items: [
      { title: '圆顶与宣礼塔', text: '高耸的圆顶与宣礼塔在巴赫里与港湾天际线中远远便可望见。' },
      { title: '陵墓', text: '寺内安放谢赫阿布·阿巴斯·莫尔西的陵墓，这也是此地声名远播的原因。' },
      { title: '内部建筑', text: '石柱、装饰与宽敞的殿厅。请确认在你参观的时段非礼拜者可否进入。' }
    ]
  },
  visit: {
    eyebrow: '实用信息',
    title: '出行之前',
    intro: '以下为尊重当地习俗的一般性提示。',
    cards: [
      { title: '到达', text: '位于东港附近的巴赫里。与纪念碑的距离本文未核实；请核对路线与交通。' },
      { title: '时间', text: '通常可在礼拜时间之外参观；请确认当天的时段与礼拜安排。' },
      { title: '着装与举止', text: '请着装得体，在要求处脱鞋，并放低音量。' },
      { title: '拍照', text: '礼拜殿内可能限制或禁止拍照；请遵守告示与工作人员指引。' }
    ],
    note: '本文未核实参观时间；其随礼拜时间与活动变动。'
  },
  relation: {
    eyebrow: '从纪念碑到这里',
    title: '更广行程的一部分',
    text: '从曼希亚的海军无名烈士纪念碑出发，经巴赫里即可抵达该寺。请查看周边景点指南来规划多站行程——注意其中的距离与时间均未核实。'
  },
  faq: [
    { q: '阿布·阿巴斯·莫尔西是谁？', a: '一位出生于安达卢西亚的苏菲圣者，13 世纪生活在亚历山大，是当地著名的苏菲人物；其陵墓位于寺内。' },
    { q: '清真寺在哪里？', a: '位于亚历山大巴赫里区，靠近东港。' },
    { q: '非穆斯林可以参观吗？', a: '通常可在礼拜时间之外、着装得体地参观；请于参观当天确认规定。' },
    { q: '参观时间是什么？', a: '本文未核实；随礼拜时间与活动变动。' },
    { q: '离盖特贝城堡近吗？', a: '两者都在巴赫里与东港一带，但距离本文未核实；请核对路线。' }
  ]
};

// ————————————————————————————————————————————————————————————
// 3) مكتبة الإسكندرية — Bibliotheca Alexandrina
// ————————————————————————————————————————————————————————————

const libraryAr: SpotContent = {
  locale: 'ar',
  slug: 'bibliotheca-alexandrina',
  name: 'مكتبة الإسكندرية',
  title: `مكتبة الإسكندرية — مجمّع ثقافي حديث على الكورنيش`,
  description: `مكتبة الإسكندرية: مجمّع ثقافي حديث افتُتح عام 2002 على كورنيش ${SITE.cityAr}، يستلهم ذكرى المكتبة القديمة. معلومات عن المبنى والمتاحف والقبة السماوية، مع التنبيه أن المواعيد والتذاكر غير مُتحقَّق منها.`,
  eyebrow: 'مكتبة · ثقافة',
  hero: {
    name: 'مكتبة الإسكندرية',
    sub: 'مجمّع ثقافي حديث على الكورنيش، يستلهم فكرة مكتبة الإسكندرية القديمة.',
    lead: 'مواعيد المكتبة والمعارض والقبة السماوية تختلف، ولم نتحقق منها هنا؛ راجع الموقع الرسمي قبل الزيارة.',
    cta: 'العودة إلى دليل الزيارة ↓'
  },
  facts: {
    title: 'لمحة سريعة',
    items: [
      { k: 'النوع', v: 'مكتبة · مجمّع ثقافي' },
      { k: 'الافتتاح', v: 'عام 2002' },
      { k: 'الفكرة', v: 'إحياء ذكرى مكتبة الإسكندرية القديمة' },
      { k: 'الموقع', v: 'كورنيش الإسكندرية' },
      { k: 'في الداخل', v: 'قاعة قراءة · متاحف · قبة سماوية' },
      { k: 'المواعيد والتذاكر', v: 'غير مُتحقَّق منها — راجع الموقع الرسمي' }
    ],
    note: 'المعطيات للتعريف العام؛ المواعيد والتذاكر تتغيّر وننصح بالرجوع للموقع الرسمي.'
  },
  about: {
    eyebrow: 'نبذة',
    title: 'عن مكتبة الإسكندرية الحديثة',
    paras: [
      'مكتبة الإسكندرية مجمّع ثقافي حديث على كورنيش المدينة، افتُتح عام 2002 ليحيي ذكرى مكتبة الإسكندرية القديمة التي كانت من أشهر مراكز المعرفة في العالم القديم.',
      'يتميّز المبنى بسقف مائل على شكل قرص، وواجهة من الجرانيت نُقشت عليها حروف من لغات وكتابات مختلفة، إلى جانب قاعة قراءة واسعة على هيئة مدرّجات.',
      'يضم المجمّع قاعات عرض ومتاحف وقبة سماوية، ويُعدّ من أبرز معالم الإسكندرية الحديثة.'
    ]
  },
  highlights: {
    eyebrow: 'أبرز ما تراه',
    title: 'داخل المجمّع',
    intro: 'قد تختلف الأجزاء المتاحة للزيارة حسب الفعاليات؛ تحقق قبل الذهاب.',
    items: [
      { title: 'المبنى والقاعة الكبرى', text: 'سقف مائل على شكل قرص، وقاعة قراءة واسعة على هيئة مدرّجات تُطلّ على البحر.' },
      { title: 'الواجهة الجرانيتية', text: 'واجهة منحوتة بحروف من لغات وكتابات متعددة.' },
      { title: 'المتاحف والمعارض', text: 'تضم المكتبة قاعات عرض ومتاحف؛ تحقق من المعروضات الحالية ومواعيدها.' },
      { title: 'قبة سماوية', text: 'قبة سماوية ضمن المجمّع؛ راجع المواعيد والتذاكر قبل الزيارة.' }
    ]
  },
  visit: {
    eyebrow: 'الزيارة عملياً',
    title: 'قبل أن تذهب',
    intro: 'المكتبة مجمّع كبير بأجزاء متعددة المواعيد؛ خطّط مسبقاً.',
    cards: [
      { title: 'الوصول', text: 'على كورنيش الإسكندرية شرق وسط المدينة. المسافة من النصب غير مُتحقَّق منها؛ راجع الطريق ووسيلة النقل.' },
      { title: 'المواعيد', text: 'مواعيد المكتبة والمعارض والقبة السماوية تختلف؛ راجع الموقع الرسمي قبل الزيارة.' },
      { title: 'التذاكر', text: 'قد تُطلب تذاكر للدخول أو للفعاليات والمعارض. لم نتحقق من الأسعار.' },
      { title: 'الجولات والفعاليات', text: 'غالباً تُعقد جولات أو فعاليات بمواعيد محددة؛ تحقق من الأوقات المتاحة.' }
    ],
    note: 'لم نتحقق من المواعيد أو الأسعار؛ راجع الموقع الرسمي للمكتبة.'
  },
  relation: {
    eyebrow: 'من النصب إلى هنا',
    title: 'ضمن جولة أوسع',
    text: 'تقع المكتبة شرق النصب التذكاري للجندي المجهول في المنشية على الكورنيش. راجع صفحة المعالم المجاورة لتخطيط أكثر من محطة، مع التنبيه أن المسافات والمواعيد هناك غير مُتحقَّق منها.'
  },
  faq: [
    { q: 'هل مكتبة الإسكندرية الحديثة هي المكتبة القديمة؟', a: 'لا؛ هي مجمّع حديث افتُتح عام 2002 يستلهم فكرة المكتبة القديمة ويحيي ذكراها.' },
    { q: 'متى افتُتحت المكتبة؟', a: 'افتُتحت عام 2002.' },
    { q: 'ماذا يوجد داخل المجمّع؟', a: 'قاعة قراءة واسعة ومتاحف ومعارض وقبة سماوية؛ تحقق من المعروضات الحالية والمواعيد.' },
    { q: 'هل يحتاج الدخول إلى تذكرة؟', a: 'قد تُطلب تذاكر لبعض الأجزاء؛ لم نتحقق من الأسعار — راجع الموقع الرسمي.' },
    { q: 'أين تقع المكتبة؟', a: 'على كورنيش الإسكندرية؛ المسافة من النصب غير مُتحقَّق منها.' }
  ]
};

const libraryEn: SpotContent = {
  locale: 'en',
  slug: 'bibliotheca-alexandrina',
  name: 'Bibliotheca Alexandrina',
  title: `Bibliotheca Alexandrina — A Modern Cultural Complex`,
  description: `Bibliotheca Alexandrina: a modern library and cultural complex opened in 2002 on the ${SITE.cityEn} corniche, echoing the ancient Library of Alexandria. Notes on the building, museums and planetarium, with hours and tickets flagged as unverified.`,
  eyebrow: 'Library · culture',
  hero: {
    name: 'Bibliotheca Alexandrina',
    sub: 'A modern library and cultural complex on the corniche, echoing the idea of the ancient Library of Alexandria.',
    lead: 'Hours for the library, exhibitions and planetarium differ and are not verified here; check the official site before you visit.',
    cta: 'Back to the visitor guide ↓'
  },
  facts: {
    title: 'Quick facts',
    items: [
      { k: 'Type', v: 'Library · cultural complex' },
      { k: 'Opened', v: '2002' },
      { k: 'Idea', v: 'Commemorating the ancient Library of Alexandria' },
      { k: 'Location', v: 'Alexandria corniche' },
      { k: 'Inside', v: 'Reading room · museums · planetarium' },
      { k: 'Hours & tickets', v: 'Not verified — check the official site' }
    ],
    note: 'General orientation only; hours and tickets change, so check the official site.'
  },
  about: {
    eyebrow: 'Overview',
    title: 'About the modern Bibliotheca Alexandrina',
    paras: [
      'The Bibliotheca Alexandrina is a modern cultural complex on the city’s corniche, opened in 2002 to commemorate the ancient Library of Alexandria, one of the most famous centres of knowledge in the ancient world.',
      'The building is known for its tilted, disc-shaped roof and an Aswan granite facade carved with characters from many scripts, along with a vast, tiered reading room.',
      'The complex holds exhibition spaces, museums and a planetarium, and is among the most recognisable modern landmarks of Alexandria.'
    ]
  },
  highlights: {
    eyebrow: 'What to see',
    title: 'Inside the complex',
    intro: 'Which parts are open can vary with events; check before you go.',
    items: [
      { title: 'The building and main reading room', text: 'A tilted, disc-shaped roof and a vast, tiered reading room facing the sea.' },
      { title: 'The granite facade', text: 'A facade carved with characters from many scripts and languages.' },
      { title: 'Museums and exhibitions', text: 'The library holds exhibition spaces and museums; check current displays and times.' },
      { title: 'Planetarium', text: 'A planetarium forms part of the complex; check its schedule and tickets before you visit.' }
    ]
  },
  visit: {
    eyebrow: 'Practical visit',
    title: 'Before you go',
    intro: 'It is a large complex with different hours for different parts; plan ahead.',
    cards: [
      { title: 'Getting there', text: 'On the Alexandria corniche, east of the city centre. The distance from the memorial is not verified here; check the route and transport.' },
      { title: 'Hours', text: 'Hours for the library, exhibitions and planetarium differ; check the official site before you visit.' },
      { title: 'Tickets', text: 'Tickets may be required for entry or for events and exhibitions. No prices are verified here.' },
      { title: 'Tours and events', text: 'Guided tours or events are often held at set times; check the available slots.' }
    ],
    note: 'Hours and prices are not verified here; check the library’s official site.'
  },
  relation: {
    eyebrow: 'From the memorial to here',
    title: 'Part of a wider walk',
    text: 'The library lies east of the Naval Unknown Soldier Memorial in Mansheya along the corniche. See the nearby-attractions guide to plan more than one stop, noting that distances and hours there are not verified.'
  },
  faq: [
    { q: 'Is the modern Bibliotheca Alexandrina the ancient library?', a: 'No; it is a modern complex opened in 2002 that echoes and commemorates the idea of the ancient library.' },
    { q: 'When did it open?', a: 'It opened in 2002.' },
    { q: 'What is inside the complex?', a: 'A large reading room, museums, exhibition spaces and a planetarium; check current displays and times.' },
    { q: 'Do I need a ticket to enter?', a: 'Tickets may be required for some parts; no prices are verified here — check the official site.' },
    { q: 'Where is it?', a: 'On the Alexandria corniche; the distance from the memorial is not verified here.' }
  ]
};

const libraryZh: SpotContent = {
  locale: 'zh',
  slug: 'bibliotheca-alexandrina',
  name: '亚历山大图书馆',
  title: `亚历山大图书馆 — 海滨上的现代文化综合体`,
  description: `亚历山大图书馆：2002 年启用的现代图书馆与文化综合体，位于亚历山大海滨，延续古亚历山大图书馆的理念。提供建筑、博物馆与天文馆信息，开放时间与门票标注为未核实。`,
  eyebrow: '图书馆 · 文化',
  hero: {
    name: '亚历山大图书馆',
    sub: '海滨上的现代图书馆与文化综合体，延续古亚历山大图书馆的理念。',
    lead: '图书馆、展览与天文馆的开放时间各不相同，本文未核实；参观前请查阅官网。',
    cta: '返回参观指南 ↓'
  },
  facts: {
    title: '快速概览',
    items: [
      { k: '类型', v: '图书馆 · 文化综合体' },
      { k: '启用', v: '2002 年' },
      { k: '理念', v: '纪念古亚历山大图书馆' },
      { k: '位置', v: '亚历山大海滨' },
      { k: '内部', v: '阅览大厅 · 博物馆 · 天文馆' },
      { k: '时间与门票', v: '未核实——请查阅官网' }
    ],
    note: '以上仅供概览；开放时间与门票会变动，请查阅官网。'
  },
  about: {
    eyebrow: '简介',
    title: '关于现代亚历山大图书馆',
    paras: [
      '亚历山大图书馆是位于城市海滨的现代文化综合体，于 2002 年启用，用以纪念古代世界最著名的知识中心之一——古亚历山大图书馆。',
      '建筑以倾斜的圆盘状屋顶和刻有多种文字字符的阿斯旺花岗岩外墙著称，馆内设有宽阔的阶梯式阅览大厅。',
      '综合体包含展览空间、博物馆与天文馆，是亚历山大最具辨识度的现代地标之一。'
    ]
  },
  highlights: {
    eyebrow: '看点',
    title: '综合体内部',
    intro: '开放区域可能随活动变动；出发前请确认。',
    items: [
      { title: '主楼与阅览大厅', text: '倾斜的圆盘状屋顶，以及面朝大海的宽阔阶梯式阅览大厅。' },
      { title: '花岗岩外墙', text: '外墙雕刻着来自多种文字与语言的字符。' },
      { title: '博物馆与展览', text: '馆内设有展览空间与博物馆；请确认当前展陈与开放时间。' },
      { title: '天文馆', text: '综合体内设天文馆；参观前请确认场次与门票。' }
    ]
  },
  visit: {
    eyebrow: '实用信息',
    title: '出行之前',
    intro: '综合体规模较大，各部分开放时间不同，请提前规划。',
    cards: [
      { title: '到达', text: '位于亚历山大海滨，市中心以东。与纪念碑的距离本文未核实；请核对路线与交通。' },
      { title: '时间', text: '图书馆、展览与天文馆的开放时间各不相同；参观前请查阅官网。' },
      { title: '门票', text: '入场、活动或展览可能需要门票。本文未核实价格。' },
      { title: '导览与活动', text: '常有固定场次的导览或活动；请确认可预约的时间。' }
    ],
    note: '本文未核实开放时间与价格；请查阅图书馆官网。'
  },
  relation: {
    eyebrow: '从纪念碑到这里',
    title: '更广行程的一部分',
    text: '图书馆位于曼希亚海军无名烈士纪念碑以东的海滨沿线。请查看周边景点指南来规划多站行程——注意其中的距离与时间均未核实。'
  },
  faq: [
    { q: '现代亚历山大图书馆就是古代那座图书馆吗？', a: '不是；它是 2002 年启用的现代综合体，延续并纪念古代图书馆的理念。' },
    { q: '图书馆何时启用？', a: '2002 年启用。' },
    { q: '综合体内部有什么？', a: '宽阔的阅览大厅、博物馆、展览空间与天文馆；请确认当前展陈与开放时间。' },
    { q: '入场需要门票吗？', a: '部分区域可能需要门票；本文未核实价格——请查阅官网。' },
    { q: '图书馆在哪里？', a: '位于亚历山大海滨；与纪念碑的距离本文未核实。' }
  ]
};

// ————————————————————————————————————————————————————————————
// 4) آثار كوم الدكة — Kom El Dikka
// ————————————————————————————————————————————————————————————

const komAr: SpotContent = {
  locale: 'ar',
  slug: 'kom-el-dikka',
  name: 'آثار كوم الدكة',
  title: `آثار كوم الدكة في ${SITE.cityAr} — المدرج الروماني والفسيفساء`,
  description: `آثار كوم الدكة: موقع أثري روماني في وسط ${SITE.cityAr}، أشهر ما فيه المدرج الروماني وفسيفساء «فيلا الطيور». معلومات عن الموقع، مع التنبيه أن المواعيد والتذاكر غير مُتحقَّق منها.`,
  eyebrow: 'موقع روماني · الإسكندرية',
  hero: {
    name: 'آثار كوم الدكة',
    sub: 'موقع أثري روماني في قلب المدينة الحديثة، أشهر ما فيه المدرج الروماني وفسيفساء «فيلا الطيور».',
    lead: 'قد تكون للموقع مواعيد محددة، ولم نتحقق منها هنا؛ راجع المصادر الرسمية قبل الزيارة.',
    cta: 'العودة إلى دليل الزيارة ↓'
  },
  facts: {
    title: 'لمحة سريعة',
    items: [
      { k: 'النوع', v: 'موقع أثري روماني' },
      { k: 'أشهر ما فيه', v: 'المدرج الروماني' },
      { k: 'الفسيفساء', v: 'فسيفساء «فيلا الطيور»' },
      { k: 'الموقع', v: 'وسط الإسكندرية' },
      { k: 'المواعيد والتذاكر', v: 'غير مُتحقَّق منها — راجع المصادر الرسمية' }
    ],
    note: 'المعطيات للتعريف العام؛ المواعيد والتذاكر تتغيّر ولا نضمنها.'
  },
  about: {
    eyebrow: 'نبذة',
    title: 'عن موقع كوم الدكة',
    paras: [
      'آثار كوم الدكة موقع أثري روماني في قلب الإسكندرية الحديثة، ويُعدّ من المواقع التي تكشف طبقات تاريخ المدينة.',
      'أشهر ما في الموقع المدرج الروماني الذي اكتُشفت آثاره في القرن العشرين، إلى جانب بقايا مبانٍ وفسيفساء شهيرة تُعرف بـ«فيلا الطيور» لتصويرها الطيور.',
      'الموقع محاط بالمدينة الحديثة، وهو محطة قصيرة نسبياً تُضيف طبقة مختلفة عن معالم الإسكندرية الأخرى.'
    ]
  },
  highlights: {
    eyebrow: 'أبرز ما تراه',
    title: 'داخل الموقع',
    intro: 'الموقع أثري؛ احترم حدود الزيارة واللافتات.',
    items: [
      { title: 'المدرج الروماني', text: 'بقايا مدرج روماني اكتُشفت آثاره في القرن العشرين، وهو من أشهر معالم الموقع.' },
      { title: 'فسيفساء فيلا الطيور', text: 'لوحات فسيفساء تصوّر طيوراً بألوانها، وهي من أبرز ما في الموقع.' },
      { title: 'طبقات الموقع', text: 'بقايا مبانٍ من فترات مختلفة تبيّن تعاقب الحضارات على المدينة.' }
    ]
  },
  visit: {
    eyebrow: 'الزيارة عملياً',
    title: 'قبل أن تذهب',
    intro: 'موقع أثري مكشوف؛ استعد للأرضيات والأدراج.',
    cards: [
      { title: 'الوصول', text: 'في وسط المدينة الحديثة؛ المسافة من النصب غير مُتحقَّق منها. راجع الطريق ووسيلة النقل.' },
      { title: 'المواعيد', text: 'قد تكون للموقع الأثري مواعيد محددة؛ راجع المصادر الرسمية.' },
      { title: 'الأرضية', text: 'قد تكون الأرضيات والأدراج غير مستوية؛ توخَّ الحذر أثناء التنقل.' },
      { title: 'التذاكر', text: 'قد يُطلب تذكرة للدخول؛ لم نتحقق من الأسعار.' }
    ],
    note: 'لم نتحقق من المواعيد أو الأسعار؛ راجع المصادر الرسمية.'
  },
  relation: {
    eyebrow: 'من النصب إلى هنا',
    title: 'ضمن جولة أوسع',
    text: 'يقع الموقع في وسط الإسكندرية على مسافة من النصب التذكاري للجندي المجهول في المنشية. راجع صفحة المعالم المجاورة لتخطيط أكثر من محطة، مع التنبيه أن المسافات والمواعيد هناك غير مُتحقَّق منها.'
  },
  faq: [
    { q: 'ما هو كوم الدكة؟', a: 'موقع أثري روماني في وسط الإسكندرية، أشهر ما فيه المدرج الروماني وفسيفساء «فيلا الطيور».' },
    { q: 'ما أشهر ما في الموقع؟', a: 'المدرج الروماني وفسيفساء «فيلا الطيور».' },
    { q: 'متى اكتُشف الموقع؟', a: 'اكتُشفت آثاره في القرن العشرين أثناء أعمال في المدينة.' },
    { q: 'هل المواعيد والأسعار معروفة؟', a: 'غير مُتحقَّق منها هنا؛ راجع المصادر الرسمية قبل الزيارة.' },
    { q: 'كم يستغرق زيارة الموقع؟', a: 'زيارة قصيرة نسبياً؛ احسب وقتاً إضافياً للتنقل والزحام.' }
  ]
};

const komEn: SpotContent = {
  locale: 'en',
  slug: 'kom-el-dikka',
  name: 'Kom El Dikka',
  title: `Kom El Dikka, ${SITE.cityEn} — Roman Theatre & Mosaics`,
  description: `Kom El Dikka: a Roman-era archaeological site in central ${SITE.cityEn}, best known for its Roman theatre and the mosaics of the “Villa of the Birds”. Site notes, with hours and tickets flagged as unverified.`,
  eyebrow: 'Roman site · Alexandria',
  hero: {
    name: 'Kom El Dikka',
    sub: 'A Roman-era archaeological site in the middle of the modern city, best known for its Roman theatre and the “Villa of the Birds” mosaics.',
    lead: 'The site may keep set hours and these are not verified here; check official sources before you visit.',
    cta: 'Back to the visitor guide ↓'
  },
  facts: {
    title: 'Quick facts',
    items: [
      { k: 'Type', v: 'Roman-era archaeological site' },
      { k: 'Best known for', v: 'The Roman theatre' },
      { k: 'Mosaics', v: 'The “Villa of the Birds” mosaics' },
      { k: 'Location', v: 'Central Alexandria' },
      { k: 'Hours & tickets', v: 'Not verified — check official sources' }
    ],
    note: 'General orientation only; hours and prices change and are not guaranteed.'
  },
  about: {
    eyebrow: 'Overview',
    title: 'About Kom El Dikka',
    paras: [
      'Kom El Dikka is a Roman-era archaeological site in the heart of modern Alexandria, and one of the places that reveals the city’s layers of history.',
      'Its best-known feature is the Roman theatre, whose remains were uncovered in the 20th century, alongside building remains and the celebrated mosaics known as the “Villa of the Birds”, named for their bird imagery.',
      'The site is ringed by the modern city, and is a relatively compact stop that adds a very different layer to Alexandria’s other landmarks.'
    ]
  },
  highlights: {
    eyebrow: 'What to see',
    title: 'Inside the site',
    intro: 'It is an archaeological site; respect the visit boundaries and signs.',
    items: [
      { title: 'The Roman theatre', text: 'Remains of a Roman theatre uncovered in the 20th century, the site’s best-known feature.' },
      { title: 'Villa of the Birds mosaics', text: 'Mosaic panels depicting birds in colour, among the site’s highlights.' },
      { title: 'Layers of the site', text: 'Building remains from different periods showing the succession of civilisations in the city.' }
    ]
  },
  visit: {
    eyebrow: 'Practical visit',
    title: 'Before you go',
    intro: 'An open-air archaeological site; be ready for floors and steps.',
    cards: [
      { title: 'Getting there', text: 'In the middle of the modern city; the distance from the memorial is not verified here. Check the route and transport.' },
      { title: 'Hours', text: 'The archaeological site may keep set hours; check official sources.' },
      { title: 'Ground', text: 'Floors and steps may be uneven; take care as you walk around.' },
      { title: 'Tickets', text: 'A ticket may be required for entry; no prices are verified here.' }
    ],
    note: 'Hours and prices are not verified here; check official sources.'
  },
  relation: {
    eyebrow: 'From the memorial to here',
    title: 'Part of a wider walk',
    text: 'The site lies in central Alexandria, some distance from the Naval Unknown Soldier Memorial in Mansheya. See the nearby-attractions guide to plan more than one stop, noting that distances and hours there are not verified.'
  },
  faq: [
    { q: 'What is Kom El Dikka?', a: 'A Roman-era archaeological site in central Alexandria, best known for its Roman theatre and the “Villa of the Birds” mosaics.' },
    { q: 'What is the site best known for?', a: 'The Roman theatre and the “Villa of the Birds” mosaics.' },
    { q: 'When was the site discovered?', a: 'Its remains were uncovered in the 20th century during works in the city.' },
    { q: 'Are the hours and prices known?', a: 'They are not verified here; check official sources before you visit.' },
    { q: 'How long does a visit take?', a: 'It is a relatively short visit; allow extra time for transport and traffic.' }
  ]
};

const komZh: SpotContent = {
  locale: 'zh',
  slug: 'kom-el-dikka',
  name: '科姆·迪卡',
  title: `亚历山大科姆·迪卡 — 罗马剧场与马赛克遗址`,
  description: `科姆·迪卡：位于亚历山大市中心的罗马时代考古遗址，以罗马剧场与「飞鸟别墅」马赛克闻名。提供遗址信息，开放时间与门票标注为未核实。`,
  eyebrow: '罗马遗址 · 亚历山大',
  hero: {
    name: '科姆·迪卡',
    sub: '位于现代城市中心的罗马时代考古遗址，以罗马剧场与「飞鸟别墅」马赛克闻名。',
    lead: '遗址可能有固定开放时间，本文未核实；参观前请查阅官方来源。',
    cta: '返回参观指南 ↓'
  },
  facts: {
    title: '快速概览',
    items: [
      { k: '类型', v: '罗马时代考古遗址' },
      { k: '最著名', v: '罗马剧场' },
      { k: '马赛克', v: '「飞鸟别墅」马赛克' },
      { k: '位置', v: '亚历山大市中心' },
      { k: '时间与门票', v: '未核实——请查阅官方来源' }
    ],
    note: '以上仅供概览；开放时间与价格会变动，无法保证。'
  },
  about: {
    eyebrow: '简介',
    title: '关于科姆·迪卡',
    paras: [
      '科姆·迪卡是位于现代亚历山大市中心的罗马时代考古遗址，也是揭示这座城市历史层叠的重要地点之一。',
      '遗址最著名的是罗马剧场，其遗迹于 20 世纪被发现；此外还有建筑遗迹与著名的「飞鸟别墅」马赛克，因描绘飞鸟而得名。',
      '遗址被现代城市环绕，是一处相对简短的停留点，为亚历山大的其他地标增添了截然不同的一层。'
    ]
  },
  highlights: {
    eyebrow: '看点',
    title: '遗址内部',
    intro: '此处为考古遗址；请遵守参观边界与告示。',
    items: [
      { title: '罗马剧场', text: '20 世纪发现的罗马剧场遗迹，是遗址最著名的看点。' },
      { title: '飞鸟别墅马赛克', text: '描绘彩色飞鸟的马赛克画面，是遗址的亮点之一。' },
      { title: '遗址层叠', text: '不同时期的建筑遗迹，展现这座城市文明的更替。' }
    ]
  },
  visit: {
    eyebrow: '实用信息',
    title: '出行之前',
    intro: '露天考古遗址；请对地面与台阶有所准备。',
    cards: [
      { title: '到达', text: '位于现代城市中心；与纪念碑的距离本文未核实。请核对路线与交通。' },
      { title: '时间', text: '考古遗址可能有固定开放时间；请查阅官方来源。' },
      { title: '地面', text: '地面与台阶可能不平整；行走时请注意安全。' },
      { title: '门票', text: '入场可能需要门票；本文未核实价格。' }
    ],
    note: '本文未核实开放时间与价格；请查阅官方来源。'
  },
  relation: {
    eyebrow: '从纪念碑到这里',
    title: '更广行程的一部分',
    text: '遗址位于亚历山大市中心，距曼希亚的海军无名烈士纪念碑有一段距离。请查看周边景点指南来规划多站行程——注意其中的距离与时间均未核实。'
  },
  faq: [
    { q: '科姆·迪卡是什么？', a: '位于亚历山大市中心的罗马时代考古遗址，以罗马剧场与「飞鸟别墅」马赛克闻名。' },
    { q: '遗址最著名的是什么？', a: '罗马剧场与「飞鸟别墅」马赛克。' },
    { q: '遗址何时被发现？', a: '其遗迹于 20 世纪在城市施工中被发现。' },
    { q: '开放时间与价格已知吗？', a: '本文未核实；参观前请查阅官方来源。' },
    { q: '参观需要多久？', a: '相对较短；请预留交通与拥堵的额外时间。' }
  ]
};

// ————————————————————————————————————————————————————————————
// 5) عمود السواري — Pompey's Pillar
// ————————————————————————————————————————————————————————————

const pillarAr: SpotContent = {
  locale: 'ar',
  slug: 'pompeys-pillar',
  name: 'عمود السواري (العمود الروماني)',
  title: `عمود السواري في ${SITE.cityAr} — عمود بومبي والسرابيوم`,
  description: `عمود السواري (العمود الروماني): عمود ضخم من الجرانيت الأحمر في حي كرموز بـ${SITE.cityAr}، أُقيم في نهاية القرن الثالث الميلادي بين بقايا السرابيوم. معلومات عن الموقع، مع التنبيه أن المواعيد والتذاكر غير مُتحقَّق منها.`,
  eyebrow: 'أثر روماني · الإسكندرية',
  hero: {
    name: 'عمود السواري',
    sub: 'عمود ضخم من الجرانيت الأحمر أقيم في العهد الروماني بين بقايا السرابيوم.',
    lead: 'يقع الموقع على أرض مرتفعة تتخللها أدراج وأسطح غير مستوية؛ توخَّ الحذر. المواعيد والأسعار غير مُتحقَّق منها.',
    cta: 'العودة إلى دليل الزيارة ↓'
  },
  facts: {
    title: 'لمحة سريعة',
    items: [
      { k: 'النوع', v: 'عمود نصر روماني' },
      { k: 'المادة', v: 'الجرانيت الأحمر' },
      { k: 'الإهداء', v: 'الإمبراطور دقلديانوس (نهاية القرن الثالث الميلادي)' },
      { k: 'الموقع', v: 'حي كرموز' },
      { k: 'حوله', v: 'بقايا السرابيوم' },
      { k: 'المواعيد والتذاكر', v: 'غير مُتحقَّق منها — راجع المصادر الرسمية' }
    ],
    note: 'المعطيات للتعريف العام؛ المواعيد والأسعار تتغيّر ولا نضمنها.'
  },
  about: {
    eyebrow: 'نبذة',
    title: 'عن عمود السواري',
    paras: [
      'عمود السواري (المعروف أيضاً بالعمود الروماني أو عمود بومبي) عمود ضخم من الجرانيت الأحمر ينتصب في حي كرموز بالإسكندرية.',
      'أُقيم العمود في نهاية القرن الثالث الميلادي في عهد الإمبراطور الروماني دقلديانوس، رغم أن اسمه الشائع «عمود بومبي» لا يعود إلى بومبي.',
      'يقع العمود بين بقايا السرابيوم، وهو معبد كان مخصّصاً للإله سيرابيس، وتتخلل الموقع أطلال وأسطح غير مستوية.'
    ]
  },
  highlights: {
    eyebrow: 'أبرز ما تراه',
    title: 'داخل الموقع',
    intro: 'موقع مكشوف بتضاريس غير مستوية؛ اتبع إرشادات السلامة.',
    items: [
      { title: 'العمود', text: 'عمود واحد ضخم من الجرانيت الأحمر، من أكبر الأعمدة من نوعه.' },
      { title: 'بقايا السرابيوم', text: 'أطلال معبد سيرابيس حول العمود، ومنها بقايا منصات وأدراج.' },
      { title: 'الموقع المرتفع', text: 'يقع الموقع على أرض مرتفعة نسبياً، ما يمنح إطلالة على ما حوله.' }
    ]
  },
  visit: {
    eyebrow: 'الزيارة عملياً',
    title: 'قبل أن تذهب',
    intro: 'الموقع مكشوف وأرضه غير مستوية في أجزاء منه.',
    cards: [
      { title: 'الوصول', text: 'في حي كرموز؛ المسافة من النصب غير مُتحقَّق منها. راجع الطريق ووسيلة النقل.' },
      { title: 'المواعيد', text: 'راجع المصادر الرسمية للجدول الحالي.' },
      { title: 'التضاريس', text: 'أسطح وأدراج غير مستوية؛ توخَّ الحذر خاصة مع الأطفال أو من يعاني صعوبة في الحركة.' },
      { title: 'التذاكر', text: 'قد يُطلب تذكرة للدخول؛ لم نتحقق من الأسعار.' }
    ],
    note: 'لم نتحقق من المواعيد أو الأسعار؛ راجع المصادر الرسمية.'
  },
  relation: {
    eyebrow: 'من النصب إلى هنا',
    title: 'ضمن جولة أوسع',
    text: 'يقع العمود في حي كرموز على مسافة من النصب التذكاري للجندي المجهول في المنشية. راجع صفحة المعالم المجاورة لتخطيط أكثر من محطة، مع التنبيه أن المسافات والمواعيد هناك غير مُتحقَّق منها.'
  },
  faq: [
    { q: 'ما هو عمود السواري؟', a: 'عمود ضخم من الجرانيت الأحمر أُقيم في العهد الروماني في حي كرموز بالإسكندرية.' },
    { q: 'هل سُمّي على اسم بومبي؟', a: 'الاسم الشائع «عمود بومبي» مضلّل؛ العمود أُقيم في عهد الإمبراطور دقلديانوس وليس لبومبي.' },
    { q: 'متى أُقيم العمود؟', a: 'في نهاية القرن الثالث الميلادي، في العهد الروماني.' },
    { q: 'ما الذي حول العمود؟', a: 'بقايا السرابيوم، وهو معبد كان مخصّصاً للإله سيرابيس.' },
    { q: 'هل الموقع مناسب للجميع؟', a: 'قد تكون الأرضيات والأدراج غير مستوية؛ قيّم الموقع عند الوصول واتبع إرشادات السلامة.' }
  ]
};

const pillarEn: SpotContent = {
  locale: 'en',
  slug: 'pompeys-pillar',
  name: 'Pompey’s Pillar',
  title: `Pompey’s Pillar, ${SITE.cityEn} — The Roman Column & Serapeum`,
  description: `Pompey’s Pillar: a monumental red-granite column in the Karmouz district of ${SITE.cityEn}, raised in the late 3rd century CE among the remains of the Serapeum. Site notes, with hours and tickets flagged as unverified.`,
  eyebrow: 'Roman monument · Alexandria',
  hero: {
    name: 'Pompey’s Pillar',
    sub: 'A towering red-granite column raised in the Roman period among the remains of the Serapeum.',
    lead: 'The site sits on higher ground with steps and uneven surfaces, so take care. Hours and prices are not verified here.',
    cta: 'Back to the visitor guide ↓'
  },
  facts: {
    title: 'Quick facts',
    items: [
      { k: 'Type', v: 'Roman triumphal column' },
      { k: 'Material', v: 'Red granite' },
      { k: 'Dedicated', v: 'To Emperor Diocletian (late 3rd century CE)' },
      { k: 'Location', v: 'Karmouz district' },
      { k: 'Around it', v: 'Remains of the Serapeum' },
      { k: 'Hours & tickets', v: 'Not verified — check official sources' }
    ],
    note: 'General orientation only; hours and prices change and are not guaranteed.'
  },
  about: {
    eyebrow: 'Overview',
    title: 'About Pompey’s Pillar',
    paras: [
      'Pompey’s Pillar — also known as the Roman column — is a monumental red-granite column standing in the Karmouz district of Alexandria.',
      'It was raised in the late 3rd century CE during the reign of the Roman emperor Diocletian, even though the popular name “Pompey’s Pillar” does not refer to Pompey.',
      'The column stands among the remains of the Serapeum, a temple once dedicated to the god Serapis, and the site includes ruins and uneven surfaces.'
    ]
  },
  highlights: {
    eyebrow: 'What to see',
    title: 'Inside the site',
    intro: 'An open site with uneven ground; follow safety guidance.',
    items: [
      { title: 'The column', text: 'A single monumental column of red granite, among the largest of its kind.' },
      { title: 'Remains of the Serapeum', text: 'Ruins of the temple of Serapis around the column, including platforms and steps.' },
      { title: 'Elevated ground', text: 'The site sits on relatively higher ground, giving views over its surroundings.' }
    ]
  },
  visit: {
    eyebrow: 'Practical visit',
    title: 'Before you go',
    intro: 'The site is open-air and parts of the ground are uneven.',
    cards: [
      { title: 'Getting there', text: 'In the Karmouz district; the distance from the memorial is not verified here. Check the route and transport.' },
      { title: 'Hours', text: 'Check official sources for the current schedule.' },
      { title: 'Terrain', text: 'Steps and uneven surfaces; take care, especially with children or visitors with reduced mobility.' },
      { title: 'Tickets', text: 'A ticket may be required for entry; no prices are verified here.' }
    ],
    note: 'Hours and prices are not verified here; check official sources.'
  },
  relation: {
    eyebrow: 'From the memorial to here',
    title: 'Part of a wider walk',
    text: 'The column stands in the Karmouz district, some distance from the Naval Unknown Soldier Memorial in Mansheya. See the nearby-attractions guide to plan more than one stop, noting that distances and hours there are not verified.'
  },
  faq: [
    { q: 'What is Pompey’s Pillar?', a: 'A monumental red-granite column raised in the Roman period in the Karmouz district of Alexandria.' },
    { q: 'Is it named after Pompey?', a: 'The popular name “Pompey’s Pillar” is misleading; the column was raised for the emperor Diocletian, not for Pompey.' },
    { q: 'When was it raised?', a: 'In the late 3rd century CE, in the Roman period.' },
    { q: 'What is around the column?', a: 'The remains of the Serapeum, a temple once dedicated to the god Serapis.' },
    { q: 'Is the site suitable for everyone?', a: 'Floors and steps may be uneven; assess the site on arrival and follow safety guidance.' }
  ]
};

const pillarZh: SpotContent = {
  locale: 'zh',
  slug: 'pompeys-pillar',
  name: '庞贝柱',
  title: `亚历山大庞贝柱 — 罗马巨柱与萨拉皮雍遗址`,
  description: `庞贝柱：矗立于亚历山大卡尔穆兹区、萨拉皮雍遗址之间的红色花岗岩巨柱，建于公元 3 世纪末。提供遗址信息，开放时间与门票标注为未核实。`,
  eyebrow: '罗马遗迹 · 亚历山大',
  hero: {
    name: '庞贝柱',
    sub: '罗马时期矗立于萨拉皮雍遗址之间的红色花岗岩巨柱。',
    lead: '遗址位于地势较高处，有台阶与不平整地面，行走时请注意安全。本文未核实开放时间与价格。',
    cta: '返回参观指南 ↓'
  },
  facts: {
    title: '快速概览',
    items: [
      { k: '类型', v: '罗马凯旋柱' },
      { k: '材质', v: '红色花岗岩' },
      { k: '献于', v: '戴克里先皇帝（公元 3 世纪末）' },
      { k: '位置', v: '卡尔穆兹区' },
      { k: '周边', v: '萨拉皮雍遗址' },
      { k: '时间与门票', v: '未核实——请查阅官方来源' }
    ],
    note: '以上仅供概览；开放时间与价格会变动，无法保证。'
  },
  about: {
    eyebrow: '简介',
    title: '关于庞贝柱',
    paras: [
      '庞贝柱（又称罗马巨柱）是一根矗立于亚历山大卡尔穆兹区的巨型红色花岗岩柱。',
      '它建于公元 3 世纪末罗马皇帝戴克里先统治时期，尽管其流行的名称「庞贝柱」其实并非指庞贝。',
      '石柱矗立于萨拉皮雍遗址之间——那是一座曾供奉塞拉皮斯神的庙宇，遗址内可见残迹与不平整的地面。'
    ]
  },
  highlights: {
    eyebrow: '看点',
    title: '遗址内部',
    intro: '露天遗址，地面不平整；请遵循安全指引。',
    items: [
      { title: '巨柱', text: '一根巨型红色花岗岩柱，是同类中规模最大的之一。' },
      { title: '萨拉皮雍遗址', text: '石柱周围散布着塞拉皮斯神庙的残迹，包括基座与台阶。' },
      { title: '高地位置', text: '遗址位于相对较高的地势，可俯瞰周边。' }
    ]
  },
  visit: {
    eyebrow: '实用信息',
    title: '出行之前',
    intro: '遗址为露天场地，部分地面不平整。',
    cards: [
      { title: '到达', text: '位于卡尔穆兹区；与纪念碑的距离本文未核实。请核对路线与交通。' },
      { title: '时间', text: '请查阅官方来源获取当前时间表。' },
      { title: '地形', text: '有台阶与不平整地面；请小心行走，尤其带儿童或行动不便者。' },
      { title: '门票', text: '入场可能需要门票；本文未核实价格。' }
    ],
    note: '本文未核实开放时间与价格；请查阅官方来源。'
  },
  relation: {
    eyebrow: '从纪念碑到这里',
    title: '更广行程的一部分',
    text: '石柱位于卡尔穆兹区，距曼希亚的海军无名烈士纪念碑有一段距离。请查看周边景点指南来规划多站行程——注意其中的距离与时间均未核实。'
  },
  faq: [
    { q: '庞贝柱是什么？', a: '一根建于罗马时期、矗立于亚历山大卡尔穆兹区的巨型红色花岗岩柱。' },
    { q: '它是为庞贝而建的吗？', a: '流行的名称「庞贝柱」其实具有误导性；石柱是为戴克里先皇帝而建，并非庞贝。' },
    { q: '石柱何时建立？', a: '公元 3 世纪末，罗马时期。' },
    { q: '石柱周围有什么？', a: '萨拉皮雍遗址——一座曾供奉塞拉皮斯神的庙宇残迹。' },
    { q: '遗址适合所有人吗？', a: '地面与台阶可能不平整；抵达后请自行评估并遵循安全指引。' }
  ]
};

// ————————————————————————————————————————————————————————————
// 6) سوق المنشية — Mansheya market quarter
// ————————————————————————————————————————————————————————————

const marketAr: SpotContent = {
  locale: 'ar',
  slug: 'mansheya-market',
  name: 'سوق المنشية',
  title: `سوق المنشية حول النصب التذكاري في ${SITE.cityAr}`,
  description: `سوق المنشية: القلب التجاري المزدحم حول ميدان النصب التذكاري في المنشية بـ${SITE.cityAr}. دكاكين قديمة وحياة شارع ومقاهٍ، وليس معلماً مُعدّاً للزوار. نصائح عملية للتجوّل.`,
  eyebrow: 'أسواق · حياة يومية',
  hero: {
    name: 'سوق المنشية',
    sub: 'القلب التجاري المزدحم حول ميدان النصب التذكاري مباشرة — دكاكين قديمة وحياة شارع إسكندرية اليومية.',
    lead: 'هذا ليس معلماً مُعدّاً للزوار، بل حي تجاري حيّ؛ اذهب من أجل الأجواء واحتفظ بأغراضك.',
    cta: 'العودة إلى دليل الزيارة ↓'
  },
  facts: {
    title: 'لمحة سريعة',
    items: [
      { k: 'النوع', v: 'أسواق · حياة يومية' },
      { k: 'الموقع', v: 'حول الميدان — المنشية' },
      { k: 'الطابع', v: 'دكاكين قديمة وحياة شارع ومقاهٍ' },
      { k: 'مناسب لـ', v: 'التجوّل والتسوّق اليومي' },
      { k: 'ملاحظة', v: 'ليس معلماً مُعدّاً للزوار' }
    ],
    note: 'الأسعار والمواعيد غير مُتحقَّق منها؛ تحقق ميدانياً واتفق على السعر قبل الشراء.'
  },
  about: {
    eyebrow: 'نبذة',
    title: 'عن سوق المنشية',
    paras: [
      'سوق المنشية هو القلب التجاري المزدحم حول ميدان النصب التذكاري في حي المنشية بالإسكندرية.',
      'يعكس السوق حياة المدينة اليومية: دكاكين قديمة وباعة ومقاهٍ وحركة مستمرة، أكثر من كونه معلماً مُعدّاً للزوار.',
      'يمكن دمجه بسهولة مع زيارة النصب مباشرة، فهو يحيط به.'
    ]
  },
  highlights: {
    eyebrow: 'أبرز ما تراه',
    title: 'في السوق والشارع',
    intro: 'تجربة حضرية حقيقية؛ احترم خصوصية السكان والعاملين.',
    items: [
      { title: 'الحياة اليومية', text: 'حركة الشراء والباعة والمقاهي؛ تجربة إسكندرية اليومية لا عرض سياحي.' },
      { title: 'الدكاكين', text: 'متاجر متنوّعة قديمة؛ تجوّل واطّلع دون التزام بالشراء.' },
      { title: 'المقاهي', text: 'مقاهٍ شعبية يمكن الجلوس فيها لمشاهدة الشارع.' },
      { title: 'الميدان', text: 'ساحة النصب في القلب؛ نقطة انطلاق جيدة للتجوّل.' }
    ]
  },
  visit: {
    eyebrow: 'الزيارة عملياً',
    title: 'قبل أن تتجوّل',
    intro: 'نصائح عامة للتجول في حي تجاري مزدحم.',
    cards: [
      { title: 'الوصول', text: 'يحيط مباشرة بميدان النصب في المنشية؛ لا تحتاج مسافة.' },
      { title: 'التوقيت', text: 'يزداد الازدحام في المساء والعطلات؛ اختر وقتاً أهدأ إن أردت التجوّل بارتياح.' },
      { title: 'السلامة', text: 'احتفظ بأغراضك الثمينة وانتبه للحركة المرورية في الشوارع المزدحمة.' },
      { title: 'الشراء', text: 'اتفق على السعر قبل الشراء في الأكشاك غير المسعّرة، واحتفظ بنقد للشراء الصغير.' }
    ],
    note: 'لم نتحقق من الأسعار أو المواعيد؛ تحقق ميدانياً.'
  },
  relation: {
    eyebrow: 'من النصب إلى هنا',
    title: 'جزء من موقع النصب',
    text: 'يحيط السوق بالنصب التذكاري للجندي المجهول في المنشية مباشرة، فهو امتداد حضري للزيارة. راجع دليل النصب وصفحة المعالم المجاورة لتخطيط جولتك.'
  },
  faq: [
    { q: 'ما هو سوق المنشية؟', a: 'حي تجاري مزدحم حول ميدان النصب التذكاري في المنشية، يعكس حياة المدينة اليومية.' },
    { q: 'هل هو معلّم سياحي؟', a: 'ليس معلماً مُعدّاً للزوار؛ قيمته في الأجواء والحياة اليومية والتسوّق.' },
    { q: 'هل هو قريب من النصب؟', a: 'نعم، يحيط به مباشرة.' },
    { q: 'ما أفضل وقت للتجوّل؟', a: 'الأوقات الأقل ازدحاماً أسهل للتجوّل؛ المساء والعطلات أكثر ازدحاماً.' },
    { q: 'هل الأسعار محددة؟', a: 'ليس كل الأكشاك مسعّرة؛ اتفق على السعر قبل الشراء واحمل نقداً للشراء الصغير.' }
  ]
};

const marketEn: SpotContent = {
  locale: 'en',
  slug: 'mansheya-market',
  name: 'Mansheya market quarter',
  title: `Mansheya Market Quarter Around the Memorial, ${SITE.cityEn}`,
  description: `The Mansheya market quarter: the busy commercial heart around the memorial square in Mansheya, ${SITE.cityEn}. Old shops, street life and cafés rather than a staged attraction. Practical tips for wandering.`,
  eyebrow: 'Markets · daily life',
  hero: {
    name: 'Mansheya market quarter',
    sub: 'The busy commercial heart right around the memorial square — old shops and everyday Alexandria street life.',
    lead: 'This is not a staged attraction but a working commercial district; go for the atmosphere and watch your belongings.',
    cta: 'Back to the visitor guide ↓'
  },
  facts: {
    title: 'Quick facts',
    items: [
      { k: 'Type', v: 'Markets · daily life' },
      { k: 'Location', v: 'Around the square — Mansheya' },
      { k: 'Character', v: 'Old shops, street life and cafés' },
      { k: 'Good for', v: 'Wandering and everyday shopping' },
      { k: 'Note', v: 'Not a staged visitor attraction' }
    ],
    note: 'Prices and hours are not verified; check on the ground and agree prices before buying.'
  },
  about: {
    eyebrow: 'Overview',
    title: 'About the Mansheya market quarter',
    paras: [
      'The Mansheya market quarter is the busy commercial heart around the memorial square in the Mansheya district of Alexandria.',
      'It reflects the city’s everyday life — old shops, vendors, cafés and constant movement — more than it resembles a staged attraction.',
      'It combines easily with a visit to the memorial, since it surrounds it.'
    ]
  },
  highlights: {
    eyebrow: 'What to see',
    title: 'In the market and the street',
    intro: 'A real urban experience; respect the privacy of residents and workers.',
    items: [
      { title: 'Daily life', text: 'Shopping, vendors and cafés; everyday Alexandria rather than a tourist display.' },
      { title: 'The shops', text: 'Varied, old-established stores; wander and look without any obligation to buy.' },
      { title: 'The cafés', text: 'Neighbourhood cafés where you can sit and watch the street.' },
      { title: 'The square', text: 'The memorial square at its heart; a good starting point for a wander.' }
    ]
  },
  visit: {
    eyebrow: 'Practical visit',
    title: 'Before you wander',
    intro: 'General tips for moving through a busy commercial district.',
    cards: [
      { title: 'Getting there', text: 'It surrounds the memorial square in Mansheya directly; no travel needed.' },
      { title: 'Timing', text: 'It grows busier in the evening and on holidays; pick a quieter time if you want to wander comfortably.' },
      { title: 'Safety', text: 'Keep valuables close and watch the traffic in the crowded streets.' },
      { title: 'Buying', text: 'Agree prices before buying at unmarked stalls, and keep cash for small purchases.' }
    ],
    note: 'Prices and hours are not verified here; check on the ground.'
  },
  relation: {
    eyebrow: 'From the memorial to here',
    title: 'Part of the memorial’s own setting',
    text: 'The market surrounds the Naval Unknown Soldier Memorial in Mansheya directly, so it is an urban extension of the visit. See the memorial guide and the nearby-attractions page to plan your outing.'
  },
  faq: [
    { q: 'What is the Mansheya market quarter?', a: 'A busy commercial district around the memorial square in Mansheya, reflecting the city’s everyday life.' },
    { q: 'Is it a tourist attraction?', a: 'It is not a staged attraction; its value is in the atmosphere, daily life and shopping.' },
    { q: 'Is it close to the memorial?', a: 'Yes, it surrounds it directly.' },
    { q: 'When is the best time to wander?', a: 'Quieter hours are easier for wandering; the evening and holidays are busier.' },
    { q: 'Are prices fixed?', a: 'Not every stall marks its prices; agree the price before buying and carry cash for small purchases.' }
  ]
};

const marketZh: SpotContent = {
  locale: 'zh',
  slug: 'mansheya-market',
  name: '曼希亚集市街区',
  title: `纪念碑周边的曼希亚集市街区 — 亚历山大`,
  description: `曼希亚集市街区：环绕亚历山大曼希亚纪念碑广场的热闹商业核心。老店铺、街头生活与咖啡馆，而非为游客打造的景点。提供实用漫游提示。`,
  eyebrow: '集市 · 市井',
  hero: {
    name: '曼希亚集市街区',
    sub: '紧邻纪念碑广场的热闹商业核心——老店铺与日常的亚历山大街头生活。',
    lead: '这里不是为游客打造的景点，而是真实的商业街区；为氛围而来，注意随身物品。',
    cta: '返回参观指南 ↓'
  },
  facts: {
    title: '快速概览',
    items: [
      { k: '类型', v: '集市 · 市井生活' },
      { k: '位置', v: '广场周边——曼希亚' },
      { k: '特点', v: '老店铺、街头生活与咖啡馆' },
      { k: '适合', v: '漫游与日常采购' },
      { k: '提示', v: '并非为游客打造的景点' }
    ],
    note: '价格与营业时间均未核实；请现场确认，购买前先议价。'
  },
  about: {
    eyebrow: '简介',
    title: '关于曼希亚集市街区',
    paras: [
      '曼希亚集市街区是环绕亚历山大曼希亚纪念碑广场的热闹商业核心。',
      '它反映的是城市的日常——老店铺、摊贩、咖啡馆与不间断的人流，而不是为游客打造的景点。',
      '由于它就环绕着纪念碑，很容易与参观纪念碑合并进行。'
    ]
  },
  highlights: {
    eyebrow: '看点',
    title: '集市与街头',
    intro: '真实的城市体验；请尊重居民与从业者的隐私。',
    items: [
      { title: '日常市井', text: '买卖、摊贩与咖啡馆；是日常的亚历山大，而非旅游表演。' },
      { title: '店铺', text: '各式老字号店铺；随意逛看，无需购买。' },
      { title: '咖啡馆', text: '社区咖啡馆，可坐下观看街头。' },
      { title: '广场', text: '纪念碑广场位于其中；是漫游的好起点。' }
    ]
  },
  visit: {
    eyebrow: '实用信息',
    title: '漫游之前',
    intro: '在繁忙商业街区行走的一般提示。',
    cards: [
      { title: '到达', text: '它直接环绕曼希亚的纪念碑广场，无需额外路程。' },
      { title: '时间', text: '傍晚与假日更为拥挤；若想从容漫游，请选择较清静的时段。' },
      { title: '安全', text: '请随身保管贵重物品，并注意拥挤街道上的车流。' },
      { title: '购物', text: '未标价的摊铺，请先议价再购买，并备些现金用于小额消费。' }
    ],
    note: '本文未核实价格与营业时间；请现场确认。'
  },
  relation: {
    eyebrow: '从纪念碑到这里',
    title: '属于纪念碑所在地本身',
    text: '集市直接环绕曼希亚的海军无名烈士纪念碑，是参观行程的城市延伸。请查看纪念碑指南与周边景点页面来规划你的行程。'
  },
  faq: [
    { q: '曼希亚集市街区是什么？', a: '环绕曼希亚纪念碑广场的热闹商业区，反映城市的日常生活。' },
    { q: '它是旅游景点吗？', a: '它不是为游客打造的景点；其价值在于氛围、日常生活与购物。' },
    { q: '离纪念碑近吗？', a: '是的，它直接环绕纪念碑。' },
    { q: '什么时候漫游最好？', a: '较清静的时段更适合漫游；傍晚与假日更为拥挤。' },
    { q: '价格是固定的吗？', a: '并非每个摊铺都标价；购买前请议价，并备些现金用于小额消费。' }
  ]
};

// ————————————————————————————————————————————————————————————
// التجميع
// ————————————————————————————————————————————————————————————

export const spots: Record<SpotSlug, Record<Locale, SpotContent>> = {
  'qaitbay-citadel': { ar: qaitbayAr, en: qaitbayEn, zh: qaitbayZh },
  'abu-al-abbas-al-mursi-mosque': { ar: abbasAr, en: abbasEn, zh: abbasZh },
  'bibliotheca-alexandrina': { ar: libraryAr, en: libraryEn, zh: libraryZh },
  'kom-el-dikka': { ar: komAr, en: komEn, zh: komZh },
  'pompeys-pillar': { ar: pillarAr, en: pillarEn, zh: pillarZh },
  'mansheya-market': { ar: marketAr, en: marketEn, zh: marketZh }
};
