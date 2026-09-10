import type { Project } from "@/data/projects";

const statusMeta: Record<Project["status"], { label: string; dot: string }> = {
  shipped: { label: "Shipped", dot: "bg-accent" },
  "in-progress": { label: "In progress", dot: "bg-accent-warm" },
  planned: { label: "Planned", dot: "bg-text-muted" },
};

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags, liveUrl, repoUrl, status } = project;
  const isPlanned = status === "planned";
  const meta = statusMeta[status];

  return (
    <div
      className={`group rounded border p-5 transition-all duration-150 ${
        isPlanned
          ? "border-dashed border-border/70"
          : "border-border hover:-translate-y-1 hover:border-accent/60"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading text-lg font-medium">{title}</h3>
        <span className="flex shrink-0 items-center gap-1.5 font-mono text-xs text-text-muted">
          <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
          {meta.label}
        </span>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-text-muted">
        {description}
      </p>

      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-border px-2 py-0.5 font-mono text-xs text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {!isPlanned && (liveUrl || repoUrl) && (
        <div className="mt-4 flex gap-4 text-sm">
          {liveUrl && (
            <a href={liveUrl} className="text-accent hover:underline">
              Live demo
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} className="text-accent hover:underline">
              Source
            </a>
          )}
        </div>
      )}
    </div>
  );
}
