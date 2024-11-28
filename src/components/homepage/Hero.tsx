import Image from 'next/image'
import Link from 'next/link'
import { imageUrls } from './imageUrls'

export default function Hero() {
  return (
    <div className="relative bg-gray-50">
      <div className="absolute inset-0">
      {/* <video
        src="https://media.graphassets.com/hGEcie57QuCHr47VawXy"
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensures the video covers the entire container
        }}
      /> */}
        <Image
          src= {`${imageUrls.heroImage}?height=800&width=1600`}
          alt="People riding bikes"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl ml-8 py-24 px-6 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
            Simplify your <br className="hidden sm:block" /> urban mobility
        </h1>
        <p className="mt-6 max-w-3xl text-lg sm:text-xl text-gray-300">
            Rent or buy bikes for a more sustainable and efficient way to navigate the city!
        </p>
        <div className="mt-10 sm:mt-12">
            <Link
            href="#download"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold text-gray-900 bg-white rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 md:text-lg md:px-8 md:py-4 transition ease-in-out duration-300"
            >
            Download the App
            </Link>
        </div>
      </div>
    </div>
  )
}