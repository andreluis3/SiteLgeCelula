/*
 * CONTEÚDO DO LGE. Textos copiados literalmente da página oficial (auditoria de 21/10/2026),
 * INCLUINDO erros de grafia e pontuação (ex.: "Camara semi-aencoica", hífens soltos).
 * Só a marcação markdown (**negrito**, *itálico*) foi convertida em <strong>/<em>/texto.
 *
 * PENDÊNCIAS (ver docs/pendencias.md):
 *  - Responsável por "Segurança elétrica de materiais": NÃO confirmado.
 *  - Rótulo "Telefone:" aparece antes de e-mails na página oficial; mantido literal, sem inventar números.
 *  - Fotos de pessoas: nomes de arquivo não batem com alguns nomes; usamos placeholder onde há dúvida.
 *  - Imagens são hotlinks do ipt.br (não baixadas); se falharem, aparece placeholder.
 */
const U = 'https://ipt.br/wp-content/uploads/';

export const site = {
  officialUrl: 'https://ipt.br/laboratorio-de-usos-finais-e-gestao-de-energia-2/',
  logo: U + '2026/10/IPT_-COR-BCO-1.png',
  govLogo: U + '2026/10/GOV_logo3branco.png',
  govLink: 'http://www.sic.sp.gov.br/',
};

export const nav = [
  { label: 'Quem Somos', href: 'https://ipt.br/quem-somos/' },
  { label: 'IPT Open', href: 'https://ipt.br/ipt-open/' },
  { label: 'Unidades', href: 'https://ipt.br/unidades-de-negocio/', children: [
    ['Bionanomanufatura', 'bionanomanufatura/'], ['Cidades, Infraestrutura e Meio Ambiente', 'cidades-infraestrutura-e-meio-ambiente-cima/'],
    ['Energia', 'unidade-de-energia/'], ['Ensino Tecnológico', 'ensino-tecnologico/'], ['Habitações e Edificações', 'habitacoes-e-edificacoes/'],
    ['Materiais Avançados', 'materiaisavancados/'], ['Tecnologias Digitais', 'tecnologiasdigitais/'],
    ['Tecnologias Regulatórias e Metrológicas', 'tecnologiasregulatoriasemetrologicas/'],
  ].map(([label, p]) => ({ label, href: 'https://ipt.br/unidades-de-negocio/' + p })) },
  { label: 'Núcleos', href: 'https://ipt.br/nucleos/', children: [
    { label: 'Amazônia', href: 'https://ipt.br/nucleos/amazonia/' }, { label: 'NUCERT', href: 'https://ipt.br/nucleos/nucert/' },
    { label: 'NUSCARBON', href: 'https://ipt.br/nucleos/nuscarbon/' }, { label: 'NUTABES', href: 'https://ipt.br/nucleos/nutabes/' },
  ] },
  { label: 'Laboratórios', href: 'https://ipt.br/laboratorios/' },
  { label: 'Soluções', href: 'https://ipt.br/solucoes-tecnologicas/' },
  { label: 'Educação', href: 'https://sapiens.ipt.br/Index_new.aspx' },
  { label: 'Contato', href: 'https://ipt.br/fale-conosco/', children: [
    { label: 'Fale Conosco', href: 'https://ipt.br/fale-conosco/' }, { label: 'Ouvidoria e Canal de Denúncias', href: 'https://ipt.br/ouvidoria/' },
  ] },
  { label: 'Notícias', href: 'https://ipt.br/noticias-e-destaques/' },
  { label: 'Mais', mega: true, groups: [
    { title: 'Principais', links: [['Fomento à pesquisa', 'https://ipt.br/fomento-a-pesquisa/'], ['Unidades Embrapii', 'https://ipt.br/unidade-embrapii/']] },
    { title: 'Institucional', links: [['Qualidade', 'https://ipt.br/qualidade/'], ['Governança Corporativa', 'https://ipt.br/governanca-corporativa/'], ['SIC/Transparência', 'https://ipt.br/sic-transparencia/'], ['Documentos Institucionais', 'https://ipt.br/documentos-institucionais/']] },
    { title: 'Soluções e Serviços', links: [['O que o IPT pode fazer por mim', 'https://ipt.br/o-que-o-ipt-pode-fazer-por-mim/'], ['Ensaios e Calibrações', 'https://ipt.br/ensaios-e-calibracoes/'], ['IPT OCP – Organismo de Certificação de Produto', 'https://ipt.br/ipt-ocp-organismo-de-certificacao-de-produto/'], ['Equipamentos Multiusuários', 'https://ipt.br/equipamentos-multiusuarios/'], ['Areia Normal Brasileira', 'https://ipt.br/areia-normal-brasileira/'], ['Ensinos e cursos', 'https://sapiens.ipt.br/index_new.aspx'], ['SAA Normas Técnicas', 'https://ipt.br/saa-monitoramento-de-normas-tecnicas/']] },
    { title: 'Acervo', links: [['Revista do IPT', 'https://revista.ipt.br/revistaIPT/pt_BR'], ['Publicações IPT', 'https://ipt.br/publicacoes-ipt/'], ['Informações sobre madeira', 'https://madeiras.ipt.br/'], ['Biblioteca', 'https://ipt.br/biblioteca/'], ['Patentes', 'https://ipt.br/patentes/']] },
  ] },
];

