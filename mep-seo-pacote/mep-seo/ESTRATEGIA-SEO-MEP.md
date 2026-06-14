# Estratégia de SEO — MEP Indústria
**Domínio:** mep.ind.br (canônico) · Netlify (preview atual)
**Negócio:** Argamassa polimérica (MEP Massas) + Tintas para construção civil (MEP COLOR)
**Localização:** Balneário Camboriú, SC
**Objetivo:** Estar organicamente em todos os lugares onde o cliente busca solução para construir, reformar ou comprar tinta/argamassa de qualidade.

---

## 🎯 Princípio-guia: "Esteja onde seu cliente pesquisa"

Seu cliente (construtor, engenheiro, mestre de obras, arquiteto, ou até o consumidor final) pesquisa em **vários lugares**:

| Onde | Como ele busca | O que você precisa ter |
|------|---|---|
| Google (busca orgânica) | "argamassa polimérica pronta", "tinta para obra SC" | Site técnico + conteúdo + SEO local |
| Google Maps / Apple Maps | "argamassa Balneário Camboriú" | Google Business Profile + citações NAP |
| YouTube | "como aplicar massa polimérica" | Vídeos tutoriais + shorts |
| Instagram / TikTok | "antes e depois obra" | Reels com dicas + bastidores |
| LinkedIn | "fornecedor tinta industrial" | Perfil empresa + posts técnicos |
| Portais de construção (AECweb, Cimento Itambé, etc.) | comparativos, fornecedores | Anúncios em diretórios + artigos |
| Grupos de Facebook/WhatsApp | "alguém conhece argamassa boa?" | Boca-a-boca orgânico = reviews |
| Lojas (ML, Amazon) | "tinta MEP COLOR" | Listings se for vender DTC |
| Diretórios da indústria (Sinduscon, ANICER, ABCP) | cadastro institucional | Ficha técnica + selos |
| IA (ChatGPT, Perplexity, Google AI) | perguntas comparativas | Conteúdo estruturado + schema |

> **SEO 2025+ não é só Google.** É estar presente em **todos os pontos de descoberta** com a mesma identidade e mensagem.

---

## 📊 Diagnóstico rápido do site atual (auditoria rápida)

| Item | Estado | Severidade |
|------|--------|------------|
| `<title>` e `<meta description>` | ✅ Presentes e descritivos | OK |
| `lang="pt-BR"` | ✅ Correto | OK |
| Open Graph + canonical | ✅ Aponta pra `mep.ind.br` (mas site live está em Netlify preview!) | ⚠️ **Crítico** |
| URL canônica vs URL real | ❌ Netlify preview ≠ mep.ind.br | 🔴 **Crítico** |
| `robots.txt` | ❌ Não existe | 🔴 Crítico |
| `sitemap.xml` | ❌ Não existe | 🔴 Crítico |
| Schema.org (JSON-LD) | ❌ Nenhum | 🔴 Crítico |
| H1 único | ✅ 1 H1 | OK |
| Hierarquia H1/H2/H3 | ⚠️ Poucos H2, conteúdo usa H3/H4 | Médio |
| Imagens: `loading="lazy"` | ❌ 0 de 21 imagens | 🔴 Crítico p/ Core Web Vitals |
| Imagens: `width`/`height` | ❌ Nenhuma tem dimensão | 🟠 CLS vai bombar |
| Imagens: peso | ❌ Hero 1.06MB, bucket 1.79MB | 🔴 LCP ruim |
| Formato das imagens | ❌ PNG pesado | 🟠 Usar WebP/AVIF |
| Breadcrumbs | ❌ Ausentes | Médio |
| FAQ schema | ❌ Ausente (você tem 3 passos, dá pra virar FAQ) | Alto |
| Reviews / depoimentos | ⚠️ Mencionados, sem schema | Alto |
| Blog / centro de conteúdo | ❌ Não existe | Alto |
| Google Business Profile | ❌ Não verificável pelo site (mas pode existir) | 🔴 Crítico p/ local |
| NAP consistente (Nome/End/Tel) | ⚠️ Endereço não aparece no site | 🔴 Crítico p/ local |
| WhatsApp link com UTM | ❌ Sem tracking | Médio |
| Google Analytics 4 | ❌ Não detectável | Alto |
| Google Search Console | ❌ Provavelmente não configurado | 🔴 Crítico |
| Mobile friendly | ✅ Sim, viewport + design responsivo | OK |
| HTTPS | ✅ Netlify serve HTTPS | OK |
| Páginas separadas (produto/blog) | ❌ Tudo numa única URL via âncoras | Alto (escala) |
| Links internos contextuais | ⚠️ Âncoras, mas sem相关文章 | Médio |
| Backlinks externos (autoridade) | ❌ Nenhum detectável | Alto (longo prazo) |

