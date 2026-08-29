---
name: design
description: >
  Cria peças gráficas de impressão e produto — rótulos de embalagem (balde/barrica/bisnaga),
  banners, apresentações comerciais — usando o pipeline HTML+CSS renderizado via Playwright,
  em tamanho real de impressão (mm, não px). Diferente do /carrossel (que é pra redes sociais,
  1080x1350px): aqui o output é print-ready, com dados técnicos/legais do produto.
  Use quando o usuário pedir "rótulo", "embalagem", "balde", "banner", "apresentação comercial",
  "material impresso", "design gráfico", ou /design.
---

# /design — Design gráfico de impressão e produto

Skill pra peças gráficas fora do fluxo de redes sociais: rótulos de produto, banners, apresentações
comerciais. Mesmo pipeline validado do `/carrossel` (HTML+CSS → Playwright → PNG), mas em escala
de impressão real e com foco em dados técnicos/legais que vão pra gráfica de verdade.

## Dependências

- **Playwright** (Node, headless Chromium) — renderizar HTML em PNG
- **sharp** — quando precisar analisar/recortar logo em raster (ver seção específica abaixo)
- **`identidade/design-guide.md`** — cores e tipografia da marca
- **Dados legais da empresa** (CNPJ, endereço, SAC) — ver nota de confiabilidade abaixo

**Nota de confiabilidade:** antes de usar CNPJ/endereço/telefone de `_memoria/empresa.md` ou
`identidade/design-guide.md` num material que vai pra impressão de verdade, confirme que não estão
desatualizados (esses arquivos já ficaram para trás em relação ao estado real do negócio antes —
rodar `/atualizar` se desconfiar). Na dúvida, perguntar ao usuário em vez de confiar cego no arquivo.

## Quando usar isso em vez de /carrossel

| | `/carrossel` | `/design` |
|---|---|---|
| Formato | 1080×1350px (redes sociais) | mm reais (impressão) |
| Conteúdo | Educativo, institucional | Rótulo de produto, banner comercial, apresentação |
| Dados | Marca + mensagem | + ficha técnica, dados legais, campos de produção |

---

## Padrão de rótulo de produto

Validado em rótulos reais (MEP Massas e MEP Color, 07/2026) — reaproveitar essa estrutura em vez
de reinventar do zero.

### Base do arquivo

```html
<style>
@page { size: 346mm 266mm; margin: 0; }
.rotulo { width:346mm; height:266mm; ...; overflow:hidden; }
</style>
```

- Tamanho comum de rótulo de balde 18L/25kg: **346×266mm**
- Trabalhar sempre em **mm**, nunca px — precisa bater com o tamanho físico real na gráfica
- `overflow:hidden` no container principal é obrigatório — combinado com o checklist de overflow
  abaixo, evita que conteúdo seja cortado silenciosamente sem ninguém perceber

### Sistema de cor por variação (quando há mais de um SKU/produto no mesmo layout)

Usar CSS custom properties por bloco, não classes fixas — permite reaproveitar o mesmo HTML pra
N produtos sem duplicar CSS:

```css
.col { --accent:#F28C28; --tint:#FDEBD9; --tagtext:#162240; }
```

Cada bloco define seu próprio `--accent`/`--tint` inline. O dado numérico mais importante (rendimento,
preço, medida) vira um "chip" de destaque fixado no rodapé do bloco (`margin-top:auto`) — isso alinha
visualmente entre variações mesmo quando o texto acima tem tamanhos diferentes.

### Área reservada (quando um elemento só existe fisicamente na produção)

Pra coisas que não dá pra desenhar de verdade agora (etiqueta colada à parte, adesivo, QR impresso
separado): nunca simular/inventar o elemento — desenhar uma caixa tracejada com legenda clara do que
vai ali:

```css
.area-reservada {
  border:1.2px dashed rgba(255,255,255,.4); border-radius:2mm;
  display:flex; flex-direction:column; align-items:center; justify-content:center;
}
```

### Checklist de conteúdo obrigatório em rótulo real

Não esquecer, mesmo que o usuário não peça explicitamente — perguntar se algo estiver faltando em vez
de pular ou inventar:

