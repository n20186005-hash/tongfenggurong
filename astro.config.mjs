import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// إعداد النطاق الوحيد للمشروع: ضع النطاق النهائي هنا فقط عند توفره.
// بعد شراء النطاق، ضع الرابط الحقيقي في المتغير التالي ثم أعد البناء.
const site = '';

export default defineConfig({
  site: site || undefined,
  output: 'static',
  build: {
    format: 'directory'
  },
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
