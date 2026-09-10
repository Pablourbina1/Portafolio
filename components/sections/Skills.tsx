import SectionLabel from "@/components/SectionLabel";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="w-full border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>skills</SectionLabel>
        <h2 className="mt-1 text-2xl md:text-3xl font-semibold">
          What I work with
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded border border-border p-5 transition-colors hover:border-accent/60"
            >
              <h3 className="font-mono text-xs text-text-muted">
                {group.category}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
