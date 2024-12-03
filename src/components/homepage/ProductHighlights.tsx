'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { imageUrls } from './imageUrls';

const products = [
  {
    id: 1,
    name: 'Vélo à assistance électrique',
    description: 'Design ergonomique, performances optimisées.',
    imageSrc: `${imageUrls.veloAssistanceElectrique}`,
  },
  {
    id: 2,
    name: 'Vélo à assistance électrique rallongé',
    description: 'Capacité accrue, confort exceptionnel.',
    imageSrc: `${imageUrls.veloAssistanceElectriqueRallonge}`,
  },
  {
    id: 3,
    name: 'Biporteur à assistance électrique',
    description: 'Transport pratique, maniabilité supérieure.',
    imageSrc: `${imageUrls.biporteurAssistanceElectrique}`,
  },
  {
    id: 4,
    name: 'Triporteur à assistance électrique',
    description: 'Stabilité renforcée, espace optimisé.',
    imageSrc: `${imageUrls.triporteurAssistanceElectrique}`,
  },
];

export default function ProductHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-Lato text-gray-900 sm:text-4xl">
          Modèles Véligo 
        </h2>
        <div className="mt-12 relative">
          <div className="relative h-80 overflow-hidden rounded-lg">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  layout="intrinsic"
                  objectFit="contain"
                  objectPosition="center"
                  width={300}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute bottom-8 left-8 text-left">
                  <h3 className="text-xl font-semibold text-white">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    {product.description}
                  </p>
                  <button className="mt-4 bg-blueVeligo hover:bg-blueTextVeligo text-white px-4 py-2 rounded-md text-sm font-medium">
                    Savoir plus 
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 rounded-full p-2 text-gray-800 hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 rounded-full p-2 text-gray-800 hover:bg-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}