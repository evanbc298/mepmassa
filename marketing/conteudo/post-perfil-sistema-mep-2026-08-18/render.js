const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1080, height: 1350 });
  await page.emulateMedia({ media: 'screen' });

  const htmlPath = 'file:///' + path.resolve(__dirname, 'post-perfil-sistema-mep.html').replace(/\\/g, '/');
  await page.goto(htmlPath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const slide = await page.$('.slide');
  await slide.screenshot({ path: path.join(__dirname, 'post-perfil-sistema-mep.png') });

  await browser.close();
  console.log('✓ post-perfil-sistema-mep.png');
})();
