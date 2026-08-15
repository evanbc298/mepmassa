# Pendências abertas — atualizado 2026-07-22

Lista de itens em aberto. Marcar como resolvido e apagar a linha conforme for corrigindo.

---

## 🔴 Loja online — migrando de Nuvemshop pra WooCommerce (EM ANDAMENTO)

Decisão tomada em 22/07: sair da Nuvemshop (temas todos voltados pra moda, não combina com o perfil industrial da MEP; edição de CSS avançado bloqueada no plano atual) e migrar pra **WooCommerce** (WordPress), onde dá pra construir um tema 100% customizado.

**Como vai funcionar:** eu construo o tema completo (produto, categoria, carrinho); o usuário só cadastra produto/preço/foto pelo painel depois de pronto.

**Próximos passos, nessa ordem:**
1. Usuário assina hospedagem — plano **Rapid Direct Basic (R$14,90/mês)** já escolhido, confirmar que o instalador de scripts inclui WordPress antes de assinar
2. Instalar WordPress + plugin WooCommerce (gratuito) na hospedagem
3. Apontar domínio `loja.mep.ind.br` pra hospedagem
4. Aí sim: eu construo o tema customizado da MEP
5. Migrar os 12 produtos/18 SKUs já prontos em `nuvemshop-import.csv` pro WooCommerce
6. Frete: configurar plugin Melhor Envio ou Frenet (integra Correios + transportadoras — importante pros baldes de 24-30kg, que passam do limite confortável dos Correios)

**Observação:** os banners feitos em `marketing/nuvemshop-banners/` foram pensados pra Nuvemshop — podem não servir depois da migração (tamanhos diferentes de tema pra tema). Não descartar ainda, mas não são a prioridade agora.

---

## 🔴 Orçamento Golden Beach — enviado

`marketing/orcamentos/golden-beach-2026-07-21.pdf` — MEP-2026-009, 130 barricas MEP 20, preço CNPJ R$180 aplicado, total R$23.400,00, contato Liliane. Enviado ao cliente em 22/07. Aguardando resposta dela.

---

## 🔴 Prompt da Bruna — recolar versão atualizada no Facilita Flow

Prompt corrigido em 21/07 (removida estimativa automática de baldes que ela fazia sozinha — regra agora é só coletar dados, nunca calcular preço/quantidade). Se o prompt já estava colado no Facilita Flow antes de 21/07, precisa recolar `marketing/bruna-prompt-PRONTO-PRA-COLAR.txt` atualizado.

---

## 🟡 Carrossel "Ecossistema 4 produtos" — pronto, aguardando aprovação pra postar

6 slides em `marketing/conteudo/carrossel-ecossistema-4-produtos-2026-07-21/instagram/` + legenda em `legenda.md`. Falta só aprovar e publicar.

---

## 🟡 Rótulos — correções finais pendentes de retorno do GPT

Em 22/07: CNPJ da MEP corrigido em todo o projeto (era 73.717.119/0001-84, correto é **62.205.954/0001-98**), fabricante confirmado como **PrudenCollor Ltda** (CNPJ 52.702.204/0001-78), tagline corrigida de "Massa de Edificação Profissional" pra **"Método de Edificação Profissional"** em 9 arquivos.

O cliente aprovou versões do rótulo verso e frente geradas no GPT (com ícones que meus arquivos HTML não tinham) — não são os mesmos arquivos que tenho aqui. Prompts de correção já enviados ao usuário pra ele rodar no GPT e me devolver:
- Rótulo verso: 3 correções de texto (remover "ajuste em 5 segundos" do MEP10, adicionar "obras acima de 2 pavimentos" no MEP20, opção bisnaga/espátula no MEP30) — já apliquei também no meu HTML (`rotulo-verso-balde.html`), mas o "oficial" é a versão do GPT
- Rótulo frente: correção da tagline — prompt enviado, aguardando resultado
- QR code personalizado com logo no centro pronto (`marketing/rotulos-bisnaga/qrcode-mep-personalizado.png`) — **testado fisicamente com celular em 14/08/2026, funciona**, liberado pra uso em material impresso/digital

**Arquivo temporário travado:** `marketing/rotulos-bisnaga/ROTULO-FRENTE-BARRICA-UNICO-830x280mm-tmp.pdf` — está esperando o usuário fechar o PDF antigo no Acrobat pra eu finalizar a substituição (arquivo final vs nome definitivo).

---

## ✅ RESOLVIDO — Renumeração MEP 30 ↔ MEP 40, corrigido em 21/07

Confirmado em 20/07 via `manual_tecnico_mep_v4.pdf`: **MEP 30 = Encunhamento Inteligente** (24kg, bisnaga, topo da parede) e **MEP 40 = Reboco Fino Tecnológico** (30kg, desempenadeira, acabamento).

**Corrigido:**
- ✅ Memória do projeto (`project-mep-numeracao`)
- ✅ `marketing/rotulos-bisnaga/rotulo-verso-balde.html` — 4 colunas (10/20/30/40)
- ✅ `docs/index.html` — todo texto visível 25kg→24kg + bug de cálculo no JS do chatbot (dividia por 25 em vez de 15)
- ✅ `nuvemshop-import.csv` — linha antiga "mep-30-emboco" virou `mep-40-reboco-fino` (30kg, R$130), nova linha `mep-30-encunhamento` criada (24kg, sem preço — nunca foi precificado)
- ✅ `marketing/apresentacao-manual-mep.html` — deck agora com 8 slides (era 7): novo slide 05 = MEP 30 Encunhamento, slide 06 = MEP 40 Reboco Fino, card e tabela de consumo com os 4 produtos. PDF e PPTX regenerados.
- ✅ `marketing/rotulos-bisnaga/rotulo-frente-bisnaga.html` — checado, já estava genérico (sem texto "MEP 30"/"Reboco Fino"), não precisou de correção

**Marcado como obsoleto (não dá pra corrigir):**
- `marketing/mockup-barricas/comparativo-etiquetas.png` — mockup antigo sem HTML fonte, não pode ser regenerado. Considerar substituído pelos rótulos novos em `marketing/rotulos-bisnaga/`.

**Não mexido (correto deixar como estava):** orçamentos já enviados a clientes (Zonta, Wagner Batista) — documentos já entregues, ficam como estavam.

**Peso confirmado por escrito pelo cliente em 21/07:** MEP 10 = 24kg (4 sacos de 6kg), MEP 20 = 24kg (8 sacos de 3kg), MEP 30 = 24kg (8 sacos de 3kg), MEP 40 = 30kg (balde, desempenadeira). Bate 100% com manual técnico v4, orçamentos Zonta/Wagner Batista e planilha da loja.

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
