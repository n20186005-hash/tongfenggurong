import type { GuideContent } from './types';
import { SITE } from '../data/site';

export const zh: GuideContent = {
  locale: 'zh',
  title: `${SITE.fullNameZh}（${SITE.cityZh}）— 参观指南与位置`,
  description: `认识${SITE.fullNameZh}——${SITE.cityZh}、${SITE.governorateZh}、${SITE.countryZh}的著名地标。查看位置与地图、参观详情、${SITE.nearbyLandmarksZh[0]}与${SITE.nearbyLandmarksZh[1]}，以及交通方式。`,
  heroImageAlt: '埃及亚历山大原创抽象海景示意；并非纪念碑照片',
  nav: {
    about: '简介',
    story: '历史',
    visit: '参观',
    weather: '天气',
    around: '周边',
    faq: '问答',
    nearby: '周边景点'
  },
  hero: {
    eyebrow: '地中海之滨的记忆',
    titleMain: '海军无名烈士',
    titleAccent: '纪念碑',
    titleLoc: '亚历山大 · 曼希亚 · 埃及',
    lead: '一座矗立于曼希亚中心、俯瞰东港的古典海军纪念碑——参观短暂，记忆厚重，也是沿亚历山大老海滨步道漫游的理想起点。',
    alias: '当地又称“无名烈士”，英文名为 Alexandria Naval Unknown Soldier Memorial。',
    ctaPlan: '规划参观 ↓',
    ctaStory: '阅读历史'
  },
  infoBox: {
    rating: '★ 4.4 / 5 · 18,437 条评价 · 2026-10-29',
    location: '曼希亚 · 亚历山大',
    entry: '现场确认准入',
    duration: '15–30 分钟'
  },
  about: {
    eyebrow: '简介',
    title: `关于${SITE.fullNameZh}`,
    paras: [
      `欢迎来到<strong>${SITE.fullNameZh}</strong>，在亚历山大常被称为<strong>“无名烈士”</strong>。它位于<strong>${SITE.cityZh}</strong>市中心、${SITE.governorateZh}、<strong>${SITE.countryZh}</strong>，是从老城区出发游览的自然起点。`,
      '在亚历山大还可考虑<strong>盖特贝城堡</strong>、<strong>阿布·阿巴斯·莫尔西清真寺</strong>、曼希亚集市与巴赫里。请逐一核对目的地路线与准入条件。',
      '空间层级：亚历山大海军无名烈士纪念碑 ← 曼希亚 ← 亚历山大 ← 亚历山大省 ← 埃及 ← 地中海沿岸。'
    ],
    factsTitle: '纪念碑与地址信息',
    facts: [
      { k: '纪念碑名称', v: '亚历山大海军无名烈士纪念碑（Alexandria Naval Unknown Soldier Memorial）' },
      { k: '常用名称', v: '无名烈士 — 曼希亚' },
      { k: '城市 / 省份', v: '亚历山大 — 亚历山大省，埃及' },
      { k: '地址', v: '无名烈士广场，曼希亚库布拉，曼希亚区，亚历山大 5361033' },
      { k: 'Plus Code', v: '5VXV+XG' },
      { k: '坐标', v: '北纬 31.199999°，东经 29.8937569°' },
      { k: '开放时间', v: 'Google 地图于 2026-10-29 显示全天开放；未核实官方时刻表' },
      { k: '费用', v: '未核实官方票价；请查看现场公告' },
      { k: 'Google 地图评分', v: '★ 4.4（18,437 条评价）' },
      { k: '内容更新', v: '2026 年 10 月 29 日' }
    ]
  },
  story: {
    eyebrow: '历史',
    title: '海军无名烈士纪念碑的历史与意义',
    sub: '从总督纪念碑到海洋的记忆。',
    intro: '纪念碑现有的建筑形态早于其海军纪念功能。它于 1930 年代由意大利侨民倡议兴建，以纪念伊斯梅尔总督；后在埃及的政治变迁中转为纪念海军无名烈士。',
    timeline: [
      { when: '1930 年代 · 古典建筑起源', text: '初建用于纪念伊斯梅尔总督，Alexandria Archive 记录了其原为伊斯梅尔总督纪念设施的背景；现存柱廊延续了早期建筑形态。' },
      { when: '1952 年革命后 · 广场的新含义', text: '地点的政治与象征意义改变，纪念碑逐渐从纪念一位统治者转为纪念葬身大海的士兵。' },
      { when: '1960 年代中期 · 海军无名烈士', text: '改设决定于 1960 年代作出，名称与纪念职能最终固定为与海军及海战阵亡者相关。' },
      { when: '今日 · 日常生活中的记忆点', text: '纪念碑仍是曼希亚日常生活的组成部分，同时也是官方典礼与献花仪式的背景。' }
    ]
  },
  visit: {
    eyebrow: '参观与位置',
    title: '位置与如何参观亚历山大无名烈士纪念碑',
    sub: '参观短暂，却不应匆匆而过。',
    intro: '纪念碑并非封闭博物馆，无需冗长安排。它的优势在于位置：你站在海军记忆之前，随即步入曼希亚、集市与东港沿岸。',
    cards: [
      { title: '门票 / 费用', text: '未核实官方入场收费标准，请查看现场公告；附近付费活动的价格不代表纪念碑门票。' },
      { title: '开放时间', text: 'Google 地图于 2026-10-29 显示全天开放，此为第三方信息，并非官方保证；请遵守现场安保与典礼安排。' },
      { title: '最佳时间', text: '清晨安静适合拍照；日落前石面光线更暖；夜晚则有海滨霓虹氛围。' },
      { title: '建议时长', text: '纪念碑本身约 15–30 分钟；若连同曼希亚—巴赫里步道，可延长至两小时以上。' }
    ],
    routeTitle: '从曼希亚到巴赫里，随海而行',
    routeSub: '推荐路线',
    route: [
      { title: '从纪念碑开始。', text: '观赏立面、立柱与铭文，并在广场拍一张全景。' },
      { title: '向西前往安富希。', text: '路线穿过与港口相连的街区与老集市。' },
      { title: '途经阿布·阿巴斯·莫尔西清真寺。', text: '巴赫里的地标；出发前请核对当前路线和过街位置。' },
      { title: '以盖特贝城堡收尾。', text: '可另行安排的港湾景点；请核对步行路线或选择交通工具。' }
    ]
  },
  map: {
    eyebrow: '交通',
    title: '无名烈士广场，曼希亚。',
    address: '地址：无名烈士广场，曼希亚库布拉，曼希亚区，亚历山大省 5361033。Plus Code：5VXV+XG。',
    cards: [
      { title: '核对出发地点', text: '若从拉姆站、圣凯瑟琳或密斯尔站出发，请先核对当前交通服务、具体路线与安全过街位置。本指南未核实从车站到纪念碑的耗时。' },
      { title: '乘出租车', text: '向司机出示纪念碑地图定位与地址；出发前确认下车位置和费用。' }
    ],
    sourceNote: '如需最新官方信息，请查询下方地图链接与有关官方机构。'
  },
  parking: [
    { eyebrow: '停车', title: '别指望把车停在纪念碑正前。', text: '曼希亚人流密集，路边车位变化快且可能有限。若自驾，请在市中心找合法公共停车场，最后一段步行前往；高峰时段出租车或网约车通常更轻松。' },
    { eyebrow: '步行建议', title: '让步行成为参观的一部分。', text: '请分别核对每段行程的距离、安全过街位置、准入条件与当前交通方式。本指南未核实连接所列地点的连续步行路线。' }
  ],
  around: {
    eyebrow: '周边',
    title: '无名烈士纪念碑周边的景点与美食',
    intro: '可将盖特贝城堡、阿布·阿巴斯·莫尔西清真寺和亚历山大图书馆分别纳入行程考虑。此清单不表示各处距离近或能连续步行串联；出发前请逐一核对路线。',
    foodEyebrow: '周边 · 亚历山大美食',
    foodTitle: '从广场到餐桌。',
    foods: [
      { tag: '餐食品类建议', name: '三明治', desc: '选店前请核对准确地址、营业情况、菜单和价格。' },
      { tag: '餐食品类建议', name: '鱼类与海鲜', desc: '出发前请核实具体商家和当前菜单。' },
      { tag: '餐食品类建议', name: '蚕豆与埃及炸豆丸', desc: '按需求选择餐食；本指南未核实任何餐馆分店。' }
    ],
    foodNote: '餐厅营业时间与价格会有变动，出行前请核实。',
    landmarkEyebrow: '周边 · 景点',
    landmarkTitle: '延续港口一线。',
    landmarks: [
      { distance: '请核对路线', name: '阿布·阿巴斯·莫尔西清真寺', desc: '巴赫里的突出地标，近港天际线中可见其圆顶。' },
      { distance: '请核对路线', name: '盖特贝城堡', desc: '东港尽头的马穆鲁克城堡，建于 15 世纪，位于古亚历山大法罗斯灯塔旧址。' },
      { distance: '市中心', name: '科姆·迪卡', desc: '罗马考古遗址，为同一天增添完全不同的一层亚历山大历史。' },
      { distance: '海滨向东', name: '亚历山大图书馆', desc: '现代文化地标，从市中心乘出租车或公共交通可达。' }
    ]
  },
  climate: {
    eyebrow: '天气与最佳时节',
    title: '何时参观？亚历山大季节指南',
    sub: '温和的地中海气候——下列时节广场景致最佳。',
    seasons: [
      { season: '春季（3–5 月）', text: '最宜人的时段：温暖适中、湿度较低，适合拍照与海滨散步。海风偶尔会起。' },
      { season: '夏季（6–8 月）', text: '高温高湿。清晨或日落后前往，并备好饮水与防晒。' },
      { season: '秋季（9–11 月）', text: '气温回稳、人流减少，是在曼希亚与巴赫里从容久游的最佳季节之一。' },
      { season: '冬季（12–2 月）', text: '偏凉并偶有间歇降雨。带一件薄外套，雨天尽量避开户外拍照。' }
    ]
  },
  faq: [
    { q: `${SITE.fullNameZh}在哪里？`, a: `它位于无名烈士广场，曼希亚库布拉，曼希亚区，${SITE.cityZh} ${SITE.postalCode}，${SITE.countryZh}。Plus Code 为 ${SITE.plusCode}，若从拉姆站或圣凯瑟琳出发，请分别核对路线、安全过街位置与最后一段准入条件；本指南未核实步行通达情况。` },
    { q: '参观纪念碑免费吗？', a: '未核实官方入场收费标准，请以现场公告为准；附近商业活动的收费不代表纪念碑门票。' },
    { q: '最佳参观时间？', a: '清晨安静适合拍照；日落前石面光线更暖；夜晚区域亮灯、海滨流动，更显都市气息。' },
    { q: '需要多长时间？', a: '通常 15–30 分钟足以观赏纪念碑、阅读细节并拍照；若连同曼希亚—巴赫里步道，可延长参观。' },
    { q: '全天开放吗？', a: 'Google 地图于 2026-10-29 显示全天开放，此为第三方资料，未核实官方时刻表；请遵守现场安保和典礼安排。' },
    { q: '如何乘公共交通到达？', a: '拉姆、圣凯瑟琳与密斯尔仅作为可能的出发点。出行前请核对当前服务、具体路线、过街位置及准入条件。未核实车辆能否直达；请确认安全且允许的下车地点，并核对最后一段路程。' },
    { q: '有专用停车场吗？', a: '不要依赖纪念碑专用车位。曼希亚路边车位有限且随拥堵变化，高峰时段建议使用附近公共停车场或出租车。' },
    { q: '是否适合行动不便者？', a: '可从广场层面观看纪念碑，但设计含台阶与抬高平台。建议抵达后评估路线，选择较少依赖楼梯的观景点。' },
    { q: `${SITE.shortNameZh}周边有哪些景点？`, a: '可考虑的目的地包括盖特贝城堡、阿布·阿巴斯·莫尔西清真寺、科姆·迪卡与亚历山大图书馆。请分别核对路线、距离和准入条件；本指南未按远近排序。' }
  ],
  sources: {
    eyebrow: '可信来源',
    title: '历史、背景与规划',
    intro: '本指南依据 Google 地图提供的站点数据、百科参考、本地地图及周边地标的官方来源。票务、对外时间表等易变信息，出行前请再次核实。',
    links: [
      { label: 'ICOM 埃及 — 亚历山大观光资料', url: 'https://www.usenghor-francophonie.org/wp-content/uploads/2018/06/ICOM-Alexandrie.pdf' },
      { label: 'Alexandria Archive — Khedive Ismail', url: 'https://www.alexandria-archive.com/article/162' },
      { label: 'Google 地图 — 核对于 2026-10-29', url: SITE.mapsShareUrl },
      { label: '埃及旅游局 ↗', url: SITE.govtTourismUrl },
      { label: '亚历山大省政府官网 ↗', url: SITE.alexandriaGovUrl },
      { label: '旅游与文物部 — 盖特贝城堡 ↗', url: SITE.monumentsUrl },
      { label: '亚历山大图书馆 — 参观信息 ↗', url: 'https://www.bibalex.org/en/Page/visits' },
      { label: 'Wikipedia — 海军纪念碑 ↗', url: SITE.wikipediaUrl },
      { label: 'Wikidata — 坐标与身份 ↗', url: SITE.wikidataUrl },
    ],
    updated: '内容更新：2026 年 10 月 29 日。',
    credit: '本指南原创抽象海景示意，采用 CC0；并非纪念碑照片或建筑形态示意。响应式展示可能裁剪画面。'
  }
};
