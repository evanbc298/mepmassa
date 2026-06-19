const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 520, height: 640 });
  const file = 'file:///' + path.resolve(__dirname, 'barrica.html').replace(/\\/g, '/');
  await page.goto(file);
  await page.waitForTimeout(500);
  await page.screenshot({
    path: 'barrica-30kg.png',
    clip: { x: 0, y: 0, width: 520, height: 640 },
    omitBackground: true,
    deviceScaleFactor: 3
  });
  console.log('Renderizado: barrica-30kg.png');
  await browser.close();
})();
