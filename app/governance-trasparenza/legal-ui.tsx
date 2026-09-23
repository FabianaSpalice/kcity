export function LegalSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14 border-t border-slate-200 pt-10 first:mt-0 first:border-0 first:pt-0">
      <h2 className="text-2xl font-black tracking-[-0.02em] text-slate-950">
        <span className="text-cyan-600">{number}.</span> {title}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
        {children}
      </div>
    </section>
  );
}

export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="!mt-8 text-lg font-bold text-slate-950">{children}</h3>
  );
}

export function StepHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="!mt-6 text-base font-bold text-slate-950">{children}</h4>
  );
}

export function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-cyan-600">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function NumberedList({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="list-decimal space-y-2 pl-5 marker:font-semibold marker:text-cyan-600">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
}

export function PlainList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-none space-y-3">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
