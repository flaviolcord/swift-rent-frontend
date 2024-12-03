'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Globe, User } from 'lucide-react'
import Image from 'next/image';
import { imageUrls } from './imageUrls';

const navItems = [
  { name: "Comment ça marche", href: '#how-it-works' },
  { name: "L'abonnement", href: '#pricing' },
  { name: "À propos", href: '#about' },
  { name: "Aide et Contact", href: '#aide-contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-bgHeaderVeligo shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={`${imageUrls.veligoLogo}`}
                alt="veligo Logo"
                width={100}
                height={40}
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-blueVeligo px-3 py-2 rounded-md text-sm font-Lato"
                > {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none">
                <Globe className="h-6 w-6" />
              </button>
              <button className="ml-3 bg-white text-blueTextVeligo hover:text-blueVeligo  px-4 py-2 rounded-md text-sm font-medium flex items-center">
                <User className="w-4 h-4 mr-2" />
                Mon space
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-blueVeligo block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <button className="p-1 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none">
                <Globe className="h-6 w-6" />
              </button>
              <button className="ml-3 bg-white text-blueTextVeligo hover:text-blueVeligo  px-4 py-2 rounded-md text-sm font-medium flex items-center">
                <User className="w-4 h-4 mr-2" />
                Mon space
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}