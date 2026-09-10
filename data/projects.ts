export type Project = {
  title: string;
  description: string;
  category: "full-stack" | "game-dev";
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  status: "shipped" | "in-progress" | "planned";
};

export const projects: Project[] = [
  {
    title: "Web + Android Integration", // rename to the real project title
    description:
      "Connected a web app and an Android Studio app through a shared Firebase backend, with Cloud Functions handling server logic and the Gemini API providing generated content. Swap in the specifics of what it actually does.",
    category: "full-stack",
    tags: ["Firebase", "Cloud Functions", "Gemini API", "Android Studio"],
    repoUrl: "https://github.com/your-username/replace-me",
    status: "shipped",
  },
  {
    title: "Database Project", // rename to the real project title
    description:
      "A relational database project — replace with what it actually models (schema design, normalization decisions, what it was built to solve) and whether it's PostgreSQL or MySQL.",
    category: "full-stack",
    tags: ["PostgreSQL", "SQL"],
    repoUrl: "https://github.com/your-username/replace-me",
    status: "shipped",
  },
  {
    title: "Godot 2D Prototype",
    description:
      "A 2D prototype currently in development — replace with what the mechanic actually is once it's far enough along to describe in one sentence.",
    category: "game-dev",
    tags: ["Godot", "GDScript"],
    repoUrl: "https://github.com/your-username/replace-me",
    status: "in-progress",
  },
  {
    title: "Godot 3D Experiment",
    description: "Next up: a first pass at 3D in Godot.",
    category: "game-dev",
    tags: ["Godot", "3D"],
    status: "planned",
  },
];
