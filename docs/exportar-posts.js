const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 900 });

  await page.goto('file:///C:/Users/evanb/Desktop/MEPMASSA/MazyOS/saidas/instagram-posts-produto.html');
  await page.waitForTimeout(2000);

  const posts = await page.$$('.canvas');
  console.log(`Encontrados ${posts.length} posts`);

  for (let i = 0; i < posts.length; i++) {
    const filename = `C:/Users/evanb/Desktop/MEPMASSA/MazyOS/saidas/post-${i + 1}.png`;
    await posts[i].screenshot({ path: filename });
    console.log(`Post ${i + 1} exportado: ${filename}`);
  }

  await browser.close();
  console.log('Exportacao concluida!');
})();
