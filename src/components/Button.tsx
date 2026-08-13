interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

function Button({
  label,
  onClick,
  variant = 'primary',
}: ButtonProps) {
  const variants: Record<
    NonNullable<ButtonProps['variant']>,
    string
  > = {
    primary:
      'bg-emerald-400 text-slate-950 hover:bg-emerald-300 focus:ring-emerald-400',
    secondary:
      'border border-slate-700 bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-500',
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 ${variants[variant]}`}
    >
      {label}
    </button>
  )
}

export default Button