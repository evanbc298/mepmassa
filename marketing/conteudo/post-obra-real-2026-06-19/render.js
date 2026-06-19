const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1350 });

  const file = 'file:///' + path.resolve(__dirname, 'carrossel.html').replace(/\\/g, '/');
  await page.goto(file, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  const outDir = path.join(__dirname, 'instagram');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  await page.screenshot({
    path: path.join(outDir, 'slide-01.png'),
    clip: { x: 0, y: 0, width: 1080, height: 1350 },
    deviceScaleFactor: 2
  });

  console.log('Renderizado: instagram/slide-01.png');
  await browser.close();
})();
