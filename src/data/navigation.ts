export interface NavItem {
  label: string;
  href: string;
  desc?: string;
}

/** 主導覽 */
export const mainNav: NavItem[] = [
  { label: "參觀指南", href: "/visitor-guide/", desc: "值不值得去、看什麼、停留多久" },
  { label: "交通停車", href: "/transportation/", desc: "怎麼去、停車與 Google Maps 導航" },
  { label: "歷史傳說", href: "/history/", desc: "樹齡爭議與保安宮的老榕故事" },
  { label: "氣根生態", href: "/aerial-roots/", desc: "一棵榕樹如何長成一片森林" },
  { label: "保安宮", href: "/baoan-temple/", desc: "古樹與廟宇共生的信仰空間" },
  { label: "拍照指南", href: "/photo-guide/", desc: "氣根長廊與屋脊的取景位置" },
  { label: "北環行程", href: "/north-loop-itinerary/", desc: "澎湖北環一日與半日路線" },
  { label: "附近景點", href: "/nearby-attractions/", desc: "跨海大橋、鯨魚洞與西嶼沿線" },
];

/** 頁尾次要連結 */
export const footerNav: NavItem[] = [
  { label: "美食補給", href: "/food/" },
  { label: "半日行程", href: "/half-day-itinerary/" },
  { label: "常見問題", href: "/faq/" },
  { label: "關於本站", href: "/about/" },
  { label: "編輯原則", href: "/editorial-policy/" },
  { label: "更正政策", href: "/corrections/" },
  { label: "資料來源", href: "/sources/" },
  { label: "聯絡我們", href: "/contact/" },
  { label: "隱私權政策", href: "/privacy/" },
  { label: "使用條款", href: "/terms/" },
];
