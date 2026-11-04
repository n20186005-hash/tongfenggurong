// محتوى صفحات المعالم المستقلة (اثنا عشر معلماً) بثلاث لغات، منفصل عن الصفحة الرئيسية
// وعن صفحة «المعالم المجاورة». المحتوى يقتصر على حقائق عامة قابلة للتحقق؛
// أي معلومة متغيّرة (المواعيد، أسعار التذاكر، الجولات) تُذكر صريحاً كـ«غير مُتحقَّق منها».
import type { SpotContent, SpotExtras } from './types';
import type { Locale } from '../i18n';
import { SITE } from '../data/site';

export const SPOT_SLUGS = [
  'qaitbay-citadel',
  'abu-al-abbas-al-mursi-mosque',
  'bibliotheca-alexandrina',
  'kom-el-dikka',
  'pompeys-pillar',
  'mansheya-market',
  'catacombs-of-kom-el-shoqafa',
  'montaza-palace',
  'royal-jewelry-museum',
  'stanley-bridge',
  'alexandria-national-museum',
  'anfushi-tombs'
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
// 7) كتاكومب كوم الشقافة — Catacombs of Kom El Shoqafa
// ————————————————————————————————————————————————————————————

const shoqafaAr: SpotContent = {
  locale: 'ar',
  slug: 'catacombs-of-kom-el-shoqafa',
  name: 'كتاكومب كوم الشقافة',
  title: `كتاكومب كوم الشقافة في ${SITE.cityAr} — معلومات الزيارة والموقع`,
  description: `كتاكومب كوم الشقافة في ${SITE.cityAr}: مقبرة صخرية من العصر الروماني على ثلاثة مستويات تحت الأرض، اكتُشفت مصادفةً عام 1900. معلومات عن الموقع والطرز الفنية، مع التنبيه أن المواعيد وأسعار التذاكر غير مُتحقَّق منها.`,
  eyebrow: 'مقبرة أثرية · الإسكندرية',
  hero: {
    name: 'كتاكومب كوم الشقافة',
    sub: 'مقبرة صخرية رومانية على ثلاثة مستويات، تمزج الطراز المصري باليوناني والروماني.',
    lead: 'المواعيد وأسعار التذاكر تتغيّر بحسب الموسم، ولم نتحقق منها هنا؛ راجع المصادر الرسمية قبل الانطلاق.',
    cta: 'العودة إلى دليل الزيارة ↓'
  },
  facts: {
    title: 'لمحة سريعة',
    items: [
      { k: 'النوع', v: 'مقبرة صخرية · موقع أثري' },
      { k: 'الفترة', v: 'العصر الروماني (نحو القرن الثاني الميلادي)' },
      { k: 'الموقع', v: 'كوم الشقافة، غرب الإسكندرية' },
      { k: 'في الموقع', v: 'سلّم حلزوني · ثلاث طبقات · نقوش مختلطة الطراز' },
      { k: 'المواعيد والتذاكر', v: 'غير مُتحقَّق منها — راجع المصادر الرسمية' }
    ],
    note: 'هذه المعطيات للتعريف العام فقط؛ المواعيد والأسعار تتغيّر ولا نضمنها.'
  },
  about: {
    eyebrow: 'نبذة',
    title: 'عن كتاكومب كوم الشقافة',
    paras: [
      'كتاكومب كوم الشقافة مقبرة أثرية منحوتة في الصخر تحت الأرض، وتُعدّ من أكبر مواقع الدفن الرومانية في الإسكندرية، وتقع في منطقة كوم الشقافة غرب المدينة.',
      'اكتُشفت مصادفةً عام 1900 عندما سقطت دابة في فتحة عمودية أدّت إلى المقبرة. وتمتد المقبرة على ثلاثة مستويات تحت الأرض حتى عمق يقارب 35 متراً.',
      'أبرز ما يميّزها أنها تجمع بين الطراز المصري القديم والطراز اليوناني الروماني في النقوش والعمارة، وهو ما يعكس تنوّع الإسكندرية الثقافي في العصر الروماني.'
    ]
  },
  highlights: {
    eyebrow: 'أبرز ما تراه',
    title: 'داخل المقبرة',
    intro: 'هذه إشارات عامة لما توقّعه، وليست جدولاً سياحياً منظّماً.',
    items: [
      { title: 'السلّم الحلزوني', text: 'سلّم دائري ينزل بالمقبرة عبر الطبقات، ويربط المستويات الثلاثة داخل الموقع.' },
      { title: 'النقوش المختلطة', text: 'نقوش ومنحوتات تدمج رموزاً مصرية قديمة مع عناصر يونانية ورومانية.' },
      { title: 'المدخل والردهة', text: 'مدخل بممرّ يؤدي إلى ردهة الدفن الرئيسية؛ المكان مضاء صناعياً.' }
    ]
  },
  visit: {
    eyebrow: 'الزيارة عملياً',
    title: 'قبل أن تذهب',
    intro: 'هذه ملاحظات للتخطيط، وليست تعليمات رسمية.',
    cards: [
      { title: 'الوصول', text: 'تقع المقبرة في كوم الشقافة غرب الإسكندرية. المسافة من النصب التذكاري غير مُتحقَّق منها؛ استخدم سيارة أجرة أو راجع خيارات النقل.' },
      { title: 'التوقيت', text: 'الموقع مفتوح عادةً في النهار فقط. المواعيد تتغيّر بحسب الموسم؛ افحص الجدول الرسمي.' },
      { title: 'المناخ المحلي', text: 'التجويفات تحت الأرض أكثر برودة ورطوبة من الخارج؛ احمل حذاءً مريحاً.' },
      { title: 'الدخول', text: 'قد تُطلب تذكرة للدخول. لم نتحقق من الأسعار؛ راجع المصادر الرسمية.' }
    ],
    note: 'لم نتحقق من المواعيد أو الأسعار؛ راجع المصادر الرسمية قبل الانطلاق.'
  },
  relation: {
    eyebrow: 'من النصب إلى هنا',
    title: 'ضمن جولة أوسع',
    text: 'هذا المعلم إحدى محطات جولة أوسع تبدأ من النصب التذكاري للجندي المجهول في المنشية. راجع صفحة المعالم المجاورة لتخطيط أكثر من محطة، مع التنبيه أن المسافات والمواعيد هناك غير مُتحقَّق منها.'
  },
  faq: [
    { q: 'أين تقع كتاكومب كوم الشقافة؟', a: 'في منطقة كوم الشقافة غرب الإسكندرية.' },
    { q: 'متى اكتُشفت المقبرة؟', a: 'مصادفةً عام 1900، عندما سقطت دابة في فتحة عمودية أدّت إليها.' },
    { q: 'ما أهم ما يميّزها؟', a: 'أنها تجمع بين الطراز المصري القديم والطراز اليوناني الروماني في النقوش والعمارة.' },
    { q: 'ما مواعيد العمل وأسعار التذاكر؟', a: 'غير مُتحقَّق منها هنا؛ تتغيّر بحسب الموسم. راجع المصادر الرسمية قبل الانطلاق.' },
    { q: 'كم تبعد عن النصب التذكاري؟', a: 'المسافة غير مُتحقَّق منها؛ المقبرة غرب الإسكندرية والنصب في المنشية. راجع الطريق ووسيلة النقل.' }
  ]
};

const shoqafaEn: SpotContent = {
  locale: 'en',
  slug: 'catacombs-of-kom-el-shoqafa',
  name: 'Catacombs of Kom El Shoqafa',
  title: `Catacombs of Kom El Shoqafa, ${SITE.cityEn} — Visit Info & Location`,
  description: `The Catacombs of Kom El Shoqafa in ${SITE.cityEn}: a Roman-era rock-cut necropolis on three underground levels, discovered by accident in 1900. Location and art-style notes, with hours and tickets flagged as unverified.`,
  eyebrow: 'Necropolis · Alexandria',
  hero: {
    name: 'Catacombs of Kom El Shoqafa',
    sub: 'A Roman rock-cut necropolis on three underground levels, blending Egyptian, Greek and Roman styles.',
    lead: 'Opening hours and ticket prices change with the season and are not verified here; check official sources before you travel.',
    cta: 'Back to the visitor guide ↓'
  },
  facts: {
    title: 'Quick facts',
    items: [
      { k: 'Type', v: 'Rock-cut necropolis · archaeological site' },
      { k: 'Period', v: 'Roman era (around the 2nd century AD)' },
      { k: 'Location', v: 'Kom El Shoqafa, western Alexandria' },
      { k: 'On site', v: 'Spiral staircase · three levels · mixed-style carvings' },
      { k: 'Hours & tickets', v: 'Not verified — check official sources' }
    ],
    note: 'These details are for general orientation only; hours and prices change and are not guaranteed.'
  },
  about: {
    eyebrow: 'Overview',
    title: 'About the Catacombs of Kom El Shoqafa',
    paras: [
      'The Catacombs of Kom El Shoqafa are a rock-cut underground burial complex, among the largest Roman burial sites in Alexandria, located in the Kom El Shoqafa area of the western city.',
      'They were discovered by accident in 1900, when an animal fell through a vertical shaft that led into the tomb. The complex extends across three underground levels to a depth of roughly 35 metres.',
      'What makes them distinctive is the fusion of ancient Egyptian art with Greek and Roman styles in the carvings and architecture, a reflection of Alexandria’s mixed culture in the Roman period.'
    ]
  },
  highlights: {
    eyebrow: 'What to see',
    title: 'Inside the necropolis',
    intro: 'These are general pointers, not a staged itinerary.',
    items: [
      { title: 'The spiral staircase', text: 'A circular staircase descends through the levels, linking the three tiers inside the site.' },
      { title: 'Mixed-style carvings', text: 'Carvings and reliefs that combine ancient Egyptian symbols with Greek and Roman elements.' },
      { title: 'Entrance and rotunda', text: 'An entrance passage leads to the main burial rotunda; the space is artificially lit.' }
    ]
  },
  visit: {
    eyebrow: 'Practical visit',
    title: 'Before you go',
    intro: 'These are planning notes, not official instructions.',
    cards: [
      { title: 'Getting there', text: 'The necropolis is in Kom El Shoqafa, in western Alexandria. The distance from the memorial is not verified here; use a taxi or check your transport options.' },
      { title: 'Timing', text: 'The site is usually open in daylight hours. Hours vary with the season; check the official schedule.' },
      { title: 'Weather', text: 'The underground chambers are cooler and more humid than outside; wear comfortable shoes.' },
      { title: 'Entry', text: 'A ticket may be required for entry. No prices are verified here; check official sources.' }
    ],
    note: 'Hours and prices are not verified here; check official sources before you travel.'
  },
  relation: {
    eyebrow: 'From the memorial to here',
    title: 'Part of a wider walk',
    text: 'This is one stop in a wider outing that starts from the Naval Unknown Soldier Memorial in Mansheya. See the nearby-attractions guide to plan more than one stop, noting that distances and hours there are not verified.'
  },
  faq: [
    { q: 'Where are the Catacombs of Kom El Shoqafa?', a: 'In the Kom El Shoqafa area of western Alexandria.' },
    { q: 'When were they discovered?', a: 'By accident in 1900, when an animal fell through a vertical shaft that led into the tomb.' },
    { q: 'What makes them distinctive?', a: 'They fuse ancient Egyptian art with Greek and Roman styles in the carvings and architecture.' },
    { q: 'What are the opening hours and ticket prices?', a: 'Not verified here; they change with the season. Check official sources before you travel.' },
    { q: 'How far is it from the memorial?', a: 'The distance is not verified here; the necropolis is in western Alexandria and the memorial is in Mansheya. Check the route and transport.' }
  ]
};

const shoqafaZh: SpotContent = {
  locale: 'zh',
  slug: 'catacombs-of-kom-el-shoqafa',
  name: '科姆·舒卡法地下墓穴',
  title: `亚历山大科姆·舒卡法地下墓穴 — 参观信息与位置指南`,
  description: `亚历山大科姆·舒卡法地下墓穴：三层地下的罗马时期岩凿墓葬群，1900 年偶然发现。提供位置与艺术风格信息，开放时间与门票均标注为未核实。`,
  eyebrow: '地下墓穴 · 亚历山大',
  hero: {
    name: '科姆·舒卡法地下墓穴',
    sub: '三层地下岩凿墓葬群，融合埃及、希腊与罗马风格。',
    lead: '开放时间与门票随季节变化，本文未核实；出行前请查阅官方来源。',
    cta: '返回参观指南 ↓'
  },
  facts: {
    title: '快速概览',
    items: [
      { k: '类型', v: '岩凿墓穴 · 考古遗址' },
      { k: '时期', v: '罗马时期（约公元 2 世纪）' },
      { k: '位置', v: '亚历山大西部科姆·舒卡法' },
      { k: '现场', v: '螺旋楼梯 · 三层结构 · 混合风格雕刻' },
      { k: '时间与门票', v: '未核实——请查阅官方来源' }
    ],
    note: '以上信息仅供概览；开放时间与价格会变动，无法保证。'
  },
  about: {
    eyebrow: '简介',
    title: '关于科姆·舒卡法地下墓穴',
    paras: [
      '科姆·舒卡法地下墓穴是一座岩凿地下墓葬群，是亚历山大规模最大的罗马时期墓葬之一，位于城市西部的科姆·舒卡法区。',
      '它于 1900 年被偶然发现——当时一头牲口坠入通往墓穴的竖井。墓葬群在地下延伸三层，深度约 35 米。',
      '其独特之处在于雕刻与建筑中融合了古埃及艺术与希腊、罗马风格，反映出罗马时期亚历山大多元交融的文化。'
    ]
  },
  highlights: {
    eyebrow: '看点',
    title: '墓穴内部看点',
    intro: '以下为一般性提示，并非固定游览路线。',
    items: [
      { title: '螺旋楼梯', text: '一座环形楼梯贯穿各层，连接遗址内部的三层结构。' },
      { title: '混合风格雕刻', text: '雕刻与浮雕融合了古埃及符号与希腊、罗马元素。' },
      { title: '入口与圆厅', text: '入口通道通向主墓室圆厅；内部为人工照明。' }
    ]
  },
  visit: {
    eyebrow: '实用信息',
    title: '出行之前',
    intro: '以下为规划提示，并非官方说明。',
    cards: [
      { title: '到达', text: '墓穴位于亚历山大西部的科姆·舒卡法。与纪念碑的距离本文未核实；请乘出租车或核对交通方式。' },
      { title: '时间', text: '遗址通常在白天开放。开放时间随季节变动，请查阅官方时间表。' },
      { title: '天气', text: '地下空间比室外更凉爽潮湿，请穿舒适的鞋子。' },
      { title: '入场', text: '入场可能需要门票。本文未核实价格，请查阅官方来源。' }
    ],
    note: '本文未核实开放时间与价格；出行前请查阅官方来源。'
  },
  relation: {
    eyebrow: '从纪念碑到这里',
    title: '更广行程的一部分',
    text: '这是以曼希亚海军无名烈士纪念碑为起点的更广行程中的一站。请查看周边景点指南来规划多站行程——注意其中的距离与时间均未核实。'
  },
  faq: [
    { q: '科姆·舒卡法地下墓穴在哪里？', a: '位于亚历山大西部的科姆·舒卡法区。' },
    { q: '墓穴何时被发现？', a: '1900 年被偶然发现——当时一头牲口坠入通往墓穴的竖井。' },
    { q: '它最大的特点是什么？', a: '在雕刻与建筑中融合了古埃及艺术与希腊、罗马风格。' },
    { q: '开放时间与门票是多少？', a: '本文未核实；随季节变动。出行前请查阅官方来源。' },
    { q: '离纪念碑有多远？', a: '本文未核实；墓穴在亚历山大西部，纪念碑在曼希亚。请核对路线与交通。' }
  ]
};

// ————————————————————————————————————————————————————————————
// 8) قصر المنتزه — Montaza Palace
// ————————————————————————————————————————————————————————————

const montazaAr: SpotContent = {
  locale: 'ar',
  slug: 'montaza-palace',
  name: 'قصر المنتزه',
  title: `قصر المنتزه في ${SITE.cityAr} — الحدائق والموقع`,
  description: `قصر المنتزه في ${SITE.cityAr}: مجمّع من القصور الملكية والحدائق على ساحل البحر المتوسط شرق المدينة، تعود جذوره إلى أواخر القرن التاسع عشر. معلومات عن الموقع والحدائق، مع التنبيه أن المواعيد وأسعار التذاكر غير مُتحقَّق منها.`,
  eyebrow: 'قصر · الإسكندرية',
  hero: {
    name: 'قصر المنتزه',
    sub: 'مجمّع قصور وحدائق ملكية على ساحل البحر المتوسط شرق الإسكندرية.',
    lead: 'المواعيد وأسعار التذاكر تتغيّر بحسب الموسم، ولم نتحقق منها هنا؛ راجع المصادر الرسمية قبل الانطلاق.',
    cta: 'العودة إلى دليل الزيارة ↓'
  },
  facts: {
    title: 'لمحة سريعة',
    items: [
      { k: 'النوع', v: 'قصر ملكي · حدائق' },
      { k: 'الفترة', v: 'أواخر القرن التاسع عشر وبداية القرن العشرين' },
      { k: 'الموقع', v: 'المنتزه، شرق الإسكندرية' },
      { k: 'في الموقع', v: 'حدائق واسعة · إطلالات على البحر · قصر السلاملك · قصر الحرملك' },
      { k: 'المواعيد والتذاكر', v: 'غير مُتحقَّق منها — راجع المصادر الرسمية' }
    ],
    note: 'هذه المعطيات للتعريف العام فقط؛ المواعيد والأسعار تتغيّر ولا نضمنها.'
  },
  about: {
    eyebrow: 'نبذة',
    title: 'عن قصر المنتزه',
    paras: [
      'قصر المنتزه مجمّع من القصور الملكية والحدائق المطلة على البحر المتوسط في منطقة المنتزه شرق الإسكندرية، وقد كان مصيفاً للأسرة العلوية.',
      'تعود جذور المجمّع إلى عام 1892 في عهد الخديوي عباس حلمي الثاني، حين شُيّد قصر السلاملك ليُستخدم مصيفاً صيفياً.',
      'ثم بُني قصر الحرملك في الفترة بين 1925 و1929 في عهد الملك فؤاد الأول، ويُعرف القصر بهندسته ذات الطابع الإيطالي وحدائقه الواسعة.'
    ]
  },
  highlights: {
    eyebrow: 'أبرز ما تراه',
    title: 'القصور والحدائق',
    intro: 'هذه إشارات عامة لما توقّعه، وليست جدولاً سياحياً منظّماً.',
    items: [
      { title: 'الحدائق الملكية', text: 'حدائق واسعة بأشجار وممرات مطلة على البحر، مناسبة للمشي والتصوير.' },
      { title: 'قصر الحرملك', text: 'أكبر قصور المجمّع، بهندسة ذات طابع إيطالي وإطلالة على الساحل.' },
      { title: 'إطلالات الساحل', text: 'واجهة بحرية طويلة تتيح مناظر مفتوحة على البحر المتوسط.' }
    ]
  },
  visit: {
    eyebrow: 'الزيارة عملياً',
    title: 'قبل أن تذهب',
    intro: 'هذه ملاحظات للتخطيط، وليست تعليمات رسمية.',
    cards: [
      { title: 'الوصول', text: 'يقع المنتزه شرق الإسكندرية. المسافة من النصب التذكاري غير مُتحقَّق منها؛ استخدم سيارة أجرة أو راجع خيارات النقل.' },
      { title: 'التوقيت', text: 'الصباح أو بعد العصر أنسب للتنزّه. المواعيد تتغيّر بحسب الموسم؛ افحص الجدول الرسمي.' },
      { title: 'المناخ المحلي', text: 'الحدائق مكشوفة للشمس؛ احمل ماءً ووقاية من الشمس.' },
      { title: 'الدخول', text: 'قد تُطلب رسوم لدخول بعض الحدائق أو القاعات. لم نتحقق من الأسعار؛ راجع المصادر الرسمية.' }
    ],
    note: 'لم نتحقق من المواعيد أو الأسعار؛ راجع المصادر الرسمية قبل الانطلاق.'
  },
  relation: {
    eyebrow: 'من النصب إلى هنا',
    title: 'ضمن جولة أوسع',
    text: 'هذا المعلم إحدى محطات جولة أوسع تبدأ من النصب التذكاري للجندي المجهول في المنشية. راجع صفحة المعالم المجاورة لتخطيط أكثر من محطة، مع التنبيه أن المسافات والمواعيد هناك غير مُتحقَّق منها.'
  },
  faq: [
    { q: 'أين يقع قصر المنتزه؟', a: 'في منطقة المنتزه شرق الإسكندرية، على ساحل البحر المتوسط.' },
    { q: 'متى تعود جذور المجمّع؟', a: 'إلى عام 1892 في عهد الخديوي عباس حلمي الثاني، حين شُيّد قصر السلاملك مصيفاً صيفياً.' },
    { q: 'ما القصور الموجودة فيه؟', a: 'يضم المجمّع قصر السلاملك وقصر الحرملك وغيرهما، إلى جانب حدائق واسعة.' },
    { q: 'ما مواعيد العمل وأسعار التذاكر؟', a: 'غير مُتحقَّق منها هنا؛ تتغيّر بحسب الموسم. راجع المصادر الرسمية قبل الانطلاق.' },
    { q: 'كم تبعد عن النصب التذكاري؟', a: 'المسافة غير مُتحقَّق منها؛ المنتزه شرق الإسكندرية والنصب في المنشية. راجع الطريق ووسيلة النقل.' }
  ]
};

const montazaEn: SpotContent = {
  locale: 'en',
  slug: 'montaza-palace',
  name: 'Montaza Palace',
  title: `Montaza Palace, ${SITE.cityEn} — Gardens & Location`,
  description: `Montaza Palace in ${SITE.cityEn}: a complex of royal palaces and gardens on the Mediterranean coast east of the city, with roots reaching back to the late 19th century. Location and garden notes, with hours and tickets flagged as unverified.`,
  eyebrow: 'Palace · Alexandria',
  hero: {
    name: 'Montaza Palace',
    sub: 'A complex of royal palaces and gardens on the Mediterranean coast east of Alexandria.',
    lead: 'Opening hours and ticket prices change with the season and are not verified here; check official sources before you travel.',
    cta: 'Back to the visitor guide ↓'
  },
  facts: {
    title: 'Quick facts',
    items: [
      { k: 'Type', v: 'Royal palace · gardens' },
      { k: 'Period', v: 'Late 19th to early 20th century' },
      { k: 'Location', v: 'Montaza, eastern Alexandria' },
      { k: 'On site', v: 'Extensive gardens · sea views · Salamlek Palace · Haramlek Palace' },
      { k: 'Hours & tickets', v: 'Not verified — check official sources' }
    ],
    note: 'These details are for general orientation only; hours and prices change and are not guaranteed.'
  },
  about: {
    eyebrow: 'Overview',
    title: 'About Montaza Palace',
    paras: [
      'Montaza Palace is a complex of royal palaces and gardens overlooking the Mediterranean in the Montaza district of eastern Alexandria, once a summer retreat for the Muhammad Ali dynasty.',
      'Its roots reach back to 1892 under Khedive Abbas Hilmi II, when the Salamlek Palace was built to serve as a summer residence.',
      'The Haramlek Palace followed between 1925 and 1929 under King Fuad I, and the complex is known for its Italianate architecture and its extensive gardens.'
    ]
  },
  highlights: {
    eyebrow: 'What to see',
    title: 'Palaces and gardens',
    intro: 'These are general pointers, not a staged itinerary.',
    items: [
      { title: 'Royal gardens', text: 'Extensive gardens with trees and walkways facing the sea, suited to walking and photography.' },
      { title: 'Haramlek Palace', text: 'The largest palace in the complex, with Italianate architecture and views toward the coast.' },
      { title: 'Coastal views', text: 'A long seafront that opens wide views over the Mediterranean.' }
    ]
  },
  visit: {
    eyebrow: 'Practical visit',
    title: 'Before you go',
    intro: 'These are planning notes, not official instructions.',
    cards: [
      { title: 'Getting there', text: 'Montaza lies east of Alexandria. The distance from the memorial is not verified here; use a taxi or check your transport options.' },
      { title: 'Timing', text: 'Morning or late afternoon suits a walk. Hours vary with the season; check the official schedule.' },
      { title: 'Weather', text: 'The gardens are exposed to the sun; carry water and sun protection.' },
      { title: 'Entry', text: 'A fee may apply for some gardens or halls. No prices are verified here; check official sources.' }
    ],
    note: 'Hours and prices are not verified here; check official sources before you travel.'
  },
  relation: {
    eyebrow: 'From the memorial to here',
    title: 'Part of a wider walk',
    text: 'This is one stop in a wider outing that starts from the Naval Unknown Soldier Memorial in Mansheya. See the nearby-attractions guide to plan more than one stop, noting that distances and hours there are not verified.'
  },
  faq: [
    { q: 'Where is Montaza Palace?', a: 'In the Montaza district of eastern Alexandria, on the Mediterranean coast.' },
    { q: 'How far back do its roots go?', a: 'To 1892 under Khedive Abbas Hilmi II, when the Salamlek Palace was built as a summer residence.' },
    { q: 'Which palaces does it include?', a: 'The complex includes the Salamlek and Haramlek palaces, among others, alongside extensive gardens.' },
    { q: 'What are the opening hours and ticket prices?', a: 'Not verified here; they change with the season. Check official sources before you travel.' },
    { q: 'How far is it from the memorial?', a: 'The distance is not verified here; Montaza is east of Alexandria and the memorial is in Mansheya. Check the route and transport.' }
  ]
};

const montazaZh: SpotContent = {
  locale: 'zh',
  slug: 'montaza-palace',
  name: '蒙塔扎宫',
  title: `亚历山大蒙塔扎宫 — 花园与位置指南`,
  description: `亚历山大蒙塔扎宫：位于城东地中海沿岸的皇家宫殿与花园建筑群，历史可追溯至 19 世纪末。提供位置与花园信息，开放时间与门票均标注为未核实。`,
  eyebrow: '宫殿 · 亚历山大',
  hero: {
    name: '蒙塔扎宫',
    sub: '位于亚历山大城东地中海沿岸的皇家宫殿与花园建筑群。',
    lead: '开放时间与门票随季节变化，本文未核实；出行前请查阅官方来源。',
    cta: '返回参观指南 ↓'
  },
  facts: {
    title: '快速概览',
    items: [
      { k: '类型', v: '皇家宫殿 · 花园' },
      { k: '时期', v: '19 世纪末至 20 世纪初' },
      { k: '位置', v: '亚历山大东部蒙塔扎' },
      { k: '现场', v: '大片花园 · 海景 · 萨拉姆莱克宫 · 哈拉姆莱克宫' },
      { k: '时间与门票', v: '未核实——请查阅官方来源' }
    ],
    note: '以上信息仅供概览；开放时间与价格会变动，无法保证。'
  },
  about: {
    eyebrow: '简介',
    title: '关于蒙塔扎宫',
    paras: [
      '蒙塔扎宫是一组俯瞰地中海的皇家宫殿与花园建筑群，位于亚历山大东部的蒙塔扎区，曾是穆罕默德·阿里王朝的夏季行宫。',
      '其历史可追溯至 1892 年，当时在赫迪夫阿巴斯·希勒米二世时期建造了萨拉姆莱克宫，用作夏季居所。',
      '随后在 1925 至 1929 年间、福阿德一世国王时期建成了哈拉姆莱克宫。整个建筑群以意大利式建筑和大片花园著称。'
    ]
  },
  highlights: {
    eyebrow: '看点',
    title: '宫殿与花园',
    intro: '以下为一般性提示，并非固定游览路线。',
    items: [
      { title: '皇家花园', text: '树木与步道构成的大片花园临海而建，适合散步与拍照。' },
      { title: '哈拉姆莱克宫', text: '建筑群中最大的宫殿，具有意大利式建筑风格，可眺望海岸。' },
      { title: '海岸景观', text: '漫长的海滨线带来开阔的地中海视野。' }
    ]
  },
  visit: {
    eyebrow: '实用信息',
    title: '出行之前',
    intro: '以下为规划提示，并非官方说明。',
    cards: [
      { title: '到达', text: '蒙塔扎位于亚历山大东部。与纪念碑的距离本文未核实；请乘出租车或核对交通方式。' },
      { title: '时间', text: '清晨或傍晚适合散步。开放时间随季节变动，请查阅官方时间表。' },
      { title: '天气', text: '花园暴露在阳光下，请带水并做好防晒。' },
      { title: '入场', text: '部分花园或厅室可能收取费用。本文未核实价格，请查阅官方来源。' }
    ],
    note: '本文未核实开放时间与价格；出行前请查阅官方来源。'
  },
  relation: {
    eyebrow: '从纪念碑到这里',
    title: '更广行程的一部分',
    text: '这是以曼希亚海军无名烈士纪念碑为起点的更广行程中的一站。请查看周边景点指南来规划多站行程——注意其中的距离与时间均未核实。'
  },
  faq: [
    { q: '蒙塔扎宫在哪里？', a: '位于亚历山大东部的蒙塔扎区，濒临地中海。' },
    { q: '它的历史可追溯到何时？', a: '可追溯至 1892 年赫迪夫阿巴斯·希勒米二世时期，当时建造了萨拉姆莱克宫作为夏季居所。' },
    { q: '它包含哪些宫殿？', a: '建筑群包括萨拉姆莱克宫与哈拉姆莱克宫等，并配有大片花园。' },
    { q: '开放时间与门票是多少？', a: '本文未核实；随季节变动。出行前请查阅官方来源。' },
    { q: '离纪念碑有多远？', a: '本文未核实；蒙塔扎在亚历山大东部，纪念碑在曼希亚。请核对路线与交通。' }
  ]
};

// ————————————————————————————————————————————————————————————
// 9) متحف المجوهرات الملكية — Royal Jewelry Museum
// ————————————————————————————————————————————————————————————

const jewelryAr: SpotContent = {
  locale: 'ar',
  slug: 'royal-jewelry-museum',
  name: 'متحف المجوهرات الملكية',
  title: `متحف المجوهرات الملكية في ${SITE.cityAr} — الموقع والمقتنيات`,
  description: `متحف المجوهرات الملكية في ${SITE.cityAr}: قصر تاريخي يضم مجموعة من مجوهرات وحلي أسرة محمد علي في حيّ زيازينيا. معلومات عن الموقع والمقتنيات، مع التنبيه أن المواعيد وأسعار التذاكر غير مُتحقَّق منها.`,
  eyebrow: 'متحف · الإسكندرية',
  hero: {
    name: 'متحف المجوهرات الملكية',
    sub: 'قصر تاريخي يضم مجموعة من مجوهرات أسرة محمد علي في حيّ زيازينيا.',
    lead: 'المواعيد وأسعار التذاكر تتغيّر بحسب الموسم، ولم نتحقق منها هنا؛ راجع المصادر الرسمية قبل الانطلاق.',
    cta: 'العودة إلى دليل الزيارة ↓'
  },
  facts: {
    title: 'لمحة سريعة',
    items: [
      { k: 'النوع', v: 'متحف · قصر تاريخي' },
      { k: 'الفترة', v: 'القصر يعود إلى العشرينيات؛ افتُتح متحفاً عام 1986' },
      { k: 'الموقع', v: 'زيازينيا، شرق الإسكندرية' },
      { k: 'في الموقع', v: 'قاعات مزخرفة · مقتنيات ملكية · حدائق محيطة' },
      { k: 'المواعيد والتذاكر', v: 'غير مُتحقَّق منها — راجع المصادر الرسمية' }
    ],
    note: 'هذه المعطيات للتعريف العام فقط؛ المواعيد والأسعار تتغيّر ولا نضمنها.'
  },
  about: {
    eyebrow: 'نبذة',
    title: 'عن متحف المجوهرات الملكية',
    paras: [
      'متحف المجوهرات الملكية متحف يقع داخل قصر تاريخي في منطقة زيازينيا شرق الإسكندرية، ويعرض مجموعة من المجوهرات والحلي التي تعود إلى أسرة محمد علي.',
      'بدأ بناء القصر عام 1919 بأمر من السيدة زينب فهمي، ثم أكملته ابنتها الأميرة فاطمة الزهراء عام 1923.',
      'وفي عام 1986 تحوّل القصر إلى متحف يضم آلاف القطع من المجوهرات والحلي الملكية، ويُعرف بزخارفه الداخلية وقاعاته المتنوعة.'
    ]
  },
  highlights: {
    eyebrow: 'أبرز ما تراه',
    title: 'داخل المتحف',
    intro: 'هذه إشارات عامة لما توقّعه، وليست جدولاً سياحياً منظّماً.',
    items: [
      { title: 'قاعات القصر', text: 'قاعات مزخرفة بأسقف ونقوش فنية تُعرض فيها المقتنيات.' },
      { title: 'المقتنيات الملكية', text: 'مجموعة من المجوهرات والحلي التي تعود إلى العائلة المالكة.' },
      { title: 'الحدائق والواجهة', text: 'حدائق محيطة بالمبنى تتيح المشي والتصوير.' }
    ]
  },
  visit: {
    eyebrow: 'الزيارة عملياً',
    title: 'قبل أن تذهب',
    intro: 'هذه ملاحظات للتخطيط، وليست تعليمات رسمية.',
    cards: [
      { title: 'الوصول', text: 'يقع المتحف في زيازينيا شرق الإسكندرية. المسافة من النصب التذكاري غير مُتحقَّق منها؛ استخدم سيارة أجرة أو راجع خيارات النقل.' },
      { title: 'التوقيت', text: 'ساعات النهار أنسب للزيارة. المواعيد تتغيّر بحسب الموسم؛ افحص الجدول الرسمي.' },
      { title: 'المناخ المحلي', text: 'القاعات داخل المبنى؛ قد تختلف درجة الحرارة عن الخارج.' },
      { title: 'الدخول', text: 'قد تُطلب تذكرة للدخول. لم نتحقق من الأسعار؛ راجع المصادر الرسمية.' }
    ],
    note: 'لم نتحقق من المواعيد أو الأسعار؛ راجع المصادر الرسمية قبل الانطلاق.'
  },
  relation: {
    eyebrow: 'من النصب إلى هنا',
    title: 'ضمن جولة أوسع',
    text: 'هذا المعلم إحدى محطات جولة أوسع تبدأ من النصب التذكاري للجندي المجهول في المنشية. راجع صفحة المعالم المجاورة لتخطيط أكثر من محطة، مع التنبيه أن المسافات والمواعيد هناك غير مُتحقَّق منها.'
  },
  faq: [
    { q: 'أين يقع متحف المجوهرات الملكية؟', a: 'في منطقة زيازينيا شرق الإسكندرية.' },
    { q: 'ماذا يعرض المتحف؟', a: 'مجموعة من المجوهرات والحلي التي تعود إلى أسرة محمد علي.' },
    { q: 'متى تحوّل القصر إلى متحف؟', a: 'تحوّل إلى متحف عام 1986، بعد أن شُيّد القصر في العشرينيات.' },
    { q: 'ما مواعيد العمل وأسعار التذاكر؟', a: 'غير مُتحقَّق منها هنا؛ تتغيّر بحسب الموسم. راجع المصادر الرسمية قبل الانطلاق.' },
    { q: 'كم يبعد عن النصب التذكاري؟', a: 'المسافة غير مُتحقَّق منها؛ المتحف شرق الإسكندرية والنصب في المنشية. راجع الطريق ووسيلة النقل.' }
  ]
};

const jewelryEn: SpotContent = {
  locale: 'en',
  slug: 'royal-jewelry-museum',
  name: 'Royal Jewelry Museum',
  title: `Royal Jewelry Museum, ${SITE.cityEn} — Location & Collection`,
  description: `The Royal Jewelry Museum in ${SITE.cityEn}: a historic palace housing a collection of jewelry from the Muhammad Ali dynasty in the Zizinia district. Location and collection notes, with hours and tickets flagged as unverified.`,
  eyebrow: 'Museum · Alexandria',
  hero: {
    name: 'Royal Jewelry Museum',
    sub: 'A historic palace housing a collection of Muhammad Ali dynasty jewelry in the Zizinia district.',
    lead: 'Opening hours and ticket prices change with the season and are not verified here; check official sources before you travel.',
    cta: 'Back to the visitor guide ↓'
  },
  facts: {
    title: 'Quick facts',
    items: [
      { k: 'Type', v: 'Museum · historic palace' },
      { k: 'Period', v: 'Palace from the 1920s; opened as a museum in 1986' },
      { k: 'Location', v: 'Zizinia, eastern Alexandria' },
      { k: 'On site', v: 'Decorated halls · royal pieces · surrounding gardens' },
      { k: 'Hours & tickets', v: 'Not verified — check official sources' }
    ],
    note: 'These details are for general orientation only; hours and prices change and are not guaranteed.'
  },
  about: {
    eyebrow: 'Overview',
    title: 'About the Royal Jewelry Museum',
    paras: [
      'The Royal Jewelry Museum is housed in a historic palace in the Zizinia area of eastern Alexandria, displaying a collection of jewelry and ornaments from the Muhammad Ali dynasty.',
      'Construction of the palace began in 1919 for Zeinab Fahmy, and it was completed by her daughter Princess Fatma Al-Zahra in 1923.',
      'In 1986 the palace was converted into a museum holding thousands of pieces of royal jewelry and ornaments, known for its decorated interiors and varied halls.'
    ]
  },
  highlights: {
    eyebrow: 'What to see',
    title: 'Inside the museum',
    intro: 'These are general pointers, not a staged itinerary.',
    items: [
      { title: 'The palace halls', text: 'Decorated halls with painted ceilings and ornamentation where the collection is displayed.' },
      { title: 'Royal pieces', text: 'A collection of jewelry and ornaments that belonged to the royal family.' },
      { title: 'Gardens and facade', text: 'Gardens around the building offer space for walking and photography.' }
    ]
  },
  visit: {
    eyebrow: 'Practical visit',
    title: 'Before you go',
    intro: 'These are planning notes, not official instructions.',
    cards: [
      { title: 'Getting there', text: 'The museum is in Zizinia, in eastern Alexandria. The distance from the memorial is not verified here; use a taxi or check your transport options.' },
      { title: 'Timing', text: 'Daytime hours suit a visit. Hours vary with the season; check the official schedule.' },
      { title: 'Weather', text: 'The halls are indoors; temperatures may differ from outside.' },
      { title: 'Entry', text: 'A ticket may be required for entry. No prices are verified here; check official sources.' }
    ],
    note: 'Hours and prices are not verified here; check official sources before you travel.'
  },
  relation: {
    eyebrow: 'From the memorial to here',
    title: 'Part of a wider walk',
    text: 'This is one stop in a wider outing that starts from the Naval Unknown Soldier Memorial in Mansheya. See the nearby-attractions guide to plan more than one stop, noting that distances and hours there are not verified.'
  },
  faq: [
    { q: 'Where is the Royal Jewelry Museum?', a: 'In the Zizinia area of eastern Alexandria.' },
    { q: 'What does the museum display?', a: 'A collection of jewelry and ornaments from the Muhammad Ali dynasty.' },
    { q: 'When did the palace become a museum?', a: 'It was converted into a museum in 1986, after the palace was built in the 1920s.' },
    { q: 'What are the opening hours and ticket prices?', a: 'Not verified here; they change with the season. Check official sources before you travel.' },
    { q: 'How far is it from the memorial?', a: 'The distance is not verified here; the museum is in eastern Alexandria and the memorial is in Mansheya. Check the route and transport.' }
  ]
};

const jewelryZh: SpotContent = {
  locale: 'zh',
  slug: 'royal-jewelry-museum',
  name: '皇家珠宝博物馆',
  title: `亚历山大皇家珠宝博物馆 — 位置与藏品指南`,
  description: `亚历山大皇家珠宝博物馆：坐落于齐齐尼亚区一座历史宫殿内，展出穆罕默德·阿里王朝的珠宝首饰收藏。提供位置与藏品信息，开放时间与门票均标注为未核实。`,
  eyebrow: '博物馆 · 亚历山大',
  hero: {
    name: '皇家珠宝博物馆',
    sub: '坐落于齐齐尼亚区一座历史宫殿内，展出穆罕默德·阿里王朝的珠宝首饰。',
    lead: '开放时间与门票随季节变化，本文未核实；出行前请查阅官方来源。',
    cta: '返回参观指南 ↓'
  },
  facts: {
    title: '快速概览',
    items: [
      { k: '类型', v: '博物馆 · 历史宫殿' },
      { k: '时期', v: '宫殿建于 1920 年代；1986 年作为博物馆开放' },
      { k: '位置', v: '亚历山大东部齐齐尼亚' },
      { k: '现场', v: '华丽展厅 · 皇家藏品 · 周边花园' },
      { k: '时间与门票', v: '未核实——请查阅官方来源' }
    ],
    note: '以上信息仅供概览；开放时间与价格会变动，无法保证。'
  },
  about: {
    eyebrow: '简介',
    title: '关于皇家珠宝博物馆',
    paras: [
      '皇家珠宝博物馆坐落于亚历山大东部齐齐尼亚区的一座历史宫殿内，展出穆罕默德·阿里王朝的珠宝与首饰收藏。',
      '宫殿于 1919 年由泽娜布·法赫米动工兴建，1923 年由其女儿法蒂玛·扎赫拉公主完成。',
      '1986 年宫殿被改建为博物馆，收藏数千件皇家珠宝首饰，以其华丽的内部装饰和多样展厅著称。'
    ]
  },
  highlights: {
    eyebrow: '看点',
    title: '博物馆内部看点',
    intro: '以下为一般性提示，并非固定游览路线。',
    items: [
      { title: '宫殿展厅', text: '饰有彩绘天花板与纹样的展厅内陈列着藏品。' },
      { title: '皇家藏品', text: '一批属于王室成员的珠宝与首饰。' },
      { title: '花园与外观', text: '建筑周边设有花园，可用于散步与拍照。' }
    ]
  },
  visit: {
    eyebrow: '实用信息',
    title: '出行之前',
    intro: '以下为规划提示，并非官方说明。',
    cards: [
      { title: '到达', text: '博物馆位于亚历山大东部的齐齐尼亚。与纪念碑的距离本文未核实；请乘出租车或核对交通方式。' },
      { title: '时间', text: '白天时段适合参观。开放时间随季节变动，请查阅官方时间表。' },
      { title: '天气', text: '展厅位于室内，温度可能与室外不同。' },
      { title: '入场', text: '入场可能需要门票。本文未核实价格，请查阅官方来源。' }
    ],
    note: '本文未核实开放时间与价格；出行前请查阅官方来源。'
  },
  relation: {
    eyebrow: '从纪念碑到这里',
    title: '更广行程的一部分',
    text: '这是以曼希亚海军无名烈士纪念碑为起点的更广行程中的一站。请查看周边景点指南来规划多站行程——注意其中的距离与时间均未核实。'
  },
  faq: [
    { q: '皇家珠宝博物馆在哪里？', a: '位于亚历山大东部的齐齐尼亚区。' },
    { q: '博物馆展出什么？', a: '穆罕默德·阿里王朝的珠宝与首饰收藏。' },
    { q: '宫殿何时改为博物馆？', a: '1986 年改为博物馆——此前宫殿建于 1920 年代。' },
    { q: '开放时间与门票是多少？', a: '本文未核实；随季节变动。出行前请查阅官方来源。' },
    { q: '离纪念碑有多远？', a: '本文未核实；博物馆在亚历山大东部，纪念碑在曼希亚。请核对路线与交通。' }
  ]
};

// ————————————————————————————————————————————————————————————
// 10) كوبري ستانلي — Stanley Bridge
// ————————————————————————————————————————————————————————————

const stanleyAr: SpotContent = {
  locale: 'ar',
  slug: 'stanley-bridge',
  name: 'كوبري ستانلي',
  title: `كوبري ستانلي في ${SITE.cityAr} — الموقع والمعالم`,
  description: `كوبري ستانلي في ${SITE.cityAr}: جسر يمتد على البحر المتوسط في منطقة ستانلي، افتُتح عام 2001 بأبراج ذات طابع إسلامي. معلومات عن الموقع والتصميم، مع التنبيه أن المعطيات المتغيّرة غير مُتحقَّق منها.`,
  eyebrow: 'جسر · الإسكندرية',
  hero: {
    name: 'كوبري ستانلي',
    sub: 'جسر يمتد على البحر المتوسط في منطقة ستانلي، افتُتح عام 2001.',
    lead: 'تفاصيل المرور والمواعيد تتغيّر، ولم نتحقق منها هنا؛ راجع المصادر الرسمية أو المحلية قبل الانطلاق.',
    cta: 'العودة إلى دليل الزيارة ↓'
  },
  facts: {
    title: 'لمحة سريعة',
    items: [
      { k: 'النوع', v: 'جسر · معلم معماري' },
      { k: 'الفترة', v: 'افتُتح عام 2001' },
      { k: 'الموقع', v: 'ستانلي، شرق الإسكندرية' },
      { k: 'في الموقع', v: 'أبراج ذات طابع إسلامي · إطلالات بحرية' },
      { k: 'ملاحظة', v: 'تفاصيل المرور والمواعيد غير مُتحقَّق منها — راجع المصادر الرسمية' }
    ],
    note: 'هذه المعطيات للتعريف العام فقط؛ تفاصيل المرور تتغيّر ولا نضمنها.'
  },
  about: {
    eyebrow: 'نبذة',
    title: 'عن كوبري ستانلي',
    paras: [
      'كوبري ستانلي جسر يمتد على البحر المتوسط في منطقة ستانلي بشرق الإسكندرية، ويربط بين ضفّتي الخليج عند تلك المنطقة.',
      'افتُتح الجسر في سبتمبر 2001، ويُعدّ من أوائل الجسور في مصر التي شُيّدت فوق مياه البحر المفتوحة.',
      'يمتد الجسر مسافة تقارب 400 متر بعرض يقارب 30 متراً، وتعلوه أبراج ذات طابع معماري إسلامي، ما يجعله من معالم المدينة الحديثة.'
    ]
  },
  highlights: {
    eyebrow: 'أبرز ما تراه',
    title: 'الجسر ومحيطه',
    intro: 'هذه إشارات عامة لما توقّعه، وليست جدولاً سياحياً منظّماً.',
    items: [
      { title: 'الأبراج', text: 'أبراج بأقواس وتفاصيل ذات طابع إسلامي تعلو أجزاء من الجسر.' },
      { title: 'الإطلالات البحرية', text: 'موقع الجسر على البحر يمنح مناظر مفتوحة على المتوسط والساحل.' },
      { title: 'المنطقة المحيطة', text: 'تحيط بالجسر مقاهٍ وواجهات بحرية؛ الجسر نفسه ممر مروري.' }
    ]
  },
  visit: {
    eyebrow: 'الزيارة عملياً',
    title: 'قبل أن تذهب',
    intro: 'هذه ملاحظات للتخطيط، وليست تعليمات رسمية.',
    cards: [
      { title: 'الوصول', text: 'يقع الجسر في منطقة ستانلي. المسافة من النصب التذكاري غير مُتحقَّق منها؛ استخدم سيارة أجرة أو راجع خيارات النقل.' },
      { title: 'التوقيت', text: 'أفضل وقت للتصوير عند الغروب؛ المنطقة مزدحمة في المساء والإجازات.' },
      { title: 'المناخ المحلي', text: 'الموقع مكشوف للشمس والريح البحرية؛ احمل ماءً ووقاية من الشمس.' },
      { title: 'التنقّل', text: 'الجسر مخصص للمرور؛ تحقق من مسارات المشاة والسيارات محلياً.' }
    ],
    note: 'هذه ملاحظات للتخطيط فقط؛ تفاصيل المرور تتغيّر ولا نضمنها.'
  },
  relation: {
    eyebrow: 'من النصب إلى هنا',
    title: 'ضمن جولة أوسع',
    text: 'هذا المعلم إحدى محطات جولة أوسع تبدأ من النصب التذكاري للجندي المجهول في المنشية. راجع صفحة المعالم المجاورة لتخطيط أكثر من محطة، مع التنبيه أن المسافات والمواعيد هناك غير مُتحقَّق منها.'
  },
  faq: [
    { q: 'أين يقع كوبري ستانلي؟', a: 'في منطقة ستانلي بشرق الإسكندرية، ممتداً على البحر المتوسط.' },
    { q: 'متى افتُتح الجسر؟', a: 'في سبتمبر 2001.' },
    { q: 'ما أبرز ما يميّزه؟', a: 'أبراجه ذات الطابع الإسلامي، وكونه من أوائل جسور مصر المقامة فوق البحر المفتوح.' },
    { q: 'ما طول الجسر؟', a: 'يمتد مسافة تقارب 400 متر بعرض يقارب 30 متراً.' },
    { q: 'كم يبعد عن النصب التذكاري؟', a: 'المسافة غير مُتحقَّق منها؛ الجسر في ستانلي والنصب في المنشية. راجع الطريق ووسيلة النقل.' }
  ]
};

const stanleyEn: SpotContent = {
  locale: 'en',
  slug: 'stanley-bridge',
  name: 'Stanley Bridge',
  title: `Stanley Bridge, ${SITE.cityEn} — Location & Landmarks`,
  description: `Stanley Bridge in ${SITE.cityEn}: a bridge spanning the Mediterranean at the Stanley district, opened in 2001 with Islamic-style towers. Location and design notes, with variable details flagged as unverified.`,
  eyebrow: 'Bridge · Alexandria',
  hero: {
    name: 'Stanley Bridge',
    sub: 'A bridge spanning the Mediterranean at the Stanley district, opened in 2001.',
    lead: 'Traffic and timing details change and are not verified here; check official or local sources before you travel.',
    cta: 'Back to the visitor guide ↓'
  },
  facts: {
    title: 'Quick facts',
    items: [
      { k: 'Type', v: 'Bridge · architectural landmark' },
      { k: 'Period', v: 'Opened in 2001' },
      { k: 'Location', v: 'Stanley, eastern Alexandria' },
      { k: 'On site', v: 'Islamic-style towers · sea views' },
      { k: 'Note', v: 'Traffic and timing details not verified — check official sources' }
    ],
    note: 'These details are for general orientation only; traffic details change and are not guaranteed.'
  },
  about: {
    eyebrow: 'Overview',
    title: 'About Stanley Bridge',
    paras: [
      'Stanley Bridge is a bridge spanning the Mediterranean at the Stanley district of eastern Alexandria, linking the two sides of the bay at that point.',
      'It opened in September 2001 and is among the early bridges in Egypt built over open sea water.',
      'The bridge runs for roughly 400 metres at a width of about 30 metres, topped by towers in an Islamic architectural style, which makes it a modern city landmark.'
    ]
  },
  highlights: {
    eyebrow: 'What to see',
    title: 'The bridge and its surroundings',
    intro: 'These are general pointers, not a staged itinerary.',
    items: [
      { title: 'The towers', text: 'Towers with arches and Islamic-style details rise above parts of the bridge.' },
      { title: 'Sea views', text: 'Its position over the sea gives open views over the Mediterranean and the coast.' },
      { title: 'The surroundings', text: 'Cafés and seafront stretches sit around the bridge; the bridge itself is a traffic route.' }
    ]
  },
  visit: {
    eyebrow: 'Practical visit',
    title: 'Before you go',
    intro: 'These are planning notes, not official instructions.',
    cards: [
      { title: 'Getting there', text: 'The bridge is in the Stanley district. The distance from the memorial is not verified here; use a taxi or check your transport options.' },
      { title: 'Timing', text: 'Sunset is a good time for photography; the area is busy in the evening and on holidays.' },
      { title: 'Weather', text: 'The site is exposed to sun and sea breeze; carry water and sun protection.' },
      { title: 'Getting around', text: 'The bridge is a traffic route; check pedestrian and vehicle access locally.' }
    ],
    note: 'These are planning notes only; traffic details change and are not guaranteed.'
  },
  relation: {
    eyebrow: 'From the memorial to here',
    title: 'Part of a wider walk',
    text: 'This is one stop in a wider outing that starts from the Naval Unknown Soldier Memorial in Mansheya. See the nearby-attractions guide to plan more than one stop, noting that distances and hours there are not verified.'
  },
  faq: [
    { q: 'Where is Stanley Bridge?', a: 'In the Stanley district of eastern Alexandria, spanning the Mediterranean.' },
    { q: 'When did it open?', a: 'In September 2001.' },
    { q: 'What is most distinctive about it?', a: 'Its Islamic-style towers, and the fact that it is among Egypt’s early bridges built over open sea.' },
    { q: 'How long is the bridge?', a: 'It runs for roughly 400 metres at a width of about 30 metres.' },
    { q: 'How far is it from the memorial?', a: 'The distance is not verified here; the bridge is in Stanley and the memorial is in Mansheya. Check the route and transport.' }
  ]
};

const stanleyZh: SpotContent = {
  locale: 'zh',
  slug: 'stanley-bridge',
  name: '斯坦利桥',
  title: `亚历山大斯坦利桥 — 位置与景观指南`,
  description: `亚历山大斯坦利桥：横跨地中海、位于斯坦利区的桥梁，2001 年通车，桥身建有伊斯兰风格塔楼。提供位置与设计信息，可变细节均标注为未核实。`,
  eyebrow: '桥梁 · 亚历山大',
  hero: {
    name: '斯坦利桥',
    sub: '横跨地中海、位于斯坦利区的桥梁，2001 年通车。',
    lead: '交通与时间细节会变动，本文未核实；出行前请查阅官方或当地来源。',
    cta: '返回参观指南 ↓'
  },
  facts: {
    title: '快速概览',
    items: [
      { k: '类型', v: '桥梁 · 建筑地标' },
      { k: '时期', v: '2001 年通车' },
      { k: '位置', v: '亚历山大东部斯坦利' },
      { k: '现场', v: '伊斯兰风格塔楼 · 海景' },
      { k: '备注', v: '交通与时间细节未核实——请查阅官方来源' }
    ],
    note: '以上信息仅供概览；交通细节会变动，无法保证。'
  },
  about: {
    eyebrow: '简介',
    title: '关于斯坦利桥',
    paras: [
      '斯坦利桥横跨地中海，位于亚历山大东部斯坦利区，连接该处海湾的两岸。',
      '桥梁于 2001 年 9 月通车，是埃及较早建造在开放海面上的桥梁之一。',
      '桥长约 400 米、宽约 30 米，桥顶建有伊斯兰风格的塔楼，是这座城市的现代地标之一。'
    ]
  },
  highlights: {
    eyebrow: '看点',
    title: '桥身与周边',
    intro: '以下为一般性提示，并非固定游览路线。',
    items: [
      { title: '塔楼', text: '带有拱券与伊斯兰风格细节的塔楼矗立于桥身之上。' },
      { title: '海景', text: '桥梁临海的位置带来开阔的地中海与海岸视野。' },
      { title: '周边环境', text: '桥周围分布着咖啡馆与海滨步道；桥本身为交通通道。' }
    ]
  },
  visit: {
    eyebrow: '实用信息',
    title: '出行之前',
    intro: '以下为规划提示，并非官方说明。',
    cards: [
      { title: '到达', text: '桥梁位于斯坦利区。与纪念碑的距离本文未核实；请乘出租车或核对交通方式。' },
      { title: '时间', text: '日落前后适合拍照；傍晚与假日该区域较为拥挤。' },
      { title: '天气', text: '场地暴露于阳光与海风之中，请带水并做好防晒。' },
      { title: '通行', text: '桥梁为交通通道；请在现场确认行人与车辆通行方式。' }
    ],
    note: '以上仅为规划提示；交通细节会变动，无法保证。'
  },
  relation: {
    eyebrow: '从纪念碑到这里',
    title: '更广行程的一部分',
    text: '这是以曼希亚海军无名烈士纪念碑为起点的更广行程中的一站。请查看周边景点指南来规划多站行程——注意其中的距离与时间均未核实。'
  },
  faq: [
    { q: '斯坦利桥在哪里？', a: '位于亚历山大东部的斯坦利区，横跨地中海。' },
    { q: '桥梁何时通车？', a: '2001 年 9 月。' },
    { q: '它最大的特点是什么？', a: '伊斯兰风格的塔楼，以及它是埃及较早建造在开放海面上的桥梁之一。' },
    { q: '桥有多长？', a: '长约 400 米，宽约 30 米。' },
    { q: '离纪念碑有多远？', a: '本文未核实；桥梁在斯坦利，纪念碑在曼希亚。请核对路线与交通。' }
  ]
};

// ————————————————————————————————————————————————————————————
// 11) المتحف الوطني بالإسكندرية — Alexandria National Museum
// ————————————————————————————————————————————————————————————

const natmusAr: SpotContent = {
  locale: 'ar',
  slug: 'alexandria-national-museum',
  name: 'المتحف الوطني بالإسكندرية',
  title: `المتحف الوطني في ${SITE.cityAr} — الموقع والمقتنيات`,
  description: `المتحف الوطني في ${SITE.cityAr}: متحف في قصر تاريخي بوسط المدينة، افتُتح عام 2003، ويعرض مقتنيات من عصور مختلفة. معلومات عن الموقع والمقتنيات، مع التنبيه أن المواعيد وأسعار التذاكر غير مُتحقَّق منها.`,
  eyebrow: 'متحف · الإسكندرية',
  hero: {
    name: 'المتحف الوطني بالإسكندرية',
    sub: 'متحف في قصر تاريخي بوسط الإسكندرية، افتُتح عام 2003.',
    lead: 'المواعيد وأسعار التذاكر تتغيّر بحسب الموسم، ولم نتحقق منها هنا؛ راجع المصادر الرسمية قبل الانطلاق.',
    cta: 'العودة إلى دليل الزيارة ↓'
  },
  facts: {
    title: 'لمحة سريعة',
    items: [
      { k: 'النوع', v: 'متحف · قصر تاريخي' },
      { k: 'الفترة', v: 'القصر يعود إلى عشرينيات القرن الماضي؛ افتُتح متحفاً عام 2003' },
      { k: 'الموقع', v: 'شارع طارق الحرية (بورسعيد)، وسط الإسكندرية' },
      { k: 'في الموقع', v: 'مقتنيات من العصور الفرعونية واليونانية والرومانية والقبطية والإسلامية' },
      { k: 'المواعيد والتذاكر', v: 'غير مُتحقَّق منها — راجع المصادر الرسمية' }
    ],
    note: 'هذه المعطيات للتعريف العام فقط؛ المواعيد والأسعار تتغيّر ولا نضمنها.'
  },
  about: {
    eyebrow: 'نبذة',
    title: 'عن المتحف الوطني',
    paras: [
      'المتحف الوطني بالإسكندرية متحف يقع في وسط المدينة، ويضم مقتنيات تعود إلى عصور مختلفة من تاريخ مصر.',
      'المبنى في الأصل قصر شُيّد لعائلة تاجر الأخشاب أسعد باسيلي باشا في نحو عام 1928 على طراز إيطالي، واستُخدم لاحقاً مقراً لقنصلية أجنبية في خمسينيات القرن الماضي.',
      'افتُتح المتحف رسمياً في سبتمبر 2003، ويعرض مجموعات تمتد من العصر الفرعوني إلى العصور اليونانية والرومانية والقبطية والإسلامية.'
    ]
  },
  highlights: {
    eyebrow: 'أبرز ما تراه',
    title: 'داخل المتحف',
    intro: 'هذه إشارات عامة لما توقّعه، وليست جدولاً سياحياً منظّماً.',
    items: [
      { title: 'المقتنيات الفرعونية', text: 'قطع أثرية من العصر الفرعوني ضمن المجموعة.' },
      { title: 'العصور اليونانية والرومانية', text: 'مقتنيات تعكس حقبة الإسكندرية اليونانية والرومانية.' },
      { title: 'المبنى نفسه', text: 'قصر تاريخي بطراز إيطالي، يُعدّ جزءاً من تجربة الزيارة.' }
    ]
  },
  visit: {
    eyebrow: 'الزيارة عملياً',
    title: 'قبل أن تذهب',
    intro: 'هذه ملاحظات للتخطيط، وليست تعليمات رسمية.',
    cards: [
      { title: 'الوصول', text: 'يقع المتحف في وسط الإسكندرية على شارع طارق الحرية. المسافة من النصب التذكاري غير مُتحقَّق منها؛ استخدم سيارة أجرة أو راجع خيارات النقل.' },
      { title: 'التوقيت', text: 'ساعات النهار أنسب للزيارة. المواعيد تتغيّر بحسب الموسم؛ افحص الجدول الرسمي.' },
      { title: 'المناخ المحلي', text: 'القاعات داخل المبنى؛ قد تختلف درجة الحرارة عن الخارج.' },
      { title: 'الدخول', text: 'قد تُطلب تذكرة للدخول. لم نتحقق من الأسعار؛ راجع المصادر الرسمية.' }
    ],
    note: 'لم نتحقق من المواعيد أو الأسعار؛ راجع المصادر الرسمية قبل الانطلاق.'
  },
  relation: {
    eyebrow: 'من النصب إلى هنا',
    title: 'ضمن جولة أوسع',
    text: 'هذا المعلم إحدى محطات جولة أوسع تبدأ من النصب التذكاري للجندي المجهول في المنشية. راجع صفحة المعالم المجاورة لتخطيط أكثر من محطة، مع التنبيه أن المسافات والمواعيد هناك غير مُتحقَّق منها.'
  },
  faq: [
    { q: 'أين يقع المتحف الوطني بالإسكندرية؟', a: 'في وسط الإسكندرية على شارع طارق الحرية (بورسعيد).' },
    { q: 'متى افتُتح المتحف؟', a: 'افتُتح رسمياً في سبتمبر 2003 داخل قصر تاريخي يعود إلى عشرينيات القرن الماضي.' },
    { q: 'ماذا يعرض المتحف؟', a: 'مقتنيات تمتد من العصر الفرعوني إلى العصور اليونانية والرومانية والقبطية والإسلامية.' },
    { q: 'ما مواعيد العمل وأسعار التذاكر؟', a: 'غير مُتحقَّق منها هنا؛ تتغيّر بحسب الموسم. راجع المصادر الرسمية قبل الانطلاق.' },
    { q: 'كم يبعد عن النصب التذكاري؟', a: 'المسافة غير مُتحقَّق منها؛ المتحف وسط الإسكندرية والنصب في المنشية. راجع الطريق ووسيلة النقل.' }
  ]
};

const natmusEn: SpotContent = {
  locale: 'en',
  slug: 'alexandria-national-museum',
  name: 'Alexandria National Museum',
  title: `Alexandria National Museum — Location & Collection`,
  description: `The Alexandria National Museum: a museum in a historic palace in the city centre, opened in 2003, displaying pieces from several eras. Location and collection notes, with hours and tickets flagged as unverified.`,
  eyebrow: 'Museum · Alexandria',
  hero: {
    name: 'Alexandria National Museum',
    sub: 'A museum in a historic palace in central Alexandria, opened in 2003.',
    lead: 'Opening hours and ticket prices change with the season and are not verified here; check official sources before you travel.',
    cta: 'Back to the visitor guide ↓'
  },
  facts: {
    title: 'Quick facts',
    items: [
      { k: 'Type', v: 'Museum · historic palace' },
      { k: 'Period', v: 'Palace from the 1920s; opened as a museum in 2003' },
      { k: 'Location', v: 'Tariq El-Horreya (Port Said) Street, central Alexandria' },
      { k: 'On site', v: 'Pieces from the Pharaonic, Greek, Roman, Coptic and Islamic eras' },
      { k: 'Hours & tickets', v: 'Not verified — check official sources' }
    ],
    note: 'These details are for general orientation only; hours and prices change and are not guaranteed.'
  },
  about: {
    eyebrow: 'Overview',
    title: 'About the Alexandria National Museum',
    paras: [
      'The Alexandria National Museum sits in the city centre and holds pieces spanning several periods of Egyptian history.',
      'The building was originally a palace built for the family of wood merchant Asaad Bassili Pasha around 1928 in an Italian style, and it later served as a foreign consulate in the 1950s.',
      'The museum opened officially in September 2003 and displays collections that run from the Pharaonic era through the Greek, Roman, Coptic and Islamic periods.'
    ]
  },
  highlights: {
    eyebrow: 'What to see',
    title: 'Inside the museum',
    intro: 'These are general pointers, not a staged itinerary.',
    items: [
      { title: 'Pharaonic pieces', text: 'Antiquities from the Pharaonic era within the collection.' },
      { title: 'Greek and Roman eras', text: 'Pieces that reflect Alexandria’s Greek and Roman periods.' },
      { title: 'The building itself', text: 'A historic palace in Italian style, part of the visit in its own right.' }
    ]
  },
  visit: {
    eyebrow: 'Practical visit',
    title: 'Before you go',
    intro: 'These are planning notes, not official instructions.',
    cards: [
      { title: 'Getting there', text: 'The museum is in central Alexandria on Tariq El-Horreya Street. The distance from the memorial is not verified here; use a taxi or check your transport options.' },
      { title: 'Timing', text: 'Daytime hours suit a visit. Hours vary with the season; check the official schedule.' },
      { title: 'Weather', text: 'The halls are indoors; temperatures may differ from outside.' },
      { title: 'Entry', text: 'A ticket may be required for entry. No prices are verified here; check official sources.' }
    ],
    note: 'Hours and prices are not verified here; check official sources before you travel.'
  },
  relation: {
    eyebrow: 'From the memorial to here',
    title: 'Part of a wider walk',
    text: 'This is one stop in a wider outing that starts from the Naval Unknown Soldier Memorial in Mansheya. See the nearby-attractions guide to plan more than one stop, noting that distances and hours there are not verified.'
  },
  faq: [
    { q: 'Where is the Alexandria National Museum?', a: 'In central Alexandria, on Tariq El-Horreya (Port Said) Street.' },
    { q: 'When did it open?', a: 'It opened officially in September 2003, inside a historic palace dating from the 1920s.' },
    { q: 'What does the museum display?', a: 'Pieces running from the Pharaonic era through the Greek, Roman, Coptic and Islamic periods.' },
    { q: 'What are the opening hours and ticket prices?', a: 'Not verified here; they change with the season. Check official sources before you travel.' },
    { q: 'How far is it from the memorial?', a: 'The distance is not verified here; the museum is in central Alexandria and the memorial is in Mansheya. Check the route and transport.' }
  ]
};

const natmusZh: SpotContent = {
  locale: 'zh',
  slug: 'alexandria-national-museum',
  name: '亚历山大国家博物馆',
  title: `亚历山大国家博物馆 — 位置与藏品指南`,
  description: `亚历山大国家博物馆：位于市中心一座历史宫殿内的博物馆，2003 年开放，展出多个时期的文物。提供位置与藏品信息，开放时间与门票均标注为未核实。`,
  eyebrow: '博物馆 · 亚历山大',
  hero: {
    name: '亚历山大国家博物馆',
    sub: '位于亚历山大市中心一座历史宫殿内的博物馆，2003 年开放。',
    lead: '开放时间与门票随季节变化，本文未核实；出行前请查阅官方来源。',
    cta: '返回参观指南 ↓'
  },
  facts: {
    title: '快速概览',
    items: [
      { k: '类型', v: '博物馆 · 历史宫殿' },
      { k: '时期', v: '宫殿建于 1920 年代；2003 年作为博物馆开放' },
      { k: '位置', v: '亚历山大市中心塔里克·霍雷亚街（塞得港街）' },
      { k: '现场', v: '法老、希腊、罗马、科普特与伊斯兰时期文物' },
      { k: '时间与门票', v: '未核实——请查阅官方来源' }
    ],
    note: '以上信息仅供概览；开放时间与价格会变动，无法保证。'
  },
  about: {
    eyebrow: '简介',
    title: '关于亚历山大国家博物馆',
    paras: [
      '亚历山大国家博物馆位于市中心，收藏跨越埃及历史多个时期的文物。',
      '建筑原为木材商人阿萨德·巴西利帕夏家族约 1928 年建造的意大利风格宫殿，1950 年代曾作为外国领事馆使用。',
      '博物馆于 2003 年 9 月正式开放，展品从法老时期一直延续到希腊、罗马、科普特与伊斯兰时期。'
    ]
  },
  highlights: {
    eyebrow: '看点',
    title: '博物馆内部看点',
    intro: '以下为一般性提示，并非固定游览路线。',
    items: [
      { title: '法老时期文物', text: '藏品中包含法老时期的文物。' },
      { title: '希腊与罗马时期', text: '反映亚历山大希腊与罗马时期的藏品。' },
      { title: '建筑本身', text: '一座意大利风格的历史宫殿，本身就是参观体验的一部分。' }
    ]
  },
  visit: {
    eyebrow: '实用信息',
    title: '出行之前',
    intro: '以下为规划提示，并非官方说明。',
    cards: [
      { title: '到达', text: '博物馆位于亚历山大市中心塔里克·霍雷亚街。与纪念碑的距离本文未核实；请乘出租车或核对交通方式。' },
      { title: '时间', text: '白天时段适合参观。开放时间随季节变动，请查阅官方时间表。' },
      { title: '天气', text: '展厅位于室内，温度可能与室外不同。' },
      { title: '入场', text: '入场可能需要门票。本文未核实价格，请查阅官方来源。' }
    ],
    note: '本文未核实开放时间与价格；出行前请查阅官方来源。'
  },
  relation: {
    eyebrow: '从纪念碑到这里',
    title: '更广行程的一部分',
    text: '这是以曼希亚海军无名烈士纪念碑为起点的更广行程中的一站。请查看周边景点指南来规划多站行程——注意其中的距离与时间均未核实。'
  },
  faq: [
    { q: '亚历山大国家博物馆在哪里？', a: '位于亚历山大市中心的塔里克·霍雷亚街（塞得港街）。' },
    { q: '博物馆何时开放？', a: '2003 年 9 月正式开放，馆址是一座建于 1920 年代的历史宫殿。' },
    { q: '博物馆展出什么？', a: '展品从法老时期一直延续到希腊、罗马、科普特与伊斯兰时期。' },
    { q: '开放时间与门票是多少？', a: '本文未核实；随季节变动。出行前请查阅官方来源。' },
    { q: '离纪念碑有多远？', a: '本文未核实；博物馆在亚历山大市中心，纪念碑在曼希亚。请核对路线与交通。' }
  ]
};

// ————————————————————————————————————————————————————————————
// 12) مقابر الأنفوشي — Anfushi Tombs
// ————————————————————————————————————————————————————————————

const anfushiAr: SpotContent = {
  locale: 'ar',
  slug: 'anfushi-tombs',
  name: 'مقابر الأنفوشي',
  title: `مقابر الأنفوشي في ${SITE.cityAr} — الموقع والنقوش`,
  description: `مقابر الأنفوشي في ${SITE.cityAr}: مقابر صخرية من العصر البطلمي في حيّ الأنفوشي، تجمع الطراز اليوناني بالمصري. معلومات عن الموقع والنقوش، مع التنبيه أن المواعيد وأسعار التذاكر غير مُتحقَّق منها.`,
  eyebrow: 'مقابر أثرية · الإسكندرية',
  hero: {
    name: 'مقابر الأنفوشي',
    sub: 'مقابر صخرية من العصر البطلمي، تمزج الطراز اليوناني بالمصري.',
    lead: 'المواعيد وأسعار التذاكر تتغيّر بحسب الموسم، ولم نتحقق منها هنا؛ راجع المصادر الرسمية قبل الانطلاق.',
    cta: 'العودة إلى دليل الزيارة ↓'
  },
  facts: {
    title: 'لمحة سريعة',
    items: [
      { k: 'النوع', v: 'مقابر صخرية · موقع أثري' },
      { k: 'الفترة', v: 'العصر البطلمي (نحو القرن الثاني قبل الميلاد)' },
      { k: 'الموقع', v: 'الأنفوشي، غرب الإسكندرية' },
      { k: 'في الموقع', v: 'مقابر منحوتة في الصخر · نقوش ملوّنة مختلطة الطراز' },
      { k: 'المواعيد والتذاكر', v: 'غير مُتحقَّق منها — راجع المصادر الرسمية' }
    ],
    note: 'هذه المعطيات للتعريف العام فقط؛ المواعيد والأسعار تتغيّر ولا نضمنها.'
  },
  about: {
    eyebrow: 'نبذة',
    title: 'عن مقابر الأنفوشي',
    paras: [
      'مقابر الأنفوشي مجموعة مقابر أثرية منحوتة في الصخر، تعود إلى العصر البطلمي في الإسكندرية، وتقع في حيّ الأنفوشي غرب المدينة.',
      'تُعدّ هذه المقابر جزءاً من الجبانة الغربية القديمة للإسكندرية، وقد اكتُشفت خلال السنوات الأولى من القرن العشرين.',
      'تتميّز بالنقوش والزخارف التي تجمع بين الطراز اليوناني والطراز المصري القديم، وهي سمة شائعة في فنون الإسكندرية في العصر البطلمي.'
    ]
  },
  highlights: {
    eyebrow: 'أبرز ما تراه',
    title: 'داخل المقابر',
    intro: 'هذه إشارات عامة لما توقّعه، وليست جدولاً سياحياً منظّماً.',
    items: [
      { title: 'النقوش الملوّنة', text: 'زخارف ونقوش تجمع عناصر يونانية ومصرية على جدران المقابر.' },
      { title: 'البنية الصخرية', text: 'مقابر منحوتة في الصخر بمداخل وممرات داخلية.' },
      { title: 'الموقع والحيّ', text: 'تقع في الأنفوشي قرب المنطقة الساحلية غرب الإسكندرية.' }
    ]
  },
  visit: {
    eyebrow: 'الزيارة عملياً',
    title: 'قبل أن تذهب',
    intro: 'هذه ملاحظات للتخطيط، وليست تعليمات رسمية.',
    cards: [
      { title: 'الوصول', text: 'تقع المقابر في الأنفوشي غرب الإسكندرية. المسافة من النصب التذكاري غير مُتحقَّق منها؛ استخدم سيارة أجرة أو راجع خيارات النقل.' },
      { title: 'التوقيت', text: 'الموقع مفتوح عادةً في النهار فقط. المواعيد تتغيّر بحسب الموسم؛ افحص الجدول الرسمي.' },
      { title: 'المناخ المحلي', text: 'المقابر منحوتة في الصخر؛ قد تختلف حرارتها عن الخارج. احمل حذاءً مريحاً.' },
      { title: 'الدخول', text: 'قد تُطلب تذكرة للدخول. لم نتحقق من الأسعار؛ راجع المصادر الرسمية.' }
    ],
    note: 'لم نتحقق من المواعيد أو الأسعار؛ راجع المصادر الرسمية قبل الانطلاق.'
  },
  relation: {
    eyebrow: 'من النصب إلى هنا',
    title: 'ضمن جولة أوسع',
    text: 'هذا المعلم إحدى محطات جولة أوسع تبدأ من النصب التذكاري للجندي المجهول في المنشية. راجع صفحة المعالم المجاورة لتخطيط أكثر من محطة، مع التنبيه أن المسافات والمواعيد هناك غير مُتحقَّق منها.'
  },
  faq: [
    { q: 'أين تقع مقابر الأنفوشي؟', a: 'في حيّ الأنفوشي غرب الإسكندرية.' },
    { q: 'إلى أي عصر تعود؟', a: 'إلى العصر البطلمي، نحو القرن الثاني قبل الميلاد.' },
    { q: 'ما أهم ما يميّزها؟', a: 'النقوش والزخارف التي تجمع بين الطراز اليوناني والطراز المصري القديم.' },
    { q: 'ما مواعيد العمل وأسعار التذاكر؟', a: 'غير مُتحقَّق منها هنا؛ تتغيّر بحسب الموسم. راجع المصادر الرسمية قبل الانطلاق.' },
    { q: 'كم تبعد عن النصب التذكاري؟', a: 'المسافة غير مُتحقَّق منها؛ المقابر غرب الإسكندرية والنصب في المنشية. راجع الطريق ووسيلة النقل.' }
  ]
};

const anfushiEn: SpotContent = {
  locale: 'en',
  slug: 'anfushi-tombs',
  name: 'Anfushi Tombs',
  title: `Anfushi Tombs, ${SITE.cityEn} — Location & Carvings`,
  description: `The Anfushi Tombs in ${SITE.cityEn}: Ptolemaic rock-cut tombs in the Anfushi district, blending Greek and Egyptian styles. Location and carving notes, with hours and tickets flagged as unverified.`,
  eyebrow: 'Rock tombs · Alexandria',
  hero: {
    name: 'Anfushi Tombs',
    sub: 'Ptolemaic rock-cut tombs blending Greek and Egyptian styles.',
    lead: 'Opening hours and ticket prices change with the season and are not verified here; check official sources before you travel.',
    cta: 'Back to the visitor guide ↓'
  },
  facts: {
    title: 'Quick facts',
    items: [
      { k: 'Type', v: 'Rock-cut tombs · archaeological site' },
      { k: 'Period', v: 'Ptolemaic era (around the 2nd century BC)' },
      { k: 'Location', v: 'Anfushi, western Alexandria' },
      { k: 'On site', v: 'Tombs cut into rock · painted mixed-style carvings' },
      { k: 'Hours & tickets', v: 'Not verified — check official sources' }
    ],
    note: 'These details are for general orientation only; hours and prices change and are not guaranteed.'
  },
  about: {
    eyebrow: 'Overview',
    title: 'About the Anfushi Tombs',
    paras: [
      'The Anfushi Tombs are a group of rock-cut tombs from the Ptolemaic era in Alexandria, located in the Anfushi district to the west of the city.',
      'They are part of Alexandria’s ancient western necropolis and were discovered during the early years of the 20th century.',
      'They are known for carvings and decoration that combine Greek style with ancient Egyptian style, a common feature of Alexandrian art in the Ptolemaic period.'
    ]
  },
  highlights: {
    eyebrow: 'What to see',
    title: 'Inside the tombs',
    intro: 'These are general pointers, not a staged itinerary.',
    items: [
      { title: 'Painted carvings', text: 'Decoration and carvings that combine Greek and Egyptian elements on the tomb walls.' },
      { title: 'The rock-cut structure', text: 'Tombs cut into the rock, with entrances and interior passages.' },
      { title: 'The district', text: 'They sit in Anfushi, near the coastal area of western Alexandria.' }
    ]
  },
  visit: {
    eyebrow: 'Practical visit',
    title: 'Before you go',
    intro: 'These are planning notes, not official instructions.',
    cards: [
      { title: 'Getting there', text: 'The tombs are in Anfushi, in western Alexandria. The distance from the memorial is not verified here; use a taxi or check your transport options.' },
      { title: 'Timing', text: 'The site is usually open in daylight hours. Hours vary with the season; check the official schedule.' },
      { title: 'Weather', text: 'The tombs are cut into rock; temperatures may differ from outside. Wear comfortable shoes.' },
      { title: 'Entry', text: 'A ticket may be required for entry. No prices are verified here; check official sources.' }
    ],
    note: 'Hours and prices are not verified here; check official sources before you travel.'
  },
  relation: {
    eyebrow: 'From the memorial to here',
    title: 'Part of a wider walk',
    text: 'This is one stop in a wider outing that starts from the Naval Unknown Soldier Memorial in Mansheya. See the nearby-attractions guide to plan more than one stop, noting that distances and hours there are not verified.'
  },
  faq: [
    { q: 'Where are the Anfushi Tombs?', a: 'In the Anfushi district of western Alexandria.' },
    { q: 'Which era do they date from?', a: 'The Ptolemaic era, around the 2nd century BC.' },
    { q: 'What makes them distinctive?', a: 'Carvings and decoration that combine Greek style with ancient Egyptian style.' },
    { q: 'What are the opening hours and ticket prices?', a: 'Not verified here; they change with the season. Check official sources before you travel.' },
    { q: 'How far is it from the memorial?', a: 'The distance is not verified here; the tombs are in western Alexandria and the memorial is in Mansheya. Check the route and transport.' }
  ]
};

const anfushiZh: SpotContent = {
  locale: 'zh',
  slug: 'anfushi-tombs',
  name: '安福希墓地',
  title: `亚历山大安福希墓地 — 位置与壁画指南`,
  description: `亚历山大安福希墓地：位于安福希区的托勒密时期岩凿墓葬，融合希腊与埃及风格。提供位置与壁画信息，开放时间与门票均标注为未核实。`,
  eyebrow: '岩凿墓葬 · 亚历山大',
  hero: {
    name: '安福希墓地',
    sub: '托勒密时期的岩凿墓葬，融合希腊与埃及风格。',
    lead: '开放时间与门票随季节变化，本文未核实；出行前请查阅官方来源。',
    cta: '返回参观指南 ↓'
  },
  facts: {
    title: '快速概览',
    items: [
      { k: '类型', v: '岩凿墓葬 · 考古遗址' },
      { k: '时期', v: '托勒密时期（约公元前 2 世纪）' },
      { k: '位置', v: '亚历山大西部安福希' },
      { k: '现场', v: '岩凿墓葬 · 混合风格彩绘壁画' },
      { k: '时间与门票', v: '未核实——请查阅官方来源' }
    ],
    note: '以上信息仅供概览；开放时间与价格会变动，无法保证。'
  },
  about: {
    eyebrow: '简介',
    title: '关于安福希墓地',
    paras: [
      '安福希墓地是一组亚历山大的托勒密时期岩凿墓葬，位于城市西部的安福希区。',
      '它们属于亚历山大古代西墓区的一部分，于 20 世纪初被发现。',
      '墓地以融合希腊风格与古埃及风格的壁画和装饰著称，这是托勒密时期亚历山大艺术的常见特征。'
    ]
  },
  highlights: {
    eyebrow: '看点',
    title: '墓葬内部看点',
    intro: '以下为一般性提示，并非固定游览路线。',
    items: [
      { title: '彩绘壁画', text: '墓室墙壁上融合希腊与埃及元素的装饰与壁画。' },
      { title: '岩凿结构', text: '开凿于岩层中的墓葬，设有入口与内部通道。' },
      { title: '所处街区', text: '位于亚历山大西部的安福希区，靠近海滨地带。' }
    ]
  },
  visit: {
    eyebrow: '实用信息',
    title: '出行之前',
    intro: '以下为规划提示，并非官方说明。',
    cards: [
      { title: '到达', text: '墓地位于亚历山大西部的安福希。与纪念碑的距离本文未核实；请乘出租车或核对交通方式。' },
      { title: '时间', text: '遗址通常在白天开放。开放时间随季节变动，请查阅官方时间表。' },
      { title: '天气', text: '墓葬开凿于岩石之中，温度可能与室外不同，请穿舒适的鞋子。' },
      { title: '入场', text: '入场可能需要门票。本文未核实价格，请查阅官方来源。' }
    ],
    note: '本文未核实开放时间与价格；出行前请查阅官方来源。'
  },
  relation: {
    eyebrow: '从纪念碑到这里',
    title: '更广行程的一部分',
    text: '这是以曼希亚海军无名烈士纪念碑为起点的更广行程中的一站。请查看周边景点指南来规划多站行程——注意其中的距离与时间均未核实。'
  },
  faq: [
    { q: '安福希墓地在哪里？', a: '位于亚历山大西部的安福希区。' },
    { q: '它属于哪个时期？', a: '托勒密时期，约公元前 2 世纪。' },
    { q: '它最大的特点是什么？', a: '壁画与装饰融合了希腊风格与古埃及风格。' },
    { q: '开放时间与门票是多少？', a: '本文未核实；随季节变动。出行前请查阅官方来源。' },
    { q: '离纪念碑有多远？', a: '本文未核实；墓地在亚历山大西部，纪念碑在曼希亚。请核对路线与交通。' }
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
  'mansheya-market': { ar: marketAr, en: marketEn, zh: marketZh },
  'catacombs-of-kom-el-shoqafa': { ar: shoqafaAr, en: shoqafaEn, zh: shoqafaZh },
  'montaza-palace': { ar: montazaAr, en: montazaEn, zh: montazaZh },
  'royal-jewelry-museum': { ar: jewelryAr, en: jewelryEn, zh: jewelryZh },
  'stanley-bridge': { ar: stanleyAr, en: stanleyEn, zh: stanleyZh },
  'alexandria-national-museum': { ar: natmusAr, en: natmusEn, zh: natmusZh },
  'anfushi-tombs': { ar: anfushiAr, en: anfushiEn, zh: anfushiZh }
};

// ————————————————————————————————————————————————————————————
// كتل موسّعة: المتحف الوطني بالإسكندرية (قالب صفحة المعلم الغني)
// ————————————————————————————————————————————————————————————

const natmusExtrasAr: SpotExtras = {
  info: {
    eyebrow: 'البيانات الأساسية',
    title: 'البيانات الأساسية',
    items: [
      { k: 'الاسم الشائع', v: 'المتحف الوطني بالإسكندرية' },
      { k: 'النوع', v: 'متحف داخل قصر تاريخي' },
      { k: 'الدولة', v: 'مصر' },
      { k: 'المدينة', v: 'الإسكندرية' },
      { k: 'الموقع', v: 'شارع طارق الحرية (بورسعيد)، وسط المدينة' },
      { k: 'الفترة', v: 'القصر نحو 1928؛ متحف منذ 2003' },
      { k: 'المواعيد', v: 'غير مُتحقَّق منها — راجع الجهة الرسمية' },
      { k: 'التذاكر', v: 'غير مُتحقَّق منها — راجع الجهة الرسمية' }
    ],
    note: 'نعرض ما يمكن التحقق منه فقط؛ المواعيد والأسعار متغيّرة وغير مُتحقَّق منها هنا.'
  },
  access: {
    eyebrow: 'الوصول',
    title: 'كيف تصل إلى الموقع',
    intro: 'المتحف في وسط الإسكندرية؛ هذه خيارات عامة للتخطيط وليست تعليمات رسمية.',
    cards: [
      { title: 'من وسط المدينة', text: 'المتحف في وسط المدينة، ما يجعله قريباً من عدة معالم. زمن الرحلة غير مُتحقَّق منه.' },
      { title: 'سيارة أجرة أو تطبيق نقل', text: 'خيار مباشر للوصول إلى مدخل المتحف؛ اتفق على الوجهة قبل الانطلاق.' },
      { title: 'النقل العام', text: 'قد توجد خطوط قريبة، لكن التفاصيل غير مُتحقَّق منها؛ اسأل محلياً.' },
      { title: 'المشي', text: 'موقعه المركزي يجعل المشي خياراً مناسباً إن كنت في محيط وسط المدينة.' }
    ],
    note: 'تفاصيل المواصلات تتغيّر؛ راجع مصادر محلية قبل الانطلاق.'
  },
  charm: {
    eyebrow: 'اكتشف المكان',
    title: 'لماذا يستحق الزيارة',
    intro: 'أربعة محاور لفهم قيمة الموقع.',
    items: [
      { title: 'التاريخ', paras: ['المبنى في الأصل قصر شُيّد لعائلة تاجر الأخشاب أسعد باسيلي باشا في نحو عام 1928.', 'استُخدم لاحقاً مقراً لقنصلية أجنبية في خمسينيات القرن الماضي، ثم افتُتح متحفاً عام 2003.'] },
      { title: 'العمارة', paras: ['القصر بُني على طراز إيطالي، ويُعدّ المبنى نفسه جزءاً من تجربة الزيارة.'] },
      { title: 'القيمة الثقافية', paras: ['يعرض المتحف مجموعات تمتد من العصر الفرعوني إلى العصور اليونانية والرومانية والقبطية والإسلامية.'] },
      { title: 'التجربة', paras: ['زيارة داخل قصر تاريخي تجمع بين مشاهدة المقتنيات والتجوّل في مبنى له قيمة معمارية.'] }
    ]
  },
  route: {
    eyebrow: 'مسار الزيارة',
    title: 'مسار مقترح',
    intro: 'مسار عام للتعريف، وقد تختلف تفاصيله بحسب تنظيم المتحف.',
    steps: [
      { title: 'الوصول إلى المدخل', text: 'الوصول إلى مدخل المتحف على شارع طارق الحرية والتحقق من مواعيد الفتح محلياً.' },
      { title: 'المجموعات الفرعونية', text: 'البدء بالقطع التي تعود إلى العصر الفرعوني.' },
      { title: 'العصور اليونانية والرومانية', text: 'الانتقال إلى مقتنيات الحقبة اليونانية والرومانية في المدينة.' },
      { title: 'العصور اللاحقة', text: 'مشاهدة مجموعات العصور القبطية والإسلامية.' },
      { title: 'الخروج', text: 'المغادرة عبر المدخل نفسه أو المسار المخصّص.' }
    ],
    notesTitle: 'تنبيهات للزيارة',
    notes: ['احترم قواعد المتحف وتجنّب لمس المعروضات.', 'قد يكون التصوير مقيّداً داخل القاعات؛ اسأل عند الدخول.', 'القاعات داخل المبنى؛ قد تختلف الحرارة عن الخارج.', 'المواعيد والأسعار غير مُتحقَّق منها هنا.'],
    note: 'هذا مسار عام للتخطيط فقط؛ المرجع هو تفاصيل المتحف الرسمية.'
  },
  reviews: {
    eyebrow: 'تقييمات الزوّار',
    title: 'تقييمات الزوّار',
    text: 'لا ننشر تقييمات مُختلقة. يمكنك قراءة التقييمات الحقيقية المحدّثة على Google Maps.',
    cta: 'قراءة التقييمات على Google Maps'
  }
};

const natmusExtrasEn: SpotExtras = {
  info: {
    eyebrow: 'Basic information',
    title: 'Basic information',
    items: [
      { k: 'Common name', v: 'Alexandria National Museum' },
      { k: 'Type', v: 'Museum in a historic palace' },
      { k: 'Country', v: 'Egypt' },
      { k: 'City', v: 'Alexandria' },
      { k: 'Location', v: 'Tariq El-Horreya (Port Said) Street, city centre' },
      { k: 'Period', v: 'Palace around 1928; museum since 2003' },
      { k: 'Hours', v: 'Not verified — check the official body' },
      { k: 'Tickets', v: 'Not verified — check the official body' }
    ],
    note: 'Only verifiable details are listed; hours and prices change and are not verified here.'
  },
  access: {
    eyebrow: 'Getting there',
    title: 'How to reach the site',
    intro: 'The museum is in central Alexandria; these are general planning options, not official instructions.',
    cards: [
      { title: 'From the city centre', text: 'The museum is in the city centre, close to several landmarks. Travel time is not verified.' },
      { title: 'Taxi or ride-hailing', text: 'A direct way to reach the museum entrance; agree the destination before setting off.' },
      { title: 'Public transport', text: 'Some routes may pass nearby, but details are not verified; ask locally.' },
      { title: 'On foot', text: 'Its central location makes walking a suitable option if you are in the city-centre area.' }
    ],
    note: 'Transport details change; check local sources before you travel.'
  },
  charm: {
    eyebrow: 'Discover the place',
    title: 'Why it is worth visiting',
    intro: 'Four angles for understanding the site.',
    items: [
      { title: 'History', paras: ['The building was originally a palace built for the family of wood merchant Asaad Bassili Pasha around 1928.', 'It later served as a foreign consulate in the 1950s, then opened as a museum in 2003.'] },
      { title: 'Architecture', paras: ['The palace was built in an Italian style, and the building itself is part of the visit.'] },
      { title: 'Cultural value', paras: ['The museum displays collections running from the Pharaonic era through the Greek, Roman, Coptic and Islamic periods.'] },
      { title: 'The experience', paras: ['A visit inside a historic palace, combining the collection with a building of architectural value.'] }
    ]
  },
  route: {
    eyebrow: 'Visit route',
    title: 'A suggested route',
    intro: 'A general route for orientation; details may vary with how the museum is managed.',
    steps: [
      { title: 'Arrive at the entrance', text: 'Reach the museum entrance on Tariq El-Horreya Street and confirm opening hours locally.' },
      { title: 'Pharaonic collections', text: 'Begin with the pieces from the Pharaonic era.' },
      { title: 'Greek and Roman eras', text: 'Move to the pieces from the city’s Greek and Roman period.' },
      { title: 'Later periods', text: 'See the Coptic and Islamic collections.' },
      { title: 'Exit', text: 'Leave via the same entrance or the designated route.' }
    ],
    notesTitle: 'Visit notes',
    notes: ['Respect museum rules and avoid touching the exhibits.', 'Photography may be restricted in the halls; ask on entry.', 'The halls are indoors; temperatures may differ from outside.', 'Hours and prices are not verified here.'],
    note: 'This is a general route for planning only; the official museum details are the reference.'
  },
  reviews: {
    eyebrow: 'Visitor reviews',
    title: 'Visitor reviews',
    text: 'We do not publish invented reviews. You can read real, up-to-date reviews on Google Maps.',
    cta: 'Read reviews on Google Maps'
  }
};

const natmusExtrasZh: SpotExtras = {
  info: {
    eyebrow: '基础信息',
    title: '基础信息',
    items: [
      { k: '常见名称', v: '亚历山大国家博物馆' },
      { k: '景点类型', v: '历史宫殿内的博物馆' },
      { k: '国家', v: '埃及' },
      { k: '城市', v: '亚历山大' },
      { k: '位置', v: '塔里克·霍雷亚街（塞得港街），市中心' },
      { k: '时期', v: '宫殿约 1928 年；2003 年起为博物馆' },
      { k: '开放时间', v: '未核实——请查阅官方机构' },
      { k: '门票', v: '未核实——请查阅官方机构' }
    ],
    note: '仅列出可核实信息；开放时间与价格会变动，本文未核实。'
  },
  access: {
    eyebrow: '交通方式',
    title: '如何到达',
    intro: '博物馆位于亚历山大市中心；以下为一般性规划选项，并非官方说明。',
    cards: [
      { title: '从市中心出发', text: '博物馆位于市中心，靠近多处地标。用时本文未核实。' },
      { title: '出租车或网约车', text: '直达博物馆入口的方式；出发前先确认目的地。' },
      { title: '公共交通', text: '附近可能有线路经过，但细节未核实；请向当地人询问。' },
      { title: '步行', text: '位置居中；若你正在市中心一带，步行是合适的选择。' }
    ],
    note: '交通细节会变动；出行前请查阅当地来源。'
  },
  charm: {
    eyebrow: '发现魅力',
    title: '为什么值得一游',
    intro: '从四个角度理解这处景点的价值。',
    items: [
      { title: '历史', paras: ['建筑原为木材商人阿萨德·巴西利帕夏家族约 1928 年建造的宫殿。', '1950 年代曾作为外国领事馆使用，之后于 2003 年作为博物馆开放。'] },
      { title: '建筑特色', paras: ['宫殿为意大利风格建筑，建筑本身就是参观体验的一部分。'] },
      { title: '文化价值', paras: ['博物馆展品从法老时期一直延续到希腊、罗马、科普特与伊斯兰时期。'] },
      { title: '核心体验', paras: ['一次位于历史宫殿内的参观，将藏品与具有建筑价值的建筑相结合。'] }
    ]
  },
  route: {
    eyebrow: '游览路线',
    title: '建议路线',
    intro: '一条用于了解方位的一般路线；细节可能随博物馆管理方式而变化。',
    steps: [
      { title: '抵达入口', text: '到达塔里克·霍雷亚街的博物馆入口，并在现场确认开放时间。' },
      { title: '法老时期藏品', text: '从法老时期的文物开始参观。' },
      { title: '希腊与罗马时期', text: '转入这座城市希腊与罗马时期的藏品。' },
      { title: '后续时期', text: '观看科普特与伊斯兰时期的收藏。' },
      { title: '出口', text: '沿同一入口或指定路线离开。' }
    ],
    notesTitle: '游览须知',
    notes: ['遵守博物馆规定，请勿触摸展品。', '展厅内拍照可能受限，入场时请询问。', '展厅位于室内，温度可能与室外不同。', '开放时间与价格本文未核实。'],
    note: '以上仅为规划用的一般路线；请以博物馆官方信息为准。'
  },
  reviews: {
    eyebrow: '游客评价',
    title: '游客评价',
    text: '我们不发布编造的评价。你可以在 Google Maps 上查看真实且实时更新的评价。',
    cta: '在 Google Maps 查看评价'
  }
};

// ————————————————————————————————————————————————————————————
// كتل موسّعة: كوبري ستانلي (قالب صفحة المعلم الغني)
// ————————————————————————————————————————————————————————————

const stanleyExtrasAr: SpotExtras = {
  info: {
    eyebrow: 'البيانات الأساسية',
    title: 'البيانات الأساسية',
    items: [
      { k: 'الاسم الشائع', v: 'كوبري ستانلي' },
      { k: 'النوع', v: 'جسر ومعلم معماري' },
      { k: 'الدولة', v: 'مصر' },
      { k: 'المدينة', v: 'الإسكندرية' },
      { k: 'المنطقة', v: 'ستانلي، شرق المدينة' },
      { k: 'الافتتاح', v: 'سبتمبر 2001' },
      { k: 'ملاحظة المرور', v: 'تفاصيل المرور والمواعيد غير مُتحقَّق منها' }
    ],
    note: 'نعرض ما يمكن التحقق منه فقط؛ تفاصيل المرور متغيّرة وغير مُتحقَّق منها هنا.'
  },
  access: {
    eyebrow: 'الوصول',
    title: 'كيف تصل إلى الموقع',
    intro: 'الجسر في منطقة ستانلي على الساحل؛ هذه خيارات عامة للتخطيط وليست تعليمات رسمية.',
    cards: [
      { title: 'من وسط المدينة', text: 'يقع الجسر شرق المدينة على الساحل. زمن الرحلة غير مُتحقَّق منه؛ احسب وقتاً إضافياً للزحام.' },
      { title: 'سيارة أجرة أو تطبيق نقل', text: 'خيار مناسب للوصول إلى منطقة ستانلي؛ اتفق على الوجهة قبل الانطلاق.' },
      { title: 'النقل العام', text: 'قد توجد خطوط قريبة، لكن التفاصيل غير مُتحقَّق منها؛ اسأل محلياً.' },
      { title: 'المشي', text: 'المنطقة الساحلية صالحة للمشي، لكن الجسر نفسه ممر مروري.' }
    ],
    note: 'تفاصيل المواصلات تتغيّر؛ راجع مصادر محلية قبل الانطلاق.'
  },
  charm: {
    eyebrow: 'اكتشف المكان',
    title: 'لماذا يستحق الزيارة',
    intro: 'أربعة محاور لفهم قيمة الموقع.',
    items: [
      { title: 'التاريخ', paras: ['افتُتح الجسر في سبتمبر 2001، ويُعدّ من أوائل الجسور في مصر التي شُيّدت فوق مياه البحر المفتوحة.'] },
      { title: 'العمارة', paras: ['يمتد الجسر مسافة تقارب 400 متر بعرض يقارب 30 متراً، وتعلوه أبراج ذات طابع معماري إسلامي.'] },
      { title: 'القيمة الثقافية', paras: ['يُعدّ الجسر من معالم الإسكندرية الحديثة التي غيّرت شكل الواجهة الساحلية للمدينة.'] },
      { title: 'التجربة', paras: ['المنطقة المحيطة بالجسر تضم واجهات بحرية ومقاهٍ، وهي مناسبة للمشي والتصوير عند الغروب.'] }
    ]
  },
  route: {
    eyebrow: 'مسار الزيارة',
    title: 'مسار مقترح',
    intro: 'مسار عام للتعريف، وقد تختلف تفاصيله بحسب تنظيم المرور.',
    steps: [
      { title: 'الوصول إلى ستانلي', text: 'الوصول إلى منطقة ستانلي شرق المدينة والتحقق من مسارات المرور محلياً.' },
      { title: 'المرور على الجسر', text: 'عبور الجسر ومشاهدة الأبراج ذات الطابع الإسلامي.' },
      { title: 'المنطقة المحيطة', text: 'التوقّف في المنطقة الساحلية القريبة للمشي أو الجلوس.' },
      { title: 'التصوير', text: 'التقاط مناظر البحر عند الغروب عند توفر مكان آمن.' },
      { title: 'المغادرة', text: 'العودة عبر وسيلة النقل نفسها أو مسار بديل.' }
    ],
    notesTitle: 'تنبيهات للزيارة',
    notes: ['الجسر ممر مروري؛ انتبه أثناء التنقّل والتصوير.', 'الموقع مكشوف للشمس والريح البحرية؛ احمل ماءً ووقاية.', 'المنطقة مزدحمة في المساء والإجازات.', 'تفاصيل المرور والمواعيد غير مُتحقَّق منها هنا.'],
    note: 'هذا مسار عام للتخطيط فقط؛ المرجع هو تفاصيل الموقع الرسمية.'
  },
  reviews: {
    eyebrow: 'تقييمات الزوّار',
    title: 'تقييمات الزوّار',
    text: 'لا ننشر تقييمات مُختلقة. يمكنك قراءة التقييمات الحقيقية المحدّثة على Google Maps.',
    cta: 'قراءة التقييمات على Google Maps'
  }
};

const stanleyExtrasEn: SpotExtras = {
  info: {
    eyebrow: 'Basic information',
    title: 'Basic information',
    items: [
      { k: 'Common name', v: 'Stanley Bridge' },
      { k: 'Type', v: 'Bridge and architectural landmark' },
      { k: 'Country', v: 'Egypt' },
      { k: 'City', v: 'Alexandria' },
      { k: 'Area', v: 'Stanley, eastern city' },
      { k: 'Opening', v: 'September 2001' },
      { k: 'Traffic note', v: 'Traffic and timing details not verified' }
    ],
    note: 'Only verifiable details are listed; traffic details change and are not verified here.'
  },
  access: {
    eyebrow: 'Getting there',
    title: 'How to reach the site',
    intro: 'The bridge is in the Stanley district on the coast; these are general planning options, not official instructions.',
    cards: [
      { title: 'From the city centre', text: 'The bridge lies east of the centre on the coast. Travel time is not verified; allow extra for traffic.' },
      { title: 'Taxi or ride-hailing', text: 'A suitable way to reach the Stanley district; agree the destination before setting off.' },
      { title: 'Public transport', text: 'Some routes may pass nearby, but details are not verified; ask locally.' },
      { title: 'On foot', text: 'The seafront area is walkable, but the bridge itself is a traffic route.' }
    ],
    note: 'Transport details change; check local sources before you travel.'
  },
  charm: {
    eyebrow: 'Discover the place',
    title: 'Why it is worth visiting',
    intro: 'Four angles for understanding the site.',
    items: [
      { title: 'History', paras: ['The bridge opened in September 2001 and is among Egypt’s early bridges built over open sea water.'] },
      { title: 'Architecture', paras: ['It runs for roughly 400 metres at a width of about 30 metres, topped by towers in an Islamic architectural style.'] },
      { title: 'Cultural value', paras: ['It is a modern Alexandria landmark that changed the look of the city’s coastal front.'] },
      { title: 'The experience', paras: ['The area around the bridge has seafront stretches and cafés, suited to walking and photography at sunset.'] }
    ]
  },
  route: {
    eyebrow: 'Visit route',
    title: 'A suggested route',
    intro: 'A general route for orientation; details may vary with traffic arrangements.',
    steps: [
      { title: 'Arrive in Stanley', text: 'Reach the Stanley district east of the city and check traffic routes locally.' },
      { title: 'Cross the bridge', text: 'Cross the bridge and see its towers in Islamic style.' },
      { title: 'The surroundings', text: 'Stop in the nearby seafront area to walk or sit.' },
      { title: 'Photography', text: 'Capture sea views at sunset where a safe spot is available.' },
      { title: 'Leave', text: 'Return by the same transport or an alternative route.' }
    ],
    notesTitle: 'Visit notes',
    notes: ['The bridge is a traffic route; take care while moving and photographing.', 'The site is exposed to sun and sea breeze; carry water and sun protection.', 'The area is busy in the evening and on holidays.', 'Traffic and timing details are not verified here.'],
    note: 'This is a general route for planning only; the official site details are the reference.'
  },
  reviews: {
    eyebrow: 'Visitor reviews',
    title: 'Visitor reviews',
    text: 'We do not publish invented reviews. You can read real, up-to-date reviews on Google Maps.',
    cta: 'Read reviews on Google Maps'
  }
};

const stanleyExtrasZh: SpotExtras = {
  info: {
    eyebrow: '基础信息',
    title: '基础信息',
    items: [
      { k: '常见名称', v: '斯坦利桥' },
      { k: '景点类型', v: '桥梁与建筑地标' },
      { k: '国家', v: '埃及' },
      { k: '城市', v: '亚历山大' },
      { k: '区域', v: '斯坦利，城市东部' },
      { k: '通车时间', v: '2001 年 9 月' },
      { k: '交通备注', v: '交通与时间细节未核实' }
    ],
    note: '仅列出可核实信息；交通细节会变动，本文未核实。'
  },
  access: {
    eyebrow: '交通方式',
    title: '如何到达',
    intro: '桥梁位于海滨的斯坦利区；以下为一般性规划选项，并非官方说明。',
    cards: [
      { title: '从市中心出发', text: '桥梁位于市中心以东的海滨。用时本文未核实；请预留交通拥堵的额外时间。' },
      { title: '出租车或网约车', text: '前往斯坦利区较为合适的方式；出发前先确认目的地。' },
      { title: '公共交通', text: '附近可能有线路经过，但细节未核实；请向当地人询问。' },
      { title: '步行', text: '海滨一带适合步行，但桥本身为交通通道。' }
    ],
    note: '交通细节会变动；出行前请查阅当地来源。'
  },
  charm: {
    eyebrow: '发现魅力',
    title: '为什么值得一游',
    intro: '从四个角度理解这处景点的价值。',
    items: [
      { title: '历史', paras: ['桥梁于 2001 年 9 月通车，是埃及较早建造在开放海面上的桥梁之一。'] },
      { title: '建筑特色', paras: ['桥长约 400 米、宽约 30 米，桥顶建有伊斯兰风格的塔楼。'] },
      { title: '文化价值', paras: ['它是亚历山大的现代地标，改变了这座城市海岸线的面貌。'] },
      { title: '核心体验', paras: ['桥周边分布着海滨地带与咖啡馆，适合散步以及在日落时拍照。'] }
    ]
  },
  route: {
    eyebrow: '游览路线',
    title: '建议路线',
    intro: '一条用于了解方位的一般路线；细节可能随交通安排而变化。',
    steps: [
      { title: '抵达斯坦利', text: '到达城市东部的斯坦利区，并在现场确认通行路线。' },
      { title: '通过桥梁', text: '穿过桥梁，观看伊斯兰风格的塔楼。' },
      { title: '周边环境', text: '在附近的海滨地带停留，散步或坐下休息。' },
      { title: '拍照', text: '在有安全位置时，于日落时分拍摄海景。' },
      { title: '离开', text: '沿原交通方式或替代路线返回。' }
    ],
    notesTitle: '游览须知',
    notes: ['桥梁为交通通道，通行与拍照时请注意安全。', '场地暴露于阳光与海风，请带水并做好防晒。', '傍晚与假日该区域较为拥挤。', '交通与时间细节本文未核实。'],
    note: '以上仅为规划用的一般路线；请以官方现场信息为准。'
  },
  reviews: {
    eyebrow: '游客评价',
    title: '游客评价',
    text: '我们不发布编造的评价。你可以在 Google Maps 上查看真实且实时更新的评价。',
    cta: '在 Google Maps 查看评价'
  }
};

// ————————————————————————————————————————————————————————————
// كتل موسّعة: متحف المجوهرات الملكية (قالب صفحة المعلم الغني)
// ————————————————————————————————————————————————————————————

const jewelryExtrasAr: SpotExtras = {
  info: {
    eyebrow: 'البيانات الأساسية',
    title: 'البيانات الأساسية',
    items: [
      { k: 'الاسم الشائع', v: 'متحف المجوهرات الملكية' },
      { k: 'النوع', v: 'متحف داخل قصر تاريخي' },
      { k: 'الدولة', v: 'مصر' },
      { k: 'المدينة', v: 'الإسكندرية' },
      { k: 'المنطقة', v: 'زيازينيا، شرق المدينة' },
      { k: 'الفترة', v: 'القصر 1919–1923؛ متحف منذ 1986' },
      { k: 'المواعيد', v: 'غير مُتحقَّق منها — راجع الجهة الرسمية' },
      { k: 'التذاكر', v: 'غير مُتحقَّق منها — راجع الجهة الرسمية' }
    ],
    note: 'نعرض ما يمكن التحقق منه فقط؛ المواعيد والأسعار متغيّرة وغير مُتحقَّق منها هنا.'
  },
  access: {
    eyebrow: 'الوصول',
    title: 'كيف تصل إلى الموقع',
    intro: 'المتحف شرق الإسكندرية؛ هذه خيارات عامة للتخطيط وليست تعليمات رسمية.',
    cards: [
      { title: 'من وسط المدينة', text: 'يقع المتحف شرق المدينة. زمن الرحلة غير مُتحقَّق منه؛ احسب وقتاً إضافياً للزحام.' },
      { title: 'سيارة أجرة أو تطبيق نقل', text: 'خيار مباشر للوصول إلى مدخل المتحف؛ اتفق على الوجهة قبل الانطلاق.' },
      { title: 'النقل العام', text: 'قد توجد خطوط قريبة، لكن التفاصيل غير مُتحقَّق منها؛ اسأل محلياً.' },
      { title: 'المشي', text: 'المبنى داخل حيّ سكني؛ المشي مناسب إن كانت وجهتك قريبة.' }
    ],
    note: 'تفاصيل المواصلات تتغيّر؛ راجع مصادر محلية قبل الانطلاق.'
  },
  charm: {
    eyebrow: 'اكتشف المكان',
    title: 'لماذا يستحق الزيارة',
    intro: 'أربعة محاور لفهم قيمة الموقع.',
    items: [
      { title: 'التاريخ', paras: ['بدأ بناء القصر عام 1919 بأمر من السيدة زينب فهمي، وأكملته ابنتها الأميرة فاطمة الزهراء عام 1923.', 'وفي عام 1986 تحوّل القصر إلى متحف.'] },
      { title: 'العمارة', paras: ['القصر معروف بزخارفه الداخلية وقاعاته المتنوعة ذات الأسقف المزيّنة.'] },
      { title: 'القيمة الثقافية', paras: ['يضم المتحف آلاف القطع من مجوهرات وحلي أسرة محمد علي، ما يجعله مرجعاً لهذه الحقبة.'] },
      { title: 'التجربة', paras: ['زيارة داخلية تجمع بين مشاهدة المقتنيات والتجوّل في قاعات القصر التاريخي.'] }
    ]
  },
  route: {
    eyebrow: 'مسار الزيارة',
    title: 'مسار مقترح',
    intro: 'مسار عام للتعريف، وقد تختلف تفاصيله بحسب تنظيم المتحف.',
    steps: [
      { title: 'الوصول إلى المدخل', text: 'الوصول إلى مدخل المتحف في زيازينيا والتحقق من مواعيد الفتح محلياً.' },
      { title: 'القاعات الرئيسية', text: 'البدء بالقاعات الرئيسية لمشاهدة المقتنيات الأولى.' },
      { title: 'المقتنيات الملكية', text: 'الاطّلاع على المجوهرات والحلي التي تعود إلى العائلة المالكة.' },
      { title: 'الحدائق المحيطة', text: 'المرور بالحدائق المحيطة بالمبنى إن كانت متاحة.' },
      { title: 'الخروج', text: 'المغادرة عبر المدخل نفسه أو المسار المخصّص.' }
    ],
    notesTitle: 'تنبيهات للزيارة',
    notes: ['احترم قواعد المتحف وتجنّب لمس المعروضات.', 'قد يكون التصوير مقيّداً داخل القاعات؛ اسأل عند الدخول.', 'القاعات داخل المبنى؛ قد تختلف الحرارة عن الخارج.', 'المواعيد والأسعار غير مُتحقَّق منها هنا.'],
    note: 'هذا مسار عام للتخطيط فقط؛ المرجع هو تفاصيل المتحف الرسمية.'
  },
  reviews: {
    eyebrow: 'تقييمات الزوّار',
    title: 'تقييمات الزوّار',
    text: 'لا ننشر تقييمات مُختلقة. يمكنك قراءة التقييمات الحقيقية المحدّثة على Google Maps.',
    cta: 'قراءة التقييمات على Google Maps'
  }
};

const jewelryExtrasEn: SpotExtras = {
  info: {
    eyebrow: 'Basic information',
    title: 'Basic information',
    items: [
      { k: 'Common name', v: 'Royal Jewelry Museum' },
      { k: 'Type', v: 'Museum in a historic palace' },
      { k: 'Country', v: 'Egypt' },
      { k: 'City', v: 'Alexandria' },
      { k: 'Area', v: 'Zizinia, eastern city' },
      { k: 'Period', v: 'Palace 1919–1923; museum since 1986' },
      { k: 'Hours', v: 'Not verified — check the official body' },
      { k: 'Tickets', v: 'Not verified — check the official body' }
    ],
    note: 'Only verifiable details are listed; hours and prices change and are not verified here.'
  },
  access: {
    eyebrow: 'Getting there',
    title: 'How to reach the site',
    intro: 'The museum is in eastern Alexandria; these are general planning options, not official instructions.',
    cards: [
      { title: 'From the city centre', text: 'The museum lies east of the centre. Travel time is not verified; allow extra for traffic.' },
      { title: 'Taxi or ride-hailing', text: 'A direct way to reach the museum entrance; agree the destination before setting off.' },
      { title: 'Public transport', text: 'Some routes may pass nearby, but details are not verified; ask locally.' },
      { title: 'On foot', text: 'The building sits in a residential district; walking suits if your destination is nearby.' }
    ],
    note: 'Transport details change; check local sources before you travel.'
  },
  charm: {
    eyebrow: 'Discover the place',
    title: 'Why it is worth visiting',
    intro: 'Four angles for understanding the site.',
    items: [
      { title: 'History', paras: ['Construction began in 1919 for Zeinab Fahmy, and the palace was completed by her daughter Princess Fatma Al-Zahra in 1923.', 'In 1986 the palace was converted into a museum.'] },
      { title: 'Architecture', paras: ['The palace is known for its interior decoration and its varied halls with painted ceilings.'] },
      { title: 'Cultural value', paras: ['The museum holds thousands of pieces of Muhammad Ali dynasty jewelry and ornaments, making it a reference for that era.'] },
      { title: 'The experience', paras: ['An indoor visit that combines viewing the collection with walking through the halls of a historic palace.'] }
    ]
  },
  route: {
    eyebrow: 'Visit route',
    title: 'A suggested route',
    intro: 'A general route for orientation; details may vary with how the museum is managed.',
    steps: [
      { title: 'Arrive at the entrance', text: 'Reach the museum entrance in Zizinia and confirm opening hours locally.' },
      { title: 'The main halls', text: 'Begin with the main halls to see the first pieces of the collection.' },
      { title: 'Royal pieces', text: 'View the jewelry and ornaments that belonged to the royal family.' },
      { title: 'Surrounding gardens', text: 'Pass through the gardens around the building if they are open.' },
      { title: 'Exit', text: 'Leave via the same entrance or the designated route.' }
    ],
    notesTitle: 'Visit notes',
    notes: ['Respect museum rules and avoid touching the exhibits.', 'Photography may be restricted in the halls; ask on entry.', 'The halls are indoors; temperatures may differ from outside.', 'Hours and prices are not verified here.'],
    note: 'This is a general route for planning only; the official museum details are the reference.'
  },
  reviews: {
    eyebrow: 'Visitor reviews',
    title: 'Visitor reviews',
    text: 'We do not publish invented reviews. You can read real, up-to-date reviews on Google Maps.',
    cta: 'Read reviews on Google Maps'
  }
};

const jewelryExtrasZh: SpotExtras = {
  info: {
    eyebrow: '基础信息',
    title: '基础信息',
    items: [
      { k: '常见名称', v: '皇家珠宝博物馆' },
      { k: '景点类型', v: '历史宫殿内的博物馆' },
      { k: '国家', v: '埃及' },
      { k: '城市', v: '亚历山大' },
      { k: '区域', v: '齐齐尼亚，城市东部' },
      { k: '时期', v: '宫殿 1919–1923；1986 年起为博物馆' },
      { k: '开放时间', v: '未核实——请查阅官方机构' },
      { k: '门票', v: '未核实——请查阅官方机构' }
    ],
    note: '仅列出可核实信息；开放时间与价格会变动，本文未核实。'
  },
  access: {
    eyebrow: '交通方式',
    title: '如何到达',
    intro: '博物馆位于亚历山大东部；以下为一般性规划选项，并非官方说明。',
    cards: [
      { title: '从市中心出发', text: '博物馆位于市中心以东。用时本文未核实；请预留交通拥堵的额外时间。' },
      { title: '出租车或网约车', text: '直达博物馆入口的方式；出发前先确认目的地。' },
      { title: '公共交通', text: '附近可能有线路经过，但细节未核实；请向当地人询问。' },
      { title: '步行', text: '建筑位于住宅区；若目的地就在附近，步行较为合适。' }
    ],
    note: '交通细节会变动；出行前请查阅当地来源。'
  },
  charm: {
    eyebrow: '发现魅力',
    title: '为什么值得一游',
    intro: '从四个角度理解这处景点的价值。',
    items: [
      { title: '历史', paras: ['宫殿于 1919 年由泽娜布·法赫米动工兴建，1923 年由其女儿法蒂玛·扎赫拉公主完成。', '1986 年宫殿被改建为博物馆。'] },
      { title: '建筑特色', paras: ['宫殿以其华丽的内部装饰和带彩绘天花板的多样展厅著称。'] },
      { title: '文化价值', paras: ['博物馆收藏穆罕默德·阿里王朝的数千件珠宝首饰，是了解那一时代的参照。'] },
      { title: '核心体验', paras: ['一次室内参观，将观看藏品与穿行于历史宫殿展厅相结合。'] }
    ]
  },
  route: {
    eyebrow: '游览路线',
    title: '建议路线',
    intro: '一条用于了解方位的一般路线；细节可能随博物馆管理方式而变化。',
    steps: [
      { title: '抵达入口', text: '到达齐齐尼亚的博物馆入口，并在现场确认开放时间。' },
      { title: '主要展厅', text: '先从主要展厅开始，观看藏品的第一部分。' },
      { title: '皇家藏品', text: '观看属于王室成员的珠宝与首饰。' },
      { title: '周边花园', text: '若对外开放，可穿行建筑周边的花园。' },
      { title: '出口', text: '沿同一入口或指定路线离开。' }
    ],
    notesTitle: '游览须知',
    notes: ['遵守博物馆规定，请勿触摸展品。', '展厅内拍照可能受限，入场时请询问。', '展厅位于室内，温度可能与室外不同。', '开放时间与价格本文未核实。'],
    note: '以上仅为规划用的一般路线；请以博物馆官方信息为准。'
  },
  reviews: {
    eyebrow: '游客评价',
    title: '游客评价',
    text: '我们不发布编造的评价。你可以在 Google Maps 上查看真实且实时更新的评价。',
    cta: '在 Google Maps 查看评价'
  }
};

// ————————————————————————————————————————————————————————————
// كتل موسّعة: قصر المنتزه (قالب صفحة المعلم الغني)
// ————————————————————————————————————————————————————————————

const montazaExtrasAr: SpotExtras = {
  info: {
    eyebrow: 'البيانات الأساسية',
    title: 'البيانات الأساسية',
    items: [
      { k: 'الاسم الشائع', v: 'قصر المنتزه' },
      { k: 'النوع', v: 'مجمّع قصور وحدائق ملكية' },
      { k: 'الدولة', v: 'مصر' },
      { k: 'المدينة', v: 'الإسكندرية' },
      { k: 'المنطقة', v: 'المنتزه، شرق المدينة' },
      { k: 'الفترة', v: 'أواخر القرن التاسع عشر وبداية العشرين' },
      { k: 'المواعيد', v: 'غير مُتحقَّق منها — راجع الجهة الرسمية' },
      { k: 'التذاكر', v: 'غير مُتحقَّق منها — راجع الجهة الرسمية' }
    ],
    note: 'نعرض ما يمكن التحقق منه فقط؛ المواعيد والأسعار متغيّرة وغير مُتحقَّق منها هنا.'
  },
  access: {
    eyebrow: 'الوصول',
    title: 'كيف تصل إلى الموقع',
    intro: 'الموقع شرق الإسكندرية على الساحل؛ هذه خيارات عامة للتخطيط وليست تعليمات رسمية.',
    cards: [
      { title: 'من وسط المدينة', text: 'يقع المنتزه شرق المدينة. زمن الرحلة غير مُتحقَّق منه؛ احسب وقتاً إضافياً للزحام.' },
      { title: 'سيارة أجرة أو تطبيق نقل', text: 'خيار مريح للوصول إلى بوابة المجمّع؛ اتفق على الوجهة قبل الانطلاق.' },
      { title: 'النقل العام', text: 'قد توجد خطوط قريبة، لكن التفاصيل غير مُتحقَّق منها؛ اسأل محلياً.' },
      { title: 'داخل المجمّع', text: 'المساحات واسعة؛ توقّع المشي بين الحدائق والأجزاء المختلفة.' }
    ],
    note: 'تفاصيل المواصلات تتغيّر؛ راجع مصادر محلية قبل الانطلاق.'
  },
  charm: {
    eyebrow: 'اكتشف المكان',
    title: 'لماذا يستحق الزيارة',
    intro: 'أربعة محاور لفهم قيمة الموقع.',
    items: [
      { title: 'التاريخ', paras: ['تعود جذور المجمّع إلى عام 1892 حين شُيّد قصر السلاملك ليُستخدم مصيفاً صيفياً.', 'ثم بُني قصر الحرملك بين 1925 و1929 في عهد الملك فؤاد الأول.'] },
      { title: 'العمارة', paras: ['يُعرف قصر الحرملك بهندسته ذات الطابع الإيطالي، ويضم المجمّع قصوراً وحدائق منسّقة.'] },
      { title: 'القيمة الثقافية', paras: ['كان المجمّع مصيفاً للأسرة العلوية، ما يجعله شاهداً على حقبة ملكية في تاريخ المدينة.'] },
      { title: 'التجربة', paras: ['حدائق واسعة وواجهة بحرية طويلة تتيح المشي والتصوير والاستراحة بإطلالة على المتوسط.'] }
    ]
  },
  route: {
    eyebrow: 'مسار الزيارة',
    title: 'مسار مقترح',
    intro: 'مسار عام للتعريف، وقد تختلف تفاصيله بحسب تنظيم الموقع.',
    steps: [
      { title: 'الوصول إلى البوابة', text: 'الوصول إلى بوابة المجمّع شرق المدينة والتحقق من مواعيد الدخول محلياً.' },
      { title: 'التنزّه في الحدائق', text: 'المشي في الحدائق الواسعة والاستمتاع بالممرات والأشجار.' },
      { title: 'قصر الحرملك من الخارج', text: 'مشاهدة قصر الحرملك وواجهته ذات الطابع الإيطالي.' },
      { title: 'الواجهة البحرية', text: 'الوصول إلى الساحل لالتقاط مناظر مفتوحة على البحر المتوسط.' },
      { title: 'الاستراحة', text: 'التوقّف في منطقة الحدائق للاستراحة قبل المغادرة.' }
    ],
    notesTitle: 'تنبيهات للزيارة',
    notes: ['احترم الحدائق والنباتات ولا تقطف منها.', 'الحدائق مكشوفة للشمس؛ احمل ماءً ووقاية من الشمس.', 'قد تُطلب رسوم لبعض الأجزاء؛ غير مُتحقَّق منها هنا.', 'احتفظ بالمكان نظيفاً والتزم بالتعليمات المحلية.'],
    note: 'هذا مسار عام للتخطيط فقط؛ المرجع هو تفاصيل الموقع الرسمية.'
  },
  reviews: {
    eyebrow: 'تقييمات الزوّار',
    title: 'تقييمات الزوّار',
    text: 'لا ننشر تقييمات مُختلقة. يمكنك قراءة التقييمات الحقيقية المحدّثة على Google Maps.',
    cta: 'قراءة التقييمات على Google Maps'
  }
};

const montazaExtrasEn: SpotExtras = {
  info: {
    eyebrow: 'Basic information',
    title: 'Basic information',
    items: [
      { k: 'Common name', v: 'Montaza Palace' },
      { k: 'Type', v: 'Royal palaces and gardens complex' },
      { k: 'Country', v: 'Egypt' },
      { k: 'City', v: 'Alexandria' },
      { k: 'Area', v: 'Montaza, eastern city' },
      { k: 'Period', v: 'Late 19th to early 20th century' },
      { k: 'Hours', v: 'Not verified — check the official body' },
      { k: 'Tickets', v: 'Not verified — check the official body' }
    ],
    note: 'Only verifiable details are listed; hours and prices change and are not verified here.'
  },
  access: {
    eyebrow: 'Getting there',
    title: 'How to reach the site',
    intro: 'The site is on the coast east of Alexandria; these are general planning options, not official instructions.',
    cards: [
      { title: 'From the city centre', text: 'Montaza lies east of the centre. Travel time is not verified; allow extra for traffic.' },
      { title: 'Taxi or ride-hailing', text: 'A comfortable way to reach the complex gate; agree the destination before setting off.' },
      { title: 'Public transport', text: 'Some routes may pass nearby, but details are not verified; ask locally.' },
      { title: 'Inside the complex', text: 'The grounds are large; expect to walk between the gardens and different parts.' }
    ],
    note: 'Transport details change; check local sources before you travel.'
  },
  charm: {
    eyebrow: 'Discover the place',
    title: 'Why it is worth visiting',
    intro: 'Four angles for understanding the site.',
    items: [
      { title: 'History', paras: ['The complex traces its roots to 1892, when the Salamlek Palace was built as a summer residence.', 'The Haramlek Palace followed between 1925 and 1929 under King Fuad I.'] },
      { title: 'Architecture', paras: ['The Haramlek Palace is known for its Italianate architecture, and the complex includes palaces and landscaped gardens.'] },
      { title: 'Cultural value', paras: ['It served as a summer retreat for the Muhammad Ali dynasty, a witness to a royal era in the city’s history.'] },
      { title: 'The experience', paras: ['Extensive gardens and a long seafront allow walking, photography and rest with Mediterranean views.'] }
    ]
  },
  route: {
    eyebrow: 'Visit route',
    title: 'A suggested route',
    intro: 'A general route for orientation; details may vary with how the site is managed.',
    steps: [
      { title: 'Arrive at the gate', text: 'Reach the complex gate east of the city and confirm entry hours locally.' },
      { title: 'Walk the gardens', text: 'Stroll through the extensive gardens and enjoy the walkways and trees.' },
      { title: 'See the Haramlek Palace', text: 'View the Haramlek Palace and its Italianate facade from outside.' },
      { title: 'The seafront', text: 'Reach the coast for open views over the Mediterranean.' },
      { title: 'Rest', text: 'Pause in the garden area to rest before leaving.' }
    ],
    notesTitle: 'Visit notes',
    notes: ['Respect the gardens and plants; do not pick them.', 'The gardens are exposed to the sun; carry water and sun protection.', 'A fee may apply for some parts; not verified here.', 'Keep the place clean and follow local rules.'],
    note: 'This is a general route for planning only; the official site details are the reference.'
  },
  reviews: {
    eyebrow: 'Visitor reviews',
    title: 'Visitor reviews',
    text: 'We do not publish invented reviews. You can read real, up-to-date reviews on Google Maps.',
    cta: 'Read reviews on Google Maps'
  }
};

const montazaExtrasZh: SpotExtras = {
  info: {
    eyebrow: '基础信息',
    title: '基础信息',
    items: [
      { k: '常见名称', v: '蒙塔扎宫' },
      { k: '景点类型', v: '皇家宫殿与花园建筑群' },
      { k: '国家', v: '埃及' },
      { k: '城市', v: '亚历山大' },
      { k: '区域', v: '蒙塔扎，城市东部' },
      { k: '时期', v: '19 世纪末至 20 世纪初' },
      { k: '开放时间', v: '未核实——请查阅官方机构' },
      { k: '门票', v: '未核实——请查阅官方机构' }
    ],
    note: '仅列出可核实信息；开放时间与价格会变动，本文未核实。'
  },
  access: {
    eyebrow: '交通方式',
    title: '如何到达',
    intro: '景区位于亚历山大城东海岸；以下为一般性规划选项，并非官方说明。',
    cards: [
      { title: '从市中心出发', text: '蒙塔扎位于市中心以东。用时本文未核实；请预留交通拥堵的额外时间。' },
      { title: '出租车或网约车', text: '前往园区大门较为舒适的方式；出发前先确认目的地。' },
      { title: '公共交通', text: '附近可能有线路经过，但细节未核实；请向当地人询问。' },
      { title: '园区内部', text: '园区面积较大；预计需要在花园与各区域之间步行。' }
    ],
    note: '交通细节会变动；出行前请查阅当地来源。'
  },
  charm: {
    eyebrow: '发现魅力',
    title: '为什么值得一游',
    intro: '从四个角度理解这处景点的价值。',
    items: [
      { title: '历史', paras: ['建筑群的历史可追溯至 1892 年，当时建造了萨拉姆莱克宫作为夏季居所。', '哈拉姆莱克宫随后在 1925 至 1929 年间、福阿德一世国王时期建成。'] },
      { title: '建筑特色', paras: ['哈拉姆莱克宫以意大利式建筑著称，建筑群包含多座宫殿与经过规划的花园。'] },
      { title: '文化价值', paras: ['它曾是穆罕默德·阿里王朝的夏季行宫，见证了这座城市的一段王室历史。'] },
      { title: '核心体验', paras: ['大片花园与漫长的海滨线，可供散步、拍照与休憩，并可眺望地中海。'] }
    ]
  },
  route: {
    eyebrow: '游览路线',
    title: '建议路线',
    intro: '一条用于了解方位的一般路线；细节可能随现场管理方式而变化。',
    steps: [
      { title: '抵达大门', text: '到达城市东部的园区大门，并在现场确认入场时间。' },
      { title: '漫步花园', text: '在大片花园中散步，欣赏步道与树木。' },
      { title: '外观哈拉姆莱克宫', text: '从外部观看哈拉姆莱克宫及其意大利式立面。' },
      { title: '海滨', text: '走到海岸，欣赏开阔的地中海景色。' },
      { title: '休憩', text: '离开前在花园区域稍作休息。' }
    ],
    notesTitle: '游览须知',
    notes: ['爱护花园与植物，请勿采摘。', '花园暴露在阳光下，请带水并做好防晒。', '部分区域可能收费，本文未核实。', '请保持环境整洁并遵守当地规定。'],
    note: '以上仅为规划用的一般路线；请以官方现场信息为准。'
  },
  reviews: {
    eyebrow: '游客评价',
    title: '游客评价',
    text: '我们不发布编造的评价。你可以在 Google Maps 上查看真实且实时更新的评价。',
    cta: '在 Google Maps 查看评价'
  }
};

// ————————————————————————————————————————————————————————————
// كتل موسّعة: كتاكومب كوم الشقافة (قالب صفحة المعلم الغني)
// ————————————————————————————————————————————————————————————

const shoqafaExtrasAr: SpotExtras = {
  info: {
    eyebrow: 'البيانات الأساسية',
    title: 'البيانات الأساسية',
    items: [
      { k: 'الاسم الشائع', v: 'كتاكومب كوم الشقافة' },
      { k: 'النوع', v: 'مقبرة أثرية منحوتة في الصخر' },
      { k: 'الدولة', v: 'مصر' },
      { k: 'المدينة', v: 'الإسكندرية' },
      { k: 'المنطقة', v: 'كوم الشقافة، غرب المدينة' },
      { k: 'تاريخ الاكتشاف', v: 'عام 1900 (اكتشاف عرضي)' },
      { k: 'المواعيد', v: 'غير مُتحقَّق منها — راجع الجهة الرسمية' },
      { k: 'التذاكر', v: 'غير مُتحقَّق منها — راجع الجهة الرسمية' }
    ],
    note: 'نعرض ما يمكن التحقق منه فقط؛ المواعيد والأسعار متغيّرة وغير مُتحقَّق منها هنا.'
  },
  access: {
    eyebrow: 'الوصول',
    title: 'كيف تصل إلى الموقع',
    intro: 'الموقع غرب الإسكندرية؛ هذه خيارات عامة للتخطيط وليست تعليمات رسمية.',
    cards: [
      { title: 'من وسط المدينة', text: 'تقع المقبرة غرب المدينة. زمن الرحلة غير مُتحقَّق منه؛ احسب وقتاً إضافياً للزحام.' },
      { title: 'سيارة أجرة أو تطبيق نقل', text: 'الخيار الأسهل للوصول المباشر؛ اتفق على الوجهة قبل الانطلاق.' },
      { title: 'النقل العام', text: 'قد توجد خطوط قريبة، لكن التفاصيل غير مُتحقَّق منها؛ اسأل محلياً.' },
      { title: 'المشي', text: 'الموقع خارج قلب المسار السياحي؛ المشي مناسب فقط إن كنت قريباً.' }
    ],
    note: 'تفاصيل المواصلات تتغيّر؛ راجع مصادر محلية قبل الانطلاق.'
  },
  charm: {
    eyebrow: 'اكتشف المكان',
    title: 'لماذا يستحق الزيارة',
    intro: 'أربعة محاور لفهم قيمة الموقع.',
    items: [
      { title: 'التاريخ', paras: ['اكتُشفت المقبرة مصادفةً عام 1900، وتُعدّ من أكبر مواقع الدفن الرومانية في الإسكندرية.', 'تمتد على ثلاثة مستويات تحت الأرض حتى عمق يقارب 35 متراً.'] },
      { title: 'العمارة', paras: ['يربط سلّم حلزوني بين الطبقات، وهي من أبرز نماذج المعمار الجنائزي المحفوظة في المدينة.'] },
      { title: 'القيمة الثقافية', paras: ['تجمع النقوش بين الطراز المصري القديم والطراز اليوناني الروماني، وهي سمة تعكس تعدّد ثقافات الإسكندرية.'] },
      { title: 'التجربة', paras: ['الزيارة داخل تجويفات صخرية مضاءة صناعياً؛ يُنصح بحذاء مريح والانتباه للسلالم.'] }
    ]
  },
  route: {
    eyebrow: 'مسار الزيارة',
    title: 'مسار مقترح',
    intro: 'مسار عام للتعريف، وقد تختلف تفاصيله بحسب تنظيم الموقع.',
    steps: [
      { title: 'الوصول إلى المدخل', text: 'الوصول إلى مدخل الموقع في كوم الشقافة والتحقق من مواعيد الافتتاح محلياً.' },
      { title: 'النزول عبر السلّم الحلزوني', text: 'السلّم ينزل عبر الطبقات الثلاث؛ خُذ وقتك في الدرجات.' },
      { title: 'الردهة الرئيسية', text: 'مشاهدة ردهة الدفن الرئيسية والنقوش المختلطة الطراز.' },
      { title: 'الطبقات السفلى', text: 'النزول إلى المستويات الأعمق لمشاهدة بقية الفتحات والتفاصيل.' },
      { title: 'الخروج', text: 'العودة عبر السلّم أو المسار المخصّص للخروج.' }
    ],
    notesTitle: 'تنبيهات للزيارة',
    notes: ['احترم قواعد الموقع وتجنّب لمس النقوش.', 'التجويفات أبرد وأكثر رطوبة؛ احمل طبقة إضافية.', 'قد يكون التصوير مقيّداً؛ اسأل عند الدخول.', 'المواعيد والأسعار غير مُتحقَّق منها هنا.'],
    note: 'هذا مسار عام للتخطيط فقط؛ المرجع هو تفاصيل الموقع الرسمية.'
  },
  reviews: {
    eyebrow: 'تقييمات الزوّار',
    title: 'تقييمات الزوّار',
    text: 'لا ننشر تقييمات مُختلقة. يمكنك قراءة التقييمات الحقيقية المحدّثة على Google Maps.',
    cta: 'قراءة التقييمات على Google Maps'
  }
};

const shoqafaExtrasEn: SpotExtras = {
  info: {
    eyebrow: 'Basic information',
    title: 'Basic information',
    items: [
      { k: 'Common name', v: 'Catacombs of Kom El Shoqafa' },
      { k: 'Type', v: 'Rock-cut archaeological necropolis' },
      { k: 'Country', v: 'Egypt' },
      { k: 'City', v: 'Alexandria' },
      { k: 'Area', v: 'Kom El Shoqafa, western city' },
      { k: 'Discovery', v: '1900 (found by accident)' },
      { k: 'Hours', v: 'Not verified — check the official body' },
      { k: 'Tickets', v: 'Not verified — check the official body' }
    ],
    note: 'Only verifiable details are listed; hours and prices change and are not verified here.'
  },
  access: {
    eyebrow: 'Getting there',
    title: 'How to reach the site',
    intro: 'The site is in western Alexandria; these are general planning options, not official instructions.',
    cards: [
      { title: 'From the city centre', text: 'The necropolis is west of the centre. Travel time is not verified; allow extra for traffic.' },
      { title: 'Taxi or ride-hailing', text: 'The easiest way to arrive directly; agree the destination before setting off.' },
      { title: 'Public transport', text: 'Some routes may pass nearby, but details are not verified; ask locally.' },
      { title: 'On foot', text: 'The site sits outside the main tourist circuit; walking suits only if you are nearby.' }
    ],
    note: 'Transport details change; check local sources before you travel.'
  },
  charm: {
    eyebrow: 'Discover the place',
    title: 'Why it is worth visiting',
    intro: 'Four angles for understanding the site.',
    items: [
      { title: 'History', paras: ['The necropolis was discovered by accident in 1900, and is among the largest Roman burial sites in Alexandria.', 'It extends across three underground levels to a depth of roughly 35 metres.'] },
      { title: 'Architecture', paras: ['A spiral staircase links the levels, making it one of the best-preserved examples of funerary architecture in the city.'] },
      { title: 'Cultural value', paras: ['Its carvings combine ancient Egyptian style with Greek and Roman style, reflecting Alexandria’s mixed cultures.'] },
      { title: 'The experience', paras: ['A visit moves through artificially lit rock chambers; comfortable shoes and care on the stairs are advised.'] }
    ]
  },
  route: {
    eyebrow: 'Visit route',
    title: 'A suggested route',
    intro: 'A general route for orientation; details may vary with how the site is managed.',
    steps: [
      { title: 'Arrive at the entrance', text: 'Reach the site entrance in Kom El Shoqafa and confirm opening hours locally.' },
      { title: 'Descend the spiral staircase', text: 'The staircase descends through the three levels; take the steps at your own pace.' },
      { title: 'The main rotunda', text: 'See the main burial rotunda and the mixed-style carvings.' },
      { title: 'The lower levels', text: 'Go down to the deeper levels to see the remaining chambers and details.' },
      { title: 'Exit', text: 'Return via the staircase or the designated exit route.' }
    ],
    notesTitle: 'Visit notes',
    notes: ['Respect site rules and avoid touching the carvings.', 'The chambers are cooler and more humid; bring an extra layer.', 'Photography may be restricted; ask on entry.', 'Hours and prices are not verified here.'],
    note: 'This is a general route for planning only; the official site details are the reference.'
  },
  reviews: {
    eyebrow: 'Visitor reviews',
    title: 'Visitor reviews',
    text: 'We do not publish invented reviews. You can read real, up-to-date reviews on Google Maps.',
    cta: 'Read reviews on Google Maps'
  }
};

const shoqafaExtrasZh: SpotExtras = {
  info: {
    eyebrow: '基础信息',
    title: '基础信息',
    items: [
      { k: '常见名称', v: '科姆·舒卡法地下墓穴' },
      { k: '景点类型', v: '岩凿考古墓葬群' },
      { k: '国家', v: '埃及' },
      { k: '城市', v: '亚历山大' },
      { k: '区域', v: '科姆·舒卡法，城市西部' },
      { k: '发现时间', v: '1900 年（偶然发现）' },
      { k: '开放时间', v: '未核实——请查阅官方机构' },
      { k: '门票', v: '未核实——请查阅官方机构' }
    ],
    note: '仅列出可核实信息；开放时间与价格会变动，本文未核实。'
  },
  access: {
    eyebrow: '交通方式',
    title: '如何到达',
    intro: '遗址位于亚历山大西部；以下为一般性规划选项，并非官方说明。',
    cards: [
      { title: '从市中心出发', text: '墓穴位于市中心以西。用时本文未核实；请预留交通拥堵的额外时间。' },
      { title: '出租车或网约车', text: '直达最省事的方式；出发前先确认目的地。' },
      { title: '公共交通', text: '附近可能有线路经过，但细节未核实；请向当地人询问。' },
      { title: '步行', text: '遗址不在主要旅游线路上；只有在附近时步行才合适。' }
    ],
    note: '交通细节会变动；出行前请查阅当地来源。'
  },
  charm: {
    eyebrow: '发现魅力',
    title: '为什么值得一游',
    intro: '从四个角度理解这处遗址的价值。',
    items: [
      { title: '历史', paras: ['墓穴于 1900 年被偶然发现，是亚历山大规模最大的罗马时期墓葬之一。', '它在地下延伸三层，深度约 35 米。'] },
      { title: '建筑特色', paras: ['一座螺旋楼梯连接各层，是这座城市保存最好的墓葬建筑范例之一。'] },
      { title: '文化价值', paras: ['雕刻融合古埃及风格与希腊、罗马风格，反映出亚历山大多元交融的文化。'] },
      { title: '核心体验', paras: ['参观穿行于人工照明的岩凿空间中；建议穿舒适的鞋子并留意台阶。'] }
    ]
  },
  route: {
    eyebrow: '游览路线',
    title: '建议路线',
    intro: '一条用于了解方位的一般路线；细节可能随现场管理方式而变化。',
    steps: [
      { title: '抵达入口', text: '到达科姆·舒卡法的遗址入口，并在现场确认开放时间。' },
      { title: '沿螺旋楼梯下行', text: '楼梯贯穿三层；请按自己的节奏下台阶。' },
      { title: '主圆厅', text: '观看主墓室圆厅与混合风格的雕刻。' },
      { title: '下层空间', text: '继续下到更深层，观看其余墓室与细节。' },
      { title: '出口', text: '沿楼梯或指定出口路线返回。' }
    ],
    notesTitle: '游览须知',
    notes: ['遵守遗址规定，请勿触摸雕刻。', '地下空间更凉爽潮湿，建议携带一件外套。', '拍照可能受限，入场时请询问。', '开放时间与价格本文未核实。'],
    note: '以上仅为规划用的一般路线；请以官方现场信息为准。'
  },
  reviews: {
    eyebrow: '游客评价',
    title: '游客评价',
    text: '我们不发布编造的评价。你可以在 Google Maps 上查看真实且实时更新的评价。',
    cta: '在 Google Maps 查看评价'
  }
};

const anfushiExtrasAr: SpotExtras = {
  info: {
    eyebrow: 'البيانات الأساسية',
    title: 'البيانات الأساسية',
    items: [
      { k: 'الاسم الشائع', v: 'مقابر الأنفوشي' },
      { k: 'النوع', v: 'مقابر صخرية · موقع أثري' },
      { k: 'الدولة', v: 'مصر' },
      { k: 'المدينة', v: 'الإسكندرية' },
      { k: 'المنطقة', v: 'الأنفوشي، غرب المدينة' },
      { k: 'الفترة', v: 'العصر البطلمي (نحو القرن الثاني قبل الميلاد)' },
      { k: 'تاريخ الاكتشاف', v: 'أوائل القرن العشرين' },
      { k: 'المواعيد', v: 'غير مُتحقَّق منها — راجع الجهة الرسمية' },
      { k: 'التذاكر', v: 'غير مُتحقَّق منها — راجع الجهة الرسمية' }
    ],
    note: 'نعرض ما يمكن التحقق منه فقط؛ المواعيد والأسعار متغيّرة وغير مُتحقَّق منها هنا.'
  },
  access: {
    eyebrow: 'الوصول',
    title: 'كيف تصل إلى الموقع',
    intro: 'تقع المقابر في الأنفوشي غرب الإسكندرية؛ هذه خيارات عامة للتخطيط وليست تعليمات رسمية.',
    cards: [
      { title: 'من وسط المدينة', text: 'تقع المقابر غرب مركز المدينة. زمن الرحلة غير مُتحقَّق منه؛ احسب وقتاً إضافياً للزحام.' },
      { title: 'سيارة أجرة أو تطبيق نقل', text: 'الخيار الأسهل للوصول المباشر؛ اتفق على الوجهة قبل الانطلاق.' },
      { title: 'النقل العام', text: 'قد توجد خطوط قريبة، لكن التفاصيل غير مُتحقَّق منها؛ اسأل محلياً.' },
      { title: 'المشي', text: 'الموقع خارج قلب المسار السياحي؛ المشي مناسب فقط إن كنت قريباً.' }
    ],
    note: 'تفاصيل المواصلات تتغيّر؛ راجع مصادر محلية قبل الانطلاق.'
  },
  charm: {
    eyebrow: 'اكتشف المكان',
    title: 'لماذا يستحق الزيارة',
    intro: 'أربعة محاور لفهم قيمة الموقع.',
    items: [
      { title: 'التاريخ', paras: ['تعود المقابر إلى العصر البطلمي، وتُعدّ جزءاً من الجبانة الغربية القديمة للإسكندرية.', 'اكتُشفت خلال السنوات الأولى من القرن العشرين.'] },
      { title: 'العمارة', paras: ['مقابر منحوتة في الصخر بمداخل وممرات داخلية، وهي من النماذج الجنائزية المحفوظة في المدينة.'] },
      { title: 'القيمة الثقافية', paras: ['تدمج النقوش والزخارف بين الطراز اليوناني والطراز المصري القديم، وهي سمة لفنون الإسكندرية في العصر البطلمي.'] },
      { title: 'التجربة', paras: ['الزيارة داخل تجويفات صخرية؛ يُنصح بحذاء مريح والانتباه للدرجات والإضاءة.'] }
    ]
  },
  route: {
    eyebrow: 'مسار الزيارة',
    title: 'مسار مقترح',
    intro: 'مسار عام للتعريف، وقد تختلف تفاصيله بحسب تنظيم الموقع.',
    steps: [
      { title: 'الوصول إلى المدخل', text: 'الوصول إلى موقع المقابر في الأنفوشي والتحقق من مواعيد الافتتاح محلياً.' },
      { title: 'المدخل والممر', text: 'الدخول عبر المدخل الصخري والممر الرئيسي.' },
      { title: 'الفتحات الداخلية', text: 'مشاهدة الفتحات والمقابر المنحوتة في الجدران.' },
      { title: 'النقوش الملوّنة', text: 'التوقف عند النقوش والزخارف المختلطة الطراز.' },
      { title: 'الخروج', text: 'العودة عبر المسار المخصّص للخروج.' }
    ],
    notesTitle: 'تنبيهات للزيارة',
    notes: ['احترم قواعد الموقع وتجنّب لمس النقوش.', 'التجويفات الصخرية قد تكون أبرد؛ احمل طبقة إضافية.', 'قد يكون التصوير مقيّداً؛ اسأل عند الدخول.', 'المواعيد والأسعار غير مُتحقَّق منها هنا.'],
    note: 'هذا مسار عام للتخطيط فقط؛ المرجع هو تفاصيل الموقع الرسمية.'
  },
  reviews: {
    eyebrow: 'تقييمات الزوّار',
    title: 'تقييمات الزوّار',
    text: 'لا ننشر تقييمات مُختلقة. يمكنك قراءة التقييمات الحقيقية المحدّثة على Google Maps.',
    cta: 'قراءة التقييمات على Google Maps'
  }
};

const anfushiExtrasEn: SpotExtras = {
  info: {
    eyebrow: 'Basic information',
    title: 'Basic information',
    items: [
      { k: 'Common name', v: 'Anfushi Tombs' },
      { k: 'Type', v: 'Rock-cut tombs · archaeological site' },
      { k: 'Country', v: 'Egypt' },
      { k: 'City', v: 'Alexandria' },
      { k: 'Area', v: 'Anfushi, western city' },
      { k: 'Period', v: 'Ptolemaic era (around the 2nd century BC)' },
      { k: 'Discovery', v: 'Early 20th century' },
      { k: 'Hours', v: 'Not verified — check the official body' },
      { k: 'Tickets', v: 'Not verified — check the official body' }
    ],
    note: 'Only verifiable details are listed; hours and prices change and are not verified here.'
  },
  access: {
    eyebrow: 'Getting there',
    title: 'How to reach the site',
    intro: 'The tombs are in Anfushi, western Alexandria; these are general planning options, not official instructions.',
    cards: [
      { title: 'From the city centre', text: 'The tombs lie west of the centre. Travel time is not verified; allow extra for traffic.' },
      { title: 'Taxi or ride-hailing', text: 'The easiest way to arrive directly; agree the destination before setting off.' },
      { title: 'Public transport', text: 'Some routes may pass nearby, but details are not verified; ask locally.' },
      { title: 'On foot', text: 'The site sits outside the main tourist circuit; walking suits only if you are nearby.' }
    ],
    note: 'Transport details change; check local sources before you travel.'
  },
  charm: {
    eyebrow: 'Discover the place',
    title: 'Why it is worth visiting',
    intro: 'Four angles for understanding the site.',
    items: [
      { title: 'History', paras: ['The tombs date to the Ptolemaic era and form part of Alexandria’s ancient western necropolis.', 'They were discovered during the early years of the 20th century.'] },
      { title: 'Architecture', paras: ['Rock-cut tombs with entrances and interior passages, among the funerary structures preserved in the city.'] },
      { title: 'Cultural value', paras: ['Carvings and decoration combine Greek style with ancient Egyptian style, a hallmark of Alexandrian art in the Ptolemaic period.'] },
      { title: 'The experience', paras: ['A visit moves through rock chambers; comfortable shoes and care on the steps and in low light are advised.'] }
    ]
  },
  route: {
    eyebrow: 'Visit route',
    title: 'A suggested route',
    intro: 'A general route for orientation; details may vary with how the site is managed.',
    steps: [
      { title: 'Arrive at the entrance', text: 'Reach the tombs in Anfushi and confirm opening hours locally.' },
      { title: 'Entrance and passage', text: 'Enter through the rock-cut entrance and the main passage.' },
      { title: 'Interior chambers', text: 'See the chambers and tombs cut into the walls.' },
      { title: 'Painted carvings', text: 'Pause at the carvings and decoration in mixed styles.' },
      { title: 'Exit', text: 'Return via the designated exit route.' }
    ],
    notesTitle: 'Visit notes',
    notes: ['Respect site rules and avoid touching the carvings.', 'Rock chambers can be cooler; bring an extra layer.', 'Photography may be restricted; ask on entry.', 'Hours and prices are not verified here.'],
    note: 'This is a general route for planning only; the official site details are the reference.'
  },
  reviews: {
    eyebrow: 'Visitor reviews',
    title: 'Visitor reviews',
    text: 'We do not publish invented reviews. You can read real, up-to-date reviews on Google Maps.',
    cta: 'Read reviews on Google Maps'
  }
};

const anfushiExtrasZh: SpotExtras = {
  info: {
    eyebrow: '基础信息',
    title: '基础信息',
    items: [
      { k: '常见名称', v: '安福希墓地' },
      { k: '景点类型', v: '岩凿墓葬 · 考古遗址' },
      { k: '国家', v: '埃及' },
      { k: '城市', v: '亚历山大' },
      { k: '区域', v: '安福希，城市西部' },
      { k: '时期', v: '托勒密时期（约公元前 2 世纪）' },
      { k: '发现时间', v: '20 世纪初' },
      { k: '开放时间', v: '未核实——请查阅官方机构' },
      { k: '门票', v: '未核实——请查阅官方机构' }
    ],
    note: '仅列出可核实信息；开放时间与价格会变动，本文未核实。'
  },
  access: {
    eyebrow: '交通方式',
    title: '如何到达',
    intro: '墓地位于亚历山大西部的安福希；以下为一般性规划选项，并非官方说明。',
    cards: [
      { title: '从市中心出发', text: '墓地位于市中心以西。用时本文未核实；请预留交通拥堵的额外时间。' },
      { title: '出租车或网约车', text: '直达最省事的方式；出发前先确认目的地。' },
      { title: '公共交通', text: '附近可能有线路经过，但细节未核实；请向当地人询问。' },
      { title: '步行', text: '遗址不在主要旅游线路上；只有在附近时步行才合适。' }
    ],
    note: '交通细节会变动；出行前请查阅当地来源。'
  },
  charm: {
    eyebrow: '发现魅力',
    title: '为什么值得一游',
    intro: '从四个角度理解这处遗址的价值。',
    items: [
      { title: '历史', paras: ['墓地属于托勒密时期，是亚历山大古代西墓区的一部分。', '它们于 20 世纪初被发现。'] },
      { title: '建筑特色', paras: ['开凿于岩层中的墓葬，设有入口与内部通道，是城中保存下来的墓葬建筑之一。'] },
      { title: '文化价值', paras: ['壁画与装饰融合希腊风格与古埃及风格，是托勒密时期亚历山大艺术的典型特征。'] },
      { title: '核心体验', paras: ['参观穿行于岩凿空间中；建议穿舒适的鞋子，并留意台阶与照明。'] }
    ]
  },
  route: {
    eyebrow: '游览路线',
    title: '建议路线',
    intro: '一条用于了解方位的一般路线；细节可能随现场管理方式而变化。',
    steps: [
      { title: '抵达入口', text: '到达安福希的墓地，并在现场确认开放时间。' },
      { title: '入口与通道', text: '从岩凿入口进入并沿主通道前行。' },
      { title: '内部墓室', text: '观看开凿于墙壁中的墓室与墓穴。' },
      { title: '彩绘壁画', text: '在混合风格的壁画与装饰前驻足观看。' },
      { title: '出口', text: '沿指定出口路线返回。' }
    ],
    notesTitle: '游览须知',
    notes: ['遵守遗址规定，请勿触摸壁画。', '岩凿空间可能更凉爽，建议携带一件外套。', '拍照可能受限，入场时请询问。', '开放时间与价格本文未核实。'],
    note: '以上仅为规划用的一般路线；请以官方现场信息为准。'
  },
  reviews: {
    eyebrow: '游客评价',
    title: '游客评价',
    text: '我们不发布编造的评价。你可以在 Google Maps 上查看真实且实时更新的评价。',
    cta: '在 Google Maps 查看评价'
  }
};

/** خرائط الكتل الموسّعة: المعالم الستة التي أُثريت بقالب الصفحة الغني. */
export const spotExtras: Partial<Record<SpotSlug, Record<Locale, SpotExtras>>> = {
  'catacombs-of-kom-el-shoqafa': { ar: shoqafaExtrasAr, en: shoqafaExtrasEn, zh: shoqafaExtrasZh },
  'montaza-palace': { ar: montazaExtrasAr, en: montazaExtrasEn, zh: montazaExtrasZh },
  'royal-jewelry-museum': { ar: jewelryExtrasAr, en: jewelryExtrasEn, zh: jewelryExtrasZh },
  'stanley-bridge': { ar: stanleyExtrasAr, en: stanleyExtrasEn, zh: stanleyExtrasZh },
  'alexandria-national-museum': { ar: natmusExtrasAr, en: natmusExtrasEn, zh: natmusExtrasZh },
  'anfushi-tombs': { ar: anfushiExtrasAr, en: anfushiExtrasEn, zh: anfushiExtrasZh }
};