export const page = {
  section: 'Laboratórios',
  title: 'Laboratório de Usos Finais e Gestão de Energia (LGE)',
  published: 'Publicado em 05/09/2023',
  cover: { src: U + '2023/09/LGE_foto-capa-scaled.jpg', alt: 'Foto de capa do LGE', label: 'Foto de capa do LGE' },
  subtitle: 'Ensaios elétricos, EMC e tecnologias do futuro',
  intro: [
    'O <strong>LGE</strong> é uma unidade especializada do Instituto de Pesquisas Tecnológicas (IPT), parte da <strong>Unidade de Negócios em Energia (EN)</strong>, para gestão da produção e usos finais energéticos, com ênfase para a cadeia produtivo do setor energético elétrico. Atuamos como um vetor estratégico no ambiente de desenvolvimento de tecnologias de inovação, alinhando nossas competências com as políticas setoriais do Brasil e do Estado de São Paulo. Nossa missão é ser um dos principais agentes técnicos na viabilização da transição energética e da sustentabilidade (ambientalmente correta, economicamente viável e socialmente justa), utilizando a inovação tecnológica para otimizar produtos e processos nos pontos de produção e consumo final de energia.',
    'A excelência do LGE é assegurada por um corpo técnico altamente capacitado e uma infraestrutura laboratorial robusta, com foco na realização de projetos de pesquisa tecnológica para ampliar a maturidade de soluções e na realização de Ensaios Normativos, tanto para o setor público quanto para o setor privado. Nossas áreas de atuação, regidas pelo Sistema de Gestão da Qualidade, abrangem desde a <strong>Avaliação da Compatibilidade Eletromagnética (CEM) e da Segurança Elétrica (SGP) até a Caracterização Elétrica (MEE) e fotométrica de Materiais (SIV), produtos e instalações.</strong> Essa base técnica permite a oferta de uma carteira de serviços diversificada e de alto valor, incluindo Calibração Óptica, Ensaios em equipamentos Eletromédicos e a aplicação de <strong>Inteligência Artificial (IA)</strong> para maximizar a Eficiência em Usos Finais Energéticos.',
    'O laboratório é um dos líderes nacionais em P&D voltado para as tecnologias do futuro. Em Geração Fotovoltaica, apoiamos o desenvolvimento de produtos junto à cadeia produtiva, e em Eletromobilidade, realizamos estudos avançados, como simulações e análises de eficiência well to wheel, essenciais para programas setoriais, como o <strong>MOVER</strong>. No pioneirismo das <strong>Tecnologias do Hidrogênio (THI)</strong>, o LGE participa ativamente da elaboração de normas da ABNT e da implantação de um laboratório de demonstração de soluções tecnológicas para a cadeia produtiva do H2, consolidando o arcabouço regulatório para a inserção segura e eficaz desta fonte de energia no mercado brasileiro.',
    'O sucesso de nossa missão reside no engajamento proativo de agentes públicos e privados. Buscamos continuamente atender a governos e prefeituras, fornecendo a validação técnica necessária para o desenvolvimento de políticas públicas e a modernização da infraestrutura, como no programa de eficientização de luminárias da Eletrobras / Procel e Inmetro. Além disso, atuamos em segmentos críticos, como Ensaios em Cabos Umbilicais para plataformas de petróleo e serviços especializados em <strong>Transportes e Segurança Viária (VLT)</strong>, mitigando riscos e preenchendo gaps de competência técnica no mercado nacional.',
    'A visão de futuro do LGE é expandir continuamente nossas fronteiras, com planos estratégicos de ampliação em áreas de alta demanda regulatória, como CEM e ensaios ópticos de EPIs e Produtos para Iluminação. Nosso compromisso é transformar a pesquisa de ponta (como a desenvolvida nos <strong>CCDs FAPESP</strong>) em soluções tangíveis, promovendo a inovação tecnológica sustentável e a competitividade da indústria nacional. O LGE convida parceiros estratégicos a colaborar na construção de um futuro energético mais eficiente, seguro e alinhado com as metas de descarbonização do país.',
  ],
};

