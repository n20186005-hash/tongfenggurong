// وحدة الطقس: تبني رابط Open-Meteo، وتترجم رموز الطقس (WMO) إلى ar/en/zh،
// وتحوّل سرعة الرياح إلى مقياس بوفورت، وتنتج نصائح محايدة مشتقّة من الطقس فقط.
// تُستخدم من جهة العميل (المتصفح) لجلب الظروف الحالية والتوقّع، دون أي ذكر لـ«مفتاح» أو «مجاني».
import type { Locale } from '../i18n';

export interface CurrentWeather {
  temperature: number;
  apparent: number;
  humidity: number;
  windKmh: number;
  precipitationProbability: number;
  weatherCode: number;
}

export interface DailyWeather {
  date: string;
  code: number;
  tMax: number;
  tMin: number;
  precipProbability: number;
  uvMax: number;
  windMaxKmh: number;
}

export interface WeatherData {
  current: CurrentWeather;
  daily: DailyWeather[];
}

export const buildWeatherUrl = (lat: number, lon: number): string => {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: 'temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation_probability,weather_code',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,wind_speed_10m_max',
    forecast_days: '7',
    timezone: 'auto'
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
};

// رموز الطقس حسب تصنيف WMO (مختصرة للأكثر شيوعاً في الإسكندرية).
type WmoText = { ar: string; en: string; zh: string };
const WMO: Record<number, WmoText> = {
  0: { ar: 'صافٍ', en: 'Clear', zh: '晴朗' },
  1: { ar: 'صافٍ تقريباً', en: 'Mainly clear', zh: '大致晴朗' },
  2: { ar: 'غائم جزئياً', en: 'Partly cloudy', zh: '局部多云' },
  3: { ar: 'غائم', en: 'Overcast', zh: '阴天' },
  45: { ar: 'ضباب', en: 'Fog', zh: '雾' },
  48: { ar: 'ضباب مُتجمّد', en: 'Rime fog', zh: '雾凇' },
  51: { ar: 'رذاذ خفيف', en: 'Light drizzle', zh: '小毛雨' },
  53: { ar: 'رذاذ', en: 'Drizzle', zh: '毛毛雨' },
  55: { ar: 'رذاذ كثيف', en: 'Dense drizzle', zh: '浓毛雨' },
  61: { ar: 'مطر خفيف', en: 'Slight rain', zh: '小雨' },
  63: { ar: 'مطر متوسط', en: 'Moderate rain', zh: '中雨' },
  65: { ar: 'مطر غزير', en: 'Heavy rain', zh: '大雨' },
  66: { ar: 'مطر متجمّد خفيف', en: 'Light freezing rain', zh: '小冻雨' },
  67: { ar: 'مطر متجمّد غزير', en: 'Heavy freezing rain', zh: '强冻雨' },
  71: { ar: 'ثلج خفيف', en: 'Slight snow', zh: '小雪' },
  73: { ar: 'ثلج متوسط', en: 'Moderate snow', zh: '中雪' },
  75: { ar: 'ثلج كثيف', en: 'Heavy snow', zh: '大雪' },
  80: { ar: 'زخات مطر خفيفة', en: 'Slight rain showers', zh: '小阵雨' },
  81: { ar: 'زخات مطر', en: 'Rain showers', zh: '阵雨' },
  82: { ar: 'زخات مطر غزيرة', en: 'Violent rain showers', zh: '强阵雨' },
  85: { ar: 'زخات ثلج خفيفة', en: 'Slight snow showers', zh: '小阵雪' },
  86: { ar: 'زخات ثلج غزيرة', en: 'Heavy snow showers', zh: '强阵雪' },
  95: { ar: 'عاصفة رعدية', en: 'Thunderstorm', zh: '雷阵雨' },
  96: { ar: 'عاصفة رعدية مع برد', en: 'Thunderstorm with hail', zh: '雷阵雨伴有冰雹' },
  99: { ar: 'عاصفة رعدية شديدة مع برد', en: 'Severe thunderstorm with hail', zh: '强雷暴伴有冰雹' }
};

export const translateWmo = (code: number, locale: Locale): string => {
  const entry = WMO[code] ?? { ar: 'غير معروف', en: 'Unknown', zh: '未知' };
  return entry[locale];
};

