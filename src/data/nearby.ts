import { images } from "./images";
import type { ImageMetadata } from "astro";

export interface NearbyPlace {
  slug: string;
  name: string;
  english: string;
  image: ImageMetadata;
  alt: string;
  order: number;
  driveFromBanyan: string;
  summary: string;
  suggestion: string;
  mapsUrl: string;
}

/** 北環沿線景點，依馬公出發的順路順序排列 */
export const nearbyPlaces: NearbyPlace[] = [
  {
    slug: "penghu-great-bridge",
    name: "澎湖跨海大橋",
    english: "Penghu Great Bridge",
    image: images.nearbyBridge,
    alt: "澎湖跨海大橋橫跨吼門水道 Penghu Great Bridge",
    order: 1,
    driveFromBanyan: "距通樑古榕約 1 分鐘車程",
    summary:
      "連接白沙與西嶼的地標橋樑，就在通樑古榕旁。西嶼端的橋頭拱門是熱門拍照點，橋下吼門水道流速極快。",
    suggestion: "與通樑古榕安排在一起，停車後步行到橋頭拍照即可。",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Penghu+Great+Bridge",
  },
  {
    slug: "xiaomen-whale-cave",
    name: "小門鯨魚洞",
    english: "Xiaomen Whale Cave",
    image: images.nearbyWhaleCave,
    alt: "小門嶼鯨魚洞海蝕拱門 Xiaomen Whale Cave",
    order: 2,
    driveFromBanyan: "距通樑古榕約 10 分鐘車程",
    summary:
      "位於西嶼小門嶼的玄武岩海蝕拱門，因外型狀似鯨魚而得名，是欣賞海蝕地形與玄武岩節理的代表點。",
    suggestion: "適合排在跨海大橋之後，步道平緩，來回約 30 分鐘。",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Xiaomen+Whale+Cave",
  },
  {
    slug: "daguoye-basalt",
    name: "大菓葉柱狀玄武岩",
    english: "Daguoye Columnar Basalt",
    image: images.nearbyDaguoye,
    alt: "大菓葉柱狀玄武岩節理 Daguoye Columnar Basalt",
    order: 3,
    driveFromBanyan: "距通樑古榕約 15 分鐘車程",
    summary:
      "整齊排列的柱狀玄武岩壁，退潮時前方積水會倒映岩柱，是澎湖最上鏡的地質景觀之一。",
    suggestion: "清晨與退潮時最美，適合放在西嶼行程中段。",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Daguoye+Columnar+Basalt",
  },
  {
    slug: "erkan-village",
    name: "二崁聚落",
    english: "Erkan Village",
    image: images.nearbyErkan,
    alt: "二崁聚落傳統咾咕石古厝 Erkan Village",
    order: 4,
    driveFromBanyan: "距通樑古榕約 15 分鐘車程",
    summary:
      "保存完整的澎湖傳統聚落，咾咕石與玄武岩砌成的古厝群，巷弄間有杏仁茶、二崁傳香等在地小店。",
    suggestion: "適合放在西嶼行程，慢慢走逛約 1 小時。",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Erkan+Village+Penghu",
  },
  {
    slug: "chixi-rock-waterfall",
    name: "池西岩瀑",
    english: "Chixi Columnar Basalt",
    image: images.nearbyChixi,
    alt: "池西岩瀑如瀑布般傾瀉的柱狀玄武岩 Chixi Columnar Basalt",
    order: 5,
    driveFromBanyan: "距通樑古榕約 20 分鐘車程",
    summary:
      "又稱「小池角柱狀玄武岩」，海崖上的玄武岩柱如瀑布般傾瀉，退潮時可走近岩壁，近年成為熱門秘境。",
    suggestion: "務必查詢潮汐，退潮時段才能安全靠近岩壁。",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Chixi+Columnar+Basalt",
  },
  {
    slug: "yuwengdao-lighthouse",
    name: "漁翁島燈塔",
    english: "Yuwengdao Lighthouse",
    image: images.nearbyLighthouse,
    alt: "漁翁島燈塔（西嶼燈塔）白色塔身 Yuwengdao Lighthouse",
    order: 6,
    driveFromBanyan: "距通樑古榕約 25 分鐘車程",
    summary:
      "台灣最早興建的西式燈塔之一，白色塔身佇立在西嶼最南端的草坡上，是北環路線最遠、也最適合收尾的一站。",
    suggestion: "排在北環一日行程最後，傍晚光線柔和最適合拍照。",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Yuwengdao+Lighthouse",
  },
];