// contact: { name, role?, email[], photo?, pending? }  (name null => pendente de confirmação)
const phoneLabel = 'Telefone:'; // literal da página oficial; os valores são e-mails
export const labContact = { name: 'Marcelo Sanchez Miguel Dias', emails: ['mdias@ipt.br', 'lge@ipt.br'], label: phoneLabel,
  photo: U + '2023/09/marcelo--1024x683.jpg' };

export const areasIntro = {
  title: 'Áreas de atuação',
  text: 'As principais atividades do laboratório podem ser agrupadas nas seguintes sub-áreas temáticas:',
  items: ['Compatibilidade eletromagnética;', 'Segurança elétrica de equipamentos elétricos, ópticos e eletromédicos;', 'Calibração e ensaios de equipamentos elétricos/óticos;', 'Energias – hidrogênio, solar, eólico;'],
};

// blocks: p (html) | list (heading, items)
export const areas = [
  { id: 'emc', title: 'Compatibilidade Eletromagnética (EMC)',
    blocks: [
      { type: 'p', html: 'Acreditado pelo <strong>Inmetro (CGCRE-045)</strong>, o laboratório realiza ensaios <strong>EMC</strong> conforme normas nacionais e internacionais, garantindo que os equipamentos atendam aos requisitos de emissão e imunidade eletromagnética. Atuamos desde protótipos até produtos para exportação, com acreditação Inmetro e reconhecimento <strong>Ilac</strong>.' },
      { type: 'list', heading: 'Infraestrutura', items: ['Camara semi-aencoica “full-compliance”', 'Sistemas de campo próximo para análise de fontes de ruído', 'Simulação numérica computacional para otimização eletromagnética'] },
      { type: 'list', heading: 'Principais normas atendidas', items: [
        'Normas de produtos: IEC 61547 (iluminação); -IEC 60601-1-2 (eletromédicos); -IEC 60335-1 (eletrodomésticos); -CISPR22 (Tecnologia da Informação)',
        'Ensaio de emissão:-Emissão radiada e conduzida (CISPR11 / CISPR 15); -Harmonicos (IEC 61000-3-2) e Flicker (IEC 61000-3-3',
        'Ensaio de Imunidade: IEC 61000-4-2 a IEC 61000-4-13 (ESD, imunidade radiada na câmara semi-anecoica ou SAC – semi anechoic chamber, EFT ou Burst, Surto ou Surge, imunidade conduzida, campo magnético, quedas de tensão e inter-harmônicos)'] },
      { type: 'p', html: 'Esses ensaios verificam se os equipamentos não geram interferências excessivas e suportam perturbações do ambiente eletromagnético, mantendo segurança e desempenho essencial.' },
    ],
    gallery: [
      { src: U + '2026/06/LGECamara-Anecoica-1-edited.png', alt: 'Câmara anecoica do LGE', label: 'Câmara anecoica' },
      { src: U + '2026/06/LGE_foto-capa-2-edited-scaled.jpg', alt: 'Foto do LGE', label: 'Foto do LGE' },
      
    ],
    contacts: [{ title: 'Contato', name: 'Marcelo Sanchez Miguel Dias', emails: ['mdias@ipt.br'], photo: null }] },

  { id: 'seguranca', title: 'Segurança elétrica de equipamentos e materiais elétricos',
    blocks: [
      { type: 'p', html: 'Acreditado pelo <strong>Inmetro (CGCRE-045)</strong>, o setor de segurança elétrica de equipamentos auxilia no desenvolvimento e na adequação de diversos equipamentos eletroeletrônicos, com a finalidade de ingresso destes produtos no mercado. Em materiais o laboratório LGE possui uma gama de ensaios dedicados a análise da condutividade e resistividade de materiais. Como a rigidez dielétrica que verifica a tensão de ruptura em função da espessura nominal do material. Ou a resistividade superficial e volumétrica que determinada através da resistência à passagem de corrente elétrica contínua entre dois pontos específicos.' },
      { type: 'list', heading: 'Infraestrutura', items: ['Sala para ensaios de alta tensão;', 'Sala para ensaios de segurança de equipamentos elétricos e eletromédicos.'] },
      { type: 'list', heading: 'Principais ensaios e normas atendidas', items: [
        'Equipamentos Eletromédicos (NBR IEC 60601-1 e específicas) como respiradores, equipamentos odontológicos.',
        'Eletrodomésticos (NBR IEC 60335-1 e específicas);', 'Ensaio de rigidez dielétrica (ASTM D149);',
        'Ensaio de resistência elétrica de pisos (ASTM F150, IEC 61340-4-1 ou equivalentes);',
        'Ensaio de constante dielétrica e tangente de perdas (ASTM D150, IEC 62631-2);',
        'Resistividades elétrica superficial e volumétrica, ASTM D 257.', 'Ensaio de tracking elétrico (IEC 60112)'] },
    ],
    gallery: [
      { src: 'assets/images/aplicador.jpg', alt: 'Aplicador utilizado em ensaios de materiais elétricos', label: 'Aplicador de ensaio' },
      { src: 'assets/images/resistenciamateriais.jpg', alt: 'Equipamento para ensaios de resistência de materiais elétricos', label: 'Resistência de materiais' },
    ],
    contacts: [
      { title: 'Segurança elétrica de equipamentos', name: 'Eduardo Berruzero', emails: ['eduardob@ipt.br'], photo: 'assets/images/edu.png' },
      { title: 'Segurança elétrica de materiais', name: 'Kleber Jesus de Oliveira', emails: ['kleberjo@ipt.br'], photo: 'assets/images/kleber.png' },
    ] },

  { id: 'optica', title: 'Ensaios em equipamentos ópticos',
    blocks: [
      { type: 'p', html: 'Acreditado Inmetro (CGCRE-045), a área de óptica atua na medição de equipamentos que trabalham com medições no espectro visível, ultravioleta e infravermelho. A medição de irradiância nesses três espectros, inclui aplicações em equipamentos para a saúde, desempenho para conforto ambiental, exposição ocupacional e equipamentos de proteção individual. No espectro visível caracterizamos avaliação de desempenho de luminárias e de lâmpadas, inclusive LEDs, incluindo sua utilização em iluminação pública e materiais e equipamentos de sinalização e visualização, como refletivos e retrorrefletivos.' },
      { type: 'p', html: '<strong>Calibração de equipamentos ópticos</strong><br>Acreditado Inmetro (RBC- 377), a área realiza calibração de refratômetros, espectrofotômetros, luminancimetros e luxímetros.' },
      { type: 'list', heading: 'Infraestrutura', items: ['Túnel fotométrico, para ensaios de sinalização;', 'Goniofotômetro;', 'Esfera ;', 'Espectrometria e refratometria;'] },
      { type: 'list', heading: 'Principais ensaios realizados e normas atendidas', items: [
        'Determinação da transmissão luminosa de materiais, transmitância, refração, proteção solar;',
        'Determinação dos coeficientes de retrorreflexão (ASTM 808-23, 809-21, 810-20 e NBR 15292:13);',
        'Determinação da fotoluminescência de materiais (NBR 16820:2020);',
        'Determinação da curva de distribuição e fluxo luminoso total (CIE 121 e CIE 83);',
        'Caracterização espectral, IRC, TCC e coordenadas cromáticas (CIE 13:3);',
        'Avaliação de ciclo de vida de produtos para iluminação.'] },
      { type: 'list', heading: 'Principais calibrações realizadas', items: ['Espectrofotômetros;', 'Luxímetros;', 'Filtros ópticos'] },
    ],
    gallery: [
      { src: 'assets/images/gonio.jpg', alt: 'Goniofotômetro utilizado em ensaios ópticos', label: 'Goniofotômetro' },
      { src: 'assets/images/esfera.jpg', alt: 'Esfera integradora utilizada em medições ópticas', label: 'Esfera integradora' },
    ],
    contacts: [
      { title: 'Ensaios', name: 'Oswaldo Sanchez Junior', emails: ['osanchez@ipt.br'], photo: 'assets/images/oswaldo.png' },
      { title: 'Calibração', name: 'Raul Leone Filho', emails: ['rleone@ipt.br'], photo: U + '2023/09/Image-2.png' },
    ] },
];

