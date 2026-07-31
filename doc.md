[![通梁古榕](https://tse2.mm.bing.net/th/id/OIP.3V_js8h9xlOS5EuqI5tSdwHaGC?r=0\&pid=Api)](https://www.penghu-nsa.gov.tw/ScenicSpotDetail.aspx?Cond=46d40746-2dc0-4bf5-9d41-736200364654&DistrictCategory=ef9346dc-0956-406d-bb98-768c416e35f4&utm_source=chatgpt.com)

# TongliangGurong.com 完整建站建議

## 一、最終專案定位

**主域名：** `TongliangGurong.com`
**網站名稱：** 通樑古榕
**英文識別：** Tongliang Gurong
**官方英文別名：** Tongliang Great Banyan
**網站語言：** 繁體中文 `zh-Hant-TW`
**網站定位：**

> 通樑古榕深度旅遊指南，以及澎湖北環行程的實用入口站。

不要把網站做成只有「景點介紹、地址、地圖」的單頁網站。通樑古榕本身的搜尋量有限，真正能擴大流量的是把以下需求一起承接：

* 通樑古榕交通、停車與拍照
* 通樑保安宮與古榕歷史
* 澎湖跨海大橋附近景點
* 澎湖北環半日與一日行程
* 白沙鄉、西嶼沿線景點
* 適合長輩、親子與機車旅行的路線

官方資料將通樑古榕描述為保安宮前的老榕樹，擁有約95根氣根；官方英文資料則記載其氣根形成約660平方公尺的樹蔭空間。樹齡存在200多年與300年以上兩種說法，因此網站應明確呈現為「地方傳說與歷史推測」，不要寫成確定年份。([澎湖国家风景区管理处][1])

---

# 二、域名與品牌策略

## 1. 域名使用方式

統一使用：

```text
https://tonglianggurong.com/
```

建議將以下版本全部301轉址至主域名：

```text
https://www.tonglianggurong.com/
http://tonglianggurong.com/
http://www.tonglianggurong.com/
```

Canonical固定使用無`www`版本：

```html
<link rel="canonical" href="https://tonglianggurong.com/" />
```

## 2. 「Gurong」的處理方式

`Gurong`是「古榕」的拼音，華語使用者容易理解，但不是海外旅客通常使用的英文搜尋詞。官方英文名稱是 **Tongliang Great Banyan**。([台湾旅游网][2])

因此建議：

* 域名和品牌使用：`Tongliang Gurong`
* 頁面H1使用：`通樑古榕`
* 英文副標使用：`Tongliang Great Banyan`
* Schema加入兩者作為別名
* 圖片Alt交替使用中文與官方英文名稱

推薦Logo文字：

```text
通樑古榕
TONGLIANG GURONG
```

網站首頁第一次出現英文名稱時寫成：

```text
通樑古榕（Tongliang Great Banyan）
```

這樣既保留域名品牌，也能建立與Google Maps及官方英文實體名稱的關聯。

## 3. 品牌標語

首選：

> **一棵樹，長成一片森林**

備選：

> 在古榕樹蔭下，遇見澎湖的風與信仰

> 走進氣根交織的澎湖綠蔭

---

# 三、目標使用者

網站應優先服務四類使用者。

### 澎湖自由行旅客

最關心交通、停車、停留時間、附近景點，以及是否值得列入北環行程。

### 機車環島旅客

最需要Google Maps導航、順路程度、補給位置、風勢與下一站安排。

### 親子及長輩旅客

關注步行距離、遮蔭、洗手間、座位、無障礙和是否需要走很多路。交通部觀光署資料列有鄰近公車站及無障礙資訊，可作為內容規劃基礎。([台湾旅游网][3])

### 攝影與文化旅客

關注氣根、廟宇、光影、保安宮、地方傳說及古榕如何形成。

---

# 四、內容架構

## 第一階段核心頁面

建議首發12個主要內容頁面。

| URL                      | 頁面名稱                | 主要搜尋需求    |
| ------------------------ | ------------------- | --------- |
| `/`                      | 通樑古榕完整指南            | 通樑古榕      |
| `/visitor-guide/`        | 通樑古榕參觀指南            | 值不值得去、看什麼 |
| `/transportation/`       | 交通、停車與Google Maps導航 | 怎麼去、停車    |
| `/history/`              | 通樑古榕的歷史與傳說          | 樹齡、歷史     |
| `/aerial-roots/`         | 一棵榕樹如何長成一片森林        | 氣根、生態     |
| `/baoan-temple/`         | 通樑保安宮與古榕            | 保安宮、信仰    |
| `/photo-guide/`          | 通樑古榕拍照指南            | 拍照、機位     |
| `/nearby-attractions/`   | 通樑古榕附近景點            | 附近景點      |
| `/north-loop-itinerary/` | 澎湖北環一日行程            | 北環路線      |
| `/half-day-itinerary/`   | 澎湖北環半日行程            | 半日遊       |
| `/food/`                 | 附近小吃與休息補給           | 仙人掌冰、小吃   |
| `/faq/`                  | 通樑古榕常見問題            | 長尾問題      |

## 第二階段周邊頁面

流量開始成長後，再增加：

```text
/nearby/penghu-great-bridge/
/nearby/xiaomen-whale-cave/
/nearby/erkan-village/
/nearby/daguoye-basalt/
/nearby/chixi-rock-waterfall/
/nearby/yuwengdao-lighthouse/
/itineraries/north-loop-by-scooter/
/itineraries/north-loop-with-seniors/
/itineraries/rainy-day-north-loop/
```

官方旅遊路線本身就會把通樑古榕、跨海大橋、小門鯨魚洞、二崁聚落、大菓葉柱狀玄武岩與漁翁島燈塔串聯，因此「北環路線」是網站最自然的擴展方向。([澎湖国家风景区管理处][4])

不要一次製作大量只有300至500字的周邊景點頁。每一頁至少應回答：

* 為什麼值得去
* 與通樑古榕的路線關係
* 適合排在前面還是後面
* 建議停留方式
* Google Maps導航入口
* 適合哪些旅客
* 現場容易忽略的細節

---

# 五、首頁完整結構

## 1. Hero首屏

### H1

```text
通樑古榕
```

### 主標語

```text
一棵樹，長成一片森林
```

### 說明文字

```text
走進氣根交織而成的綠蔭，認識通樑保安宮、
古榕傳說與澎湖北環最具代表性的自然人文地標。
```

### CTA

```text
在 Google Maps 導航
查看北環行程
```

首屏背景圖應呈現「榕根通道＋保安宮」，不要使用單純的海景或跨海大橋照片。

## 2. 快速認識

只放相對穩定的資訊：

```text
位置：澎湖縣白沙鄉通樑村
類型：古樹、廟宇、村落文化
特色：約95根氣根形成單木成林
建議搭配：澎湖跨海大橋與北環路線
```

不在這裡顯示：

* 即時營業狀態
* Google評分
* 評論數量
* 即時停車位
* 店家營業時間

## 3. 為什麼值得去

使用三個視覺模組：

### 一棵樹形成一片綠蔭

說明氣根落地後逐漸成為支柱根，看起來像多棵樹，其實源自同一株古榕。

### 古樹與廟宇共生

呈現古榕枝幹、保安宮屋脊、廟埕和居民生活交織的空間。

### 北環途中最舒適的休息點

強調遮蔭、停留、吃冰、拍照與跨海大橋的路線關係。

## 4. 第一次來看什麼

製作四張卡片：

1. 氣根形成的天然長廊
2. 樹冠下的斑駁光影
3. 古榕與保安宮屋頂
4. 主幹、支柱根與人工支撐細節

## 5. Google Maps導航區

顯示：

* 地點按鈕
* 路線規劃按鈕
* 查看最新評論按鈕
* 延遲載入地圖

提示文字統一使用：

> 開放狀態、即時路況、停車情形與旅客評論可能變動，出發前請查看Google Maps。

不要顯示「資料核對於某年某月某日」。

## 6. 拍照指南

建議展示：

* 入口正面廣角
* 從氣根長廊向保安宮拍
* 從地面向上拍樹冠
* 廟宇屋脊與榕葉同框
* 人物站在根系之間表現比例
* 光影落在地面的低角度畫面

## 7. 北環路線

首頁先提供簡版：

```text
馬公
→ 中屯
→ 通樑古榕
→ 澎湖跨海大橋
→ 小門鯨魚洞
→ 二崁聚落
→ 大菓葉柱狀玄武岩
→ 漁翁島燈塔
```

點擊後進入完整行程頁。

## 8. FAQ

至少回答：

* 通樑古榕需要門票嗎？
* 值得專程前往嗎？
* 適合停留多久？
* 古榕真的是同一棵樹嗎？
* 樹齡到底是200年還是300年？
* 可以推嬰兒車或輪椅嗎？
* 附近有洗手間嗎？
* 可以和跨海大橋一起玩嗎？
* 下雨天適合去嗎？
* 最新開放情況在哪裡看？

---

# 六、視覺與UI方向

## 核心概念

> **走進古榕樹蔭下**

網站不應做成一般的海島藍色旅遊模板。視覺重點應是：

* 榕樹深綠
* 氣根棕灰
* 保安宮朱紅
* 澎湖砂岩米色
* 玄武岩灰黑
* 少量海水藍灰

## 色彩系統

```css
:root {
  --banyan-950: #183126;
  --banyan-900: #244a36;
  --banyan-700: #42654d;
  --leaf-500: #71866a;
  --sand-50: #faf8f2;
  --sand-100: #f1ecdf;
  --temple-700: #a44839;
  --basalt-950: #242927;
  --sea-600: #527b84;
}
```

## 字體

完全使用系統字體，不載入任何外部字型：

```css
font-family:
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  "PingFang TC",
  "Noto Sans TC",
  "Microsoft JhengHei",
  Arial,
  sans-serif;
```

`Noto Sans TC`只作為系統已有字型的候選，不從Google Fonts下載。

## Logo

建議Logo採用：

* 3至5條向下延伸的氣根
* 中央形成拱門
* 拱門後方簡化保安宮屋脊
* 圖形下方放「通樑古榕」

不要使用：

* 寫實完整大樹
* 椰子樹
* 海浪加太陽的通用旅遊Logo
* 過度複雜的廟宇彩繪

---

# 七、SEO策略

## 核心關鍵字

首頁：

```text
通樑古榕
通梁古榕
Tongliang Great Banyan
Tongliang Gurong
```

交通頁：

```text
通樑古榕怎麼去
通樑古榕交通
通樑古榕停車
通樑古榕公車
```

路線頁：

```text
澎湖北環景點
澎湖北環一日遊
澎湖機車北環
澎湖跨海大橋附近景點
白沙鄉景點
```

文化頁：

```text
通樑古榕歷史
通樑古榕樹齡
通樑保安宮
澎湖老榕樹
通樑古榕氣根
```

## 首頁Title

```text
通樑古榕｜交通、拍照、保安宮與澎湖北環行程
```

## Meta Description

```text
通樑古榕完整旅遊指南，整理交通、停車、氣根景觀、
保安宮歷史、拍照位置與澎湖北環行程。最新開放狀態、
路況與旅客評論請透過Google Maps查看。
```

## H1與頁面名稱

首頁只能有一個主要H1：

```html
<h1>通樑古榕</h1>
```

`Tongliang Great Banyan`放在副標或實體資訊中，不要與中文H1競爭。

## 內部連結

首頁至少連至：

```text
參觀指南
交通停車
歷史傳說
氣根生態
保安宮
拍照指南
北環行程
附近景點
```

每個周邊景點頁都要反向連回：

* 通樑古榕
* 北環一日行程
* 上一站
* 下一站

---

# 八、Google Maps整合原則

## 不在網站硬編碼的資料

以下資料全部引導至Google Maps：

* 即時營業或開放狀態
* 臨時施工或關閉
* 最新旅客評論
* Google星級
* 即時人潮
* 最新路線
* 店家營業時間

## 固定資料檔

```ts
// src/data/place.ts
export const place = {
  name: "通樑古榕",
  officialEnglishName: "Tongliang Great Banyan",
  brandName: "Tongliang Gurong",

  alternateNames: [
    "通梁古榕",
    "Tongliang Banyan",
    "Tongliang Banyan Tree",
  ],

  address: "澎湖縣白沙鄉通樑村149號",

  coordinates: {
    latitude: 23.6566132,
    longitude: 119.5570153,
  },

  googleMapsUrl:
    "https://www.google.com/maps/place/Tongliang+Great+Banyan/@23.6566132,119.5570153,17z/data=!3m1!4b1!4m6!3m5!1s0x346c5cb044844859:0xc0b4ebc69bfa29ad!8m2!3d23.6566132!4d119.5570153!16s%2Fg%2F1tj3htfj",

  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=23.6566132,119.5570153",
};
```

## 地圖元件

```astro
---
// src/components/GoogleMap.astro
import { place } from "../data/place";

const embedUrl =
  `https://www.google.com/maps?q=${place.coordinates.latitude},` +
  `${place.coordinates.longitude}&z=17&output=embed`;
---

<section aria-labelledby="location-title">
  <div class="mb-5">
    <p class="text-sm font-medium text-[var(--temple-700)]">
      位置與導航
    </p>

    <h2 id="location-title" class="mt-2 text-3xl font-semibold">
      前往通樑古榕
    </h2>

    <p class="mt-3 max-w-2xl text-neutral-700">
      開放狀態、即時路況、停車情形與旅客評論可能變動，
      出發前請查看 Google Maps。
    </p>
  </div>

  <div class="mb-5 flex flex-wrap gap-3">
    <a
      href={place.directionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-full bg-[var(--banyan-900)] px-5 py-3 text-white"
    >
      開始導航
    </a>

    <a
      href={place.googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-full border border-neutral-300 px-5 py-3"
    >
      查看地點與評論
    </a>
  </div>

  <div class="aspect-[4/3] overflow-hidden rounded-3xl md:aspect-[16/9]">
    <iframe
      src={embedUrl}
      title="通樑古榕 Google Maps"
      loading="lazy"
      class="h-full w-full border-0"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen
    ></iframe>
  </div>
</section>
```

Google Maps iframe不要放在首屏，以免拖慢LCP。應放在首頁中段並使用`loading="lazy"`。

---

# 九、Astro技術架構

這個網站沒有資料庫、登入、付款或動態預訂，因此應維持為**完全靜態輸出**。

Astro適合內容型網站，預設以較少客戶端JavaScript產生頁面；Astro內容合集也能對Markdown／MDX Frontmatter進行結構化管理。([Astro Docs][5])

## 建立專案

```bash
pnpm create astro@latest tongliang-gurong
cd tongliang-gurong

pnpm astro add mdx
pnpm astro add sitemap

pnpm add tailwindcss @tailwindcss/vite
pnpm add -D prettier prettier-plugin-astro prettier-plugin-tailwindcss
```

Astro官方MDX整合支援在Markdown內容中使用元件；Tailwind目前建議透過`@tailwindcss/vite`接入Astro。([Astro Docs][6])

## Node版本

建議建立：

```text
.nvmrc
```

內容：

```text
22.12.0
```

Astro 6要求Node.js 22.12.0或更高版本，部署環境也應使用相同的主要版本。([Astro Docs][7])

## Astro設定

```js
// astro.config.mjs
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tonglianggurong.com",
  output: "static",

  integrations: [
    mdx(),
    sitemap(),
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  trailingSlash: "always",
});
```

不需要安裝`@astrojs/cloudflare`。該Adapter主要用於SSR、Pages Functions或Cloudflare執行階段功能；目前網站只輸出靜態HTML、CSS和圖片。([Cloudflare Docs][8])

---

# 十、專案目錄

```text
tongliang-gurong/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── _headers
│   ├── _redirects
│   └── og/
│       └── tongliang-gurong.jpg
│
├── src/
│   ├── assets/
│   │   ├── hero/
│   │   ├── banyan/
│   │   ├── temple/
│   │   ├── routes/
│   │   └── nearby/
│   │
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── GoogleMap.astro
│   │   ├── PlaceFacts.astro
│   │   ├── PhotoSpot.astro
│   │   ├── RouteTimeline.astro
│   │   ├── NearbyPlaceCard.astro
│   │   ├── FAQList.astro
│   │   ├── Breadcrumbs.astro
│   │   └── SeoHead.astro
│   │
│   ├── content/
│   │   ├── guides/
│   │   ├── history/
│   │   ├── itineraries/
│   │   └── nearby/
│   │
│   ├── data/
│   │   ├── place.ts
│   │   ├── navigation.ts
│   │   └── nearby.ts
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── visitor-guide.astro
│   │   ├── transportation.astro
│   │   ├── history.astro
│   │   ├── aerial-roots.astro
│   │   ├── baoan-temple.astro
│   │   ├── photo-guide.astro
│   │   ├── north-loop-itinerary.astro
│   │   ├── nearby-attractions.astro
│   │   ├── faq.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   └── 404.astro
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   └── content.config.ts
│
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

---

# 十一、Markdown與MDX內容模型

一般長文章使用Markdown；需要插入路線、地圖、FAQ或攝影元件的頁面使用MDX。

```ts
// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const guides = defineCollection({
  loader: glob({
    base: "./src/content/guides",
    pattern: "**/*.{md,mdx}",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "guide",
      "history",
      "transportation",
      "photography",
      "itinerary",
      "nearby",
    ]),
    heroImage: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false()),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = {
  guides,
};
```

Astro的`glob()`內容載入器可以直接讀取本地Markdown與MDX檔案，並根據檔名產生URL友善的內容ID。([Astro Docs][9])

內容Frontmatter不加入：

```text
lastCheckedAt
lastVerifiedAt
googleRating
reviewCount
openingHours
```

避免顯示具體核對時間，也避免動態資料過期。

---

# 十二、結構化資料

首頁使用：

* `TouristAttraction`
* `WebSite`
* `BreadcrumbList`

文章使用：

* `Article`
* `BreadcrumbList`

FAQ頁使用：

* `FAQPage`

景點Schema範例：

```astro
---
import { place } from "../data/place";

const schema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "通樑古榕",
  alternateName: [
    "通梁古榕",
    "Tongliang Great Banyan",
    "Tongliang Gurong",
    "Tongliang Banyan Tree",
  ],
  url: "https://tonglianggurong.com/",
  description:
    "位於澎湖縣白沙鄉通樑村、以大量氣根和保安宮人文景觀聞名的古榕景點。",
  address: {
    "@type": "PostalAddress",
    streetAddress: "通樑村149號",
    addressLocality: "白沙鄉",
    addressRegion: "澎湖縣",
    addressCountry: "TW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: place.coordinates.latitude,
    longitude: place.coordinates.longitude,
  },
  hasMap: place.googleMapsUrl,
};
---

<script
  type="application/ld+json"
  set:html={JSON.stringify(schema)}
></script>
```

不要加入：

* 手工複製的Google評分
* `aggregateRating`
* 不確定的營業時間
* 虛構評論
* 未取得授權的評論內容
* 暗示本站是官方網站的欄位

---

# 十三、圖片策略

至少準備：

| 圖片        | 用途     |
| --------- | ------ |
| 氣根入口橫幅    | 首頁Hero |
| 榕根長廊      | 景觀介紹   |
| 向上仰拍樹冠    | 氣根生態頁  |
| 古榕與保安宮    | 文化頁    |
| 主幹和支柱根    | 歷史與生態  |
| 村民休息場景    | 在地生活   |
| 跨海大橋方向圖   | 北環路線   |
| 北環景點拼圖    | 行程頁    |
| 直式古榕照片    | 手機Hero |
| 1200×630圖 | OG分享圖  |

建議格式：

```text
hero-desktop.avif
hero-mobile.avif
aerial-root-corridor.webp
baoan-temple-and-banyan.webp
banyan-canopy.webp
north-loop-route.webp
tongliang-gurong-og.jpg
```

所有照片都應：

* 自行拍攝或取得合法授權
* 存入專案或自己的CDN
* 不直接盜鏈Google Maps照片
* 寫具體Alt
* 保留合理裁切空間
* 不在圖片上堆大量文字

---

# 十四、Cloudflare Pages部署

Cloudflare Pages的Astro部署設定使用Git倉庫、建置命令和`dist`輸出目錄，推送新Commit後會自動重新建置，Pull Request也可產生預覽部署。([Cloudflare Docs][8])

建議設定：

| 項目                     | 設定           |
| ---------------------- | ------------ |
| Production branch      | `main`       |
| Build command          | `pnpm build` |
| Build output directory | `dist`       |
| Root directory         | `/`          |
| Node.js                | `22.12.0`或更高 |
| Functions              | 不使用          |
| D1／KV／R2               | 不使用          |
| Astro adapter          | 不使用          |

## package.json

```json
{
  "name": "tongliang-gurong",
  "type": "module",
  "packageManager": "pnpm@10.13.1",
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "check": "astro check",
    "format": "prettier --write ."
  }
}
```

`packageManager`版本應改成實際建立專案時使用的pnpm版本。

## `_redirects`

```text
https://www.tonglianggurong.com/* https://tonglianggurong.com/:splat 301
```

頁面舊路徑可加入：

```text
/tongliang-great-banyan/  /  301
/tongliang-banyan/        /  301
/tongliang-ancient-tree/  /  301
```

## `_headers`

```text
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=604800
```

由於頁面需要嵌入Google Maps，若後續增加Content Security Policy，必須允許相應的Google Maps Frame來源。

---

# 十五、效能目標

建議將首頁控制在：

* 首屏不載入地圖iframe
* 首屏不載入第三方字型
* 首屏不使用影片
* 除必要功能外不使用客戶端框架
* Hero圖片提供手機與桌面尺寸
* 非首屏圖片全部懶載入
* SVG圖示直接內嵌
* 首頁JavaScript盡量低於30KB
* 不使用大型輪播套件

Astro預設適合輸出低JavaScript的內容型網站；這個專案沒有必要加入React或Vue。([Astro Docs][5])

---

# 十六、可信度與商業化準備

即使不做登入和預訂，也應建立：

```text
/about/
/contact/
/editorial-policy/
/sources/
/corrections/
/privacy/
/terms/
```

聯絡頁直接使用：

```html
<a href="mailto:hello@tonglianggurong.com">
  聯絡本站
</a>
```

資料來源頁可列出：

* 澎湖國家風景區管理處
* 交通部觀光署
* 澎湖地方文史資料
* Google Maps
* 自行拍攝與現場觀察

不要聲稱：

* 「通樑古榕官方網站」
* 「保安宮官方網站」
* 「澎湖官方旅遊網站」

頁尾建議註明：

> 本站為獨立旅遊資訊網站，並非通樑保安宮或政府機關官方網站。開放狀態、路況與旅客評論請以Google Maps及相關單位公告為準。

## AdSense準備

網站首發應至少有10至15篇真正有用的內容，而不是只有景點卡片。

廣告適合放在：

* 首頁「古榕特色」之後
* 長文章正文中段
* 半日與一日行程之間
* 周邊景點清單之後

不要放在：

* 首屏導航按鈕旁
* Google Maps操作區中間
* 每一個FAQ之間
* 行動版底部遮住導航的位置

---

# 十七、首發優先順序

## 第一批：建立實體與基本信任

```text
首頁
參觀指南
交通與停車
歷史與傳說
氣根介紹
保安宮
FAQ
About
Privacy
Contact
```

## 第二批：擴大旅遊需求

```text
拍照指南
附近景點
北環半日行程
北環一日行程
親子路線
長輩路線
```

## 第三批：建立北環內容網路

```text
跨海大橋
小門鯨魚洞
二崁聚落
大菓葉玄武岩
池西岩瀑
漁翁島燈塔
```

---

# 十八、最終執行規格

```text
域名：
TongliangGurong.com

網站名稱：
通樑古榕

品牌英文：
Tongliang Gurong

官方英文實體名稱：
Tongliang Great Banyan

語言：
繁體中文 zh-Hant-TW

網站定位：
通樑古榕深度指南＋澎湖北環行程入口

套件管理：
pnpm

框架：
Astro 6 靜態輸出

CSS：
Tailwind CSS，透過 @tailwindcss/vite

內容：
Markdown＋MDX Content Collections

部署：
Cloudflare Pages

Node：
22.12.0或更高

資料庫：
無

使用者登入：
無

站內預訂：
無

外部字型：
無，使用系統字體

地圖：
Google Maps延遲載入iframe＋外部導航

動態資訊：
不在站內維護，統一引導查看Google Maps

網站核對時間：
不顯示具體日期或時間
```

這個網站最重要的流量策略，是以「通樑古榕」建立清晰的景點實體，再向**澎湖北環、跨海大橋附近景點、白沙鄉景點、機車一日遊、親子與長輩路線**延伸。`TongliangGurong.com`雖然不是官方英文名稱，但作為華語品牌足夠獨特；只要在標題、內文、圖片Alt和結構化資料中持續保留`Tongliang Great Banyan`，就能兼顧品牌辨識與搜尋實體一致性。

[1]: https://www.penghu-nsa.gov.tw/ScenicSpotDetail.aspx?Cond=46d40746-2dc0-4bf5-9d41-736200364654&DistrictCategory=ef9346dc-0956-406d-bb98-768c416e35f4&utm_source=chatgpt.com "通梁古榕"
[2]: https://eng.taiwan.net.tw/m1.aspx?id=657&sNo=0002016&utm_source=chatgpt.com "Tongliang Great Banyan > Scenic Spot Search > ..."
[3]: https://eng.taiwan.net.tw/m1.aspx?id=657&sNo=0002016 "Tongliang Great Banyan > Scenic Spot Search > Tourism Administration, Republic of China (Taiwan)"
[4]: https://www.penghu-nsa.gov.tw/TravelActivityInfoDetailC001200.aspx?Cond=afb689b4-ff09-40a1-9520-a90cd6afaefd&Language=1028&SearchAdvanced=False&SortType=1&utm_source=chatgpt.com "澎湖自行車春季領騎服務"
[5]: https://docs.astro.build/zh-tw/concepts/why-astro/?utm_source=chatgpt.com "為何選擇Astro？"
[6]: https://docs.astro.build/en/guides/integrations-guide/mdx/?utm_source=chatgpt.com "astrojs/mdx - Astro Docs"
[7]: https://docs.astro.build/en/guides/upgrade-to/v6/ "Upgrade to Astro v6 | Docs"
[8]: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/ "Astro · Cloudflare Pages docs"
[9]: https://docs.astro.build/en/guides/content-collections/ "Content collections | Docs"