- [ ] Nome do produto e volume/peso
- [ ] Rendimento — **nunca estimar sem dado real confirmado**; marcar "a confirmar" se não tiver
- [ ] Modo de aplicação / composição / base
- [ ] Validade e condição de armazenamento
- [ ] Campo de **lote / fabricação / validade em branco** (carimbado na produção)
- [ ] CNPJ, endereço, contato (SAC) — conferir se está atualizado
- [ ] Telefone de emergência toxicológica (CIT), se for produto químico — **sempre marcar "a
      confirmar nº regional"** se não tiver certeza, nunca inventar dado de segurança
- [ ] Código de barras — marcar como decorativo/placeholder se não for EAN real cadastrado

### Logo em raster com fundo "sujo" (glow/vinheta sem transparência limpa)

Já aconteceu: logo em PNG/WebP com canal alpha irregular (vinheta que não é 0/255 limpo — típico de
arte gerada por IA). Tentar remover o fundo com flood-fill nesse caso falha (produz listras/artefatos).

**Diagnóstico rápido antes de tentar qualquer coisa** — checar alpha em alguns pontos (cantos + centro):

```js
const sharp = require('sharp');
sharp('logo.webp').ensureAlpha().raw().toBuffer({resolveWithObject:true}).then(({data,info})=>{
  // se os pontos amostrados forem todos alpha 0 ou 255 (limpo), flood-fill funciona normalmente.
  // se for gradiente/vinheta (valores no meio, tipo 150-250), NÃO tentar remover fundo —
  // usar a técnica de crop abaixo, que ignora o alpha do arquivo por completo.
});
```

**Solução que sempre funciona — crop via CSS `background-image`, sem depender do alpha do arquivo:**

1. Achar o bounding box do conteúdo real (não do fundo/glow) varrendo os pixels por saturação/brilho
   com sharp (pixel colorido ou bem escuro = conteúdo; pixel cinza claro = fundo)
2. Aplicar como `background-image` + `background-size` + `background-position` calculados em mm,
   sem usar `<img>`:

```css
.logo-crop {
  width:130mm; height:37.6mm;
  background-image:url('logo.webp');
  background-size:163.1mm auto;
  background-position:-18.05mm -30.35mm;
  background-repeat:no-repeat;
}
```

Isso corta exatamente o conteúdo, sem nenhum fundo visível, funciona sobre qualquer cor por trás, e
não exige editar/regravar o arquivo original.

---

## Workflow

1. **Entender o pedido** — qual peça, tamanho físico real, se tem variações (SKUs/cores/produtos)
2. **Levantar dados reais** antes de desenhar — nunca inventar rendimento, validade, CNPJ, telefone
   de emergência. Marcar como "a confirmar" e perguntar/flagar o que faltar
3. **Construir o HTML** em mm, reaproveitando os padrões acima
4. **Renderizar via Playwright** e checar overflow **antes** de mostrar pro usuário:

```js
const info = await page.evaluate(() => {
  const el = document.querySelector('.rotulo'); // ou seletor equivalente
  return { overflow: el.scrollHeight - el.clientHeight };
});
// se overflow > 0: reduzir padding/gap/font-size proporcionalmente e repetir até dar 0
```

5. **Renderizar o PNG e ler a imagem antes de dizer que está pronto** — nunca afirmar que ficou bom
   sem ter efetivamente visualizado o resultado renderizado
6. **Salvar em pasta organizada:** `marketing/conteudo/<tipo>-<produto>-<data>/`

## Regras

- Nunca simular dado técnico/legal real (rendimento, CIT, CNPJ, validade) — marcar "a confirmar" e
  perguntar ao usuário
- Sempre trabalhar em mm pra peça de impressão — nunca misturar com px no mesmo arquivo
- Sempre checar overflow (scrollHeight vs clientHeight) antes de entregar
- Sempre renderizar e visualizar o PNG antes de declarar pronto
- Reaproveitar o sistema de cor por variação (`--accent`/`--tint`) em vez de duplicar CSS por produto
- Pra logo raster com fundo problemático: diagnosticar o alpha primeiro, nunca tentar flood-fill às
  cegas — usar o crop via `background-image` como solução padrão
