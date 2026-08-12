import { useState } from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Card from './components/Card'

interface CardData {
  id: number
  title: string
  description: string
  variant: 'green' | 'blue' | 'purple'
}

function App() {
  const [isAdvanced, setIsAdvanced] = useState<boolean>(false)

  const basicCards: CardData[] = [
    {
      id: 1,
      title: 'React',
      description:
        'Construcción de interfaces mediante componentes reutilizables.',
      variant: 'blue',
    },
    {
      id: 2,
      title: 'TypeScript',
      description:
        'Tipado estático para desarrollar aplicaciones más seguras.',
      variant: 'purple',
    },
    {
      id: 3,
      title: 'Props',
      description:
        'Permiten enviar información dinámica entre componentes.',
      variant: 'green',
    },
  ]

  const advancedCards: CardData[] = [
    {
      id: 1,
      title: 'Componentización',
      description:
        'Divide la interfaz en piezas independientes y reutilizables.',
      variant: 'blue',
    },
    {
      id: 2,
      title: 'Estado',
      description:
        'useState permite almacenar información que puede cambiar durante la ejecución.',
      variant: 'purple',
    },
    {
      id: 3,
      title: 'Renderizado dinámico',
      description:
        'React vuelve a renderizar la interfaz cuando cambia el estado.',
      variant: 'green',
    },
  ]

  const cards = isAdvanced ? advancedCards : basicCards

  const handleChangeContent = () => {
    setIsAdvanced((previousValue) => !previousValue)
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="mb-10 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Componentes con React y TypeScript
          </h2>

          <p className="mx-auto mb-6 max-w-2xl text-slate-600">
            Ejemplo de componentes reutilizables, props tipadas y manejo de
            estado con useState.
          </p>

          <Button
            label={
              isAdvanced
                ? 'Mostrar conceptos básicos'
                : 'Mostrar conceptos avanzados'
            }
            onClick={handleChangeContent}
            variant="primary"
          />
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              variant={card.variant}
            />
          ))}
        </section>
      </main>
    </div>
  )
}

export default App