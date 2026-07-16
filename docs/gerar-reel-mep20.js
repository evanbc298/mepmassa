const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 900, height: 1000 });

  const htmlPath = 'C:/Users/evanb/Desktop/MEPMASSA/MazyOS/marketing/reel-mep20-conceito.html';
  await page.goto('file:///' + htmlPath);
  await page.waitForTimeout(3000);

  const frame = await page.$('.frame');
  const outPath = 'C:/Users/evanb/Desktop/MEPMASSA/MazyOS/marketing/mockup-barricas/reel-mep20-conceito.png';

  await frame.screenshot({ path: outPath });
  console.log('Salvo em:', outPath);
  await browser.close();
})();
