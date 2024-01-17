export default function Title({
  firstPart = 'first',
  secondPart = 'second',
  icon = '',
  className = ' ',
}) {
  return (
    <h3
      className={`flex w-5/6 items-center gap-5 border-b border-slate-700 p-3 font-serif text-xl capitalize tracking-widest  md:text-2xl ${className} `}
    >
      <span className="text-[var(--secondary-color-400)]">{icon}</span>
      <div>
        <span className="text-[--color-white]">{firstPart}</span>
        <span className="text-[var(--secondary-color-300)]">{secondPart}</span>
      </div>
    </h3>
  );
}
