# GEO — Otimização para aparecer em respostas de IA

Auditoria feita em 01/08/2026 (Passo 8 da skill `/seo`).

## Método

Sem acesso direto às APIs do ChatGPT/Gemini/Perplexity pra simular a pergunta de um usuário real, a auditoria foi feita via busca nos termos prioritários — essas engines de IA com navegação (Perplexity, ChatGPT com busca, Gemini) se apoiam fortemente no mesmo conteúdo indexado que aparece em busca tradicional, então isso é uma boa aproximação do que hoje seria citado.

## Resultado da auditoria — MEP não aparece em nenhum dos 3 termos testados

| Termo testado | mep.ind.br apareceu? | Quem domina o resultado |
|---|---|---|
| "argamassa polimérica pronta uso comprar" | ❌ Não | Biomassa do Brasil (loja própria), Topargamassas, Ecopore (Gruda-Bloco), Pratafix |
| "melhor argamassa polimérica Santa Catarina" | ❌ Não | Ceramfix/Max Mohr/Schumacher (ranking geral de empresas de argamassa, nem é do nicho polimérico), Engemater, Leroy Merlin |
| "massa polimérica x argamassa convencional" | ❌ Não | Ubeton (aparece mesmo com a MEP tendo artigo próprio comparando MEP vs Ubeton), Massa DunDun, FIX ECOMASSA, Isar |

**Leitura direta:** hoje, se um cliente perguntar pra uma IA "qual a melhor argamassa polimérica" ou "onde comprar argamassa polimérica pronta", a IA muito provavelmente vai citar **Biomassa do Brasil** ou **Ubeton** — não a MEP. Bate com o dado já conhecido do GA4 (SEO orgânico gerando só ~4 sessões/mês) — a causa é a mesma: pouca autoridade/indexação ainda, não é um problema exclusivo de IA.

## O que já está pronto (base necessária pro GEO funcionar)

- FAQ Schema implementado — 11 perguntas em JSON-LD (certificação ABNT, cura, validade, etc.)
- 13 artigos de blog publicados, incluindo `mep-vs-ubeton-argamassa-polimerica` — existe, mas não rankeia ainda
- Schema LocalBusiness + Product + Organization no site
- Dados verificáveis fortes disponíveis (estudo de obra 820m², certificação ABNT, dados quantificados) — exatamente o tipo de conteúdo que IA prioriza, só falta estar mais bem distribuído/citado

## Ações recomendadas pra aumentar citação

1. **Reforçar resposta direta nas primeiras linhas dos artigos** — revisar os 13 artigos existentes e confirmar que cada um responde a pergunta do título já no primeiro parágrafo, com número concreto, antes de qualquer contexto/introdução longa
2. **Citações externas — é o maior gap hoje.** MEP não aparece em nenhum resultado nos 3 termos testados, o que sugere baixa presença em fontes que IA/Google consideram confiáveis. Ações concretas:
   - Cadastrar em diretórios do setor (Mapa da Obra, ConstruMercado, Solutudo, AECweb, Sinduscon — já listados como pendência SEO técnica)
   - Buscar menção/guest post em blogs do nicho (os mesmos que aparecem dominando: pensar em parceria de conteúdo, não confronto)
   - Perfil completo e ativo no Google Business Profile (já existe — manter avaliações/posts frequentes, isso pesa em GEO local)
3. **Conteúdo comparativo mais direto:** o artigo MEP vs Ubeton existe mas não aparece nem pro termo genérico "x argamassa convencional" — vale reforçar internal linking e garantir que ele responda literalmente "MEP é melhor que argamassa convencional porque..." nas primeiras linhas
4. **Repetir esse teste em 30 dias** — comparar se algum dos 3 termos mudou depois das ações acima

## Checklist de monitoramento (repetir mensalmente)

- [ ] Testar via WebSearch os termos: "argamassa polimérica pronta uso comprar", "melhor argamassa polimérica Santa Catarina", "massa polimérica x argamassa convencional"
- [ ] Registrar: MEP apareceu? Em qual posição? Quem apareceu no lugar?
- [ ] Cruzar com o Google Search Console (impressões/cliques dos mesmos termos)
- [ ] Ajustar conteúdo com base no que mudou

**Why:** usuário pediu pra rodar a auditoria GEO (Passo 8 da skill /seo) em 01/08/2026, depois de perguntar o que era GEO.
**How to apply:** repetir o teste em 30 dias (01/09/2026) pra ver se as ações de citação externa tiveram efeito. O gap real não é falta de conteúdo técnico bom (a MEP tem dado forte) — é falta de citação/autoridade externa ainda.
