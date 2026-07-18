# Pendências abertas — 2026-07-17

Lista de itens que ficaram em aberto nesta rodada de trabalho (rótulos + cadastro de SKUs). Marcar como resolvido e apagar a linha conforme for corrigindo.

---

## 🔴 Conflito de peso — MEP 10 / MEP 20: 24kg ou 25kg?

Existem dois pesos diferentes circulando pro balde de MEP 10 e MEP 20, e ninguém decidiu qual é o certo:

- **24kg** → usado em: `nuvemshop-import.csv`, orçamento Zonta, orçamento Wagner Batista, memória técnica original do projeto.
- **25kg** → usado em: site (`docs/index.html`), etiqueta aprovada (`comparativo-etiquetas.png`), rótulos de frente/verso do balde e bisnaga já finalizados em PDF (`marketing/rotulos-bisnaga/`).

**Ação necessária:** confirmar o peso real com quem fabrica/embala e corrigir todos os arquivos pro valor certo. Os PDFs de rótulo (frente bisnaga, frente barrica, verso balde) precisam ser regenerados se o peso mudar.

---

## 🔴 Textura Projetada — 20kg ou 25kg?

- Cliente confirmou **25kg** em 17/07 → já atualizado no `nuvemshop-import.csv`.
- **Ainda não atualizado:** site (`docs/index.html`, produto "Textura Projetada MEP") e a imagem do produto (`docs/textura-projetada-20kg.png` — nome do arquivo e o rótulo impresso nela ainda dizem 20kg). Essa imagem também tem erros de texto no rótulo ("REVESTIMENTD", "Parodes") que precisam ser corrigidos de qualquer forma.

**Ação necessária:** atualizar site + regenerar imagem do produto com peso e texto corretos.

---

## 🟡 MEP 40 — em standby

Confirmado pelo usuário (17/07): é um produto real, mas ainda não lançado oficialmente (em fase de testes). **Não usar em nenhum material comercial, orçamento, rótulo ou cadastro fiscal até liberação.** Quando for lançado, voltar aqui e coletar a especificação técnica real (etapa, aplicação, peso, embalagem) — nenhum dos rascunhos anteriores deve ser reaproveitado sem confirmação.

---

## 🟡 NCM — sugestão pronta, falta validar

NCM sugerido já está no projeto (memória `project-nuvemshop`):
- MEP 10/20/30 → 3214.10.00
- Tintas acrílicas → 3209.10.00
- Primer / Tinta Emborrachada → 3210.00.10
- Textura → 3209.10.00

**Ação necessária:** o próprio cliente pediu validação com a contadora antes de assumir como definitivo.

---

## 🟡 Código de barras EAN-13 — bloqueado até registro GS1

MEP ainda não tem cadastro/prefixo GS1 Brasil. Sem isso não existe como gerar um código EAN-13 válido — por isso a coluna "Código de barras" no `nuvemshop-import.csv` está em branco de propósito.

**Ação necessária:** contratar registro GS1 Brasil, depois voltar aqui pra gerar os 17 códigos (um por SKU).

---

## 🟢 Etiqueta trocável (frente do balde/bisnaga) — gerando no GPT

- **MEP 20**: gerada, revisada e corrigida (ABNT ajustado pra "Norma ABNT 16590", texto de segurança reintroduzido, "IND. QUÍMICA" removido).
- **MEP 10**: prompt já enviado, imagem ainda não gerada/revisada.
- **MEP 30**: prompt já enviado, imagem ainda não gerada/revisada.

**Ação necessária:** gerar e revisar MEP 10 e MEP 30 no GPT, mesmo processo de conferência palavra por palavra que foi feito no MEP 20.

---

## Arquivos de referência

- Rótulos prontos: `marketing/rotulos-bisnaga/`
- Planilha de SKUs: `nuvemshop-import.csv`
- Prompts de etiqueta usados: ver histórico da conversa (MEP 10, 20, 30 — formato paisagem 403×184mm)