export const kmhToBeaufort = (kmh: number): number => {
  const thresholds = [1, 6, 12, 20, 29, 39, 50, 62, 75, 89, 103, 118];
  let level = 0;
  for (let i = 0; i < thresholds.length; i++) {
    if (kmh >= thresholds[i]) level = i + 1;
  }
  return level;
};

export interface WeatherAdvice {
  risk: string[];
  outfit: string[];
  plan: string[];
  items: string[];
}

const adviceDict = {
  risk: {
    storm: { ar: 'توقّع عاصفة رعدية؛ ابحث عن مأوى وأَجِّل التقاط الصور في الساحة المفتوحة.', en: 'Thunderstorms possible; seek shelter and delay open-square photos.', zh: '可能有雷阵雨，请寻找遮蔽并推迟在露天广场拍照。' },
    heavyRain: { ar: 'احتمال مطر غزير؛ اصطحب مظلّة وتجنّب البقاء طويلاً في العراء.', en: 'Heavy rain possible; carry an umbrella and limit time in the open.', zh: '可能下大雨，请带伞并减少在户外停留时间。' },
    strongWind: { ar: 'رياح قوية؛ احرص على تثبيت القبعة والورق حتى لا تطير.', en: 'Strong wind; secure hats and papers so they are not blown away.', zh: '风力较强，请注意固定帽子与纸张以免被吹走。' },
    heat: { ar: 'حرارة مرتفعة؛ اشرب الماء بانتظام وتجنّب الجهد المباشر عند الظهيرة.', en: 'High temperature; drink water regularly and avoid exertion at midday.', zh: '气温偏高，请定时饮水并避免正午剧烈活动。' },
    fog: { ar: 'ضباب يحدّ من الرؤية؛ كن حذراً عند العبور قرب الميدان.', en: 'Fog reduces visibility; take care when crossing near the square.', zh: '有雾能见度低，在广场附近通行时请小心。' }
  },
  outfit: {
    hot: { ar: 'ملابس خفيفة وقطنية وقبعة واسعة الحواف.', en: 'Light, breathable clothing and a wide-brim hat.', zh: '轻便透气的衣物与宽檐帽。' },
    cool: { ar: 'طبقة خفيفة إضافية للبرودة المسائية.', en: 'An extra light layer for the cooler evening.', zh: '晚间偏凉可加一件薄外套。' },
    rain: { ar: 'مظلّة أو معطف مطر خفيف.', en: 'Umbrella or a light rain jacket.', zh: '雨伞或轻便雨衣。' }
  },
  plan: {
    rain: { ar: 'إن شاب المطر، اربط الزيارة بأروقة المنشية المغطّاة ومتاحف قريبة.', en: 'If rain appears, pair the visit with covered Mansheya arcades and nearby museums.', zh: '若遇雨，可将参观与曼希亚有顶廊道及附近博物馆结合。' },
    pleasant: { ar: 'طقس مناسب للتصويف في الهواء الطلق ومشي الكورنيش.', en: 'Good conditions for open-air photos and a corniche walk.', zh: '天气适宜户外拍照与海滨步道散步。' },
    hot: { ar: 'ارتاد النصب مبكّراً أو بعد الغروب لتجنّب حرارة النهار.', en: 'Visit early or after sunset to avoid daytime heat.', zh: '建议清晨或日落后前往，避开白天高温。' }
  },
  items: {
    water: { ar: 'زجاجة ماء للحرارة.', en: 'A bottle of water for the heat.', zh: '备一瓶水以防暑热。' },
    sun: { ar: 'نظارة شمسية وواقٍ شمسي.', en: 'Sunglasses and sunscreen.', zh: '太阳镜与防晒用品。' },
    umbrella: { ar: 'مظلّة قابلة للطي.', en: 'A foldable umbrella.', zh: '便携折叠伞。' }
  }
} as const;

