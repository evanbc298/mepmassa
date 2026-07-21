# Pendências abertas — atualizado 2026-07-21

Lista de itens em aberto. Marcar como resolvido e apagar a linha conforme for corrigindo.

---

## 🔴 Renumeração MEP 30 ↔ MEP 40 — corrigir nos arquivos antigos

Confirmado em 20/07 via `manual_tecnico_mep_v4.pdf`: **MEP 30 = Encunhamento Inteligente** (24kg, bisnaga, topo da parede) e **MEP 40 = Reboco Fino Tecnológico** (30kg, desempenadeira, acabamento). Isso inverte o que a gente vinha usando (MEP 30 = Reboco Fino) até 20/07/2026.

**Já corrigido:**
- ✅ Memória do projeto (`project-mep-numeracao`)
- ✅ `marketing/rotulos-bisnaga/rotulo-verso-balde.html` — agora com 4 colunas (10/20/30/40)

**Ainda por corrigir:**
- `marketing/rotulos-bisnaga/rotulo-frente-bisnaga.html` — sticker de exemplo mostra "MEP 30 Reboco Fino" (precisa virar Encunhamento) e falta criar o sticker do MEP 40
- `marketing/apresentacao-manual-mep.html` — slide "MEP 30" = Reboco Fino, deck só tem 3 produtos, falta o 4º
- `marketing/mockup-barricas/comparativo-etiquetas.png` — mockup MEP 10/20/30 com MEP 30 = Reboco Fino
- `nuvemshop-import.csv` — linha "mep-30-emboco" (peso 30kg) é na verdade o MEP 40 (Reboco Fino, 30kg) — renomear SKU/nome/descrição pra MEP 40. Falta criar linha nova pro MEP 30 real (Encunhamento, 24kg, 8 sacos de 3kg, dimensões balde 24kg redondo 30x30 — mesma embalagem do MEP 20)
- Prompts de etiqueta MEP 30 já enviados pro GPT numa sessão anterior — se a imagem já foi gerada com "Reboco Fino" no lugar do MEP 30, está com o produto errado

**Não mexer:** orçamentos já enviados a clientes (Zonta, Wagner Batista) — ficam como estavam, documentos já entregues.

---

## ✅ RESOLVIDO — Peso MEP 10/20/30/40, confirmado 21/07

Cliente confirmou por escrito: MEP 10 = 24kg (4 sacos de 6kg), MEP 20 = 24kg (8 sacos de 3kg), MEP 30 = 24kg (8 sacos de 3kg), MEP 40 = 30kg (balde, desempenadeira). Bate 100% com manual técnico v4, orçamentos Zonta/Wagner Batista e planilha da loja. Não é mais 25kg em lugar nenhum.

**Ainda falta corrigir o site** (`docs/index.html`) que mostra 25kg — é o único lugar que ficou pra trás.

---

## 🔴 Textura Projetada — 20kg ou 25kg?

- Cliente confirmou **25kg** em 17/07 → já atualizado no `nuvemshop-import.csv`.
- **Ainda não atualizado:** site (`docs/index.html`) e imagem do produto (`docs/textura-projetada-20kg.png`, que também tem erros de texto "REVESTIMENTD"/"Parodes").

---

## 🟡 NCM — sugestão pronta, falta validar

- MEP 10/20/30/40 → 3214.10.00 | Tintas acrílicas → 3209.10.00 | Primer/Emborrachada → 3210.00.10 | Textura → 3209.10.00
- Cliente pediu validação com a contadora antes de assumir como definitivo.

---

## 🟡 Código de barras EAN-13 — bloqueado até registro GS1

MEP não tem cadastro/prefixo GS1 Brasil ainda. Coluna "Código de barras" do CSV está em branco de propósito — sem GS1 não dá pra gerar código válido.

---

## 🟢 Frente do balde/barrica — layout novo fechado

Embalagem única navy, logo + tagline + origem + site, QR code real (não decorativo) com CTA "Conheça a MEP" apontando pro mep.ind.br. Sem peso/rendimento fixo impresso (isso resolve o conflito 24kg/25kg nesse arquivo específico). Arquivo: `marketing/rotulos-bisnaga/rotulo-frente-barrica.html` / `ROTULO-FRENTE-BARRICA-UNICO-830x280mm.pdf`.

A versão da **bisnaga** (`rotulo-frente-bisnaga.html`) ainda está no modelo antigo (com área reservada pra etiqueta colada) — decidir se ela também migra pro modelo "QR code" ou mantém o conceito de etiqueta trocável.

---

## Arquivos de referência

- Rótulos prontos: `marketing/rotulos-bisnaga/`
- Manual técnico fonte (v4): enviado pelo usuário em 20/07/2026, conteúdo completo já extraído pra memória do projeto
- Planilha de SKUs: `nuvemshop-import.csv`
