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
  pageTitle: "about-me",
  pageDescription: "Who am I?",
  pageSectionTitleOne: "jessie-bentes",
  pageSectionTitleTwo: "skills",
  pageSectionTitleThree: "certificates",
  pageSectionTitleFour: "my-fun-facts",
  jessieBentesOne:
    "Hey! I'm Jéssica Bentes, a full-stack developer with over 3 years of experience, currently based in Campo Grande and pursuing a degree in Systems Analysis and Development. My journey into tech began with diverse experiences, including graphic production and creative writing, before I found my true passion in coding.",
  jessieBentesTwo:
    "Currently, I am developing a secure, scalable and data-privacy compliant regulatory document management system for workplace safety. Throughout my career, I've also engineered a high-availability service management system using Spring Boot and AWS, a comprehensive patient management platform with React.js and Node.js, and a job application portal using Nest.js and PostgreSQL.",
  jessieBentesThree:
    "Driven by a desire to contribute meaningfully, I've dedicated myself to mastering various languages and frameworks, always aiming to create software that adds real value. I firmly believe that embracing complex engineering challenges is the most powerful catalyst for professional growth.",
  jessieBentesFour:
    "I'm always eager to meet fellow developers, share insights, and continue my journey of growth and innovation in the dynamic world of software development!",
  funFacts: [
    "I grew up in Rio de Janeiro, but I proudly call Campo Grande my home today.",
    "My passion for programming sparked from writing a simple two-parameter sum function in Python.",
    "I'm deeply passionate about Java, a language I learned entirely on my own.",
    "I'm a huge Notion enthusiast—I love building complex databases and formulas to organize my life and studies.",
    "In my free time, I write mystery fiction with complex plots (currently building a town called Ponta Nascente!).",
    "I could talk about video games for hours. It's a subject I never get tired of.",
    "I'm passionate about music and love listening to instrumental and classical soundtracks to keep my focus sharp.",
    "I'm a devout Catholic, and I was proudly baptized, confirmed, and had my first communion at the age of 26.",
  ],
};

export default AboutMeData;
