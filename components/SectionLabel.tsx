export default function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-sm text-accent">
      <span className="text-text-muted">~/</span>
      {children}
    </p>
  );
}
