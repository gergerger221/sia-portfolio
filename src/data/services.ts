export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export const services: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Web Application Development",
    description: "I build responsive, modern web applications using Next.js, React, and Tailwind CSS with clean code, fast load times, and mobile responsiveness.",
    tag: "Next.js / React / Tailwind",
  },
  {
    id: "systems-dev",
    title: "Systems Integration & Database",
    description: "Designing structured relational databases with MySQL, backend services in PHP/Node, and seamless integration between system components.",
    tag: "SIA / MySQL / PHP",
  },
  {
    id: "prototyping",
    title: "UI/UX & Interactive Prototypes",
    description: "Translating wireframes and user flows into interactive, accessible, and intuitive user interfaces using Figma and modern component libraries.",
    tag: "Figma / Interaction",
  },
  {
    id: "tech-support",
    title: "IT Support & Code Debugging",
    description: "Diagnosing technical bottlenecks, debugging software issues, optimizing local environments (XAMPP, Node), and code refactoring.",
    tag: "Problem Solving / QA",
  },
];