**Resumo:** O site tem boa base visual e copy, mas tecnicamente está **sem SEO** (sem sitemap, schema, robots, GSC, imagens otimizadas). Local SEO é o ganho mais rápido. Conteúdo é o ganho de médio prazo.

---

## 🗺️ Roadmap de implementação (por prioridade)

### 🔴 FASE 1 — Quick wins (Semana 1) — Fundação técnica mínima

> Estas 5 ações sozinhas já vão te colocar visível no Google Maps e melhorar LCP/CLS dramaticamente.

1. **Apontar domínio `mep.ind.br` pro Netlify** (DNS + Netlify domain)
2. **Criar `robots.txt`** (arquivo pronto em `/implementacao/robots.txt`)
3. **Criar `sitemap.xml`** (arquivo pronto em `/implementacao/sitemap.xml`)
4. **Adicionar JSON-LD** (Organization, LocalBusiness, Product, FAQ) — snippets prontos
5. **Otimizar imagens**: converter pra WebP, adicionar `loading="lazy"`, `width`, `height`, `fetchpriority="high"` no LCP

### 🟠 FASE 2 — SEO local (Semana 2-3) — Aparece no Google Maps

> Para uma empresa de Balneário Camboriú/SC, **80% das buscas relevantes são locais**. Este é o ROI mais rápido.

6. **Criar/otimizar Google Business Profile** (Google Meu Negócio) com:
   - Categoria principal: "Fornecedor de materiais de construção"
   - Categorias secundárias: "Fábrica de tintas", "Loja de tintas", "Argamassa"
   - Horário, telefone, WhatsApp, site
   - **Fotos reais** da fábrica, baldes, obras em andamento
   - **Posts semanais** (produto, dica, obra)
7. **Citar NAP idêntico** (Nome, Endereço, Telefone) em 30+ diretórios
8. **Waze, Apple Maps, Bing Places, Here Maps** (cadastros gratuitos)
9. **Estratégia de reviews**: pedir 5-10 reviews/mês de clientes reais

### 🟡 FASE 3 — Conteúdo orgânico (Mês 1-3) — Dominar palavras-chave

> Aqui é onde você "está em todos os lugares". Conteúdo bom + on-page forte = tráfego recorrente.

10. **Criar 8-12 landing pages** (uma por produto/uso)
11. **Lançar blog com 2-4 artigos/mês** focados em long-tail
12. **FAQ estruturado** com schema (3 passos → virar FAQPage)
13. **Casos de obra** (case studies com fotos, métricas, depoimentos)

### 🟢 FASE 4 — Autoridade off-page (Mês 3-6) — Confiança externa

14. **Link building**: guest posts em blogs de construção
15. **Assessoria de imprensa**: lançamento de produto, números da empresa
16. **Parcerias**: construtoras, arquitetos, lojas de material
17. **Cadastros institucionais**: Sinduscon, ANICER, ABCP, ABRAFATI

### 🔵 FASE 5 — Escala multi-canal (Mês 6+) — Onde seu cliente está

18. **YouTube** (tutoriais, before/after, shorts)
19. **LinkedIn** (perfil empresa, posts para engenheiro/arquiteto)
20. **Pinterest** (antes/depois, paletas de cor)
21. **IA Search Optimization (GEO)**: conteúdo estruturado pra ChatGPT/Perplexity

---

## 📝 Pesquisa de palavras-chave (sugestão de sementes)

### Head terms (alto volume, alta concorrência)
- argamassa polimérica
- tinta para construção civil
- massa pronta para assentamento
- tinta acrílica fachada

### Long-tail (menor volume, intenção clara, fácil rankear)
- argamassa polimérica pronta para uso
- massa para assentar bloco sem desperdício
- argamassa polimérica x argamassa convencional
- quanto rende argamassa polimérica balde 25kg
- melhor tinta para fachada Balneário Camboriú
- tinta para piso de quadra preço
- massa pronta para churrasqueira
- como aplicar massa polimérica em bloco estrutural
- tinta premium para acabamento fino
- argamassa para alvenaria de vedação SC

### Local (BC + SC)
- argamassa polimérica Balneário Camboriú
- fábrica de tinta Santa Catarina
- fornecedor de massa pronta Balneário Camboriú
- tinta para obra Balneário Camboriú
- entrega de argamassa Camboriú, Itajaí, Blumenau

### Educacional (top of funnel — captura lead frio)
- como calcular argamassa para obra
- quantos m² rende um balde de 25kg
- como pintar fachada sem descascar
- diferença entre massa pronta e massa tradicional
- como armazenar argamassa polimérica

