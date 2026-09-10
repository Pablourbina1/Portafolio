export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Core languages",
    items: ["C#", "C++", "Python", "Java", "TypeScript"],
  },
  {
    category: "Web & databases",
    items: ["PHP", "HTML/CSS", "PostgreSQL", "MySQL"],
  },
  {
    category: "Game dev & cloud",
    items: ["Godot", "Firebase", "Cloud Functions", "Render"],
  },
  {
    category: "Foundational",
    items: ["C", "Assembly", "Circuit design basics"],
  },
];
