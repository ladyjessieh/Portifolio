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
  pageTitle: "contacts",
  pageDescription: "Let's connect?",
  pageSectionTitleOne: "all-media",
  contactMeHeadline: "Let's talk about tech and development.",
  contactMeOne:
    "I enjoy connecting with fellow tech professionals to discuss software architecture, share experiences, and exchange knowledge. For professional inquiries, career opportunities, or formal networking, please reach out directly through my official LinkedIn profile.",
  allMedias: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jessiemoura/?locale=en_US",
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