---

## 🛠️ Implementação técnica (o que vai pro código)

### Stack atual: HTML estático em Netlify

**Tudo que vou te entregar está em `/implementacao/`:**

| Arquivo | O que faz | Onde colocar |
|---------|-----------|--------------|
| `robots.txt` | Libera indexação, aponta pro sitemap | Raiz do site |
| `sitemap.xml` | Lista todas as URLs pro Google | Raiz do site |
| `localbusiness-schema.json` | Bloco JSON-LD pronto | Início do `<body>` |
| `organization-schema.json` | Bloco JSON-LD pronto | Início do `<body>` |
| `product-schema.json` | Bloco JSON-LD pronto | Início do `<body>` |
| `faq-schema.json` | Bloco JSON-LD pronto | Início do `<body>` |
| `image-optimization-snippet.html` | Como reescrever as tags `<img>` | Substituir no HTML |
| `og-twitter-meta.html` | Meta tags completas | Dentro do `<head>` |
| `_redirects` | (já tem canonical, mas reforça) | Raiz do Netlify |
| `INSTRUCOES-IMPLANTACAO.md` | Passo-a-passo numerado | Pra mandar pro dev/Claude |

### Páginas a criar (estrutura de silos)

```
mep.ind.br/
├── /                        (home — já existe)
├── /mep-massas/             (argamassa polimérica — landing dedicada)
│   ├── /mep-massas/alvenaria-vedacao/
│   ├── /mep-massas/muro-estrutural/
│   ├── /mep-massas/churrasqueira/
│   └── /mep-massas/reparo-reforma/
├── /mep-color/              (tintas — landing dedicada)
│   ├── /mep-color/premium/
│   ├── /mep-color/esmalte/
│   ├── /mep-color/pisos-quadras/
│   └── /mep-color/economica/
├── /calculadora/            (já existe em /calculadora-de-custos)
├── /blog/                   (novo — centro de conteúdo)
│   ├── /blog/[slug-artigo-1]/
│   └── ...
├── /obras/                  (case studies com fotos)
│   └── /obras/[nome-da-obra]/
├── /sobre/                  (quem somos, equipe, fábrica)
├── /contato/                (formulário, WhatsApp, mapa)
├── /politica-de-privacidade/ (LGPD — importante)
└── /termos-de-uso/          (legal)
```

> **Por que separar páginas?** Cada URL = 1 chance de ranquear no Google. Single-page com âncoras = 1 chance só.

---

## 🌍 SEO Local — O ativo mais subestimado

### Google Business Profile (Google Meu Negócio) — fazer primeiro

**Informações obrigatórias:**
- Nome: "MEP Indústria" (não use keywords no nome, viola guidelines)
- Categoria principal: **Fornecedor de materiais de construção**
- Categorias adicionais: Fábrica de tintas · Loja de materiais de construção · Loja de tintas
- Endereço completo (Rua, número, bairro, cidade, estado, CEP)
- Telefone principal (47) 99695-8399
- WhatsApp: mesmo número
- Site: https://www.mep.ind.br
- Horário: preencher
- **Foto de perfil:** logo MEP (versão escura ou light, quadrado)
- **Capa:** foto de obra concluída com produto MEP
- **Galeria (mínimo 10 fotos):** fábrica, baldes, obras, equipe, aplicações

**Posts semanais no GBP (Google Posts):**
- Novidades de produto
- Dica técnica rápida
- Obra concluída (com foto)
- Promoção sazonal (pintura no inverno, etc.)

### Diretórios de citação NAP (mínimo 30 cadastros)

**Diretórios gerais (Brasil):**
- Google Business
- Bing Places
- Apple Maps (via Apple Business Connect)
- Waze (via Waze for Cities)
- Here Maps
- TomTom Maps
- Facebook Business
- Instagram Business
- LinkedIn Company
- Yelp
- TripAdvisor (se atender varejo)
- Apontador
- Telelistas.net
- Lista.am
- Solutudo
- GuiaMais
- Catalogos.net
- Econodata
- 33 export (catálogo industrial)

**Diretórios de construção civil (Brasil):**
- AECweb
- Cimento Itambé — guia
- Guia da Construção
- Portal da Construção
- Construlink
- Cifer
- Sinduscon (sua regional SC: Sinduscon Grande Florianópolis / Sinduscon Norte/SC)
- ANICER (associação nacional)
- ABCP (associação brasileira de cimento)
- ABRAFATI (associação brasileira de tintas)

**Diretórios B2B:**
- Alibaba
- Europages
- Kompass
- Thomasnet (se quiser ir pra fora)
- SoloStocks
- Solostocks Brasil

