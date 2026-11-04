// محتوى صفحة «المعالم المجاورة» بثلاث لغات، منفصل عن محتوى الصفحة الرئيسية.
// المسافات والمواعيد والأسعار كلها غير مُتحقَّق منها، ويُنبَّه الزائر للتحقق قبل الانطلاق.
import type { NearbyContent } from './types';
import { SITE } from '../data/site';

export const nearbyAr: NearbyContent = {
  locale: 'ar',
  title: `المعالم المجاورة والنقل · ${SITE.fullNameAr} (${SITE.cityAr})`,
  description: `ستة معالم معروفة في ${SITE.cityAr} — بينها قلعة قايتباي ومسجد أبو العباس المرسي ومكتبة الإسكندرية — مع أفكار طعام محلي وملاحظات نقل عملية قرب النصب التذكاري للجندي المجهول في ${SITE.districtAr}.`,
  eyebrow: 'المعالم المجاورة',
  hero: {
    title: 'ماذا حول النصب؟',
    sub: 'ستة معالم معروفة في الإسكندرية، وأكل محلي يومي، وملاحظات عملية للنقل — كلها في نطاق الوصول من النصب في المنشية.',
    lead: 'المسافات وساعات العمل هنا غير مُتحقَّق منها، وترتيب القائمة لا يعني القرب. افحص مسار كل وجهة ووسيلة النقل ومواعيدها الرسمية قبل الانطلاق.',
    cta: 'العودة إلى دليل الزيارة ↓'
  },
  landmarks: {
    eyebrow: 'المعالم',
    title: 'معالم لجولة ممتدة',
    intro: 'ست وجهات معروفة يمكن دمجها في جولة، كل منها يُزار باستقلالية. لم نتحقق من المسافات؛ تحقق من الطريق والمواعيد قبل الذهاب.',
    spots: [
      {
        tag: 'قلعة · ميناء',
        distance: 'عند طرف الميناء الشرقي',
        name: 'قلعة قايتباي',
        desc: 'قلعة مملوكية شُيّدت في القرن الخامس عشر عند طرف الميناء الشرقي، في موضع فنار الإسكندرية القديم. تتوقع أسواراً حجرية سميكة وإطلالات على البحر ومتحفاً بحرياً صغيراً في الداخل. المواعيد والتذاكر تتغير موسمياً — تأكد قبل السفر.'
      },
      {
        tag: 'مسجد',
        distance: 'نحو بحري',
        name: 'مسجد أبو العباس المرسي',
        desc: 'أشهر مساجد بحري، وتتميّز قبتها العالية ومآذنها في أفق الميناء. يُرحَّب بالزوار عادة خارج أوقات الصلاة؛ التزم باللباس المحتشم واتبع إرشادات المكان بشأن الأحذية والتصوير.'
      },
      {
        tag: 'مكتبة · ثقافة',
        distance: 'شرقاً على الكورنيش',
        name: 'مكتبة الإسكندرية',
        desc: 'مكتبة ومجمّع ثقافي حديث على الكورنيش، يستلهم فكرة مكتبة الإسكندرية القديمة. يضم متاحف وقاعات عرض وقبة سماوية؛ راجع صفحة الزيارة للمواعيد الحالية وأوقات الجولات المرشدة.'
      },
      {
        tag: 'موقع روماني',
        distance: 'وسط المدينة',
        name: 'آثار كوم الدكة',
        desc: 'موقع أثري روماني في قلب المدينة الحديثة، أشهر ما فيه المدرج المسرحي وفسيفساء «فيلا الطيور». محطة قصيرة تضيف طبقة مختلفة تماماً من تاريخ الإسكندرية.'
      },
      {
        tag: 'أثر روماني',
        distance: 'حي كرموز',
        name: 'عمود السواري (العمود الروماني)',
        desc: 'عمود شاهق من الجرانيت الأحمر يعود إلى العصر الروماني، يقع بين بقايا السرابيوم. الموقع على أرض مرتفعة وتتخلله درجات وأسطح غير مستوية، فتوخَّ الحذر أثناء التنقل.'
      },
      {
        tag: 'أسواق · حياة يومية',
        distance: 'حول الميدان',
        name: 'سوق المنشية',
        desc: 'القلب التجاري المزدحم حول النصب مباشرة — دكاكين قديمة وحياة شارع وإسكندرية اليومية، لا معلم مُعدّ للزوار. اذهب من أجل الأجواء، واحتفظ بأغراضك، واتفق على السعر قبل الشراء.'
      }
    ]
  },
  foods: {
    eyebrow: 'أفكار للطعام',
    title: 'من الساحة إلى الطاولة',
    intro: 'أطباق إسكندرانية شائعة يمكن تجربتها حول المنشية وبحري. لم نتحقق من أي فرع أو مطعم بعينه؛ تحقق من العنوان والقائمة والأسعار قبل الذهاب.',
    items: [
      { tag: 'طبق محلي', name: 'كبدة إسكندراني', desc: 'طبق إسكندراني مميز — كبدة تُطهى مع الفلفل والحار والتوابل، وتُقدَّم عادة في سندوتش أو طاسة صغيرة. شائع لدى أهل المدينة كوجبة سريعة وغير مكلفة.' },
      { tag: 'سندوتش شعبي', name: 'حوّوشي', desc: 'لحم مفروم متبّل يُخبز داخل عيش بلدي حتى يصبح مقرمشاً من الخارج وطرياً من الداخل. من أساسيات أكل الشارع المُشبع.' },
      { tag: 'مأكولات بحرية', name: 'سمك ومأكولات بحرية', desc: 'بوصفها مدينة ميناء، تشتهر الإسكندرية بأسماكها. قرب الميناء اختر مكاناً يبدو مزدحماً، واتفق على السعر بالوزن قبل الطلب.' },
      { tag: 'فطور يومي', name: 'فول وطعمية', desc: 'فطور مصر اليومي: فول مطبوخ ببطء وطعمية مقلية. رخيص ومُشبع ومتوفر بسهولة.' },
      { tag: 'حلويات', name: 'حلويات ومثلجات', desc: 'للإسكندرية تقليد طويل في المثلجات، إلى جانب حلويات مسقية بالقطر مثل البسبوسة. طريقة جيدة لإنهاء أمسية على الكورنيش.' },
      { tag: 'مقاهي', name: 'مقاهي', desc: 'اطلب قهوة تركية أو شاياً بالنعناع وراقب الشارع؛ مقاهي المنشية وبحري جزء من إيقاع المدينة اليومي.' }
    ],
    note: 'ساعات العمل والأسعار تتغير؛ تحقق منها قبل الذهاب.'
  },
  transport: {
    eyebrow: 'التنقل',
    title: 'كيف تنتقل بينها',
    intro: 'هذه اقتراحات لتخطيط جولة، وليست مساراً موثقاً. تحقق من المسافة والمعابر وإمكان الوصول ووسيلة النقل لكل وجهة على حدة.',
    cards: [
      { title: 'سيراً على الأقدام', text: 'بعض هذه الأماكن قريب في المدينة القديمة، لكن جودة الأرصفة والمرور والمعابر تتفاوت. تعامل مع كل جزء من الرحلة على حدة، وتجنّب الطرق المزدحمة ليلاً.' },
      { title: 'بسيارة أجرة أو تطبيق', text: 'الطريقة الأسهل لربط المحطات المتباعدة مثل قايتباي والمكتبة. أظهر الموقع على الخريطة، واتفق على الأجرة أو راجع سعر التطبيق مسبقاً.' },
      { title: 'بالمواصلات العامة', text: 'تخدم الحافلات والترام أجزاءً من المدينة، لكن الخطوط والمواقف تتغير. اسأل محلياً عن الخط الحالي وتأكد من مكان النزول الآمن؛ لم نتحقق من خطوط محددة.' },
      { title: 'التوقيت', text: 'الصباح أبرد وأهدأ، والعطلات والأعياد قد تُغيّر مواعيد العمل وتزيد الزحام. اترك وقتاً إضافياً للتنقل في ساعات الذروة.' }
    ]
  },
  tips: {
    eyebrow: 'نصائح عملية',
    title: 'قبل أن تنطلق',
    items: [
      'تحقق من مواعيد العمل وأسعار التذاكر لكل موقع في يوم الزيارة؛ عدة معالم تتبع جداول موسمية.',
      'احمل الماء والوقاية من الشمس في الصيف، وطبقة خفيفة في الشتاء؛ الرطوبة الساحلية قد تكون مرتفعة.',
      'التزم باللباس المحتشم في المساجد، واخلع الحذاء حيث يُطلب منك.',
      'قد يُمنع التصوير داخل المتاحف وأثناء المراسم؛ اتبع اللافتات وتعليمات العاملين.',
      'احتفظ بقدر من النقد للشراء الصغير؛ ليس كل الأكشاك أو سيارات الأجرة تقبل البطاقات.'
    ]
  },
  faq: [
    { q: 'هل هذه الأماكن قريبة من النصب سيراً على الأقدام؟', a: 'بعضها قريب داخل المدينة القديمة، وأخرى تحتاج إلى وسيلة نقل. لم نتحقق من المسافات هنا؛ افحص الطريق والمواصلات لكل محطة على حدة.' },
    { q: 'كم أحتاج من الوقت ليوم كامل في المدينة؟', a: 'نصف يوم يغطي محطتين أو ثلاث بارتياح، واليوم الكامل يتيح إضافة المكتبة وقايتباي. احسب وقتاً للزحام.' },
    { q: 'ما الترتيب المقترح للزيارة؟', a: 'لا يرتّب هذا الدليل المعالم حسب القرب. من المقترح البدء من النصب، ثم المرور ببحري نحو قايتباي، وترك المكتبة أو كوم الدكة لوقت منفصل.' },
    { q: 'هل هذه المعالم مجانية؟', a: 'بعض الساحات العامة ومشاهدة النصب مجانية، بينما قد تفرض المتاحف والقلعة والمكتبة رسوماً. لم نتحقق من أي أسعار هنا؛ راجع المصادر الرسمية.' },
    { q: 'هل المنطقة مناسبة لذوي صعوبة الحركة؟', a: 'قد تكون أرصفة المدينة القديمة والدرجات والمرور صعبة. خطّط لأجزاء أقصر، واستخدم سيارة أجرة بين المحطات، وقيّم كل موقع عند الوصول.' }
  ]
};

