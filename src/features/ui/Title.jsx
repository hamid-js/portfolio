export default function Title({
  firstPart = 'first',
  secondPart = 'second',
  icon = '',
  border = '700',
  width = '5/6',
  padding = "7",
  heading,
}) {

  if(heading ==="sm") return (
    <div
      className={`border-slate-${border} flex w-${width} items-center gap-5 border-b p-${padding} font-serif text-xl capitalize tracking-widest  md:text-2xl`}
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
      className={`border-slate-${border} flex w-${width} items-center gap-5 border-b p-${padding} font-serif text-3xl capitalize tracking-widest  md:text-2xl`}
    >
      <span className="text-[var(--secondary-color-400)]">{icon}</span>
      <div>
        <span className="text-[--color-white]">{firstPart}</span>
        <span className="text-[var(--secondary-color-300)]">{secondPart}</span>
      </div>
    </div>
  );
 if(heading === "big") return (
    <div
      className={`border-slate-${border} flex w-${width} items-center gap-5 border-b p-${padding} font-serif text-4xl capitalize tracking-widest  md:text-2xl`}
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
      className={`border-slate-${border} flex w-${width} items-center gap-5 border-b p-${padding} font-serif text-2xl capitalize tracking-widest  md:text-2xl`}
    >
      <span className="text-[var(--secondary-color-400)]">{icon}</span>
      <div>
        <span className="text-[--color-white]">{firstPart}</span>
        <span className="text-[var(--secondary-color-300)]">{secondPart}</span>
      </div>
    </div>
  );




}
