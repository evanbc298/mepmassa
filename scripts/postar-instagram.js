#!/usr/bin/env node
// Publica uma foto única ou carrossel no Instagram via Meta Graph API.
// Uso:
//   node --env-file=.env scripts/postar-instagram.js caminho/legenda.txt https://site.com/img1.png [https://site.com/img2.png ...]
//
// As imagens precisam estar em URLs públicas (já publicadas no site) — a Graph API
// não aceita upload de arquivo local para este endpoint.

const fs = require('fs');

const GRAPH_VERSION = 'v21.0';
const TOKEN = process.env.META_PAGE_ACCESS_TOKEN;
const IG_USER_ID = process.env.META_IG_USER_ID;

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
  if (!TOKEN || !IG_USER_ID) {
    fail('faltam META_PAGE_ACCESS_TOKEN e/ou META_IG_USER_ID no .env — ver marketing/automacao-meta-setup.md');
  }

  const [captionPath, ...imageUrls] = process.argv.slice(2);
  if (!captionPath || imageUrls.length === 0) {
    fail('uso: node --env-file=.env scripts/postar-instagram.js <legenda.txt> <url-imagem-1> [url-imagem-2 ...]');
  }
  if (!fs.existsSync(captionPath)) {
    fail(`arquivo de legenda não encontrado: ${captionPath}`);
  }
  const caption = fs.readFileSync(captionPath, 'utf8').trim();

  let creationId;

  if (imageUrls.length === 1) {
    console.log('Criando post único...');
    const media = await graphPost(`${IG_USER_ID}/media`, {
      image_url: imageUrls[0],
      caption,
    });
    creationId = media.id;
  } else {
    console.log(`Criando carrossel com ${imageUrls.length} imagens...`);
    const childIds = [];
    for (const [i, url] of imageUrls.entries()) {
      console.log(`  imagem ${i + 1}/${imageUrls.length}...`);
      const child = await graphPost(`${IG_USER_ID}/media`, {
        image_url: url,
        is_carousel_item: 'true',
      });
      childIds.push(child.id);
    }
    const carousel = await graphPost(`${IG_USER_ID}/media`, {
      media_type: 'CAROUSEL',
      children: childIds.join(','),
      caption,
    });
    creationId = carousel.id;
  }

  console.log('Publicando...');
  const publish = await graphPost(`${IG_USER_ID}/media_publish`, {
    creation_id: creationId,
  });

  console.log(`✅ Publicado no Instagram — media ID: ${publish.id}`);
}

main();
