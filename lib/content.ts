/**
 * Todo o texto do site, em um lugar so.
 *
 * Regra desta fase: nada aqui pode afirmar algo que o produto nao faz.
 * Cada item abaixo corresponde a um comportamento que existe no
 * aplicativo (fases 1 a 11). O que nao existe esta dito como nao
 * existente, nao omitido.
 */

export const HERO = {
  title: 'Encontre o profissional certo para sua mudança',
  subtitle:
    'Descreva o que precisa transportar, receba orçamentos de prestadores '
    + 'que atendem a sua região e escolha com calma. Carretos e mudanças '
    + 'em cidades do estado de São Paulo.',
  note: 'Solicitar e comparar orçamentos é gratuito.',
} as const;

/** Os tres tipos vem de supabase/seeds/03_service_types.sql. */
export const SERVICE_TYPES = [
  {
    name: 'Carreto',
    description:
      'Poucos volumes, entrega rápida. Ideal para móveis avulsos ou '
      + 'cargas pequenas.',
  },
  {
    name: 'Mudança residencial',
    description:
      'Mudança completa de casa ou apartamento, com móveis e caixas.',
  },
  {
    name: 'Mudança comercial',
    description:
      'Escritório, loja ou depósito, com equipamentos e mobiliário '
      + 'corporativo.',
  },
] as const;

export const CUSTOMER_STEPS = [
  {
    title: 'Solicite',
    description:
      'Informe origem e destino pelo CEP, a data, o período do dia e os '
      + 'detalhes da carga.',
  },
  {
    title: 'Receba orçamentos',
    description:
      'Prestadores que atendem a sua cidade e o tipo de serviço enviam '
      + 'suas propostas.',
  },
  {
    title: 'Compare',
    description:
      'Veja valor, prazo estimado, reputação e o que cada prestador '
      + 'escreveu, lado a lado.',
  },
  {
    title: 'Contrate',
    description:
      'Ao escolher um prestador, os demais orçamentos são recusados '
      + 'automaticamente.',
  },
  {
    title: 'Acompanhe',
    description:
      'Converse pelo aplicativo e acompanhe cada etapa até a conclusão '
      + 'do serviço.',
  },
] as const;

export const PROVIDER_STEPS = [
  {
    title: 'Cadastre-se',
    description:
      'Crie o perfil da sua empresa com veículo, ajudantes disponíveis e '
      + 'uma descrição do seu trabalho.',
  },
  {
    title: 'Defina sua área',
    description:
      'Escolha as cidades que você atende e os tipos de serviço que faz.',
  },
  {
    title: 'Receba solicitações',
    description:
      'Você vê apenas os pedidos compatíveis com a sua área e os seus '
      + 'tipos de serviço.',
  },
  {
    title: 'Envie seu orçamento',
    description:
      'Informe valor, prazo estimado e uma mensagem. Você não vê as '
      + 'propostas dos concorrentes.',
  },
  {
    title: 'Realize o serviço',
    description:
      'Contratado, você conversa com o cliente e atualiza o andamento '
      + 'até concluir.',
  },
] as const;

export const CUSTOMER_POINTS = [
  {
    title: 'Um pedido, vários orçamentos',
    description:
      'Você descreve o serviço uma única vez. Os prestadores da sua '
      + 'região respondem com as propostas deles.',
  },
  {
    title: 'Comparação lado a lado',
    description:
      'Valor, prazo estimado, avaliação média e serviços concluídos ficam '
      + 'visíveis antes da escolha. O menor preço aparece destacado.',
  },
  {
    title: 'Prazo para decidir',
    description:
      'Cada solicitação fica aberta por 48 horas para receber propostas. '
      + 'Você escolhe quando quiser dentro desse período.',
  },
  {
    title: 'Conversa registrada',
    description:
      'Depois de contratar, a conversa com o prestador acontece dentro da '
      + 'plataforma e fica registrada.',
  },
  {
    title: 'Andamento do serviço',
    description:
      'O prestador atualiza cada etapa: agendado, a caminho, em serviço e '
      + 'concluído.',
  },
  {
    title: 'Avaliação ao final',
    description:
      'Concluído o serviço, você avalia de 1 a 5 estrelas e pode deixar '
      + 'um comentário. A avaliação é definitiva.',
  },
] as const;

export const PROVIDER_POINTS = [
  {
    title: 'Pedidos compatíveis',
    description:
      'Você recebe apenas solicitações das cidades que cadastrou e dos '
      + 'tipos de serviço que realiza.',
  },
  {
    title: 'Orçamento fechado',
    description:
      'Sua proposta não fica visível para os outros prestadores, e você '
      + 'também não vê a deles.',
  },
  {
    title: 'Reputação que fica',
    description:
      'Serviços concluídos e avaliações recebidas ficam no seu perfil e '
      + 'aparecem para quem está comparando.',
  },
  {
    title: 'Sem mensalidade',
    description:
      'Nesta fase inicial não há cobrança de comissão nem mensalidade '
      + 'para enviar orçamentos.',
  },
] as const;

