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
    "Proficient in both front-end and back-end development, I ensure seamless user experiences and robust architectures throughout the entire software lifecycle, from conceptualization to deployment.",
  pathContact: "/us/contacts",
  buttonMainHome: "Contact Me",
  downloadCV: "Download CV",
  SectionTitleOne: "projects",
  pathProjects: "/us/projects",
  pathSectionProjects: "/us/projects/#blog-posts",
  SectionTitleTwo: "skills",
  SectionTitleThree: "certificates",
  SectionTitleFour: "blog-posts",
  SectionTitleFive: "about-me",
  pathAbout: "/us/about-me",
  pathSectionAbout: "/us/about-me/#certificates",
  buttonAboutText: "Read More",
  aboutMeOne: "Hi! 👋 I'm Jessie!",
  aboutMeTwo:
    "I'm a Full-stack Developer originally from Rio de Janeiro, now based in Campo Grande, MS. With over 3 years of hands-on experience, I specialize in JavaScript, Java, and SQL, focusing on building scalable web applications and delivering exceptional user experiences.",
  aboutMeThree:
    "I am an advocate for clean code, robust architecture, and continuous learning. Currently, I dedicate my time to delivering complex software systems while pursuing my degree in Systems Analysis and Development.",
  aboutMeFour:
    "I firmly believe that embracing engineering challenges is the best way to grow. I'm eager to keep collaborating with the tech community, building software that adds real value.",
  SectionTitleSix: "contact",
  contactMeOne: "Let's talk about tech and development.",
  contactMeTwo:
    "For professional inquiries, career opportunities, or networking, please reach out directly through my LinkedIn profile.",
};

export default HomeData;