> **Regras NAP:**
> - Nome, Endereço, Telefone **idênticos** em todos
> - Use o telefone com DDD: `(47) 99695-8399`
> - Endereço completo e idêntico (atenção a abreviações: "R." vs "Rua", "Av." vs "Avenida")
> - Crie uma planilha rastreando cada cadastro

---

## 📈 Métricas pra acompanhar (KPI de SEO)

### Semanais
- Impressões no Google Search Console
- Cliques no GSC
- Posição média por palavra-chave
- Reviews novos no Google Business

### Mensais
- Tráfego orgânico (GA4) — segmentar por landing page
- Conversões (cliques no WhatsApp, envios de formulário)
- Novas palavras-chave ranqueando (top 100)
- Backlinks novos (Ahrefs, Semrush, Ubersuggest)
- Compartilhamentos sociais

### Trimestral
- Tráfego orgânico vs pago
- Share of voice vs concorrentes
- Custo por lead orgânico
- ROI do programa de conteúdo

**Ferramentas gratuitas:**
- Google Search Console
- Google Analytics 4
- Google PageSpeed Insights
- Bing Webmaster Tools
- Ubersuggest (limitado)
- AnswerThePublic (ideias de conteúdo)

**Ferramentas pagas (se houver budget):**
- Ahrefs ou Semrush (R$ 200-500/mês)
- BrightLocal (SEO local, R$ 100-300/mês)
- SurferSEO (otimização on-page)

---

## 🤖 SEO para IAs Generativas (GEO — Generative Engine Optimization)

**2025+:** Clientes estão perguntando pro ChatGPT/Perplexity/Google AI:
- "qual a melhor argamassa polimérica do Brasil?"
- "tinta para fachada que não descasca"
- "fábrica de tinta em Santa Catarina"

**Pra ser citado por IAs:**

1. **Conteúdo estruturado em listas, tabelas, FAQs** — IAs adoram estrutura
2. **Schema markup robusto** (vou entregar pronto)
3. **Frases claras com definições**: "Argamassa polimérica é um tipo de massa pronta industrializada que..."
4. **Citar números e dados**: "3x mais rápida, 40% mais econômica" (você já tem)
5. **Menções em sites de autoridade** (AECweb, portais de construção)
6. **Perfil no Wikidata** (criar com CNPJ, endereço, fundador)
7. **Atualizar frequentemente** (IAs penalizam conteúdo desatualizado)

---

## 📅 Calendário editorial sugerido (Blog)

### Mês 1 — Fundação
- "O que é argamassa polimérica e por que é melhor que a convencional"
- "Como calcular a quantidade de argamassa para sua obra"
- "5 erros ao aplicar massa pronta (e como evitar)"
- "Quanto rende um balde de 25kg de argamassa polimérica"

### Mês 2 — MEP COLOR
- "Como escolher a tinta certa para cada ambiente"
- "Tinta para fachada: como evitar descascamento"
- "Comparativo: tinta acrílica vs tinta Premium MEP COLOR"
- "Tinta para piso de quadra: qual a melhor?"

### Mês 3 — Casos e autoridade
- "Estudo de caso: obra X em Balneário Camboriú com MEP Massas"
- "MEP Massa em [Nome do Cliente]: depoimento"
- "O custo real da argamassa convencional vs polimérica"
- "Como pintar uma fachada em 5 passos"

### Mês 4-6 — Escala
- 2-4 artigos/mês em clusters temáticos
- 1 vídeo/YouTube por artigo (repurpose)
- 1 Reels/short por semana (Instagram + TikTok)

---

## ✅ Próximos passos práticos (essa semana)

1. **Verificar se o Google Business Profile já existe** — buscar "MEP Indústria" no Google Maps
2. **Apontar `mep.ind.br` para o Netlify** (se ainda não estiver)
3. **Hospedar os arquivos da pasta `/implementacao/`** na raiz do site
4. **Pedir ao Claude (ou dev)**: "implemente os snippets JSON-LD do arquivo `INSTRUCOES-IMPLANTACAO.md` no `<head>` e início do `<body>` da home"
5. **Configurar Google Search Console** (search.google.com/search-console) e submeter o sitemap
6. **Configurar Google Analytics 4** com evento de clique no WhatsApp
7. **Otimizar imagens** (comprimir pra WebP, adicionar `loading="lazy"`)

---

> **O pacote completo está em `/implementacao/`.** Cada arquivo é um entregável pronto. O arquivo `INSTRUCOES-IMPLANTACAO.md` é literalmente copy-paste pro Claude/dev implementar.

**Quer que eu já implemente direto no site (você me dá acesso), ou prefere mandar o pacote pro Claude como você planejou?**