export const COVERAGE = {
  title: 'Onde o RotaMoove funciona',
  lead:
    'O lançamento inicial é no estado de São Paulo. Todas as cidades do '
    + 'estado estão disponíveis para cadastro de solicitações.',
  caveat:
    'A chegada de orçamentos depende dos prestadores que atendem cada '
    + 'região. Em cidades com poucos prestadores cadastrados, uma '
    + 'solicitação pode receber menos propostas — ou nenhuma.',
  future:
    'A plataforma foi construída para receber outros estados, mas hoje o '
    + 'atendimento é apenas em São Paulo. Não anunciamos cobertura que '
    + 'ainda não existe.',
} as const;

export const ABOUT = {
  problem:
    'Contratar um carreto ou uma mudança costuma ser um processo solto: '
    + 'ligações para vários números, preços combinados de boca, pouca '
    + 'clareza sobre o que está incluso e nenhum registro do que foi '
    + 'acertado.',
  purpose:
    'O RotaMoove organiza esse caminho em um lugar só. O cliente descreve o '
    + 'serviço uma vez e recebe propostas de prestadores que realmente '
    + 'atendem aquela região. O prestador recebe pedidos compatíveis com '
    + 'o que faz, sem precisar disputar atenção em anúncios.',
  goal:
    'O objetivo é deixar o processo mais organizado e transparente para '
    + 'os dois lados: condições escritas antes da contratação, conversa '
    + 'registrada e um histórico de avaliações que ajuda quem vem depois '
    + 'a escolher.',
} as const;

export const FAQ = [
  {
    question: 'O que é o RotaMoove?',
    answer:
      'É uma plataforma que conecta quem precisa de um carreto ou de uma '
      + 'mudança a prestadores que atendem a região. O cliente descreve o '
      + 'serviço, recebe orçamentos e escolhe com quem quer fechar.',
  },
  {
    question: 'Onde o RotaMoove está disponível?',
    answer:
      'No estado de São Paulo. Todas as cidades do estado podem receber '
      + 'solicitações, mas a quantidade de orçamentos depende dos '
      + 'prestadores cadastrados em cada região.',
  },
  {
    question: 'Como o cliente solicita um serviço?',
    answer:
      'Pelo aplicativo. Você escolhe o tipo de serviço, informa origem e '
      + 'destino pelo CEP, a data e o período do dia, e descreve a carga: '
      + 'veículo desejado, ajudantes e itens frágeis.',
  },
  {
    question: 'Como os prestadores recebem as solicitações?',
    answer:
      'Cada prestador cadastra as cidades que atende e os tipos de '
      + 'serviço que realiza. Ele vê apenas as solicitações compatíveis '
      + 'com esses dois critérios.',
  },
  {
    question: 'Posso comparar vários orçamentos?',
    answer:
      'Sim. Os orçamentos recebidos ficam lado a lado, com valor, prazo '
      + 'estimado, avaliação média e quantidade de serviços concluídos do '
      + 'prestador. Ao contratar um, os demais são recusados '
      + 'automaticamente.',
  },
  {
    question: 'Os prestadores veem os orçamentos uns dos outros?',
    answer:
      'Não. Cada prestador envia a proposta dele sem ver as demais. Quem '
      + 'compara é o cliente.',
  },
  {
    question: 'Consigo falar com o prestador?',
    answer:
      'Sim, depois da contratação. A conversa acontece dentro da '
      + 'plataforma e fica registrada junto ao serviço.',
  },
  {
    question: 'Consigo acompanhar o andamento do serviço?',
    answer:
      'Sim. O prestador atualiza as etapas — agendado, a caminho, em '
      + 'serviço e concluído — e você acompanha pelo aplicativo. Não há '
      + 'rastreamento por GPS nem mapa ao vivo.',
  },
  {
    question: 'Como funciona a avaliação do prestador?',
    answer:
      'Depois que o serviço é concluído, o cliente avalia de 1 a 5 '
      + 'estrelas e pode escrever um comentário. A avaliação é enviada uma '
      + 'única vez e não pode ser alterada. Ela passa a fazer parte da '
      + 'reputação do prestador.',
  },
  {
    question: 'O pagamento é feito pelo aplicativo?',
    answer:
      'Não. A plataforma não processa pagamentos. O valor combinado fica '
      + 'registrado no serviço, mas o pagamento é acertado diretamente '
      + 'entre cliente e prestador.',
  },
  {
    question: 'Posso cancelar uma solicitação?',
    answer:
      'Sim. Enquanto o prestador não estiver a caminho, o cliente pode '
      + 'cancelar informando o motivo, sem multa.',
  },
  {
    question: 'O aplicativo envia notificações?',
    answer:
      'Ainda não. Não há notificações push nesta versão: as novidades '
      + 'aparecem quando você abre o aplicativo. As mensagens da conversa '
      + 'chegam em tempo real enquanto a tela está aberta.',
  },
] as const;
