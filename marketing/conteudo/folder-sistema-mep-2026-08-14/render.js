const { chromium } = require('playwright');
const path = require('path');
const sharp = require('sharp');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setViewportSize({ width: 900, height: 1250 });
  await page.emulateMedia({ media: 'screen' });

  const htmlPath = 'file:///' + path.resolve(__dirname, 'folder-sistema-mep.html').replace(/\\/g, '/');
  await page.goto(htmlPath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  // checagem de overflow nas seções de altura fixa
  const overflow = await page.evaluate(() => {
    const sels = ['.header', '.hero', '.headline', '.steps', '.step', '.stats', '.folder'];
    const out = {};
    sels.forEach(sel => {
      document.querySelectorAll(sel).forEach((el, i) => {
        const key = sel + (document.querySelectorAll(sel).length > 1 ? '-' + i : '');
        out[key] = el.scrollHeight - el.clientHeight;
      });
    });
    return out;
  });
  console.log('Overflow check (deve ser tudo <= 0):', overflow);

  const folder = await page.$('.folder');

  // print: alta resolução (~300dpi em A4)
  await folder.screenshot({
    path: path.join(__dirname, 'folder-sistema-mep-PRINT.png'),
    scale: 'css',
  });

  await browser.close();

  // versão print em altíssima resolução via deviceScaleFactor separado
  const browser2 = await chromium.launch();
  const page2 = await browser2.newPage({ viewport: { width: 900, height: 1250 }, deviceScaleFactor: 4 });
  await page2.emulateMedia({ media: 'screen' });
  await page2.goto(htmlPath, { waitUntil: 'networkidle' });
  await page2.waitForTimeout(1500);
  const folder2 = await page2.$('.folder');
  await folder2.screenshot({ path: path.join(__dirname, 'folder-sistema-mep-PRINT.png') });
  await browser2.close();
  console.log('✓ folder-sistema-mep-PRINT.png (alta resolução, pronto pra gráfica)');

  // versão WhatsApp: JPG comprimido, mesma imagem redimensionada
  await sharp(path.join(__dirname, 'folder-sistema-mep-PRINT.png'))
    .resize({ width: 1600 })
    .jpeg({ quality: 85 })
    .toFile(path.join(__dirname, 'folder-sistema-mep-WHATSAPP.jpg'));
  console.log('✓ folder-sistema-mep-WHATSAPP.jpg (leve, pronto pra enviar)');
})();
