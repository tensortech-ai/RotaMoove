/**
 * Politica de privacidade.
 *
 * O texto descreve o que o sistema realmente faz. Cada item da lista de
 * dados corresponde a uma coluna que existe no banco (ver as migracoes
 * em supabase/migrations/), e a lista do que NAO e coletado corresponde
 * a ausencia de dependencias: o aplicativo nao declara permissao alguma
 * no AndroidManifest, nao usa geolocalizacao e nao carrega biblioteca de
 * analytics ou publicidade.
 *
 * Mantido em sincronia com lib/core/config/legal_content.dart, que
 * mostra o mesmo conteudo dentro do aplicativo.
 *
 * AVISO: escrito para descrever o sistema com exatidao, nao como peca
 * juridica. Antes de publicar, deve passar por revisao de advogado.
 */

/** Data da ultima revisao, exibida no topo da pagina. */
export const PRIVACY_UPDATED = '2026-09-19';

export type PrivacySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
  /** Paragrafo final, depois da lista. */
  closing?: string;
};

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: 'controlador',
    title: 'Quem é responsável pelos seus dados',
    paragraphs: [
      'O controlador dos dados pessoais tratados na plataforma é a '
      + 'empresa identificada no rodapé desta página, pelo CNPJ e '
      + 'endereço ali informados.',
      'Para qualquer assunto relacionado a dados pessoais, incluindo o '
      + 'exercício dos direitos descritos abaixo, o canal é o e-mail de '
      + 'contato indicado no rodapé.',
    ],
  },
  {
    id: 'coleta',
    title: 'Quais dados coletamos',
    paragraphs: [
      'Coletamos apenas o que você digita na plataforma. Não há coleta '
      + 'automática de dados do seu aparelho.',
    ],
    items: [
      'Cadastro: nome completo, e-mail, telefone e cidade. A senha é '
      + 'guardada apenas como resumo criptográfico (hash) — nem nós '
      + 'conseguimos lê-la.',
      'Prestadores: nome da empresa, descrição da atividade, tipo de '
      + 'veículo, quantidade de ajudantes, cidades atendidas e tipos de '
      + 'serviço oferecidos.',
      'Solicitações de serviço: endereço de origem e de destino (rua, '
      + 'número, bairro, CEP, andar e existência de elevador), data e '
      + 'período desejados, descrição dos itens a transportar e '
      + 'necessidade de ajudantes.',
      'Orçamentos e contratações: valores propostos, prazo estimado, '
      + 'datas e situação do serviço.',
      'Mensagens: o conteúdo da conversa entre cliente e prestador '
      + 'depois que um serviço é contratado.',
      'Avaliações: a nota e o comentário escritos após a conclusão do '
      + 'serviço.',
      'Registros técnicos: datas de criação e de alteração de cada '
      + 'registro, usadas para histórico e auditoria.',
    ],
  },
  {
    id: 'nao-coletamos',
    title: 'O que não coletamos',
    paragraphs: [
      'Esta lista é tão importante quanto a anterior, e descreve o '
      + 'estado atual do aplicativo:',
    ],
    items: [
      'Localização do aparelho. O aplicativo não pede permissão de GPS '
      + 'e não acompanha onde você está. Os endereços que usamos são os '
      + 'que você digita na solicitação.',
      'Dados de pagamento. A plataforma não processa pagamentos: o '
      + 'acerto de valores acontece diretamente entre cliente e '
      + 'prestador.',
      'Agenda, fotos, contatos, câmera ou microfone. O aplicativo não '
      + 'declara nenhuma dessas permissões.',
      'Publicidade e rastreamento. Não há anúncios, não há cookies de '
      + 'rastreamento no site e nenhuma biblioteca de analytics está '
      + 'instalada no aplicativo ou no site.',
    ],
  },
  {
    id: 'uso',
    title: 'Para que usamos',
    items: [
      'Criar e manter sua conta e identificar você quando faz login.',
      'Mostrar a sua solicitação aos prestadores que atendem a cidade '
      + 'indicada, para que possam enviar orçamento.',
      'Permitir a comparação dos orçamentos recebidos e a contratação.',
      'Permitir a conversa entre as duas partes de um serviço '
      + 'contratado.',
      'Exibir a reputação dos prestadores a partir das avaliações.',
      'Manter registro do que foi contratado, para consulta das duas '
      + 'partes e para resolver divergências.',
    ],
  },
  {
    id: 'compartilhamento',
    title: 'Com quem compartilhamos',
    paragraphs: [
      'Não vendemos dados pessoais e não os cedemos para fins de '
      + 'publicidade. O compartilhamento acontece apenas nas situações '
      + 'abaixo:',
    ],
    items: [
      'Entre as partes de um serviço: prestadores que atendem a cidade '
      + 'veem a solicitação para orçar; o endereço completo e o telefone '
      + 'ficam visíveis ao prestador depois da contratação. Prestadores '
      + 'não veem os orçamentos uns dos outros.',
      'Supabase, que hospeda o banco de dados e o serviço de '
      + 'autenticação, atuando como operador por nossa conta.',
      'ViaCEP, serviço público de consulta de endereço por CEP. '
      + 'Enviamos apenas o CEP digitado, sem nome, telefone ou qualquer '
      + 'identificação de quem consultou.',
      'Autoridades públicas, quando houver obrigação legal ou ordem '
      + 'judicial.',
    ],
  },
  {
    id: 'retencao',
    title: 'Por quanto tempo guardamos',
    paragraphs: [
      'Os dados de cadastro são mantidos enquanto a conta existir. O '
      + 'histórico de serviços contratados é mantido como registro da '
      + 'relação entre as partes, inclusive para fins fiscais e de '
      + 'defesa em eventual disputa.',
      'Avaliações já publicadas permanecem visíveis, porque compõem a '
      + 'reputação pública do prestador avaliado; quando a conta de '
      + 'quem avaliou é encerrada, a avaliação deixa de ser associada ao '
      + 'nome da pessoa.',
    ],
  },
  {
    id: 'direitos',
    title: 'Seus direitos',
    paragraphs: [
      'A Lei Geral de Proteção de Dados (Lei 13.709/2018) garante a '
      + 'você, a qualquer momento e sem custo:',
    ],
    items: [
      'Confirmar se tratamos dados seus e acessar esses dados.',
      'Corrigir dados incompletos, inexatos ou desatualizados.',
      'Pedir a anonimização, o bloqueio ou a eliminação de dados '
      + 'desnecessários ou tratados fora da lei.',
      'Pedir a portabilidade dos dados a outro fornecedor.',
      'Saber com quem compartilhamos seus dados.',
      'Revogar o consentimento e pedir a exclusão da conta.',
    ],
    closing:
      'Para exercer qualquer um desses direitos, escreva para o e-mail '
      + 'de contato no rodapé. Respondemos em até 15 dias. Podemos pedir '
      + 'uma confirmação de identidade antes de atender ao pedido, para '
      + 'evitar que outra pessoa acesse ou apague os seus dados.',
  },
  {
    id: 'seguranca',
    title: 'Como protegemos',
    items: [
      'Todo o tráfego entre o aplicativo, o site e o servidor usa '
      + 'conexão criptografada (HTTPS/TLS).',
      'O banco de dados aplica regras de acesso linha a linha: cada '
      + 'pessoa só alcança os próprios registros e aqueles dos serviços '
      + 'de que participa. A regra vale no servidor, e não apenas na '
      + 'tela do aplicativo.',
      'Senhas são guardadas apenas como hash, nunca em texto legível.',
      'A chave administrativa do banco não existe dentro do aplicativo: '
      + 'o aplicativo carrega somente a chave pública, que sozinha não '
      + 'dá acesso a dados de terceiros.',
    ],
  },
  {
    id: 'menores',
    title: 'Menores de idade',
    paragraphs: [
      'A plataforma destina-se a maiores de 18 anos. Não coletamos '
      + 'intencionalmente dados de crianças ou adolescentes. Se '
      + 'identificarmos um cadastro nessa situação, a conta é removida.',
    ],
  },
  {
    id: 'alteracoes',
    title: 'Mudanças nesta política',
    paragraphs: [
      'Quando esta política mudar, a data de revisão no topo da página '
      + 'é atualizada. Mudanças relevantes são avisadas dentro do '
      + 'aplicativo antes de passarem a valer.',
    ],
  },
];
