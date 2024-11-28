'use client'

import { useState } from 'react'
import { MapPin } from 'lucide-react'

type City = {
    id: number
    name: string
    country: string
    details: string
  }

const cities: City[] = [
  { id: 1, name: 'New York', country: 'USA', details: 'Operating hours: 24/7, Pricing: $2/hour' },
  { id: 2, name: 'London', country: 'UK', details: 'Operating hours: 6am-11pm, Pricing: £1.5/hour' },
  { id: 3, name: 'Paris', country: 'France', details: 'Operating hours: 5am-12am, Pricing: €1.8/hour' },
  { id: 4, name: 'Tokyo', country: 'Japan', details: 'Operating hours: 24/7, Pricing: ¥200/hour' },
]

export default function InteractiveMap() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null)

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          Where We Operate
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <MapPin className="h-12 w-12 text-gray-400" />
                <span className="sr-only">Interactive Map Placeholder</span>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-4">
              {cities.map((city) => (
                <li key={city.id}>
                  <button
                    onClick={() => setSelectedCity(city)}
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      selectedCity?.id === city.id
                        ? 'bg-teal-500 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {city.name}, {city.country}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">City Details</h3>
            {selectedCity ? (
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  {selectedCity.name}, {selectedCity.country}
                </h4>
                <p className="text-gray-600">{selectedCity.details}</p>
              </div>
            ) : (
              <p className="text-gray-600">Select a city to view details</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}