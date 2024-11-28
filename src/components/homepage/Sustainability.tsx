import { Leaf, Recycle, Zap } from 'lucide-react'

const initiatives = [
  {
    name: 'Eco-Friendly Fleet',
    description: 'Our bikes are made from sustainable materials and are 100% recyclable.',
    icon: Leaf,
  },
  {
    name: 'Green Energy',
    description: 'All our charging stations are powered by renewable energy sources.',
    icon: Zap,
  },
  {
    name: 'Recycling Program',
    description: 'We responsibly recycle all bike parts at the end of their lifecycle.',
    icon: Recycle,
  },
]

export default function Sustainability() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Sustainability</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Committed to a Greener Future
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We are dedicated to reducing our environmental impact and promoting sustainable urban mobility.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {initiatives.map((initiative) => (
              <div key={initiative.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <initiative.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{initiative.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{initiative.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}