export const nearbyEn: NearbyContent = {
  locale: 'en',
  title: `Nearby Attractions & Getting Around · ${SITE.fullNameEn} (${SITE.cityEn})`,
  description: `Six well-known ${SITE.cityEn} landmarks — including Qaitbay Citadel, Abu al-Abbas al-Mursi Mosque and Bibliotheca Alexandrina — plus local food ideas and practical transport notes near the Naval Unknown Soldier Memorial in ${SITE.districtEn}.`,
  eyebrow: 'Nearby sights',
  hero: {
    title: 'What is around the memorial?',
    sub: 'Six well-known Alexandria landmarks, everyday local food, and practical transport notes — all within reach of the memorial in Mansheya.',
    lead: 'Distances and opening hours here are not verified, and listing order does not imply proximity. Check each destination’s route, transport and official schedule before you set out.',
    cta: 'Back to the visitor guide ↓'
  },
  landmarks: {
    eyebrow: 'Landmarks',
    title: 'Sights for a longer city walk',
    intro: 'Six well-known destinations you can combine into a walk, each visited on its own terms. Distances are unverified; check the route and hours before you go.',
    spots: [
      {
        tag: 'Fortress · harbour',
        distance: 'Eastern harbour tip',
        name: 'Qaitbay Citadel',
        desc: 'A Mamluk fortress raised in the 15th century at the tip of the eastern harbour, on the site of the ancient Pharos of Alexandria. Expect thick stone walls, sea views and a small maritime museum inside. Hours and tickets change with the season — confirm before travelling.'
      },
      {
        tag: 'Mosque',
        distance: 'Toward Bahari',
        name: 'Abu al-Abbas al-Mursi Mosque',
        desc: 'Bahari’s best-known mosque, whose tall dome and minarets stand out across the harbour skyline. Visitors are usually welcome outside prayer times; dress modestly and follow on-site guidance on shoes and photography.'
      },
      {
        tag: 'Library · culture',
        distance: 'East on the corniche',
        name: 'Bibliotheca Alexandrina',
        desc: 'A modern library and cultural complex on the corniche, echoing the idea of the ancient Library of Alexandria. It houses museums, exhibition spaces and a planetarium; check the visit page for current hours and guided-tour times.'
      },
      {
        tag: 'Roman site',
        distance: 'City centre',
        name: 'Kom El Dikka',
        desc: 'A Roman-era archaeological site in the middle of the modern city, best known for its amphitheatre and the mosaics of the “Villa of the Birds”. A compact stop that adds a very different layer of Alexandria’s history.'
      },
      {
        tag: 'Roman monument',
        distance: 'Karmouz district',
        name: 'Pompey’s Pillar',
        desc: 'A towering column of red granite from the Roman period, standing among the remains of the Serapeum. The site sits on higher ground with steps and uneven surfaces, so take care when walking around.'
      },
      {
        tag: 'Markets · daily life',
        distance: 'Around the square',
        name: 'Mansheya market quarter',
        desc: 'The busy commercial heart right around the memorial — old shops, street life and everyday Alexandria rather than a staged attraction. Go for the atmosphere, watch your belongings and agree prices before buying.'
      }
    ]
  },
  foods: {
    eyebrow: 'Food ideas',
    title: 'From the square to the table',
    intro: 'Popular Alexandrian dishes you can try around Mansheya and Bahari. No specific branch or restaurant is verified here; check the address, menu and prices before you go.',
    items: [
      { tag: 'Local dish', name: 'Alexandrian liver', desc: 'A local signature — liver cooked with peppers, chilli and spices, usually served in a sandwich or a small pan. Popular with locals as a quick, inexpensive meal.' },
      { tag: 'Street food', name: 'Hawawshi', desc: 'Seasoned minced meat baked inside baladi bread until crisp outside and juicy inside. A filling street-food staple.' },
      { tag: 'Seafood', name: 'Fish and seafood', desc: 'As a port city, Alexandria is known for its fish. Near the harbour, pick a busy-looking place and confirm the price by weight before ordering.' },
      { tag: 'Everyday breakfast', name: 'Foul and taameya', desc: 'Egypt’s everyday breakfast: slow-cooked fava beans and deep-fried fava patties. Cheap, filling and easy to find.' },
      { tag: 'Sweets', name: 'Sweets & ice cream', desc: 'Alexandria has a long ice-cream tradition, alongside syrup-soaked pastries such as basbousa. A good way to end an evening on the corniche.' },
      { tag: 'Coffee houses', name: 'Coffee houses', desc: 'Order a Turkish coffee or a mint tea and watch the street; the cafés of Mansheya and Bahari are part of the city’s daily rhythm.' }
    ],
    note: 'Opening hours and prices change; check before you go.'
  },
  transport: {
    eyebrow: 'Getting around',
    title: 'How to move between them',
    intro: 'These are ideas for planning an outing, not a verified itinerary. Check the distance, crossings, access and transport for each destination separately.',
    cards: [
      { title: 'On foot', text: 'Several of these places sit within the old city, but pavement quality, traffic and crossings vary. Treat each leg separately and avoid busy roads at night.' },
      { title: 'By taxi or ride app', text: 'The easiest way to link distant stops such as Qaitbay and the library. Show the pin, and agree the fare or check the app price first.' },
      { title: 'By public transport', text: 'Buses and the tram serve parts of the city, but routes and stops change. Ask locally for the current line and confirm a safe place to get off; specific lines are not verified here.' },
      { title: 'Timing', text: 'Mornings are cooler and quieter, while weekends and public holidays can change opening hours and add crowds. Allow extra travel time at peak hours.' }
    ]
  },
  tips: {
    eyebrow: 'Practical tips',
    title: 'Before you set out',
    items: [
      'Check each site’s opening hours and ticket prices on the day; several landmarks keep seasonal schedules.',
      'Carry water and sun protection in summer, and a light layer in winter; coastal humidity can run high.',
      'Dress modestly in mosques and remove your shoes where indicated.',
      'Photography may be restricted inside museums and during ceremonies; follow posted signs and staff guidance.',
      'Keep some cash for small purchases; not every stall or taxi takes cards.'
    ]
  },
  faq: [
    { q: 'Are these places within walking distance of the memorial?', a: 'Some sit close by in the old city, while others need transport. Distances here are unverified; check the route and transport for each stop separately.' },
    { q: 'How long do I need for a city day?', a: 'A half day covers two or three stops comfortably; a full day lets you add the library and Qaitbay. Build in time for traffic.' },
    { q: 'In what order should I visit them?', a: 'This guide does not rank the places by proximity. A common approach is to start at the memorial, continue through Bahari toward Qaitbay, and keep the library or Kom El Dikka for a separate block.' },
    { q: 'Are these attractions free?', a: 'Some public squares and viewing the memorial are free, while museums, the citadel and the library may charge. No prices are verified here; check official sources.' },
    { q: 'Is the area suitable for visitors with reduced mobility?', a: 'Old-city pavements, steps and traffic can be challenging. Plan shorter legs, use taxis between stops, and assess each site on arrival.' }
  ]
};

