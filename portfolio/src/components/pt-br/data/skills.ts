interface ISkills {
  category: string;
  tools: string;
}

const skills: Array<ISkills> = [
  { category: "Linguagens", tools: "JavaScript TypeScript Java SQL C Python" },
  { category: "Bibliotecas", tools: "React.js Vuetify Vuex Bootstrap jQuery" },
  {
    category: "Frameworks",
    tools: "Spring Boot Quarkus Nest.js Vue.js Express.js Node.js",
  },
  {
    category: "Ferramentas & Cloud",
    tools:
      "AWS Docker Git Jenkins Jira ClickUp Trello VSCode Postman Insomnia Figma iReport DBeaver",
  },
  { category: "Banco de Dados", tools: "PostgreSQL MySQL Oracle MongoDB" },
  { category: "Testes & Conceitos", tools: "Jest Cypress LGPD i18n" },
  {
    category: "Soft Skills",
    tools:
      "Resolução de Problemas Mentoria Trabalho em Equipe Comunicação Organização Adaptabilidade",
  },
];

export default skills;
