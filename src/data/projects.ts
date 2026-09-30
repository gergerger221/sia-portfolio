export interface Project {
  slug: string;
  title: string;
  category: "Web Application" | "Desktop Application" | "UI/UX Design";
  tag: string;
  description: string;
  fullDescription: string;
  year: string;
  client?: string;
  role: string;
  featured: boolean;
  coverImage: string;
  images: string[];
  liveUrl?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "bulwagangncst-portal",
    title: "BulwagangNCST-Portal",
    category: "Web Application",
    tag: "Talent Organization Portal",
    description:
      "A talent organization portal for the members of Bulwagang NCST in National College of Science and Technology.",
    fullDescription:
      "BulwagangNCST-Portal is a dedicated talent organization management portal designed and built for the members of Bulwagang NCST at the National College of Science and Technology (NCST). The web portal streamlines talent registration, event and rehearsal scheduling, member profiles, and organization announcements into one unified modern platform.",
    year: "2025",
    client: "Bulwagang NCST • NCST",
    role: "Full-Stack Web Development & UI Design",
    featured: true,
    coverImage: "/images/projects/BulwagangNCST-Portal/image1.png",
    images: [
      "/images/projects/BulwagangNCST-Portal/image1.png",
      "/images/projects/BulwagangNCST-Portal/image2.png",
      "/images/projects/BulwagangNCST-Portal/image3.png",
      "/images/projects/BulwagangNCST-Portal/image4.png",
    ],
    highlights: [
      "Talent profile management and roster directory for organizational members",
      "Event scheduling, attendance tracking, and announcements feed",
      "Role-based access permissions tailored for officers and performers",
      "Modern, responsive web interface built for mobile and desktop screens",
    ],
  },
  {
    slug: "javaminesweeper",
    title: "JavaMinesweeper",
    category: "Desktop Application",
    tag: "Java Swing Game",
    description:
      "A minesweeper game created in Java Swing with different difficulties and two different board types (square and hexagon).",
    fullDescription:
      "JavaMinesweeper is an interactive desktop application engineered using Java and Java Swing GUI. It offers multiple difficulty presets (Beginner, Intermediate, Expert) and elevates traditional gameplay by featuring two distinct board geometries: classic square grids and complex hexagonal grids with custom neighbor detection logic, recursive cell revealing, flagging mechanics, and high-score timers.",
    year: "2026",
    client: "Academic Project • NCST",
    role: "Java Developer, Algorithm Design & Swing GUI",
    featured: true,
    coverImage: "/images/projects/JavaMinesweeper/image1.png",
    images: [
      "/images/projects/JavaMinesweeper/image1.png",
      "/images/projects/JavaMinesweeper/image2.png",
      "/images/projects/JavaMinesweeper/image3.png",
      "/images/projects/JavaMinesweeper/image4.png",
      "/images/projects/JavaMinesweeper/image5.png",
    ],
    highlights: [
      "Dual board geometries: Classic square grid & advanced hexagonal grid",
      "Configurable difficulty tiers with dynamic mine allocation algorithms",
      "Recursive flood-fill algorithms adapted for both 8-neighbor square and 6-neighbor hex cells",
      "Real-time timer, remaining mine indicator, and custom restart controls",
    ],
  },
  {
    slug: "perishguard",
    title: "PerishGuard",
    category: "UI/UX Design",
    tag: "Figma Retail Concept",
    description:
      "A design concept for Expiry-Date Alert and Markdown Assistant for Convenience Stores created in Figma.",
    fullDescription:
      "PerishGuard is an end-to-end UI/UX design concept crafted in Figma for convenience stores and mini-marts. It tackles inventory shrinkage and perishable food waste by providing proactive expiry-date alerts and an automated Markdown Assistant that calculates optimal discount markdown rates based on remaining shelf life, boosting inventory turnover before items expire.",
    year: "2026",
    client: "Retail Systems Concept",
    role: "UI/UX Design, Retail Systems Workflow & Figma Prototyping",
    featured: true,
    coverImage: "/images/projects/PerishGuard/image1.png",
    images: [
      "/images/projects/PerishGuard/image1.png",
      "/images/projects/PerishGuard/image2.png",
      "/images/projects/PerishGuard/image3.png",
    ],
    highlights: [
      "Automated expiry-date tracking timeline with color-coded urgency levels",
      "Dynamic Markdown Assistant recommending optimal clearance discount tiers",
      "Fast in-store audit and barcode scanning flow designed for handheld devices",
      "High-fidelity Figma component library and interactive prototype screens",
    ],
  },
];
