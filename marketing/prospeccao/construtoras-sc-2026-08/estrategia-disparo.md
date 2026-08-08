# Estratégia — Disparo de Prospecção Construtoras/Incorporadoras SC (Ago/2026)

Base: ~300 contatos (email + WhatsApp) extraídos via Apify a partir do Google Meu Negócio, construtoras e incorporadoras de Santa Catarina. Distinto da base antiga de 100 contatos (`marketing/prospeccao/whatsapp-sc-2026-06/`), já usada na campanha de 24/06/2026.

## 1. Antes de importar no Brevo

1. **Deduplicar contra a base antiga.** Cruzar a nova lista com `leads-com-email.csv` (100 contatos) por email e por empresa — evita mandar dois emails diferentes pra mesma construtora em pouco tempo, o que soa desorganizado.
2. **Limpar a lista.** Remover linhas sem email válido, emails genéricos de baixa entrega (`contato@gmail.com` pessoais, por exemplo) e duplicados internos.
3. **Criar lista nova no Brevo**, separada da "Leads MEP #5" (essa é pra quem já converteu/entrou em contato — lista de nutrição). Sugestão de nome: **"Prospecção Construtoras SC — Ago/2026"**.
4. **Não linkar a nova lista à automação de dia 3/7/14 existente** — aquela automação foi desenhada para lead que já demonstrou interesse (opt-in), não para contato frio. Cadência abaixo é separada.

## 2. Por que não disparar os 300 de uma vez

O domínio `contato@mep.ind.br` só tem histórico de envio pra ~105 contatos (2 campanhas). Um salto direto pra 300 emails frios de uma vez é o tipo de comportamento que provedores de email (Gmail, Outlook) associam a spam — mesmo com conteúdo legítimo, pode derrubar a taxa de entrega da própria lista de nutrição existente.

**Recomendação:** enviar em lotes de 50–60 contatos por dia, ao longo de 5–6 dias úteis, terça a quinta-feira, entre 9h e 11h (janela historicamente melhor para abertura em B2B). O Brevo permite agendar por lote diretamente na campanha.

Acompanhar taxa de bounce (manter abaixo de 2%) e reclamações de spam (abaixo de 0,1%) entre lotes — se um lote vier ruim, pausar e revisar a lista antes de continuar.

## 3. Sequência de contato (3 toques)

Email 1 é o único definido nesta fase (`marketing/email/template-parceria-inicial.html`). Posicionamento: MEP não é "um produto de argamassa", é o **sistema completo de edificação** (Método de Edificação Profissional) — nivelamento, assentamento, encunhamento e reboco fino num fornecedor só. É essa a diferença que abre a conversa de parceria, não o preço.

Assunto sugerido: **"MEP: um sistema completo pra alvenaria da {{contact.COMPANY}}"**
Pré-visualização sugerida: **"Do nivelamento ao reboco fino, com um fornecedor só. Sem betoneira."**

- **Dia 0 — Email 1: Apresentação do sistema.** Tom conversacional, sem tabela de comparação, sem preço. Enquadra o MEP como sistema (não produto único) e como parceria, não como venda pontual. Menciona condição comercial diferenciada para quem inicia agora, sem citar valor. CTA duplo (responder o email ou chamar no WhatsApp).
- **Dia 5–7 — Email 2: Prova/dado real.** Reaproveitar o case de obra real de 820m² (-26,5% custo, -109 dias, -96% resíduo). Ainda sem preço — reforça credibilidade técnica antes de qualquer conversa comercial.
- **Dia 12–14 — Email 3: Convite direto.** Convite objetivo pra uma conversa rápida ou visita técnica. Pode citar explicitamente que a condição de parceria inicial é por tempo/volume limitado, sem ainda dar número — o valor só entra depois que alguém responde (mesma regra já usada na Bruna e no bot Gemini: nunca informar preço sem antes coletar nome, cidade e volume).

Só enviar Email 2 pra quem não respondeu ao Email 1, e só enviar Email 3 pra quem não respondeu a nenhum dos dois. Quem responder a qualquer um dos três sai da sequência automática e vira atendimento manual.

## 4. Sobre o teaser de preço

O Email 1 já inclui a linha "as condições comerciais para quem começa agora estão bem diferenciadas" — deliberadamente sem número. Não citar percentual nem valor de referência nesta fase: qualquer número solto no primeiro contato frio abre margem pra comparação rasa ou desconfiança ("por que tão barato?"). O preço reduzido de abertura de parceria só deve ser revelado em conversa direta (resposta ao email, WhatsApp ou call), depois de entender o volume/porte da obra — mesmo padrão já usado nos scripts do WhatsApp.

## 5. Acompanhamento

Reaproveitar o padrão de `controle.csv` da base antiga (`Data, Empresa, Contato, Telefone, Status, Observação`) — nova planilha em `marketing/prospeccao/construtoras-sc-2026-08/controle.csv`. Marcar status por empresa conforme resposta chega, pra saber quem sai da sequência automática.

## Resultado real da importação (03/08/2026)

A planilha do Apify (`LISTA DE EMAILS/leads_construtoras_incorporadoras_SC.xlsx`) trouxe **158 empresas**, não ~300. Cobertura de contato:
- 150 com WhatsApp/telefone
- Só 20 com email preenchido (normal: Google Meu Negócio raramente expõe email público, só telefone)
- 5 dessas 20 já estavam na base antiga de 100 contatos (Jun/2026)
- **15 contatos novos e únicos com email válido** — é essa a base real do Email 1

Arquivo limpo: `leads-construtoras-sc-ago2026.csv`. Relatório completo da limpeza: `relatorio-importacao.md`.

**Status:**
- [x] Lista "Prospecção Construtoras SC — Ago/2026" criada no Brevo (id 9)
- [x] 15 contatos importados com atributos COMPANY/CITY/WHATSAPP
- [x] Campanha "Prospecção Construtoras SC — Ago/2026 (Sistema Completo)" criada (id 16), assunto sem travessão, agendada para **04/08/2026 09:30** (terça de manhã, primeira janela útil)
- [ ] Emails 2 e 3 da sequência ainda não escritos — fazer depois de ver a resposta do Email 1
- [ ] **Oportunidade maior fica no WhatsApp** (150 números): disparo em massa automatizado não é recomendado (risco de banimento do número que a Bruna usa + exposição LGPD, já discutido). Se quiser explorar esse volume, o caminho mais seguro é contato manual/personalizado 1 a 1, não automação — decisão pendente do usuário.
