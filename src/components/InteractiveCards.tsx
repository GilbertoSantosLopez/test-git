import { useState } from 'react'
import Button from './Button'
import Card from './Card'

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
    title: 'Astro',
    description:
      'Permite combinar contenido estático con componentes interactivos cuando son necesarios.',
    variant: 'blue',
  },
]

const advancedCards: CardData[] = [
  {
    id: 1,
    number: '01',
    title: 'Islas',
    description:
      'Astro permite enviar JavaScript solamente a los componentes que necesitan interactividad.',
    variant: 'emerald',
  },
  {
    id: 2,
    number: '02',
    title: 'Estado',
    description:
      'React conserva useState dentro de la isla interactiva hidratada en el navegador.',
    variant: 'cyan',
  },
  {
    id: 3,
    number: '03',
    title: 'Despliegue',
    description:
      'El proyecto podrá compilarse y publicarse automáticamente desde GitHub.',
    variant: 'blue',
  },
]

function InteractiveCards() {
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false)

  const cards = showAdvanced ? advancedCards : baseCards

  const handleToggleCards = () => {
    setShowAdvanced((currentValue) => !currentValue)
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-emerald-400">
          Astro + React
        </p>

        <h1 className="mb-4 text-4xl font-black text-white">
          Arquitectura de islas
        </h1>

        <p className="max-w-2xl text-slate-400">
          React solamente se hidrata en la sección que necesita interacción.
        </p>
      </div>

      <div className="mb-8">
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

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Card
            key={card.id}
            number={card.number}
            title={card.title}
            description={card.description}
            variant={card.variant}
          />
        ))}
      </div>
    </section>
  )
}

export default InteractiveCards