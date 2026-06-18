const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1350 });

  const htmlPath = 'file:///' + path.resolve(__dirname, 'carrossel.html').replace(/\\/g, '/');
  await page.goto(htmlPath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const outDir = path.join(__dirname, 'instagram');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  const slide = await page.$('.slide');
  await slide.screenshot({ path: path.join(outDir, 'post-01.png') });
  console.log('✓ post-01.png salvo em instagram/');

  await browser.close();
})();