export const footer = {
  social: [['Facebook', 'https://www.facebook.com/iptsp'], ['Instagram', 'https://www.instagram.com/ipt_oficial'], ['LinkedIn', 'https://www.linkedin.com/company/insitituto-de-pesquisas-tecnol-gicas'], ['YouTube', 'http://www.youtube.com/IPTbr']],
  cols: [
    { title: 'Principais', links: [['Notícias', 'https://ipt.br/noticias-e-destaques/'], ['Fomento', 'https://ipt.br/fomento-a-pesquisa/'], ['Unidades Embrapii', 'https://ipt.br/unidade-embrapii/'], ['Clientes', 'https://ipt.br/clientes/']] },
    { title: 'Institucional', links: [['Qualidade', 'https://ipt.br/qualidade/'], ['Governança Corporativa', 'https://ipt.br/governanca-corporativa/'], ['SIC/Transparência', 'https://ipt.br/sic-transparencia/'], ['Documentos Institucionais', 'https://ipt.br/documentos-institucionais/'], ['Ouvidoria e Canal de Denúncias', 'https://ipt.br/ouvidoria/'], ['Fale Conosco', 'https://ipt.br/fale-conosco/']] },
    { title: 'Soluções e serviços', links: [['O que o IPT pode fazer por mim', 'https://ipt.br/o-que-o-ipt-pode-fazer-por-mim/'], ['Ensaios, análises e calibrações', 'https://ipt.br/ensaios-e-calibracoes/'], ['Areia Normal', 'https://ipt.br/home/areia-normal-brasileira/'], ['Educação', 'https://sapiens.ipt.br/index_new.aspx'], ['SAA Normas técnicas', 'https://ipt.br/saa-monitoramento-de-normas-tecnicas/']] },
    { title: 'Acervo', links: [['Revista do IPT', 'https://revista.ipt.br/revistaIPT/pt_BR'], ['Publicações IPT', 'https://ipt.br/publicacoes-ipt/'], ['Informações sobre madeiras', 'https://madeiras.ipt.br/'], ['Biblioteca', 'https://ipt.br/biblioteca/'], ['Patentes', 'https://ipt.br/patentes/'], ['Memória Histórica', 'https://acervo.ipt.br/']] },
  ],
  partners: [{ alt: 'MAM', src: U + '2026/10/MAM.png', href: 'https://mam.ipt.br/' }, { alt: 'Plataforma IASMIN', src: U + '2026/10/IASMIN.png', href: 'https://plataformaiasmin.org.br/' }],
  legal: [['SIC SP', 'https://ipt.br/sic-transparencia/'], ['Política de Privacidade', 'https://ipt.br/politica-de-privacidade/'], ['Termos de Uso', 'https://ipt.br/termos-de-uso/']],
  copyright: '© 2026 Instituto de Pesquisas Tecnológicas. Todos os direitos reservados.',
};


