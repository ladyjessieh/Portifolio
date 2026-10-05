interface IHome {
  introduction: string;
  pathContact: string;
  buttonMainHome: string;
  downloadCV: string;
  SectionTitleOne: string;
  pathProjects: string;
  pathSectionProjects: string;
  SectionTitleTwo: string;
  SectionTitleThree: string;
  SectionTitleFour: string;
  SectionTitleFive: string;
  aboutMeOne: string;
  aboutMeTwo: string;
  aboutMeThree: string;
  aboutMeFour: string;
  pathAbout: string;
  pathSectionAbout: string;
  buttonAboutText: string;
  SectionTitleSix: string;
  contactMeOne: string;
  contactMeTwo: string;
}

const HomeData: IHome = {
  introduction:
    "Proficiente em desenvolvimento front-end e back-end, garanto experiências de usuário fluidas e arquiteturas robustas em todo o ciclo de vida do software, da concepção ao deploy.",
  pathContact: "/br/contatos",
  buttonMainHome: "Entre em Contato",
  downloadCV: "Baixar CV",
  SectionTitleOne: "projetos",
  pathProjects: "/br/projetos",
  pathSectionProjects: "/br/projetos/#artigos-de-blog",
  SectionTitleTwo: "habilidades",
  SectionTitleThree: "certificados",
  SectionTitleFour: "artigos",
  SectionTitleFive: "sobre-mim",
  aboutMeOne: "Oi! 👋 Você pode me chamar de Jessie!",
  aboutMeTwo:
    "Sou Desenvolvedora Full-stack, carioca de nascimento e hoje morando em Campo Grande, MS. Com mais de 3 anos de experiência, atuo principalmente com JavaScript, Java e SQL, focando na criação de aplicações web escaláveis e na melhor experiência do usuário.",
  aboutMeThree:
    "Defensora do clean code e das boas práticas de arquitetura, atualmente dedico meu tempo à entrega de sistemas complexos enquanto curso minha graduação em Análise e Desenvolvimento de Sistemas.",
  aboutMeFour:
    "Acredito que abraçar desafios de engenharia é a melhor forma de evoluir. Estou sempre disposta a colaborar com a comunidade tech e construir softwares que agreguem valor real.",
  pathAbout: "/br/sobre-mim",
  pathSectionAbout: "/br/sobre-mim/#certificados",
  buttonAboutText: "Leia Mais",
  SectionTitleSix: "contato",
  contactMeOne: "Vamos falar sobre tecnologia e desenvolvimento.",
  contactMeTwo:
    "Para assuntos profissionais, oportunidades de carreira ou networking, a melhor forma de entrar em contato comigo é através do meu perfil no LinkedIn.",
};

export default HomeData;
