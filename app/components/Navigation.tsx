'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProduktyOpen, setIsProduktyOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsProduktyOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsProduktyOpen(false);
    }, 300);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-[#3d6a78] text-white text-center py-2 px-4 text-sm">
          podaruj unikalny prezent - voucher na zakupy w pierzastym sklepie! 🎁
        </div>

        <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 relative">
            <div className="hidden lg:flex flex-1 items-center space-x-8">
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="#produkty" className="text-xs uppercase tracking-wider text-gray-800 hover:text-gray-600 transition-colors font-semibold">
                  KATEGORIE
                </Link>
                {isProduktyOpen && (
                  <div
                    className="fixed left-0 top-[88px] w-[300px] bg-white border border-gray-200 shadow-lg z-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="p-8">
                      <ul className="space-y-2">
                        <li><Link href="#" className="text-sm text-gray-800 hover:text-gray-600">Kolczyki</Link></li>
                        <li><Link href="#" className="text-sm text-gray-800 hover:text-gray-600">Wisory</Link></li>
                        <li><Link href="#" className="text-sm text-gray-800 hover:text-gray-600">Bransoletki</Link></li>
                        <li><Link href="#" className="text-sm text-gray-800 hover:text-gray-600">Pierscionki</Link></li>
                        <li><Link href="#" className="text-sm text-gray-800 hover:text-gray-600">Dla niego</Link></li>
                        <li><Link href="#" className="text-sm text-gray-800 hover:text-gray-600">Komplety</Link></li>
                        
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <a href="https://www.zglowawpiorach.pl/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider text-gray-800 hover:text-gray-600 transition-colors font-semibold">
                O MNIE
              </a>
              <Link href="#blog" className="text-xs uppercase tracking-wider text-gray-800 hover:text-gray-600 transition-colors font-semibold">
                BLOG
              </Link>
              <Link href="#kontakt" className="text-xs uppercase tracking-wider text-gray-800 hover:text-gray-600 transition-colors font-semibold">
                KONTAKT
              </Link>
            </div>

            <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
              <Link href="/">
                <Image
                  src="/logo header (2).png"
                  alt="Logo"
                  width={140}
                  height={28}
                  className="h-7 w-auto"
                  priority
                />
              </Link>
            </div>

            <div className="hidden lg:flex flex-1 items-center justify-end">
              <div className="flex items-center space-x-3">
                <button className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="Szukaj">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="Ulubione">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="Konto">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
                <button className="text-gray-700 hover:text-gray-900 transition-colors relative" aria-label="Koszyk">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="absolute -top-1.5 -right-1.5 bg-gray-800 text-white text-[9px] rounded-full w-3 h-3 flex items-center justify-center font-medium">0</span>
                </button>
                <span className="text-[11px] font-semibold text-gray-800 ml-0.5">0,00 ZŁ</span>
              </div>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-gray-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                href="#produkty"
                className="block px-3 py-2 text-sm uppercase text-gray-800 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                PRODUKTY
              </Link>
              <a
                href="https://www.zglowawpiorach.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm uppercase text-gray-800 hover:bg-gray-50"
              >
                O MARCE
              </a>
              <Link
                href="#blog"
                className="block px-3 py-2 text-sm uppercase text-gray-800 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                BLOG
              </Link>
              <Link
                href="#kontakt"
                className="block px-3 py-2 text-sm uppercase text-gray-800 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                KONTAKT
              </Link>
            </div>
          </div>
        )}
      </nav>
      </div>
    </>
  );
}
