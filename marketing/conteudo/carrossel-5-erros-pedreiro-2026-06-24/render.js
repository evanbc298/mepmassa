const { chromium } = require(require('path').join(process.env.APPDATA, 'npm/node_modules/playwright'));
const path = require('path');
const fs = require('fs');

const OUT_DIR = path.join(__dirname, 'instagram');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const HTML_PATH = 'file:///' + path.join(__dirname, 'carrossel.html').replace(/\\/g, '/');
const WIDTH = 1080;
const HEIGHT = 1350;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setViewportSize({ width: WIDTH, height: HEIGHT });
  await page.goto(HTML_PATH, { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);

  const slides = await page.$$('.slide');
  console.log(`Slides encontrados: ${slides.length}`);

  for (let i = 0; i < slides.length; i++) {
    const num = String(i + 1).padStart(2, '0');
    const outFile = path.join(OUT_DIR, `slide-${num}.png`);

    await slides[i].screenshot({ path: outFile });
    console.log(`Renderizado: slide-${num}.png`);
  }

  await browser.close();
  console.log('Concluido. PNGs em: instagram/');
})();
