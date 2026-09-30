export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

export type EducationItem = ExperienceItem;

export interface TechStackItem {
  name: string;
  category: string;
  iconName: string;
}

export const education: EducationItem[] = [
  {
    role: "BS in Information Technology (BSIT)",
    company: "National College of Science and Technology",
    location: "Philippines",
    period: "2024 — Present",
    description:
      "3rd Year, 1st Semester — Currently enrolled in Systems Integration & Architecture (SIA), alongside core subjects in full-stack web development, database management, networking, and IT project management.",
  },
  {
    role: "Senior High School (TVL-ICT Strand)",
    company: "The First Uniting Christian School Main Campus",
    location: "Philippines",
    period: "2022 — 2024",
    description:
      "Graduated with honors in Senior High School under the Technical-Vocational-Livelihood (TVL) track, Information and Communications Technology (ICT) strand.",
  },
  {
    role: "Junior High School",
    company: "Luis Y. Ferrer North National High School",
    location: "Philippines",
    period: "2019 — 2022",
    description:
      "Completed junior high school education with a dedicated foundation in academics and technology.",
  },
  {
    role: "Elementary School",
    company: "The First Uniting Christian School Mary Chris",
    location: "Philippines",
    period: "2014 — 2019",
    description:
      "Consistently an honor student throughout elementary school education.",
  },
];

export const experiences: ExperienceItem[] = education;

export const techStack: TechStackItem[] = [
  { name: "Next.js / React", category: "Frontend Framework", iconName: "nextjs" },
  { name: "TypeScript / JS", category: "Core Programming", iconName: "typescript" },
  { name: "Tailwind CSS", category: "Modern Styling", iconName: "tailwind" },
  { name: "PHP & MySQL", category: "Backend & Database", iconName: "database" },
  { name: "Git & GitHub", category: "Version Control", iconName: "git" },
  { name: "Figma", category: "UI/UX Prototyping", iconName: "figma" },
];
