# Site institucional

Site institucional do RotaMoove. É **apenas institucional**:
explica o produto e direciona para o aplicativo. Não há login, não há
marketplace e não há acesso ao Supabase.

O aplicativo móvel fica na raiz do repositório (Flutter). As duas
superfícies são independentes: nada de regra de negócio é duplicado aqui.

## Requisitos

- Node.js 20 ou superior (desenvolvido com 22.23.2)
- npm 10 ou superior

## Rodando localmente

```bash
cd site
npm install
cp .env.example .env.local   # opcional: os padrões já funcionam
npm run dev                  # http://localhost:3000
```

## Comandos

| Comando             | O que faz                                          |
| ------------------- | -------------------------------------------------- |
| `npm run dev`       | Servidor de desenvolvimento                        |
| `npm run build`     | Build de produção                                  |
| `npm start`         | Sobe o build de produção                           |
| `npm run typecheck` | Verificação de tipos (`tsc --noEmit`)              |
| `npm run lint`      | ESLint (regras do Next)                            |
| `npm test`          | Testes de componente e conteúdo (Vitest)           |
| `npm run test:e2e`  | Testes de navegador: responsivo, teclado, SEO      |

`npm run test:e2e` faz o build e sobe o site na porta 3100 sozinho. Na
primeira vez, instale o navegador:

```bash
npx playwright install chromium
```

## Variáveis de ambiente

Todas são públicas (`NEXT_PUBLIC_*`). **Nenhum segredo é usado aqui**: o
site não fala com o Supabase, não tem chave de serviço e não acessa banco.

| Variável                  | Padrão                       | Para que serve                        |
| ------------------------- | ---------------------------- | ------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`    | `https://www.rotamoove.com.br`  | canonical, Open Graph e sitemap       |
| `NEXT_PUBLIC_ANDROID_URL` | vazio                        | link da Play Store, quando existir    |
| `NEXT_PUBLIC_IOS_URL`     | vazio                        | link da App Store, quando existir     |

Modelo em [`.env.example`](.env.example). O `.env.local` é ignorado pelo
git.

## Publicar na Vercel

O site é totalmente estático: `npm run build` pré-renderiza as dez
páginas mais `robots.txt` e `sitemap.xml`. Não há rota de servidor, nem
banco, nem segredo — por isso qualquer hospedagem serve, e o plano
gratuito da Vercel cobre com folga.

### 1. Criar o projeto

Pelo painel: **Add New → Project**, aponte para o repositório e escolha
`site` como **Root Directory**. A Vercel detecta Next.js sozinha; não
mexa em build command nem em output directory.

Pelo terminal, sem repositório:

```bash
cd site
npx vercel            # primeira vez: cria o projeto e sobe uma prévia
npx vercel --prod     # publica em produção
```

### 2. Variável de ambiente

Uma só, em **Settings → Environment Variables**, para os três ambientes:

```
NEXT_PUBLIC_SITE_URL = https://www.rotamoove.com.br
```

Sem ela o site funciona, mas canonical, Open Graph e `sitemap.xml`
apontam para o endereço padrão — o que atrapalha indexação e deixa links
errados ao compartilhar.

As duas variáveis de loja ficam vazias até os aplicativos existirem.
Enquanto vazias, os botões levam para `/aplicativo`, que explica com
honestidade em que pé está a publicação. **Não invente link de loja.**

### 3. Domínio

Em **Settings → Domains**, adicione `rotamoove.com.br` e
`www.rotamoove.com.br`. A Vercel mostra os registros a criar no provedor
do domínio — normalmente:

| Tipo    | Nome  | Valor                   |
| ------- | ----- | ----------------------- |
| `A`     | `@`   | `76.76.21.21`           |
| `CNAME` | `www` | `cname.vercel-dns.com.` |

Confirme os valores na tela da Vercel: eles mudam. O certificado HTTPS é
emitido sozinho depois que o DNS propaga.

> **Por que isso é urgente:** o aplicativo aponta para
> `rotamoove.com.br/privacidade`. App Store e Google Play exigem que a
> política de privacidade esteja acessível em URL pública. Enquanto o
> domínio não responder, a submissão é recusada — mesmo com o aplicativo
> pronto.

### 4. Depois de publicar

```bash
curl -I https://www.rotamoove.com.br/privacidade   # tem de dar 200
curl -s https://www.rotamoove.com.br/sitemap.xml | head
```

Confira também se o canonical da home traz o domínio real, e não o
padrão.

---

## Chamadas para ação

Os destinos ficam **todos** em [`lib/config.ts`](lib/config.ts), na função
`ctaHref()`. Nenhum componente escreve URL de loja.

Enquanto `NEXT_PUBLIC_ANDROID_URL` e `NEXT_PUBLIC_IOS_URL` estiverem
vazias, os botões levam para `/aplicativo`, uma página que explica que a
publicação ainda não saiu e oferece o e-mail de contato. Preferimos isso a
um link falso ou a um botão morto.

Quando as lojas existirem, basta preencher as variáveis: os botões passam
a apontar para a loja e nenhum componente muda.

## Conteúdo

Todo o texto está em [`lib/content.ts`](lib/content.ts).

Regra que vale para qualquer alteração: **não afirmar o que o produto não
faz**. Hoje o aplicativo não processa pagamento, não tem rastreamento por
GPS e não envia notificação push — e o site diz isso com todas as letras,
em vez de omitir. Os testes em `tests/conteudo.test.tsx` barram número de
clientes inventado, superlativo ("a maior plataforma") e promessa de
cobertura nacional.

## Analytics

Não há. Nenhum script de terceiros é carregado e a telemetria do Next está
desligada. Existe apenas um ponto de integração vazio (`trackEvent` em
`lib/config.ts`) para o dia em que houver uma decisão sobre o assunto.

## Estrutura

```text
site/
  app/            rotas (App Router), sitemap, robots, 404 e erro
  components/     Header, Footer, Cta, Section, Cards, SkipLink
  lib/            config.ts (CTA/ambiente), content.ts (textos), nav.ts
  public/         favicon, ícone e manifest
  tests/          Vitest: conteúdo, navegação, acessibilidade, SEO
  e2e/            Playwright: responsivo, teclado, metadados servidos
```

Uma observação sobre `lib/nav.ts`: os itens de menu ficam lá, e não no
`Header`, porque o `Header` é componente de cliente — o que ele exporta
chega ao servidor como referência de cliente, não como o array. O rodapé é
renderizado no servidor e precisa do valor de verdade.

## Por que o site não fica em `web/`

`web/` já existe na raiz e é o alvo de build do Flutter (`flutter build
web`). Colocar o Next.js ali quebraria o aplicativo.