export const nearbyZh: NearbyContent = {
  locale: 'zh',
  title: `周边景点与出行 · ${SITE.fullNameZh}（${SITE.cityZh}）`,
  description: `亚历山大六处知名景点——盖特贝城堡、阿布·阿巴斯·莫尔西清真寺、亚历山大图书馆等——以及海军无名烈士纪念碑附近的本地美食建议与实用出行提示。`,
  eyebrow: '周边景点',
  hero: {
    title: '纪念碑周边有什么？',
    sub: '六处亚历山大知名景点、日常本地美食与实用出行提示——都在曼希亚纪念碑的可达范围内。',
    lead: '本文距离与开放时间均未核实，排列顺序也不代表远近。出发前请核对各目的地的路线、交通与官方时间表。',
    cta: '返回参观指南 ↓'
  },
  landmarks: {
    eyebrow: '景点',
    title: '适合延伸行程的景点',
    intro: '可将以下六处知名目的地组合成一次行程，各处相互独立。距离未核实，出发前请核对路线与开放时间。',
    spots: [
      {
        tag: '城堡 · 港湾',
        distance: '东港尽头',
        name: '盖特贝城堡',
        desc: '马穆鲁克城堡，建于 15 世纪，位于东港尽头、古亚历山大法罗斯灯塔旧址。内有厚实石墙、海景以及一座小型海事博物馆。开放时间与门票随季节变化——出行前请确认。'
      },
      {
        tag: '清真寺',
        distance: '往巴赫里方向',
        name: '阿布·阿巴斯·莫尔西清真寺',
        desc: '巴赫里最著名的清真寺，高耸的圆顶与宣礼塔在港湾天际线中十分醒目。通常可在礼拜时间之外参观；请着装得体，并遵守现场关于鞋履与拍照的规定。'
      },
      {
        tag: '图书馆 · 文化',
        distance: '海滨向东',
        name: '亚历山大图书馆',
        desc: '海滨上的现代图书馆与文化综合体，延续古亚历山大图书馆的理念。馆内设有博物馆、展览空间与天文馆；请查看参观页面了解当前开放时间与导览场次。'
      },
      {
        tag: '罗马遗址',
        distance: '市中心',
        name: '科姆·迪卡（罗马剧场）',
        desc: '位于现代城市中心的罗马时代考古遗址，以露天剧场和「飞鸟别墅」马赛克闻名。一处简短停留，为亚历山大历史增添截然不同的一层。'
      },
      {
        tag: '罗马遗迹',
        distance: '卡尔穆兹区',
        name: '庞贝柱（萨拉皮雍）',
        desc: '罗马时期的红色花岗岩巨柱，矗立于萨拉皮雍遗址之间。遗址位于地势较高处，有台阶与不平整地面，行走时请注意安全。'
      },
      {
        tag: '集市 · 市井',
        distance: '广场周边',
        name: '曼希亚集市街区',
        desc: '紧邻纪念碑的热闹商业核心——老店铺、街头生活与日常的亚历山大，而非为游客打造的景点。为氛围而来，注意随身物品，购买前先议价。'
      }
    ]
  },
  foods: {
    eyebrow: '餐食建议',
    title: '从广场到餐桌',
    intro: '可在曼希亚与巴赫里一带品尝的亚历山大常见菜式。本文未核实任何具体门店或餐厅；出发前请核对地址、菜单与价格。',
    items: [
      { tag: '本地菜', name: '亚历山大炒肝', desc: '本地招牌——肝配甜椒、辣椒与香料烹制，通常夹入面包或盛在小锅中。当地人常当作快捷、实惠的一餐。' },
      { tag: '街头小吃', name: '哈瓦维什', desc: '调味肉末包入埃及大饼烘烤，外脆内润。管饱的街头主食。' },
      { tag: '海鲜', name: '鱼类与海鲜', desc: '作为港口城市，亚历山大以鱼鲜闻名。在港湾附近挑一家人气旺的店，点餐前先按重量确认价格。' },
      { tag: '日常早餐', name: '蚕豆与埃及炸豆丸', desc: '埃及的日常早餐：慢炖蚕豆与油炸蚕豆饼。便宜、管饱且随处可见。' },
      { tag: '甜点', name: '甜点与冰淇淋', desc: '亚历山大有着悠久的冰淇淋传统，还有巴斯布萨等糖浆点心。是结束海滨夜晚的好方式。' },
      { tag: '咖啡馆', name: '咖啡馆', desc: '点一杯土耳其咖啡或薄荷茶，看街头人来人往；曼希亚与巴赫里的咖啡馆是这座城市日常节奏的一部分。' }
    ],
    note: '营业时间与价格会有变动，出行前请核实。'
  },
  transport: {
    eyebrow: '出行',
    title: '如何在景点间移动',
    intro: '这些内容用于规划行程，并非已核实的连续路线。请分别核对每处目的地的距离、过街位置、准入条件与交通方式。',
    cards: [
      { title: '步行', text: '其中一些地点位于老城范围内，但人行道状况、车流与过街条件差异较大。请把每段路程分开对待，夜间避开繁忙路段。' },
      { title: '出租车或网约车', text: '连接相距较远的站点（如盖特贝城堡与图书馆）最省心的方式。出示地图定位，先谈好车费或确认应用报价。' },
      { title: '公共交通', text: '公交与有轨电车覆盖城市部分地区，但线路与站点常有变化。请向当地人询问当前线路，并确认安全的下车点；本文未核实具体线路。' },
      { title: '时间安排', text: '清晨更凉爽安静；周末与公共假日可能调整开放时间并增加人流。高峰时段请预留额外路程时间。' }
    ]
  },
  tips: {
    eyebrow: '实用贴士',
    title: '出发之前',
    items: [
      '当天核对各站点的开放时间与票价；多处景点实行季节性时间表。',
      '夏季带上饮水与防晒，冬季备一件薄外套；海滨湿度可能较高。',
      '进入清真寺请着装得体，并在要求处脱鞋。',
      '博物馆内与典礼期间可能限制拍照；请遵守告示与工作人员指引。',
      '备些现金用于小额消费；并非每个摊贩或出租车都收卡。'
    ]
  },
  faq: [
    { q: '这些地方离纪念碑可以步行到达吗？', a: '部分位于老城范围内较近，另一些则需要交通工具。本文距离未核实；请分别核对每站的路线与交通。' },
    { q: '在城里玩一天需要多久？', a: '半天可从容游览两到三站；一整天则可加上图书馆与盖特贝城堡。记得预留堵车时间。' },
    { q: '应该按什么顺序参观？', a: '本指南未按远近排序。常见做法是从纪念碑出发，经巴赫里前往盖特贝城堡，把图书馆或科姆·迪卡留作单独一段。' },
    { q: '这些景点免费吗？', a: '部分公共广场与观看纪念碑免费，博物馆、城堡与图书馆可能收费。本文未核实任何价格；请查阅官方来源。' },
    { q: '该区域适合行动不便者吗？', a: '老城的人行道、台阶与车流可能带来不便。请规划较短的路段、站间乘坐出租车，并在抵达后评估各站点。' }
  ]
};

export const nearby = { ar: nearbyAr, en: nearbyEn, zh: nearbyZh };
