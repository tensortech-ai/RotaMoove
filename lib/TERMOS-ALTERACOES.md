# Termos de uso — o que foi alterado na minuta do cliente

Base: minuta enviada em 20/09/2026. Cada alteração abaixo existe por um
motivo concreto: a minuta descrevia um comportamento que a plataforma
não tem, contradizia a Política de Privacidade, ou continha erro de
digitação. Nada foi removido por opinião.

**Esta lista não substitui revisão jurídica.** Ela diz o que mudou e por
quê, para que o advogado decida o que fazer com cada ponto.

---

## A. Contradições com o sistema — exigiram decisão

### A1. Pagamento pela Plataforma — **alterado**

A minuta (4.1) dizia: *"O pagamento é feito diretamente pelo Usuário,
por uma das modalidades de pagamento disponíveis em nossa Plataforma,
informadas também no e-mail de confirmação do orçamento."*

**O aplicativo não processa pagamentos.** Não há integração de pagamento,
não há retenção de valores, não há e-mail de confirmação de orçamento. A
Política de Privacidade afirma, corretamente, que "a plataforma não
processa pagamentos". Publicar os dois textos juntos criaria contradição
entre dois documentos do mesmo site.

Reescrito para: o pagamento é acertado diretamente entre Usuário e
Transportador Parceiro; a Plataforma não processa, não retém e não
intermedia a transferência.

> **Decisão necessária:** se o plano é cobrar pela Plataforma (o banco já
> tem o campo `platform_fee_cents`, hoje sempre zero), a cláusula volta a
> valer — mas só depois que o pagamento existir no produto.

### A2. Taxa de cancelamento — **mantida, com ressalva**

A minuta (4.2) fixa 25% e 50% conforme a antecedência. As regras foram
mantidas, porque são regra de negócio legítima.

**Mas o aplicativo não calcula nem cobra essas taxas.** Não há cálculo de
multa no cancelamento; o banco registra apenas `cancelled_at` e
`cancellation_reason`. O texto foi ajustado para dizer que os percentuais
valem "para o acerto entre Usuário e Transportador Parceiro", já que é
entre eles que o dinheiro circula hoje.

> **Decisão necessária:** ou o produto passa a calcular a multa, ou o
> texto continua descrevendo um acerto entre as partes.

### A3. Confirmação por e-mail — **alterado**

A minuta (3.2.1) dizia que a contratação se estabelece "após a
confirmação dos dados do transportador enviados pela plataforma por
e-mail".

O aplicativo não envia esse e-mail. A contratação acontece quando o
Usuário aceita a proposta na tela, e é nesse momento que os dados do
transportador aparecem e o chat é liberado. Reescrito para descrever o
que o sistema faz.

### A4. Comunicação por SMS e WhatsApp — **suavizado**

A minuta (2) afirmava que a RotaMoove "utilizará" mensagem de texto,
e-mail e WhatsApp. O aplicativo hoje se comunica por avisos internos e
pelo e-mail de autenticação; não há envio de SMS nem de WhatsApp.

Reescrito para: comunica-se por avisos no aplicativo e e-mail, e
"poderá" usar outros meios. Mantém a permissão sem afirmar um fato falso.

### A5. Envio de fotos e vídeos pela Plataforma — **alterado**

A minuta (4.1.3) dava à RotaMoove o direito de solicitar fotos e vídeos
dos itens. **O aplicativo não tem envio de imagem** — nenhuma tela de
upload, nenhum uso de storage.

O direito foi mantido, mas o texto agora diz "pelos canais de contato
informados", em vez de sugerir um recurso que não existe na tela.

Também foi retirada a frase sobre retenção proporcional de valores já
pagos: sem pagamento na Plataforma, não há valor a reter (ver A1).

### A6. Montagem, desmontagem e embalagem — **alterado**

A minuta trata montagem (3.8 e 6) e embalagem (5) como serviços
contratáveis, com lista de materiais.

**A Plataforma não vende esses serviços como item separado.** Os tipos de
serviço cadastrados são carreto, mudança residencial e mudança
comercial. Não há catálogo de embalagem nem contratação de montador.

As cláusulas foram mantidas — descrevem o serviço real prestado pelos
parceiros — mas com a ressalva de que, hoje, são descritos no campo de
descrição da solicitação e acordados diretamente com o transportador.

> **Decisão necessária:** se montagem e embalagem devem ser contratáveis
> no aplicativo, é trabalho de produto (novos tipos de serviço e campos
> no orçamento), não de texto.

### A7. "A RotaMoove realizar a cobrança adicional ao usuário" — **alterado**

Aparecia em 3.5.1. Mesma razão de A1: a Plataforma não cobra. O adicional
passou a ser acordado com o Transportador Parceiro.

