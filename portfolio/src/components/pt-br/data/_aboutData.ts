interface IAbout {
  pageTitle: string;
  pageDescription: string;
  pageSectionTitleOne: string;
  pageSectionTitleTwo: string;
  pageSectionTitleThree: string;
  pageSectionTitleFour: string;
  jessieBentesOne: string;
  jessieBentesTwo: string;
  jessieBentesThree: string;
  jessieBentesFour: string;
  funFacts: string[];
}

const AboutMeData: IAbout = {
  pageTitle: "sobre-mim",
  pageDescription: "Quem sou eu?",
  pageSectionTitleOne: "jessie-bentes",
  pageSectionTitleTwo: "habilidades",
  pageSectionTitleThree: "certificados",
  pageSectionTitleFour: "meus-fatos-divertidos",
  jessieBentesOne:
    "Olá! Eu sou Jéssica Bentes, uma desenvolvedora full-stack com mais de 3 anos de experiência, residente em Campo Grande e estudante de Análise e Desenvolvimento de Sistemas. Minha jornada na tecnologia começou com experiências diversas, incluindo produção gráfica e escrita criativa, antes de encontrar minha verdadeira paixão na programação.",
  jessieBentesTwo:
    "Atualmente, desenvolvo um sistema seguro, escalável e em conformidade com a LGPD para gestão de documentos regulatórios de segurança do trabalho. Ao longo da minha carreira, também construí um sistema de gerenciamento de serviços de alta disponibilidade com Spring Boot e AWS, uma plataforma de pacientes com React.js e Node.js, e um portal de vagas usando Nest.js e PostgreSQL.",
  jessieBentesThree:
    "Impulsionada pelo desejo de contribuir de forma significativa, dediquei-me a dominar várias linguagens e frameworks, sempre buscando criar softwares que agreguem valor real. Acredito firmemente que abraçar desafios complexos de engenharia é o maior catalisador para o crescimento profissional.",
  jessieBentesFour:
    "Estou sempre ansiosa para conhecer outros desenvolvedores, compartilhar aprendizados e continuar minha jornada de inovação no dinâmico mundo do desenvolvimento de software!",
  funFacts: [
    "Cresci no Rio de Janeiro, mas hoje tenho muito orgulho de chamar Campo Grande de lar.",
    "Minha paixão pela programação começou ao escrever uma simples função de soma de 2 parâmetros em Python.",
    "Sou apaixonada por Java, linguagem que aprendi de forma totalmente autodidata.",
    "Sou uma grande entusiasta do Notion — adoro construir bancos de dados e fórmulas complexas para organizar minha vida e meus estudos.",
    "No meu tempo livre, escrevo histórias de mistério com plots complexos (atualmente construindo uma cidade chamada Ponta Nascente!).",
    "Videogames são um assunto sobre o qual eu nunca me canso de conversar.",
    "Sou apaixonada por música e ouço trilhas instrumentais e clássicas para manter o foco.",
    "Sou catolica devota, e fui orgulhosamente batizada, crismada e fiz minha primeira comunhão aos 26 anos.",
  ],
};

export default AboutMeData;
