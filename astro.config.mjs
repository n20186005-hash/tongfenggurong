import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// إعداد النطاق الوحيد للمشروع: ضع النطاق النهائي هنا فقط عند توفره.
// بعد شراء النطاق، ضع الرابط الحقيقي في المتغير التالي ثم أعد البناء.
const site = 'https://tongfenggurong.com';

export default defineConfig({
  site: site || undefined,
  output: 'static',
  build: {
    format: 'directory'
  },
  integrations: site
    ? [
        sitemap({
          i18n: {
            defaultLocale: 'ar',
            locales: {
              ar: 'https://tongfenggurong.com',
              en: 'https://tongfenggurong.com/en',
              zh: 'https://tongfenggurong.com/zh'
            }
          }
        })
      ]
    : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
