type MediaType = {
  name: string;
  link: string;
  icon: string;
};

interface IContact {
  pageTitle: string;
  pageDescription: string;
  pageSectionTitleOne: string;
  contactMeHeadline: string;
  contactMeOne: string;
  allMedias: Array<MediaType>;
}

const ContactMeData: IContact = {
  pageTitle: "contatos",
  pageDescription: "Vamos nos conectar?",
  pageSectionTitleOne: "todas-as-mídias",
  contactMeHeadline: "Vamos falar sobre tecnologia e desenvolvimento.",
  contactMeOne:
    "Gosto de me conectar com outros profissionais da área para discutir arquitetura de software, compartilhar aprendizados e trocar experiências. Para assuntos profissionais, oportunidades de carreira ou networking formal, a melhor forma de entrar em contato comigo é através do meu perfil oficial no LinkedIn.",
  allMedias: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jessiemoura/",
      icon: "fa-brands fa-linkedin",
    },
    {
      name: "GitHub",
      link: "https://github.com/ladyjessieh",
      icon: "fa-brands fa-github",
    },
    {
      name: "Medium",
      link: "https://medium.com/@jessie_moura",
      icon: "fa-brands fa-medium",
    },
    {
      name: "Figma",
      link: "https://www.figma.com/files/user/1164006161769032343?fuid=1164006161769032343",
      icon: "fa-brands fa-figma",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/lady_jessie/",
      icon: "fa-brands fa-instagram",
    },
    {
      name: "Email",
      link: "mailto:jessie.moura19@gmail.com",
      icon: "fa-regular fa-envelope",
    },
  ],
};

export default ContactMeData;
