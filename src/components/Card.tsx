interface CardProps {
  number: string
  title: string
  description: string
  variant: 'emerald' | 'cyan' | 'blue'
}

function Card({
  number,
  title,
  description,
  variant,
}: CardProps) {
  const accents: Record<CardProps['variant'], string> = {
    emerald: 'border-emerald-400 text-emerald-400',
    cyan: 'border-cyan-400 text-cyan-400',
    blue: 'border-blue-400 text-blue-400',
  }

  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl border bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:bg-slate-900 ${accents[variant]}`}
    >
      <span className="mb-8 font-mono text-sm font-bold">
        {number}
      </span>

      <h2 className="mb-4 text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
        {title}
      </h2>

      <p className="text-sm leading-7 text-slate-400 sm:text-base">
        {description}
      </p>
    </article>
  )
}

export default Card