// Conteúdo editorial para a reorganização da página (descrições curtas, a validar institucionalmente).

export const projects = [
  {
    title: 'Transportes, infraestrutura viária e mobilidade',
    text: 'Atuação técnica em projetos de infraestrutura e mobilidade, incluindo medições, avaliações, elaboração de laudos técnicos e análises aplicadas a sistemas de transporte. Experiências envolvendo o VLT do Rio de Janeiro e trabalhos relacionados à ARTESP.'
  },
  {
    title: 'Refletores e iluminação',
    text: 'Ensaios e avaliações técnicas de refletores e sistemas de iluminação, incluindo análises de desempenho e aplicações em projetos de infraestrutura e iluminação.'
  },
  {
    title: 'Cabos umbilicais – Petrobras',
    text: 'Desenvolvimento de soluções de blindagem para cabos de sensores empregados em cabos umbilicais de plataformas de petróleo, contribuindo para o desempenho e a confiabilidade dos sistemas.'
  },
  {
    title: 'Sistemas elétricos e eficiência energética',
    text: 'Estudos, avaliações e atividades técnicas relacionadas ao desempenho de sistemas elétricos e à eficiência energética, visando contribuir para o desenvolvimento e aprimoramento de soluções.'
  },
  {
    title: 'Geração fotovoltaica',
    text: 'Apoio técnico ao desenvolvimento, avaliação e caracterização de produtos e tecnologias relacionadas à geração fotovoltaica.'
  },
  {
    title: 'Centro de Cidades Inteligentes – FAPESP',
    text: 'Participação em iniciativa de pesquisa voltada ao desenvolvimento de soluções tecnológicas para desafios urbanos, integrando conhecimento técnico e inovação.'
  },
  {
    title: 'Iluminação pública – Unicamp / CePIL',
    text: 'Participação em projetos relacionados à pesquisa, avaliação e modernização de sistemas de iluminação pública, contribuindo para o desenvolvimento de soluções tecnológicas aplicadas.'
  },
  {
    title: 'CCD Cidade Carbono Neutro',
    text: 'Participação em iniciativa de ciência para o desenvolvimento voltada à descarbonização e sustentabilidade urbana, envolvendo desafios tecnológicos e aplicações para cidades.'
  }
];


