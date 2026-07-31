import heroTempleBanyanAerial from "../assets/images/hero-temple-banyan-aerial.jpg";
import banyanCanopyTall from "../assets/images/banyan-canopy-tall.jpg";
import banyanTrunk from "../assets/images/banyan-trunk.jpg";
import banyanFront from "../assets/images/banyan-front.jpg";
import banyanHarbor from "../assets/images/banyan-harbor.jpg";
import banyanTempleSign from "../assets/images/banyan-temple-sign.jpg";
import aerialRoots from "../assets/images/aerial-roots.jpg";
import nearbyBridge from "../assets/images/nearby-bridge.jpg";
import nearbyWhaleCave from "../assets/images/nearby-whale-cave.jpg";
import nearbyErkan from "../assets/images/nearby-erkan.jpg";
import nearbyDaguoye from "../assets/images/nearby-daguoye.jpg";
import nearbyChixi from "../assets/images/nearby-chixi.jpg";
import nearbyLighthouse from "../assets/images/nearby-lighthouse.jpg";

export const images = {
  heroTempleBanyanAerial,
  banyanCanopyTall,
  banyanTrunk,
  banyanFront,
  banyanHarbor,
  banyanTempleSign,
  aerialRoots,
  nearbyBridge,
  nearbyWhaleCave,
  nearbyErkan,
  nearbyDaguoye,
  nearbyChixi,
  nearbyLighthouse,
};

/**
 * 圖片授權資訊。所有照片皆取自 Wikimedia Commons，採用 Creative Commons
 * 授權；依授權條款於「資料來源」頁面標示作者與授權方式。
 */
export interface Credit {
  key: keyof typeof images;
  caption: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
}

export const credits: Credit[] = [
  {
    key: "heroTempleBanyanAerial",
    caption: "通樑保安宮與古榕空拍全景",
    author: "林偉樺 Alpha",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E9%80%9A%E6%A8%91%E4%BF%9D%E5%AE%89%E5%AE%AE%E8%88%87%E6%A6%95%E6%A8%B9%E7%A9%BA%E6%8B%8D%E5%9C%96.jpg",
  },
  {
    key: "banyanCanopyTall",
    caption: "通樑古榕樹冠",
    author: "Prattflora",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Taiwan-Penghu-Tongliang-Great-Banyan.JPG",
  },
  {
    key: "banyanTrunk",
    caption: "通樑榕樹頭與支柱根",
    author: "雲角",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E9%80%9A%E6%A8%91%E6%A6%95%E6%A8%B9%EF%BD%9C%E6%A6%95%E6%A8%B9%E9%A0%AD.jpg",
  },
  {
    key: "banyanFront",
    caption: "從通樑古榕前望向通樑漁港",
    author: "舟集 Toadboat",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E9%80%9A%E6%A2%81%E6%BC%81%E6%B8%AF_(7)%E9%80%9A%E6%A2%81%E6%A6%95%E6%A8%B9%E5%89%8D.jpg",
  },
  {
    key: "banyanHarbor",
    caption: "通樑古榕旁的通樑漁港與南側堤岸",
    author: "舟集 Toadboat",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E9%80%9A%E6%A2%81%E6%BC%81%E6%B8%AF_(14)%E9%80%9A%E6%A2%81%E6%A6%95%E6%A8%B9%E7%BE%A4%E5%89%8D%E5%8D%97%E5%81%B4%E5%A0%A4%E5%B2%B8.jpg",
  },
  {
    key: "banyanTempleSign",
    caption: "通樑榕樹與保安宮廟牌",
    author: "舟集 Toadboat",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E9%80%9A%E6%A2%81%E6%A6%95%E6%A8%B9%E8%88%87%E4%BF%9D%E5%AE%89%E5%AE%AE%E7%89%8C.jpg",
  },
  {
    key: "aerialRoots",
    caption: "保安宮前老榕氣根與棚架",
    author: "Venation",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E4%BF%9D%E5%AE%89%E5%AE%AE%E5%89%8D300%E5%A4%9A%E5%B9%B4%E8%80%81%E6%A8%B9_%E6%BE%8E%E6%B9%96%E7%B8%A3_Venation_2.JPG",
  },
  {
    key: "nearbyBridge",
    caption: "澎湖跨海大橋",
    author: "翁維德 Wei-Te Wong",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Penghu_Great_Bridge_20150619.jpg",
  },
  {
    key: "nearbyWhaleCave",
    caption: "小門嶼鯨魚洞",
    author: "Viy4092",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Si%C3%B3-mn%CC%82g-s%C5%AB_Keng-h%C3%AE-t%C5%8Dng_T%C4%93-chit_Kong-hn%CC%82g_20210421.jpg",
  },
  {
    key: "nearbyErkan",
    caption: "二崁聚落古厝",
    author: "Issac957",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E4%BA%8C%E5%B4%81%E5%8F%A4%E5%8E%9D.jpg",
  },
  {
    key: "nearbyDaguoye",
    caption: "大菓葉柱狀玄武岩",
    author: "Prattflora",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Taiwan-Penghu-Great-Guoyeh-Basalt.JPG",
  },
  {
    key: "nearbyChixi",
    caption: "池西岩瀑（小池角柱狀玄武岩）",
    author: "Rick888chen",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Chixi_Columnar_Basalt_in_Taiwan_Penghu_%E6%BE%8E%E6%B9%96%E6%B1%A0%E8%A5%BF%E5%B2%A9%E7%80%91.jpg",
  },
  {
    key: "nearbyLighthouse",
    caption: "漁翁島燈塔（西嶼燈塔）",
    author: "方珣",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:%E8%A5%BF%E5%B6%BC%E7%87%88%E5%A1%94(%E6%BC%81%E7%BF%81%E5%B3%B6%E7%87%88%E5%A1%94).jpg",
  },
];
