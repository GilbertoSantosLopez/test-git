interface NavbarProps {
  brand: string
  subtitle: string
}

function Navbar({ brand, subtitle }: NavbarProps) {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <a
          href="#inicio"
          className="text-xl font-black tracking-tight text-white"
        >
          {brand}
        </a>

        <p className="text-sm font-medium text-emerald-400">
          {subtitle}
        </p>
      </nav>
    </header>
  )
}

export default Navbar