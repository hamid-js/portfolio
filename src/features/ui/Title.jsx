export default function Title({
  firstPart = 'first',
  secondPart = 'second',
  icon = '',
  heading,
}) {

  if(heading ==="sm") return (
    <div
      className="border-slate-700 flex w-5/6 items-center gap-5 border-b p-3 font-serif text-xl capitalize tracking-widest  md:text-xl"
    >
      <span className="text-[var(--secondary-color-400)]">{icon}</span>
      <div>
        <span className="text-[--color-white]">{firstPart}</span>
        <span className="text-[var(--secondary-color-300)]">{secondPart}</span>
      </div>
    </div>
  );
 if(heading === "lg") return (
    <div
      className="border-slate-800 flex w-5/6 items-center gap-5 border-b p-3 font-serif text-2xl capitalize tracking-widest  md:text-3xl"
    >
      <span className="text-[var(--secondary-color-400)]">{icon}</span>
      <div>
        <span className="text-[--color-white]">{firstPart}</span>
        <span className="text-[var(--secondary-color-300)]">{secondPart}</span>
      </div>
    </div>
  );
 if(heading === "xl") return (
    <div
      className="border-slate-700 flex w-5/6 items-center gap-5 border-b p-3 font-serif text-xl capitalize tracking-widest  md:text-4xl"
    >
      <span className="text-[var(--secondary-color-400)]">{icon}</span>
      <div>
        <span className="text-[--color-[--color-white]]">{firstPart}</span>
        <span className="text-[var(--secondary-color-300)]">{secondPart}</span>
      </div>
    </div>
  );
 
  return (
    <div
      className="border-slate-700 flex w-5/6 items-center gap-5 border-b p-3 font-serif text-xl capitalize tracking-widest  md:text-2xl"
    >
      <span className="text-[var(--secondary-color-400)]">{icon}</span>
      <div>
        <span className="text-[--color-white]">{firstPart}</span>
        <span className="text-[var(--secondary-color-300)]">{secondPart}</span>
      </div>
    </div>
  );




}
