interface CardProps {
  title: string
  description: string
  variant?: 'green' | 'blue' | 'purple'
}

function Card({
  title,
  description,
  variant = 'green',
}: CardProps) {
  const variantClasses = {
    green: 'border-emerald-400',
    blue: 'border-sky-400',
    purple: 'border-purple-400',
  }

  return (
    <article
      className={`rounded-xl border-2 bg-white p-6 shadow-sm ${variantClasses[variant]}`}
    >
      <h2 className="mb-3 text-xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="text-slate-600">
        {description}
      </p>
    </article>
  )
}

export default Card