---

## B. Identificação da empresa — corrigido no código

### B1. Razão social — **corrigida**

O código trazia `legalName = 'RotaMoove Tecnologia'`, um nome que eu
havia assumido. A minuta trouxe a razão social real: **ESS Serviços de
Transportes de Cargas e Mudanças em Geral**. Corrigido no aplicativo e
no site. "RotaMoove" segue como nome da plataforma.

### B2. CNPJ — **máscara corrigida**

A minuta repete `30.590.568.0001-70`, com ponto. A máscara oficial usa
barra antes dos quatro dígitos do estabelecimento: **30.590.568/0001-70**.
Os dígitos verificadores conferem; apenas a pontuação estava errada.

### B3. Telefone — **acrescentado**

`(11) 98233-1118` não existia em lugar nenhum do projeto. Agora está no
rodapé do site e na tela Sobre do aplicativo.

---

## C. Acréscimos que descrevem o produto

Estes trechos não estavam na minuta e foram acrescentados porque são
regras reais da Plataforma que o Usuário precisa conhecer:

- **Orçamento cego e prazo** (seção 3): as propostas não são visíveis
  entre transportadores, e a solicitação fica aberta por prazo
  determinado. É o comportamento do sistema e um diferencial anunciado
  no site.
- **Obrigações do Transportador Parceiro** (nova seção 6): ativação e
  verificação do cadastro pela RotaMoove, possibilidade de desativação,
  e sujeição à avaliação do cliente. Tudo isso existe no produto
  (`is_active`, `is_verified`, avaliações) e não constava do documento.
  A obrigação sobre CNH e documentos do veículo, que na minuta estava
  solta dentro da seção de embalagem (5.3), foi movida para cá.
- **Referência à Política de Privacidade** (7): o documento passa a
  apontar para ela.

---

## D. Correções de redação

Sem efeito jurídico; apenas texto.

| Minuta | Corrigido |
|---|---|
| "estabelecidade" | "estabelecida" |
| "tercerizados" | "terceirizados" |
| "perca ou falta" | "perda ou falta" |
| "jóias" | "joias" (ortografia vigente) |
| "www.Rotamoove.com.br", "Rotamoove", "RotaMoove" | "RotaMoove" e "rotamoove.com.br" |
| "pela pela plataforma" | "pela plataforma" |
| Numeração 5.3 dentro da seção de embalagem | movida para a seção 6 |

---

## F. Segunda rodada — decisões do cliente por mensagem (22/09/2026)

### F1. Embalagem sai do documento — **alterado**

O cliente esclareceu que os transportadores não têm expertise em
fornecer material de embalagem nem em fazer embalagem profissional, e
que o foco é competir em carreto e frete barato.

As cláusulas que ofereciam embalagem foram reescritas:

- **3.2** — "escolhem os materiais adequados para proteção dos itens"
  virou "utilizam os materiais de proteção usuais do transporte, como
  cintas e mantas"; a embalagem passa a ser responsabilidade do Usuário.
- **3.8** — deixa de se chamar "Montagem, desmontagem e embalagem". A
  montagem continua; entrou parágrafo dizendo que a RotaMoove não
  fornece material de embalagem nem presta embalagem profissional.
- **4.3** — "Empacotamento e itens frágeis" virou "Itens frágeis e bens
  de valor", sem o enquadramento de serviço de empacotamento.

A seção 5 da minuta original, que listava plástico bolha, papelão
ondulado, filme stretch, fita e caixas, já não existia no texto
adaptado.

### F2. Taxa de intermediação — **acrescentado**

O cliente decidiu que a taxa é **acrescida** ao valor do transportador,
e não descontada dele: "quando eles forem passar o orçamento já estarão
cientes que tem a comissão do aplicativo".

Entrou na seção 6: taxa de 10% a 15%, acrescida ao valor da proposta; o
valor que o transportador informa é o que ele recebe; o total exibido ao
Usuário já inclui a taxa; percentual e forma de recolhimento comunicados
antes de passarem a valer.

O aplicativo mostra o mesmo aviso na área do prestador — na home e ao
lado do campo de preço no orçamento.

> **Continua em aberto:** *como* a taxa é recolhida. O pagamento não
> passa pela plataforma (ver A1), então não há de onde descontar. Por
> isso o texto do aplicativo está em tempo futuro e
> `platform_fee_cents` continua gravando 0. Nada é cobrado hoje.

---

## E. Ponto que continua em aberto

A minuta em nenhum momento trata de **exclusão de conta**. A App Store
(diretriz 5.1.1(v)) exige que um aplicativo com cadastro ofereça
exclusão de conta dentro do próprio aplicativo. Isso não existe hoje,
nem no texto nem no produto, e impede a publicação na loja.
