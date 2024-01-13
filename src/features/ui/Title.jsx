export default function Title({
  firstPart = 'first',
  secondPart = 'second',
  icon = '',
  border = '700',
  width = '5/6',
  size = '3xl',
  padding = "7",
  heading,
}) {
 
  return (
    <div
      className={`border-slate-${border} flex w-${width} items-center gap-5 border-b p-${padding} font-serif text-${size} capitalize tracking-widest `}
    >
      <span className="text-green-400">{icon}</span>
      <div>
        <span className="text-white">{firstPart}</span>
        <span className="text-green-300">{secondPart}</span>
      </div>
    </div>
  );
}