export const buildAdvice = (data: WeatherData, locale: Locale): WeatherAdvice => {
  const { current, daily } = data;
  const maxToday = daily[0]?.tMax ?? current.temperature;
  const minToday = daily[0]?.tMin ?? current.temperature;
  const uvMax = daily[0]?.uvMax ?? 0;
  const windBft = kmhToBeaufort(current.windKmh);
  const risk: string[] = [];
  const outfit: string[] = [];
  const plan: string[] = [];
  const items: string[] = [];

  if ([95, 96, 99].includes(current.weatherCode)) risk.push(adviceDict.risk.storm[locale]);
  if ([65, 82].includes(current.weatherCode)) risk.push(adviceDict.risk.heavyRain[locale]);
  if (windBft >= 7) risk.push(adviceDict.risk.strongWind[locale]);
  if (maxToday >= 36) risk.push(adviceDict.risk.heat[locale]);
  if ([45, 48].includes(current.weatherCode)) risk.push(adviceDict.risk.fog[locale]);

  if (maxToday >= 30) outfit.push(adviceDict.outfit.hot[locale]);
  if (minToday <= 12) outfit.push(adviceDict.outfit.cool[locale]);
  if (current.precipitationProbability >= 40 || [61, 63, 65, 80, 81, 82].includes(current.weatherCode))
    outfit.push(adviceDict.outfit.rain[locale]);

  if (current.precipitationProbability >= 50 || [61, 63, 65, 80, 81, 82].includes(current.weatherCode))
    plan.push(adviceDict.plan.rain[locale]);
  else if (maxToday >= 30) plan.push(adviceDict.plan.hot[locale]);
  else if (maxToday >= 15 && maxToday <= 28 && current.precipitationProbability < 30)
    plan.push(adviceDict.plan.pleasant[locale]);

  if (maxToday >= 28 || uvMax >= 6) {
    items.push(adviceDict.items.water[locale]);
    items.push(adviceDict.items.sun[locale]);
  }
  if (current.precipitationProbability >= 40 || [61, 63, 65, 80, 81, 82].includes(current.weatherCode))
    items.push(adviceDict.items.umbrella[locale]);

  return { risk, outfit, plan, items };
};

// مصطلحات واجهة الطقس المترجمة (تُستخدم في المكوّن).
export const weatherUi = (locale: Locale) => {
  if (locale === 'ar')
    return {
      sectionEyebrow: 'الطقس والوقت المناسب',
      sectionTitle: 'الطقس الحالي وأفضل أوقات الزيارة',
      sectionSub: 'ظروف لحظية وتوقّع سبعة أيام، مع نصائح محايدة للزيارة.',
      now: 'الآن',
      feelsLike: 'الإحساس بـ',
      humidity: 'الرطوبة',
      wind: 'الرياح',
      precip: 'احتمال المطر',
      uv: 'أشعة فوق البنفسجية',
      forecast: 'توقّع 7 أيام',
      advice: 'نصائح الزيارة',
      riskTitle: 'تنبيهات مشتقّة من الطقس',
      outfitTitle: 'ما ترتديه',
      planTitle: 'ترتيب الزيارة',
      itemsTitle: 'معك في الجولة',
      loading: 'جارٍ تحميل الظروف الجوية…',
      error: 'تعذّر تحميل الطقس الآن؛ جرّب لاحقاً.',
      source: 'البيانات المناخية مقدَّمة عبر خدمة مناخية مفتوحة.',
      bft: 'بوفورت'
    };
  if (locale === 'zh')
    return {
      sectionEyebrow: '天气与最佳时节',
      sectionTitle: '实时天气与最佳参观时间',
      sectionSub: '即时状况与七日预报，附中性的参观建议。',
      now: '当前',
      feelsLike: '体感',
      humidity: '湿度',
      wind: '风力',
      precip: '降水概率',
      uv: '紫外线',
      forecast: '七日预报',
      advice: '参观建议',
      riskTitle: '由天气派生的提示',
      outfitTitle: '穿着建议',
      planTitle: '行程安排',
      itemsTitle: '随身物品',
      loading: '正在加载天气数据…',
      error: '暂时无法加载天气，请稍后再试。',
      source: '气候数据由开放的气象服务方提供。',
      bft: '蒲福风级'
    };
  return {
    sectionEyebrow: 'Weather & best time',
    sectionTitle: 'Current weather & best time to visit',
    sectionSub: 'Live conditions and a 7-day forecast, with neutral visit advice.',
    now: 'Now',
    feelsLike: 'Feels like',
    humidity: 'Humidity',
    wind: 'Wind',
    precip: 'Rain chance',
    uv: 'UV index',
    forecast: '7-day forecast',
    advice: 'Visit advice',
    riskTitle: 'Weather-derived notes',
    outfitTitle: 'What to wear',
    planTitle: 'Plan your visit',
    itemsTitle: 'Bring along',
    loading: 'Loading weather…',
    error: 'Weather unavailable right now; try again later.',
    source: 'Climate data provided by an open weather service.',
    bft: 'Beaufort'
  };
};
