interface ISkills {
  category: string;
  tools: string;
}

const skills: Array<ISkills> = [
  { category: "Languages", tools: "JavaScript TypeScript Java SQL C Python" },
  { category: "Libraries", tools: "React.js Vuetify Vuex Bootstrap jQuery" },
  {
    category: "Frameworks",
    tools: "Spring Boot Quarkus Nest.js Vue.js Express.js Node.js",
  },
  {
    category: "Tools & Cloud",
    tools:
      "AWS Docker Git Jenkins Jira ClickUp Trello VSCode Postman Insomnia Figma iReport DBeaver",
  },
  { category: "Database", tools: "PostgreSQL MySQL Oracle MongoDB" },
  { category: "Testing & Concepts", tools: "Jest Cypress LGPD i18n" },
  {
    category: "Soft Skills",
    tools:
      "Problem-Solving Mentoring Teamwork Communication Organization Adaptability",
  },
];

export default skills;
