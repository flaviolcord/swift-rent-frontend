import { Leaf, Recycle, Zap } from 'lucide-react'

const initiatives = [
  {
    name: 'Flotte Écoresponsable',
    description: 'Nos vélos sont fabriqués à partir de matériaux durables et sont 100 % recyclables.',
    icon: Leaf,
  },
  {
    name: 'Énergie Verte',
    description: 'Toutes nos stations de recharge sont alimentées par des sources d’énergie renouvelable.',
    icon: Zap,
  },
  {
    name: 'Programme de Recyclage',
    description: 'Nous recyclons tous les composants des vélos en fin de vie de manière responsable.',
    icon: Recycle,
  },
];

export default function Sustainability() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blueVeligo font-semibold tracking-wide uppercase text-center">
            Durabilité
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Engagés pour un avenir plus vert
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto text-justify">
            Nous sommes déterminés à réduire notre impact environnemental et à
            promouvoir une mobilité urbaine durable.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {initiatives.map((initiative) => (
              <div key={initiative.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blueVeligo text-white">
                    <initiative.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{initiative.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 text-justify">{initiative.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}