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
  const variantClasses = {
    primary:
      'bg-emerald-500 text-slate-950 hover:bg-emerald-400',
    secondary:
      'bg-slate-700 text-white hover:bg-slate-600',
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg px-5 py-3 font-semibold transition ${variantClasses[variant]}`}
    >
      {label}
    </button>
  )
}

export default Button