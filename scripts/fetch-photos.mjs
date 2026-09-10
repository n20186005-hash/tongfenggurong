import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, '../public/images');
await mkdir(outDir, { recursive: true });

const photos = [
  ['memorial-front.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/The_Alexandria_Naval_Unknown_Soldier_Memorial_01.jpg?width=1800'],
  ['memorial-columns.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/The_Alexandria_Naval_Unknown_Soldier_Memorial_04.jpg?width=1400'],
  ['memorial-side.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/The_Alexandria_Naval_Unknown_Soldier_Memorial_06.jpg?width=1400'],
  ['memorial-square.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Monument_of_the_Navy_Unknown_Soldier_in_Alexandria_(6).jpg?width=1400']
];

for (const [name, url] of photos) {
  const response = await fetch(url, {
    headers: { 'User-Agent': 'AlexandriaMemorialSite/1.0 (static site asset fetch)' },
    redirect: 'follow'
  });
  if (!response.ok) throw new Error(`Failed to fetch ${name}: ${response.status}`);
  const bytes = new Uint8Array(await response.arrayBuffer());
  await writeFile(resolve(outDir, name), bytes);
  console.log(`saved ${name} (${bytes.byteLength} bytes)`);
}
