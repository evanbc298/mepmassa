const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();

  const panels = [
    { file: 'panel-preparacao.html', out: 'panel-preparacao.png', w: 1080, h: 1920 },
    { file: 'panel-aplicacao-strip.html', out: 'panel-aplicacao-strip.png', w: 1080, h: 768 },
    { file: 'panel-cta.html', out: 'panel-cta.png', w: 1080, h: 1920 },
  ];

  for (const p of panels) {
    const page = await browser.newPage({ viewport: { width: p.w, height: p.h } });
    const filePath = path.resolve(p.file).split(path.sep).join('/');
    await page.goto('file:///' + filePath);
    await page.waitForTimeout(400);
    await page.screenshot({ path: p.out });
    await page.close();
    console.log('rendered', p.out);
  }

  await browser.close();
})();
