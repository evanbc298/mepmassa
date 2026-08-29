---
name: video
description: >
  Organiza, triagem e edita vídeo — corte/trim, concatenar clipes, converter pra formato vertical
  9:16 (Reels/TikTok/Shorts), comprimir pra redes sociais, extrair thumbnail, gerar contact sheet
  pra triagem de vídeos brutos sem precisar assistir tudo. Usa ffmpeg (instalado localmente),
  não depende de nenhuma ferramenta paga.
  Use quando o usuário pedir "cortar vídeo", "editar vídeo", "triagem de vídeo", "vídeo vertical",
  "clipes", "comprimir vídeo", ou /video.
---

# /video — Organização e edição de vídeo

Skill de edição de vídeo via **ffmpeg** (confirmado instalado nessa máquina — não precisa de Adobe
Premiere, CapCut ou qualquer ferramenta paga). Cobre desde a triagem de material bruto até o corte
final pronto pra postar.

## Dependências

- **ffmpeg** + **ffprobe** (vêm juntos) — todo o processamento de vídeo
- **Read tool** — pra eu efetivamente "ver" o conteúdo de um vídeo, já que não assisto vídeo direto:
  extraio frames/contact sheets como imagem e leio essas imagens (ver seção Triagem)

## Limitação importante — como eu "vejo" vídeo

Eu não assisto vídeo em movimento. Pra fazer triagem ou saber o que tem em cada arquivo, preciso
**extrair frames como imagem e ler essas imagens**. Isso funciona bem na prática (dá pra avaliar
enquadramento, se a imagem tá nítida/tremida, se é a pessoa certa, etc.), mas não capta áudio nem
movimento — pra conferir áudio (fala, ruído), avisar o usuário que precisa ouvir ele mesmo antes de
aprovar o corte final.

---

## Triagem de vídeos brutos (contact sheet)

Quando o usuário tem uma pasta cheia de vídeo bruto e precisa decidir o que aproveitar, **não pedir
pra ele descrever cada vídeo** — extrair um contact sheet (grade de miniaturas) de cada arquivo e ler
a imagem gerada. Isso é o que permite eu dar uma sugestão real de triagem.

### 1. Levantar metadados de todos os arquivos primeiro

```bash
ffprobe -v quiet -print_format json -show_format -show_streams "arquivo.mp4"
```

Extrair: duração, resolução, orientação (vertical/horizontal), codec. Montar uma tabela antes de
gerar qualquer contact sheet — ajuda a priorizar (ex: descartar vídeos com poucos segundos úteis).

### 2. Gerar contact sheet por vídeo

```bash
ffmpeg -i "arquivo.mp4" -vf "select='not(mod(n\,150))',scale=320:-1,tile=4x4" \
  -frames:v 1 -y "contact-sheets/arquivo-contact.jpg"
```

Ajustar o `mod(n\,150)` conforme a duração (menos frames de intervalo pra vídeo curto, mais pra vídeo
longo) — o objetivo é sempre cobrir do início ao fim do vídeo na grade, não só o começo.

### 3. Ler cada contact sheet gerado (Read tool) e avaliar

Montar um parecer por vídeo: enquadramento, se está estável, se o produto/rótulo aparece legível,
se parece repetido com outro arquivo. Apresentar como tabela:

| Arquivo | Duração | Conteúdo (pelo contact sheet) | Sugestão |
|---|---|---|---|
| video1.mp4 | 0:42 | Aplicação do MEP 20, mãos + parede, estável | Usar — cortar 0:05–0:35 |
| video2.mp4 | 0:08 | Tremido, fora de foco | Descartar |

**Sempre pedir confirmação do usuário antes de descartar qualquer arquivo** — o contact sheet dá uma
boa ideia, mas não é definitivo (não pega áudio, por exemplo).

---

## Operações comuns (cheat sheet ffmpeg)

### Cortar um trecho (trim)

Rápido, sem recodificar (corta em keyframe, pode não ser exato no segundo):
```bash
ffmpeg -i in.mp4 -ss 00:00:05 -to 00:00:15 -c copy out.mp4
```
Preciso no frame exato (recodifica, mais lento):
```bash
ffmpeg -i in.mp4 -ss 00:00:05 -to 00:00:15 -c:v libx264 -c:a aac out.mp4
```

### Concatenar clipes (mesmo codec/resolução)

```bash
# lista.txt:
# file 'clipe1.mp4'
# file 'clipe2.mp4'
ffmpeg -f concat -safe 0 -i lista.txt -c copy out.mp4
```

### Converter pra vertical 9:16 (Reels/TikTok/Shorts)

Cortando o centro de um vídeo horizontal:
```bash
ffmpeg -i in.mp4 -vf "crop=ih*9/16:ih" -c:a copy out-vertical.mp4
```
Ou com barras (sem cortar nada, adiciona faixas):
```bash
ffmpeg -i in.mp4 -vf "scale=1080:-2,pad=1080:1920:(ow-iw)/2:(oh-ih)/2:black" out-vertical.mp4
```

### Comprimir pra redes sociais

```bash
ffmpeg -i in.mp4 -vf scale=1080:-2 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k out.mp4
```
`-crf` menor = mais qualidade/arquivo maior (18-23 é uma boa faixa pra rede social).

### Extrair thumbnail (frame único)

```bash
ffmpeg -i in.mp4 -ss 00:00:02 -vframes 1 thumb.jpg
```

### Texto/legenda sobreposta (overlay simples)

```bash
ffmpeg -i in.mp4 -vf "drawtext=text='MEP 20 — Assentamento':fontcolor=white:fontsize=48:x=(w-text_w)/2:y=h-120:box=1:boxcolor=black@0.5:boxborderw=10" out.mp4
```

---

## Workflow — corte de vídeo de aplicação (uso mais comum aqui)

1. Levantar metadados + contact sheet de todo o material bruto (ver Triagem)
2. Apresentar tabela de triagem, esperar aprovação do usuário
3. Pra cada clipe aprovado: cortar o trecho relevante (trim)
4. Se for pra Instagram/TikTok/Shorts: converter pra vertical 9:16
5. Comprimir pro tamanho final
6. Extrair um thumbnail de capa
7. Salvar tudo organizado: `marketing/conteudo/video-<tema>-<data>/` (clipes finais, thumbnail,
   nome de arquivo descritivo — não `IMG_1234.mp4`)

## Regras

- Nunca afirmar o conteúdo de um vídeo sem antes ter extraído e lido pelo menos um frame/contact
  sheet dele — não presumir pelo nome do arquivo
- Sempre avisar que áudio precisa ser conferido pelo usuário (eu não "ouço" o vídeo)
- Preferir `-c copy` (sem recodificar) quando o corte não precisa ser exato no frame — mais rápido e
  sem perda de qualidade
- Recodificar (`libx264`/`aac`) só quando precisar de corte exato, concatenar arquivos de codecs
  diferentes, ou comprimir/converter formato
- Sempre nomear o arquivo final de forma descritiva (produto/tema, não nome de câmera)
- Organizar saída na mesma convenção de pasta usada pelo `/carrossel`: `marketing/conteudo/<tipo>-<tema>-<data>/`
