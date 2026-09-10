import SectionLabel from "@/components/SectionLabel";

const facts = [
  { label: "Based in", value: "Guatemala City, Guatemala" },
  { label: "Studying", value: "CS Engineering, 3rd year" },
  { label: "Average", value: "90+ GPA" },
  { label: "Languages", value: "Spanish (native), English (fluent)" },
];

export default function About() {
  return (
    <section id="about" className="w-full border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>about</SectionLabel>
        <h2 className="mt-1 text-2xl md:text-3xl font-semibold">
          A bit more background
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-5 text-base leading-relaxed text-text-muted">
            <p>
              I&apos;m a third-year Computer Science Engineering student in
              Guatemala, currently holding a 90+ average. Most of my
              coursework and side projects lean toward relational databases
              and the plumbing that connects a frontend to a backend to
              whatever cloud service is doing the actual work — Firebase,
              Cloud Functions, external APIs.
            </p>
            <p>
              I grew up speaking Spanish and work comfortably in English day
              to day, which covers most of what I need for school, projects,
              and documentation written by people who assumed nobody outside
              the US would read it.
            </p>
            <p>
              I&apos;m a Christian, and it&apos;s part of how I try to
              approach the rest of this — showing up consistently, doing the
              unglamorous parts of a project properly, and not cutting
              corners just because no one would notice.
            </p>
            <p>
              When I&apos;m not working on coursework, I&apos;m usually
              learning Godot. I&apos;m drawn to game design more than any
              single language or engine feature — the way a Zelda dungeon
              teaches you a mechanic without a tutorial popup, or how a
              Sonic level is paced around momentum. That kind of thinking is
              what got me interested in being on the design side of a game,
              not just the code side.
            </p>
          </div>

          <dl className="space-y-4 self-start rounded border border-border p-6">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs text-text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
