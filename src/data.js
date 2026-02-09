import portfolioImg from './assets/images/Captura de tela de 2026-02-09 17-11-10.png';
import salesImg from './assets/images/Captura de tela de 2026-02-09 17-07-19.png';

export const portfolioData = {
  name: "Fabricio Cesar",
  title: "Desenvolvedor Software",
  about: "Desenvolvedor apaixonado por tecnologia com vasta experiência em Java e ecossistemas JavaScript. Especialista em arquitetura de software, focado em criar soluções escaláveis, eficientes e com alta qualidade de código. Sempre em busca de novos desafios e tecnologias para transformar ideias em realidade digital.",

  skills: [
    "Java", "Spring Boot", "Angular", "JavaScript", "Node.js",
    "TypeScript", "PHP", "React Native", "Python", "MySQL",
    "PostgreSQL", "Docker", "Linux", "Git", "MVC",
    "Clean Code", "SOLID", "REST API"
  ],

  experience: [
    {
      company: "Naka Tools",
      role: "Assistente de TI",
      period: "Jan.2026 - Atual",
      description: "Automação de dados com Python, trabalho para reduzir análises manuais massantes e otimizar fluxos de trabalho. Valorizo o código limpo e a documentação bem feita, garantindo que a tecnologia seja sempre um armço direito para o aumento do lucro e da produtividade."
    },
    {
      company: "Grupo Aqualita",
      role: "Desenvolvedor de software",
      period: "Jan.2025 - Dez.2025",
      description: "Desenvolvimento de soluções ponta a ponta: desde a criação de APIs financeiras seguras (Node.js) e sistemas de gestão estratégica (PHP), até automações em Python para atendimento e o desenvolvimento de apps móveis com React Native. Meu foco é sempre usar a tecnologia certa para resolver problemas reais e melhorar a experiência do usuário."
    }
  ],

  education: [
    {
      institution: "Ampli (Anhanguera)",
      degree: "Bacharelado em Sistemas de Informação",
      year: "2024 - 2028"
    }
  ],

  projects: [
    {
      title: "Portfólio",
      description: "Landing page desenvolvida com React e CSS moderno para destacar habilidades profissionais.",
      link: "https://fabricios.site/",
      image: portfolioImg,
      tags: ["React", "CSS3", "Vite", "JavaScript", "Node.js"]
    },
    {
      title: "Sistema de Vendas",
      description: "Sistema completo de gestão de vendas com API Spring Boot e banco Supabase(PostgreSQL).",
      link: "https://sistema-vendas-st92.onrender.com/",
      image: salesImg,
      tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Bootstrap", "JQuery"]
    },
  ],

  socials: {
    github: "https://github.com/FabricioEst18",
    linkedin: "https://www.linkedin.com/in/fabriciocesar05/",
    email: "mailto:fabricioestevam46@gmail.com"
  }
};