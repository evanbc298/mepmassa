# Instruções de Implementação — Pacote SEO MEP
**Para:** Claude, Cursor, GitHub Copilot, ou qualquer dev/IA
**Domínio alvo:** https://www.mep.ind.br (canônico)
**Deploy atual:** Netlify (preview em comforting-starburst-d36254.netlify.app)

> ⚠️ **PRIMEIRO PASSO OBRIGATÓRIO:** O site precisa estar acessível em `mep.ind.br` antes do SEO fazer efeito. Hoje ele só roda em `comforting-starburst-d36254.netlify.app` e o canonical aponta pro domínio `.ind.br`. Configurar DNS no Netlify antes de tudo.

---

## 📦 O que está na pasta `/implementacao/`

| Arquivo | Tipo | Onde colocar |
|---|---|---|
| `robots.txt` | Texto | Raiz do site |
| `sitemap.xml` | XML | Raiz do site |
| `_redirects` | Netlify config | Raiz do site |
| `meta-head-snippet.html` | HTML (substituir no `<head>`) | Dentro de `<head>` na index.html |
| `schema-localbusiness.json` | JSON-LD | Início do `<body>` (após `<body>`) |
| `schema-faq.json` | JSON-LD | Início do `<body>` (após `<body>`) |
| `schema-breadcrumb.json` | JSON-LD | Início do `<body>` (após `<body>`) |
| `image-optimization.html` | HTML (substituir as `<img>`) | Onde estão as imagens |
| `INSTRUCOES-IMPLANTACAO.md` | Este arquivo | — |

---

## 🚀 Passo-a-passo de implementação (em ordem)

### PASSO 1 — Domínio e DNS (URGENTE)
1. Acessar painel do Netlify → Domain settings
2. Adicionar domínio customizado: `mep.ind.br` e `www.mep.ind.br`
3. Configurar DNS no Registro.br (ou onde registrou):
   - Para Netlify DNS: alterar nameservers
   - Para CNAME: `www` → URL do Netlify, redirect apex
