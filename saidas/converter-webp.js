const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const imagens = [
  'balde-25kg-v2.png.png',
  'barrica-25kg.png.png',
  'bisnaga-1kg.png.png',
  'bisnaga-3kg.png.png',
  'bucket-premium.png',
  'bucket-economica.png',
  'bucket-esmalte.png',
  'bucket-pisos.png',
  'img-comparativo.png',
  'img-como-usar.png',
  'img-obra-alvenaria.png',
  'obra-alvenaria.png',
  'pedreiro-bisnaga.png',
  'logo-mep-color.png.png',
];

async function converter() {
  for (const arquivo of imagens) {
    const entrada = path.join(dir, arquivo);
    const saida = path.join(dir, arquivo.replace(/\.png(\.png)?$/i, '.webp'));
    const antesKB = Math.round(fs.statSync(entrada).size / 1024);
    await sharp(entrada).webp({ quality: 82 }).toFile(saida);
    const depoisKB = Math.round(fs.statSync(saida).size / 1024);
    const economia = Math.round((1 - depoisKB / antesKB) * 100);
    console.log(`${arquivo} → ${path.basename(saida)} | ${antesKB}KB → ${depoisKB}KB (-${economia}%)`);
  }
  console.log('\nConcluído.');
}

converter().catch(console.error);
