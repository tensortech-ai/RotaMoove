/**
 * Termos de uso.
 *
 * Base: minuta enviada pelo cliente. As alteracoes feitas aqui estao
 * registradas em site/lib/TERMOS-ALTERACOES.md - cada uma existe porque
 * a minuta descrevia um comportamento que a plataforma ainda nao tem
 * (cobranca no aplicativo, confirmacao por e-mail, envio de fotos) ou
 * porque contradizia a politica de privacidade.
 *
 * O resumo exibido dentro do aplicativo esta em
 * lib/core/config/legal_content.dart e precisa continuar coerente com
 * este texto.
 *
 * AVISO: adaptado para descrever a plataforma com exatidao, nao como
 * peca juridica. Antes de publicar, deve passar por revisao de advogado.
 */

/** Data da ultima revisao, exibida no topo da pagina. */
export const TERMS_UPDATED = '2026-09-22';

export type TermsSubsection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

export type TermsSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
  subsections?: TermsSubsection[];
};

export const TERMS_SECTIONS: TermsSection[] = [
  {
    id: 'preliminares',
    title: 'Condições preliminares',
    paragraphs: [
      'O Usuário compreende que a RotaMoove é uma plataforma on-line '
      + 'hospedada sob o domínio rotamoove.com.br e de propriedade da ESS '
      + 'Serviços de Transportes de Cargas e Mudanças em Geral, inscrita '
      + 'no CNPJ 30.590.568/0001-70, com sede na Rua Berco Udler, 25, CEP '
      + '05767-330, São Paulo/SP. A RotaMoove é especializada em realizar '
      + 'a intermediação de negócios referentes a mudanças, transporte de '
      + 'bens e fretes em geral.',
      'Estes Termos estão sujeitos a contínuo aprimoramento e podem ser '
      + 'modificados a qualquer tempo, desde que não haja vedação legal. '
      + 'É recomendável que o Usuário os acesse periodicamente e verifique '
      + 'a versão mais atualizada, pela data indicada no início do '
      + 'documento. Se discordar de alguma alteração, deverá abster-se de '
      + 'utilizar a Plataforma.',
      'Alguns serviços e conteúdos disponíveis na Plataforma poderão ser '
      + 'objeto de termos, contratos, licenciamentos ou regulamentos '
      + 'específicos. Havendo conflito entre tais instrumentos e este '
      + 'documento, as condições específicas prevalecem.',
      'Cada serviço de frete é contratado diretamente pelo Usuário, de '
      + 'forma independente. O Usuário reconhece que a RotaMoove não '
      + 'possui qualquer responsabilidade pelo serviço de frete, pelos '
      + 'bens transportados, nem pelo transportador autônomo ou '
      + 'terceirizado, contratado diretamente pelo Usuário por meio da '
      + 'Plataforma. A RotaMoove apenas permite que o Usuário encontre e '
      + 'contrate diretamente transportadores autônomos e empresas '
      + 'especializadas, sob única e exclusiva responsabilidade do '
      + 'transportador.',
    ],
  },
  {
    id: 'definicoes',
    title: 'Definições gerais',
    items: [
      'Serviços: o acesso e uso do aplicativo, do site, dos conteúdos e '
      + 'dos serviços pelos Usuários, para transporte e frete de bens e '
      + 'mudanças, incluindo divulgação, intermediação e administração '
      + 'desses serviços na Plataforma.',
      'Transportador(a) Parceiro(a) / Autônomo(a): pessoa ou empresa que '
      + 'forneça o transporte de bens e/ou manuseio de cargas por uma '
      + 'compensação financeira.',
      'Usuário(a): pessoa ou empresa que contrata o transporte de bens ou '
      + 'mudanças em seu nome por meio da Plataforma. Pode ser o '
      + 'destinatário da carga, o remetente, ou uma terceira parte.',
      'Mudança: conjunto de bens, móveis, objetos pessoais ou '
      + 'profissionais a serem transportados.',
      'Montador(a) Parceiro(a): pessoa ou empresa que forneça serviço de '
      + 'montagem e desmontagem de móveis e/ou eletrodomésticos por uma '
      + 'compensação financeira.',
    ],
  },
  {
    id: 'aceite',
    title: '1. Aceite aos Termos',
    paragraphs: [
      'O acesso à Plataforma e sua efetiva utilização implicam o aceite, '
      + 'pelo Usuário, destes Termos de Uso e da Política de Privacidade, '
      + 'independentemente da realização de cadastro.',
      'No cadastro, o aceite é ratificado pela marcação da caixa "Li e '
      + 'aceito os Termos de Uso e a Política de Privacidade", momento em '
      + 'que o Usuário manifesta consentimento livre, expresso e '
      + 'informado quanto ao conteúdo deste documento. Sem essa marcação '
      + 'a conta não é criada. Caso o Usuário discorde de alguma das '
      + 'disposições, não deverá utilizar a Plataforma.',
    ],
  },
  {
    id: 'acesso',
    title: '2. Acesso aos serviços e funcionalidades',
    paragraphs: [
      'A RotaMoove se comunica com o Usuário por avisos dentro do '
      + 'aplicativo e por e-mail. Poderá, ainda, utilizar outros meios, '
      + 'como mensagem de texto ou aplicativos de mensagem, para enviar '
      + 'informações diretamente relacionadas aos serviços contratados.',
      'O Usuário é único e exclusivamente responsável por todas as '
      + 'informações que fornece na Plataforma, respondendo, inclusive '
      + 'perante terceiros, por quaisquer danos decorrentes de '
      + 'informações incorretas, incompletas ou inverídicas.',
      'O Usuário reconhece que a inclusão de informação inverídica, falsa '
      + 'ou adulterada o sujeita às sanções aplicáveis conforme a '
      + 'legislação brasileira vigente, inclusive em âmbito criminal.',
    ],
  },
  {
    id: 'servicos',
    title: '3. Serviços',
    paragraphs: [
      'A Plataforma consiste em um conjunto de funcionalidades que '
      + 'proporcionam a intermediação de negócios de mudanças e '
      + 'transportes entre Usuários independentes, para que contratem o '
      + 'frete adequado à sua necessidade. Para tanto, a RotaMoove atua '
      + 'no planejamento, manutenção e atualização de sua Plataforma, '
      + 'onde ocorrem a solicitação, o orçamento, a intermediação e o '
      + 'acompanhamento das mudanças e transportes, por meio do '
      + 'aplicativo e do site rotamoove.com.br.',
      'O Usuário descreve o serviço uma única vez. A solicitação fica '
      + 'visível apenas aos Transportadores Parceiros que atendem a '
      + 'cidade indicada, que podem enviar propostas durante o prazo '
      + 'informado na própria solicitação. As propostas não ficam '
      + 'visíveis entre os transportadores: cada um orça sem ver o valor '
      + 'dos demais. O Usuário escolhe livremente com quem deseja '
      + 'fechar, ou pode não escolher nenhum.',
    ],
    subsections: [
      {
        title: '3.1. Da prestação de serviços de transporte',
        paragraphs: [
          'O Usuário declara estar ciente de que a RotaMoove não presta e '
          + 'não assegura a prestação de qualquer serviço de transporte '
          + 'ou de mudança. A RotaMoove não possui frota de veículos e '
          + 'presta exclusivamente um serviço de intermediação, voltado a '
          + 'facilitar a contratação de um Transportador Parceiro '
          + 'cadastrado na Plataforma.',
        ],
      },
      {
        title: '3.2. Responsabilidade pelos serviços de transporte',
        paragraphs: [
          'A contratação dos serviços de transporte e mudança é feita '
          + 'diretamente entre os Usuários e os Transportadores '
          + 'Parceiros: terceiros independentes, sem qualquer vínculo '
          + 'empregatício, societário ou de subordinação com a RotaMoove '
          + 'ou com suas afiliadas.',
          'Os Transportadores Parceiros utilizam os materiais de proteção '
          + 'usuais do transporte, como cintas e mantas, para acomodar a '
          + 'carga no veículo. A embalagem dos bens, no entanto, é '
          + 'responsabilidade do Usuário: dano em item embalado pelo '
          + 'próprio Usuário e identificado após a mudança não poderá '
          + 'ser atribuído aos profissionais.',
          'A RotaMoove não se responsabiliza por perdas, prejuízos ou '
          + 'danos decorrentes dos serviços de transporte, frete e '
          + 'mudança, conforme previsto neste documento.',
          'Caso seja necessária análise sobre danos em que a RotaMoove '
          + 'possa auxiliar o Usuário na resolução do problema, a '
          + 'atuação da empresa limita-se à análise de danos que '
          + 'comprometam o funcionamento do item. Ficam excluídos danos '
          + 'estéticos ou menores que não afetem a funcionalidade, tais '
          + 'como arranhões, marcas de uso e outros danos superficiais.',
          '3.2.1. A contratação entre o Usuário e o Transportador '
          + 'Parceiro considera-se estabelecida quando o Usuário aceita '
          + 'a proposta no aplicativo. A partir desse momento, os dados '
          + 'de contato do transportador ficam disponíveis na tela do '
          + 'serviço e o canal de conversa entre as partes é liberado.',
        ],
      },
      {
        title: '3.3. Danos e prejuízos causados aos transportadores',
        paragraphs: [
          'O Usuário será responsável por quaisquer danos ou prejuízos '
          + 'que causar ao prestador de serviços de transporte e '
          + 'concorda em indenizar e manter a RotaMoove isenta em '
          + 'relação a demandas, perdas, prejuízos ou danos, direta ou '
          + 'indiretamente decorrentes.',
        ],
      },
      {
        title: '3.4. Responsabilidade sobre o conteúdo transportado',
        paragraphs: [
          'O Usuário é o único e integral responsável pelo conteúdo '
          + 'transportado. É expressamente vedado o transporte de armas '
          + 'de fogo, munições, materiais perigosos, explosivos, '
          + 'inflamáveis ou combustíveis, drogas e entorpecentes, e '
          + 'quaisquer outros materiais cujo transporte seja proibido '
          + 'pela legislação ou atente contra os bons costumes, '
          + 'respondendo o Usuário por qualquer infração à legislação '
          + 'vigente, em qualquer âmbito.',
        ],
      },
      {
        title: '3.5. Serviços adicionais ao frete',
        paragraphs: [
          'Serviços adicionais ao frete padrão podem ser acordados antes '
          + 'ou durante a mudança, como retirada de item por escada ou '
          + 'inclusão de item não listado. Esses adicionais são '
          + 'combinados e pagos diretamente com o Transportador '
          + 'Parceiro, e seguem as regras abaixo.',
          '3.5.1. Retirada ou entrega por escada. O número de andares e '
          + 'a existência de elevador são informados pelo Usuário no '
          + 'formulário de solicitação. Caso a necessidade de uso de '
          + 'escada seja identificada apenas no ato da prestação, fica a '
          + 'cargo do Transportador Parceiro a possibilidade de prestar '
          + 'o serviço adicional e de acordar o valor correspondente '
          + 'com o Usuário.',
          '3.5.2. Itens adicionais. A proposta recebida cobre os itens '
          + 'descritos pelo Usuário na solicitação. Itens não informados, '
          + 'ou informados com menos de 24 horas de antecedência, não '
          + 'estão cobertos pela proposta: seu transporte fica sujeito à '
          + 'disponibilidade do Transportador Parceiro e deve ser '
          + 'tratado diretamente com ele.',
        ],
      },
      {
        title: '3.6. Impossibilidade de retirada ou entrega',
        paragraphs: [
          'Caso, durante a execução do frete, algum item informado ou '
          + 'acrescentado não possa ser retirado do imóvel de origem ou '
          + 'entregue no de destino com a devida segurança, pelos '
          + 'acessos informados pelo Usuário (escadas ou elevadores), a '
          + 'RotaMoove e o Transportador Parceiro ficam isentos da '
          + 'obrigação de carga, transporte e descarregamento desse '
          + 'item.',
        ],
      },
      {
        title: '3.7. Restrições de horário e custos adicionais',
        paragraphs: [
          'Quando os endereços de origem ou destino apresentarem '
          + 'restrições de horário para carga e descarga fora do horário '
          + 'comercial (08h às 17h) e não houver comunicação prévia '
          + 'expressa do Usuário no momento da contratação, o '
          + 'Transportador Parceiro poderá cobrar valores adicionais '
          + 'caso a execução completa não possa ser realizada em um '
          + 'único dia.',
          'Nessas hipóteses, sendo necessária a realocação de equipe e '
          + 'transporte para conclusão em data posterior, poderá ser '
          + 'acordada nova cobrança proporcional aos custos '
          + 'operacionais, incluindo deslocamento, mão de obra e '
          + 'eventual indisponibilidade de agenda.',
        ],
      },
      {
        title: '3.8. Montagem e desmontagem',
        paragraphs: [
          'Montagem e desmontagem de móveis são serviços complementares '
          + 'ao frete, executados por Montadores Parceiros ou pelo '
          + 'próprio Transportador Parceiro, quando este contar com '
          + 'profissional habilitado em sua equipe. Esses profissionais '
          + 'são autônomos e não possuem vínculo com a RotaMoove.',
          'Estes serviços complementares ainda não são contratados como '
          + 'item separado na Plataforma: devem ser descritos pelo '
          + 'Usuário no campo de descrição da solicitação e acordados '
          + 'diretamente com o Transportador Parceiro, que os '
          + 'considerará em sua proposta.',
          'A RotaMoove não fornece material de embalagem e não presta '
          + 'serviço de embalagem profissional. Os Transportadores '
          + 'Parceiros utilizam os materiais de proteção usuais do '
          + 'transporte; a embalagem dos bens é de responsabilidade do '
          + 'Usuário.',
        ],
      },
    ],
  },
  {
    id: 'pagamento',
    title: '4. Do pagamento do serviço',
    subsections: [
      {
        title: '4.1. Preço',
        paragraphs: [
          'O Usuário entende que os serviços de transporte prestados por '
          + 'um Transportador Parceiro, encontrados por meio da '
          + 'RotaMoove, são cobrados pelo próprio transportador. O '
          + 'pagamento é acertado e realizado diretamente entre o '
          + 'Usuário e o Transportador Parceiro: a Plataforma não '
          + 'processa pagamentos, não retém valores e não intermedia a '
          + 'transferência. O valor exibido na proposta aceita é a '
          + 'referência do que foi combinado.',
          '4.1.1. Variação do preço após a contratação. O preço pode '
          + 'sofrer alteração: (a) se o Usuário alterar a origem ou o '
          + 'destino de todos ou de algum item; (b) se aumentar a '
          + 'quantidade de itens ou o volume descrito na contratação; '
          + '(c) se as condições de acesso aos imóveis forem diferentes '
          + 'das informadas na solicitação; (d) em decorrência de atos '
          + 'do Usuário; e (e) por eventos fora do controle do '
          + 'transportador ou da RotaMoove, incluindo caso fortuito e '
          + 'força maior. Nessas hipóteses, o valor adicional é '
          + 'acordado entre Usuário e Transportador Parceiro.',
          '4.1.2. Erro sistêmico no preço. Caso ocorram falhas na '
          + 'Plataforma que gerem uma proposta com valor evidentemente '
          + 'incorreto, a RotaMoove poderá invalidá-la, comunicando '
          + 'Usuário e transportador antes da execução do serviço.',
          '4.1.3. Divergência de itens e análise. A RotaMoove e o '
          + 'Transportador Parceiro podem solicitar fotos, vídeos ou '
          + 'informações complementares dos itens, pelos canais de '
          + 'contato informados, para confirmar dimensões, '
          + 'características e condições de acesso. O Usuário reconhece '
          + 'que a proposta se baseia nas informações que ele forneceu '
          + 'na solicitação. Constatada divergência de volume, peso, '
          + 'quantidade ou características, a proposta poderá ser '
          + 'revista ou o serviço cancelado, mediante comunicação '
          + 'prévia. A recusa injustificada em prestar as informações '
          + 'solicitadas poderá acarretar o cancelamento.',
        ],
      },
      {
        title: '4.2. Cancelamento',
        paragraphs: [
          'O cancelamento é solicitado pela Plataforma e informado à '
          + 'outra parte. As condições abaixo valem para o acerto entre '
          + 'Usuário e Transportador Parceiro:',
        ],
        items: [
          'Cancelamento com mais de 72 horas de antecedência da data do '
          + 'serviço: sem cobrança.',
          'Cancelamento entre 72 e 24 horas de antecedência: até 25% do '
          + 'valor da proposta aceita.',
          'Cancelamento com menos de 24 horas de antecedência, ou no '
          + 'mesmo dia: até 50% do valor da proposta aceita.',
        ],
      },
      {
        title: '4.3. Itens frágeis e bens de valor',
        paragraphs: [
          'A embalagem dos bens é de responsabilidade do Usuário. O '
          + 'Transportador Parceiro poderá recusar-se a transportar '
          + 'itens que, por sua natureza ou estado, apresentem risco '
          + 'elevado de avaria, mesmo com os materiais e técnicas de '
          + 'proteção usuais do transporte. A decisão é tomada com base '
          + 'na avaliação do item e do risco envolvido.',
          'A RotaMoove e os Transportadores Parceiros não se '
          + 'responsabilizam por danos em itens de fragilidade extrema '
          + 'que, mesmo embalados pelo Usuário, não apresentem '
          + 'condições mínimas de segurança no transporte. Nessas '
          + 'situações, o Usuário será orientado quanto a medidas '
          + 'alternativas, podendo ser recomendado o transporte '
          + 'separado desses itens.',
          'Não são transportados joias, dinheiro, relógios de valor, '
          + 'armas de fogo e documentos insubstituíveis. A RotaMoove e '
          + 'o Transportador Parceiro ficam isentos de qualquer '
          + 'responsabilidade por perda ou falta desses bens.',
          'Não se recomenda o transporte em caixas de itens de alto '
          + 'valor, alimentos, itens sensíveis, líquidos ou frascos que '
          + 'não estejam devidamente fechados: a movimentação natural '
          + 'do transporte pode resultar em danos.',
        ],
      },
    ],
  },
  {
    id: 'montagem',
    title: '5. Montagem e desmontagem de móveis',
    subsections: [
      {
        title: '5.1. Características do serviço',
        paragraphs: [
          'Quando contratado, o serviço inclui ao menos um profissional '
          + 'para a execução da montagem e desmontagem dos itens '
          + 'previamente combinados. Por padrão, a desmontagem ocorre no '
          + 'local de origem e a montagem no destino; qualquer alteração '
          + 'deve ser previamente acordada entre as partes. O serviço '
          + 'poderá ser realizado em dia diferente do da coleta, desde '
          + 'que informado previamente.',
        ],
      },
      {
        title: '5.2. Restrições e responsabilidade por danos',
        paragraphs: [
          'Caso o serviço inclua fixação de itens ou realização de '
          + 'furos em paredes, é responsabilidade do Usuário indicar com '
          + 'exatidão os locais. Os furos são realizados exclusivamente '
          + 'em paredes de alvenaria; o serviço não é executado em '
          + 'drywall, gesso ou materiais similares. Em caso de danos '
          + 'decorrentes de indicação incorreta do local de furação, o '
          + 'profissional não poderá ser responsabilizado.',
        ],
      },
    ],
  },
  {
    id: 'transportador',
    title: '6. Obrigações do Transportador Parceiro',
    paragraphs: [
      'É de responsabilidade e obrigação do Transportador Parceiro '
      + 'manter e apresentar, quando solicitado, a Carteira Nacional de '
      + 'Habilitação do condutor e a documentação dos veículos '
      + 'automotores em dia e devidamente licenciados, conforme o '
      + 'Código de Trânsito Brasileiro e demais normas aplicáveis.',
      'O cadastro do Transportador Parceiro na Plataforma passa por '
      + 'ativação e verificação pela RotaMoove. Enquanto não ativado, o '
      + 'transportador não visualiza solicitações nem envia propostas. A '
      + 'RotaMoove pode, a qualquer tempo e mediante motivo, desativar '
      + 'um cadastro.',
      'Ao concluir um serviço, o Transportador Parceiro fica sujeito à '
      + 'avaliação do Usuário, que compõe sua reputação pública na '
      + 'Plataforma.',
      'Sobre cada serviço realizado por meio da Plataforma incide uma '
      + 'taxa de intermediação da RotaMoove, de 10% a 15%. A taxa é '
      + 'acrescida ao valor informado pelo Transportador Parceiro em '
      + 'sua proposta: o valor que ele informa é o que recebe, e o '
      + 'total exibido ao Usuário já inclui a taxa. O percentual '
      + 'aplicável e a forma de recolhimento são comunicados ao '
      + 'Transportador Parceiro antes de passarem a valer.',
    ],
  },
  {
    id: 'finais',
    title: '7. Disposições finais',
    paragraphs: [
      'Este documento e a relação entre o Usuário e a RotaMoove são '
      + 'regidos pelas leis da República Federativa do Brasil.',
      'O Usuário expressamente concorda e está ciente de que a '
      + 'RotaMoove não terá qualquer responsabilidade, contratual ou '
      + 'extracontratual, por quaisquer danos patrimoniais ou morais, '
      + 'incluindo, sem limitação, danos por lucros cessantes, perda de '
      + 'informações ou outras perdas intangíveis resultantes de: (a) '
      + 'uso ou incapacidade de usar o serviço; (b) quebras de '
      + 'segurança e acesso não autorizado às transmissões ou '
      + 'informações do Usuário, bem como sua alteração; (c) '
      + 'orientações ou condutas de terceiros sobre o serviço; (d) '
      + 'motivos de força maior ou caso fortuito, atos praticados pelo '
      + 'próprio Usuário e atos praticados por ou sob a '
      + 'responsabilidade de terceiros.',
      'O tratamento de dados pessoais na Plataforma é descrito na '
      + 'Política de Privacidade, que integra estes Termos.',
    ],
  },
];