4. Forçar HTTPS (Netlify gera cert Let's Encrypt automático)
5. Configurar redirect `mep.ind.br → www.mep.ind.br` (arquivo `_redirects` já trata)

**Tempo:** 10 min para configurar + 24-48h para propagar DNS + SSL.

### PASSO 2 — Upload dos arquivos na raiz
Subir via Netlify Drop, Git push, ou Netlify CLI:
```
robots.txt            →  /
sitemap.xml           →  /
_redirects            →  /
```

### PASSO 3 — Integrar meta tags no `<head>`
Abrir o arquivo `meta-head-snippet.html` e **substituir** o bloco atual de `<meta>` no `<head>` da `index.html` pelo conteúdo novo.

O snippet inclui:
- `<title>` e `<meta description>` otimizados
- Geo tags (latitude/longitude de BC)
- Open Graph completo (Facebook, LinkedIn, WhatsApp)
- Twitter Card
- Canonical atualizado
- Preconnect/preload para performance
- Theme color

### PASSO 4 — Adicionar JSON-LD no `<body>`
Colar o conteúdo de `schema-localbusiness.json`, `schema-faq.json` e `schema-breadcrumb.json` **logo após a tag `<body>`**, antes do conteúdo principal.

O ideal é consolidar tudo em **um único `<script type="application/ld+json">`** com um array, mas para simplicidade, múltiplos scripts também funcionam.

### PASSO 5 — Otimizar imagens
Para cada `<img>` no HTML:
1. **Converter PNG → WebP** (qualidade 80) — comandos cwebp no rodapé de `image-optimization.html`
2. **Adicionar `width` e `height`** (dimensões reais do arquivo)
3. **Adicionar `loading="lazy"`** (exceto logo e LCP)
4. **Adicionar `decoding="async"`**
5. **Hero/LCP: `loading="eager" fetchpriority="high"`**
6. **Alt text descritivo** com keyword natural

Imagens prioritárias a otimizar:
- `balde-25kg-v2.png.png` (1.06MB → ~200KB)
- `bucket-premium.png` (1.79MB → ~350KB)
- `bucket-esmalte.png`
- `bucket-pisos.png`
- `bucket-economica.png`
- `barrica-25kg.png.png`
- `bisnaga-3kg.png.png`
- `bisnaga-1kg.png.png`

### PASSO 6 — Gerar imagens que faltam
Criar e subir:
- `/favicon-32x32.png`
- `/favicon-16x16.png`
- `/apple-touch-icon.png` (180x180)
- `/og-image-1200x630.png` (Open Graph)
- `/site.webmanifest`

### PASSO 7 — Google Search Console
1. Acessar https://search.google.com/search-console/
2. Adicionar propriedade: `https://www.mep.ind.br`
3. Verificar via DNS (registro TXT no Registro.br) ou upload de HTML
4. Submeter sitemap: `https://www.mep.ind.br/sitemap.xml`
5. Solicitar indexação da home

### PASSO 8 — Google Analytics 4
1. Criar conta em https://analytics.google.com/
2. Copiar ID de medição (formato `G-XXXXXXXXXX`)
3. Instalar no `<head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```
4. Configurar evento de clique no WhatsApp (ver snippet abaixo)

### PASSO 9 — Microsoft Clarity (grátis, heatmaps)
```html
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "SEU_ID_CLARITY");
</script>
```

---

## 📊 Evento de clique no WhatsApp (tracking de conversão)

Onde o link do WhatsApp aparece, adicionar:
```html
<a href="https://wa.me/5547996958399?text=..."
   onclick="gtag('event', 'click_whatsapp', {
     'event_category': 'contato',
     'event_label': 'header'
   });"
   target="_blank">WhatsApp</a>
```

---

## 🗂️ Estrutura de URLs a criar (próximas sprints)

Criar páginas separadas (single-page com âncoras limita SEO). Estrutura recomendada:

```
mep.ind.br/
├── /                                    (home)
├── /mep-massas/                         (argamassa — landing dedicada)
│   ├── /alvenaria-de-vedacao/
│   ├── /muros-estruturais/
│   ├── /churrasqueiras/
│   └── /reparos-e-reformas/
├── /mep-color/                          (tintas — landing dedicada)
│   ├── /premium/
│   ├── /esmalte/
│   ├── /pisos-e-quadras/
│   └── /economica/
├── /calculadora-de-custos/              (já existe)
├── /blog/                               (novo — centro de conteúdo)
│   └── /[slug-do-artigo]/
├── /obras/                              (case studies)
├── /sobre/                              (quem somos)
├── /contato/
├── /politica-de-privacidade/
└── /termos-de-uso/
```

Para cada nova página, repetir:
1. Schema específico (Product para produtos, Article para blog, HowTo para tutoriais)
2. Meta description única
3. Open Graph próprio
4. BreadcrumbList
5. Imagens otimizadas

---

## ✅ Checklist final — antes de considerar pronto

### Técnico
- [ ] `mep.ind.br` resolve pro site
- [ ] HTTPS funcionando (cadeado verde)
- [ ] `robots.txt` acessível e válido
- [ ] `sitemap.xml` acessível e válido
- [ ] JSON-LD validando no [Schema Markup Validator](https://validator.schema.org/)
- [ ] Todas as imagens com `width`, `height`, `alt`
- [ ] Imagens convertidas para WebP
- [ ] LCP < 2.5s (testar no PageSpeed Insights)
- [ ] CLS < 0.1
- [ ] Mobile-friendly test aprovado
- [ ] Core Web Vitals todos verdes

### SEO
- [ ] Google Search Console configurado + sitemap submetido
- [ ] Google Analytics 4 instalado + eventos de WhatsApp
- [ ] Microsoft Clarity instalado
- [ ] Schema LocalBusiness validando
- [ ] Schema FAQ validando
- [ ] Open Graph preview OK (testar no Facebook Debugger)
- [ ] Twitter Card preview OK
- [ ] Canonical apontando pro domínio correto

### Conteúdo
- [ ] Home com 1 H1 único, hierarquia H2/H3 correta
- [ ] NAP (Nome, Endereço, Telefone) consistente no rodapé
- [ ] Links para redes sociais no rodapé
- [ ] Texto de copyright com ano atual
- [ ] Política de privacidade (LGPD)
- [ ] Termos de uso

### Local
- [ ] Google Business Profile criado/otimizado
- [ ] Apple Maps cadastrado
- [ ] Bing Places cadastrado
- [ ] 5+ reviews no Google

---

## 🧪 Como validar depois de implementar

1. **Schema:** https://validator.schema.org/  → colar URL
2. **Open Graph:** https://www.opengraph.xyz/  → colar URL
3. **Twitter:** https://cards-dev.twitter.com/validator  → colar URL
4. **Mobile:** https://search.google.com/test/mobile-friendly  → colar URL
5. **PageSpeed:** https://pagespeed.web.dev/  → colar URL
6. **Lighthouse:** F12 no Chrome → aba Lighthouse → rodar
7. **Rich Results:** https://search.google.com/test/rich-results  → colar URL

---

## 📞 Contato de implementação

Se travar em algum passo, me avise qual e eu te ajudo a resolver.
MEP Indústria — ind.mepmassas@gmail.com · (47) 99695-8399
