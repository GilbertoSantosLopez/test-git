import { useState } from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Card from './components/Card'

interface CardData {
  id: number
  number: string
  title: string
  description: string
  variant: 'emerald' | 'cyan' | 'blue'
}

const baseCards: CardData[] = [
  {
    id: 1,
    number: '01',
    title: 'React',
    description:
      'Construye interfaces mediante componentes independientes y reutilizables.',
    variant: 'emerald',
  },
  {
    id: 2,
    number: '02',
    title: 'TypeScript',
    description:
      'Agrega tipado estático para detectar errores antes de ejecutar la aplicación.',
    variant: 'cyan',
  },
  {
    id: 3,
    number: '03',
    title: 'Tailwind CSS',
    description:
      'Permite construir sistemas visuales responsivos mediante clases utilitarias.',
    variant: 'blue',
  },
]

const advancedCards: CardData[] = [
  {
    id: 1,
    number: '01',
    title: 'Contratos',
    description:
      'Las interfaces de TypeScript establecen exactamente qué datos acepta cada componente.',
    variant: 'emerald',
  },
  {
    id: 2,
    number: '02',
    title: 'Estado',
    description:
      'useState permite modificar información y actualizar automáticamente la interfaz.',
    variant: 'cyan',
  },
  {
    id: 3,
    number: '03',
    title: 'Responsive',
    description:
      'Los breakpoints de Tailwind permiten adaptar la composición a distintos tamaños de pantalla.',
    variant: 'blue',
  },
]

function App() {
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false)

  const cards = showAdvanced ? advancedCards : baseCards

  const handleToggleCards = () => {
    setShowAdvanced((currentValue) => !currentValue)
  }

  return (
    <div
      id="inicio"
      className="min-h-screen bg-slate-950 text-white"
    >
      <Navbar
        brand="Frontend Lab"
        subtitle="React + TypeScript + Tailwind"
      />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <section className="mb-14 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.25em] text-emerald-400">
              Arquitectura frontend
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Componentes estrictos.
              <span className="block text-slate-500">
                Interfaz flexible.
              </span>
            </h1>
          </div>

          <div className="lg:justify-self-end">
            <Button
              label={
                showAdvanced
                  ? 'Ver conceptos base'
                  : 'Ver conceptos avanzados'
              }
              onClick={handleToggleCards}
              variant="primary"
            />
          </div>
        </section>

        <section
          aria-label="Conceptos principales"
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card) => (
            <Card
              key={card.id}
              number={card.number}
              title={card.title}
              description={card.description}
              variant={card.variant}
            />
          ))}
        </section>

        <section className="mt-16 border-t border-slate-800 pt-8">
          <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Arquitectura basada en componentes reutilizables.
            </p>

            <p>
              TypeScript estricto · Tailwind CSS
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App