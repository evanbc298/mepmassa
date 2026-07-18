#!/usr/bin/env node
// Publica uma foto única ou carrossel na Página do Facebook via Meta Graph API.
// Uso:
//   node --env-file=.env scripts/postar-facebook.js caminho/legenda.txt https://site.com/img1.png [https://site.com/img2.png ...]
//
// As imagens precisam estar em URLs públicas (já publicadas no site).

const fs = require('fs');

const GRAPH_VERSION = 'v21.0';
const TOKEN = process.env.META_PAGE_ACCESS_TOKEN;
const PAGE_ID = process.env.META_PAGE_ID;

function fail(msg) {
  console.error(`Erro: ${msg}`);
  process.exit(1);
}

async function graphPost(path, params) {
  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${path}`;
  const body = new URLSearchParams({ ...params, access_token: TOKEN });
  const res = await fetch(url, { method: 'POST', body });
  const data = await res.json();
  if (data.error) {
    fail(`Graph API (${path}) — ${data.error.message} (code ${data.error.code})`);
  }
  return data;
}

async function main() {
  if (!TOKEN || !PAGE_ID) {
    fail('faltam META_PAGE_ACCESS_TOKEN e/ou META_PAGE_ID no .env — ver marketing/automacao-meta-setup.md');
  }

  const [captionPath, ...imageUrls] = process.argv.slice(2);
  if (!captionPath || imageUrls.length === 0) {
    fail('uso: node --env-file=.env scripts/postar-facebook.js <legenda.txt> <url-imagem-1> [url-imagem-2 ...]');
  }
  if (!fs.existsSync(captionPath)) {
    fail(`arquivo de legenda não encontrado: ${captionPath}`);
  }
  const caption = fs.readFileSync(captionPath, 'utf8').trim();

  if (imageUrls.length === 1) {
    console.log('Publicando post único...');
    const post = await graphPost(`${PAGE_ID}/photos`, {
      url: imageUrls[0],
      caption,
      published: 'true',
    });
    console.log(`✅ Publicado no Facebook — post ID: ${post.post_id || post.id}`);
    return;
  }

  console.log(`Enviando ${imageUrls.length} imagens (não publicadas ainda)...`);
  const photoIds = [];
  for (const [i, url] of imageUrls.entries()) {
    console.log(`  imagem ${i + 1}/${imageUrls.length}...`);
    const photo = await graphPost(`${PAGE_ID}/photos`, {
      url,
      published: 'false',
    });
    photoIds.push(photo.id);
  }

  console.log('Publicando álbum...');
  const attachedMedia = photoIds.map((id) => JSON.stringify({ media_fbid: id }));
  const feedPost = await graphPost(`${PAGE_ID}/feed`, {
    message: caption,
    ...Object.fromEntries(attachedMedia.map((m, i) => [`attached_media[${i}]`, m])),
  });

  console.log(`✅ Publicado no Facebook — post ID: ${feedPost.id}`);
}

main();
