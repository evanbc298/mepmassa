const { chromium } = require('playwright');
const path = require('path');

const HTML = 'file:///' + path.join(__dirname, 'cover.html').replace(/\\/g, '/');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1640, height: 624 });
  await page.goto(HTML, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const cover = await page.$('.cover');
  await cover.screenshot({ path: path.join(__dirname, 'facebook-cover.png') });

  await browser.close();
  console.log('Renderizado: facebook-cover.png');
})();