export const strategicThemes = [
  { title: 'Valoração tecnológica, impacto socioambiental e justiça energética', text: 'Compreender o valor e os efeitos das tecnologias para além de seu desempenho técnico, considerando avaliação de ciclo de vida, impactos ambientais, sustentabilidade e consequências sociais do uso da energia. Essa perspectiva também contempla a justiça energética: acesso, distribuição de benefícios e custos e condições para que a transição energética seja inclusiva.' },
  { title: 'Segurança eletrotécnica, confiabilidade e compatibilidade eletromagnética', text: 'Contribuir para que equipamentos, materiais e sistemas elétricos operem com segurança, confiabilidade e desempenho adequado. Reúne temas como segurança eletrotécnica, avaliação de materiais, ensaios de alta tensão, compatibilidade eletromagnética e análise de requisitos e comportamento dos sistemas em suas aplicações.' },
  { title: 'Transição energética, vetores renováveis e mobilidade sustentável', text: 'Acompanhar e apoiar o desenvolvimento e a aplicação de tecnologias que viabilizam a transformação dos sistemas energéticos. Inclui geração renovável, hidrogênio e outros vetores energéticos, eficiência, eletrificação e soluções associadas à mobilidade sustentável, aproximando pesquisa, avaliação tecnológica e necessidades de aplicação.' },
  { title: 'Digitalização, resiliência e recursos energéticos distribuídos', text: 'Explorar a integração entre tecnologias digitais e sistemas de energia para ampliar eficiência, flexibilidade e capacidade de resposta. Abrange recursos energéticos distribuídos, armazenamento, sistemas de conversão, monitoramento e soluções de gestão, com atenção à resiliência e à integração de diferentes componentes da infraestrutura energética.' },
  { title: 'Articulação de políticas públicas e integração de ecossistemas', text: 'Promover a conexão entre conhecimento técnico, instituições de pesquisa, setor produtivo e poder público. A articulação de competências e atores contribui para estruturar projetos, apoiar decisões e aproximar o desenvolvimento tecnológico de políticas, demandas territoriais e desafios de interesse coletivo.' },
];
