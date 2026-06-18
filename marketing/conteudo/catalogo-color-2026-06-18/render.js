const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // A3 at ~96dpi = 1587x1122px, deviceScaleFactor 3 = ~300dpi quality
  await page.setViewportSize({ width: 1800, height: 2400 });
  await page.emulateMedia({ media: 'screen' });

  const htmlPath = 'file:///' + path.resolve(__dirname, 'catalogo.html').replace(/\\/g, '/');
  await page.goto(htmlPath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);

  const outDir = path.join(__dirname, 'pdf');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  // Render spread 1 (capa exterior)
  const spreadCapa = await page.$('#spread-capa');
  await spreadCapa.screenshot({
    path: path.join(outDir, 'capa-exterior.png'),
    deviceScaleFactor: 3
  });
  console.log('✓ capa-exterior.png');

  // Render spread 2 (interior)
  const spreadInt = await page.$('#spread-interior');
  await spreadInt.screenshot({
    path: path.join(outDir, 'interior.png'),
    deviceScaleFactor: 3
  });
  console.log('✓ interior.png');

  await browser.close();
  console.log('\nProntos em pdf/');
})();
