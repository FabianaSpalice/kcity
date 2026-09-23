function NodeBox({
  children,
  size = "md",
}: {
  children: React.ReactNode;
  size?: "lg" | "md" | "sm";
}) {
  const sizeClasses =
    size === "lg"
      ? "w-44 px-6 py-5 text-lg"
      : size === "md"
        ? "w-56 px-6 py-5 text-base"
        : "w-64 px-5 py-4 text-sm";

  return (
    <div
      className={`${sizeClasses} rounded-xl bg-[#06131f] text-center font-semibold leading-snug text-white shadow-sm`}
    >
      {children}
    </div>
  );
}

function Branch({
  title,
  items,
}: {
  title: React.ReactNode;
  items?: React.ReactNode[];
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-6 w-px bg-slate-300" />
      <NodeBox>{title}</NodeBox>

      {items && items.length > 0 && (
        <div className="ml-2 mt-6 flex flex-col gap-4 self-start border-l border-slate-300 pl-6">
          {items.map((item, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-6 top-1/2 h-px w-6 -translate-y-1/2 bg-slate-300" />
              <NodeBox size="sm">{item}</NodeBox>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function OrganigrammaContent() {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
        Organigramma — vers. 1.0 / 09.10.2023
      </p>

      <h1 className="mt-3 text-4xl font-black tracking-[-0.03em]">
        Organigramma
      </h1>

      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
        La struttura organizzativa di K-City S.r.l., con le aree e gli
        uffici che riportano al CEO.
      </p>

      <div className="mt-14 overflow-x-auto pb-4">
        <div className="flex min-w-max flex-col items-center">
          <NodeBox size="lg">CEO</NodeBox>

          <div className="h-6 w-px bg-slate-300" />

          <div className="flex items-start gap-8 border-t border-slate-300">
            <Branch
              title={
                <>
                  Area commerciale ed <em>operation</em>
                </>
              }
              items={[
                "Ufficio installazioni e manutenzione",
                <>
                  Ufficio personale e <em>front office</em>
                </>,
                <>
                  Ufficio infrazioni CDS e <em>data entry</em>
                </>,
              ]}
            />

            <Branch title="Area amministrazione e finanza" />

            <Branch
              title={
                <>
                  Area tecnica ed
                  <br />
                  <em>information technology</em>
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
