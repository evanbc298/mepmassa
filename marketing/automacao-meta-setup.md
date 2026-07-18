# Configurar postagem automática — Instagram + Facebook

Guia pra deixar a skill `/aprovar-post` publicando sozinha. Você faz isso **uma vez só** — depois de configurado, nunca mais precisa mexer nisso (só de tempos em tempos, ver "Renovando o token" no final).

Vai levar uns 20-30 minutos. Precisa ter acesso de administrador da Página do Facebook da MEP e da conta do Instagram (@mep.industria) como conta Business ligada a essa Página.

---

## Passo 0 — Confirmar que o Instagram é conta Business e está ligado à Página do Facebook

1. Abre o Instagram no celular → Perfil → menu (☰) → **Configurações e privacidade** → **Contas vinculadas** (ou "Central de Contas")
2. Confirma que está conectado a uma **Página do Facebook** da MEP. Se não tiver Página, cria uma primeiro em facebook.com/pages/create
3. Confirma que o perfil é **conta comercial (Business)**, não pessoal nem criador. Se não for, troca em Configurações → Conta → Mudar para conta profissional.

Se isso já está certo, pula pro Passo 1.

---

## Passo 1 — Criar o App no Meta for Developers

1. Entra em **developers.facebook.com** com o mesmo login do Facebook que administra a Página da MEP
2. Canto superior direito → **Meus Apps** → **Criar App**
3. Tipo de app: escolhe **"Outro"** → depois **"Empresa"**
4. Nome do app: pode ser "MEP Automação" ou parecido
5. Confirma e o app é criado — você cai no painel dele

---

## Passo 2 — Adicionar o produto "Instagram Graph API"

1. Dentro do painel do app, vai em **Adicionar produto** (menu lateral)
2. Procura **Instagram** → **Configurar** (é a API do Instagram voltada pra contas Business)
3. Ele vai pedir pra conectar a Página do Facebook — seleciona a Página da MEP

---

## Passo 3 — Gerar o token de acesso

1. No menu lateral, vai em **Ferramentas** → **Graph API Explorer**
2. No topo, em "Meta App", confirma que está selecionado o app que você criou
3. Em "Usuário ou Página", troca pra **Página** e seleciona a Página da MEP
4. Em "Permissões", adiciona:
   - `pages_show_list`
   - `pages_read_engagement`
   - `pages_manage_posts`
   - `instagram_basic`
   - `instagram_content_publish`
5. Clica em **Gerar token de acesso** e autoriza tudo que pedir
6. Copia o token gerado (uma string longa) — esse é o token **de curta duração** (dura ~1h), ainda não é o final

### Transformar em token de longa duração (60 dias)

1. Ainda no Graph API Explorer, copia o **App ID** e o **App Secret** do seu app (ficam em Configurações → Básico)
2. Cola essa URL no navegador, trocando os valores em MAIÚSCULO pelos seus:
   ```
   https://graph.facebook.com/v21.0/oauth/access_token?grant_type=fb_exchange_token&client_id=SEU_APP_ID&client_secret=SEU_APP_SECRET&fb_exchange_token=SEU_TOKEN_CURTO
   ```
3. A resposta traz um novo `access_token` — esse já dura 60 dias. **Esse é o que vai no `.env`.**

---

## Passo 4 — Pegar o ID da Página e o ID da conta do Instagram

1. No Graph API Explorer, com a Página selecionada, faz uma requisição GET pra:
   ```
   me?fields=id,name
   ```
   → o `id` que aparece é o **META_PAGE_ID**

2. Depois faz uma requisição GET pra:
   ```
   me?fields=instagram_business_account
   ```
   → o número dentro de `instagram_business_account` é o **META_IG_USER_ID**

---

## Passo 5 — Preencher o `.env`

Copia o arquivo `.env.example` (na raiz do projeto) pra um novo arquivo chamado `.env` (mesma pasta) e preenche:

```bash
META_PAGE_ACCESS_TOKEN=o_token_de_60_dias_do_passo_3
META_PAGE_ID=o_id_do_passo_4
META_IG_USER_ID=o_id_do_passo_4
SITE_URL=https://mep.ind.br
```

**Nunca comita o `.env` no GitHub** — ele já está no `.gitignore`, mas confirma antes de dar push.

---

## Passo 6 — Testar

Peça pro Claude rodar um teste com uma imagem qualquer já publicada no site, algo como:

> "testa a postagem no Instagram com a foto tal"

Se der certo, o post aparece no feed do Instagram (e no Facebook, se pedir os dois). Se der erro, a mensagem do Graph API geralmente diz exatamente o que falta (permissão, token expirado, etc.) — me manda o erro que eu te ajudo a resolver.

---

## Renovando o token (a cada ~60 dias)

O token de longa duração expira em 60 dias. Quando isso acontecer, a postagem vai falhar com erro de autenticação. Basta repetir o **Passo 3** pra gerar um novo e atualizar o `.env`.

Se quiser nunca mais fazer isso, dá pra configurar um **Usuário do Sistema** (System User) no Business Manager com token que não expira — é um pouco mais avançado, me avisa se quiser que eu te guie por esse caminho depois que o básico estiver funcionando.
