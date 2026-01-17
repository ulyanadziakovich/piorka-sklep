'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useShop } from '../context/ShopContext';

interface Product {
  id: number;
  nazwa: string;
  tytul: string;
  opis: string;
  images: { url: string }[];
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProduktyOpen, setIsProduktyOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const { wishlist, cart, getCartTotal, getCartCount, removeFromWishlist, removeFromCart, updateCartQuantity } = useShop();

  // Fetch products when search opens
  useEffect(() => {
    if (isSearchOpen && allProducts.length === 0) {
      setIsLoadingProducts(true);
      fetch('/api/products')
        .then(res => res.json())
        .then(data => {
          setAllProducts(data.products || []);
          setIsLoadingProducts(false);
        })
        .catch(() => setIsLoadingProducts(false));
    }
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen, allProducts.length]);

  // Close search on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchOpen]);

  // Static voucher item for search
  const voucherItem = {
    id: 'voucher',
    tytul: 'Voucher podarunkowy',
    nazwa: 'Voucher podarunkowy',
    opis: 'Idealny prezent dla bliskiej osoby. Voucher na biżuterię z piór.',
    images: [{ url: '/bon.jpg' }],
    isVoucher: true,
  };

  // Filter products based on search query
  const query = searchQuery.toLowerCase();
  const matchesVoucher = query.length > 0 && (
    'voucher'.includes(query) ||
    'bon'.includes(query) ||
    'prezent'.includes(query) ||
    'podarunkowy'.includes(query) ||
    voucherItem.tytul.toLowerCase().includes(query)
  );

  const productResults = searchQuery.length > 0
    ? allProducts.filter(product =>
        product.tytul?.toLowerCase().includes(query) ||
        product.nazwa?.toLowerCase().includes(query) ||
        (product.opis && product.opis.toLowerCase().includes(query))
      ).slice(0, matchesVoucher ? 7 : 8)
    : [];

  const searchResults = matchesVoucher
    ? [voucherItem, ...productResults]
    : productResults;

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
        <div className="bg-[#3d6a78] text-white text-center py-1.5 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm">
          podaruj unikalny prezent - voucher na zakupy w pierzastym sklepie! 🎁
        </div>

        <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-12 sm:h-14 relative">
            {/* Logo mobilne - po lewej */}
            <div className="lg:hidden flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo header (2).png"
                  alt="Logo"
                  width={120}
                  height={24}
                  className="h-6 w-auto"
                  priority
                />
              </Link>
            </div>

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
                        <li><Link href="/vouchery" className="text-sm text-gray-800 hover:text-gray-600">Vouchery</Link></li>
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

            {/* Logo desktop - wyśrodkowane */}
            <div className="hidden lg:block flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
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
              <div className="flex items-center space-x-4">
                {/* Search Input with Dropdown */}
                <div ref={searchContainerRef} className="relative">
                  <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Szukaj..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsSearchOpen(true)}
                      className="bg-transparent border-none outline-none text-sm ml-2 w-32 text-gray-900 placeholder-gray-500"
                    />
                  </div>

                  {/* Search Dropdown */}
                  {isSearchOpen && searchQuery.length > 0 && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
                      {isLoadingProducts ? (
                        <div className="p-4 text-center text-gray-500">Ładowanie...</div>
                      ) : searchResults.length > 0 ? (
                        <div className="py-2">
                          {searchResults.map((product) => {
                            const isVoucher = 'isVoucher' in product;
                            return isVoucher ? (
                              <Link
                                key={product.id}
                                href="/vouchery"
                                onClick={() => {
                                  setIsSearchOpen(false);
                                  setSearchQuery('');
                                }}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                              >
                                <img
                                  src={product.images?.[0]?.url}
                                  alt={product.tytul || product.nazwa}
                                  className="w-14 h-14 object-cover rounded"
                                />
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-medium text-gray-900 truncate">
                                    {product.tytul || product.nazwa}
                                  </h4>
                                  <p className="text-xs text-gray-500 line-clamp-1">
                                    {product.opis?.replace(/<[^>]*>/g, '').slice(0, 50)}...
                                  </p>
                                </div>
                              </Link>
                            ) : (
                              <button
                                type="button"
                                key={product.id}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  const productId = product.id;
                                  // Store in localStorage as fallback
                                  localStorage.setItem('openProductId', String(productId));
                                  setIsSearchOpen(false);
                                  setSearchQuery('');
                                  setTimeout(() => {
                                    const win = window as Window & { openProductModal?: (id: number) => void };
                                    if (win.openProductModal) {
                                      win.openProductModal(productId);
                                    }
                                  }, 150);
                                }}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors w-full text-left"
                              >
                                <img
                                  src={product.images?.[0]?.url}
                                  alt={product.tytul || product.nazwa}
                                  className="w-14 h-14 object-cover rounded"
                                />
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-medium text-gray-900 truncate">
                                    {product.tytul || product.nazwa}
                                  </h4>
                                  <p className="text-xs text-gray-500 line-clamp-1">
                                    {product.opis?.replace(/<[^>]*>/g, '').slice(0, 50)}...
                                  </p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="p-4 text-center text-gray-500">
                          Brak wyników dla &quot;{searchQuery}&quot;
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <button
                  className="text-gray-700 hover:text-gray-900 transition-colors relative"
                  aria-label="Ulubione"
                  onClick={() => setIsWishlistOpen(true)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {Array.isArray(wishlist) && wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gray-800 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-medium">
                      {wishlist.length}
                    </span>
                  )}
                </button>
                <button className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="Konto">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
                <button
                  className="text-gray-700 hover:text-gray-900 transition-colors relative"
                  aria-label="Koszyk"
                  onClick={() => setIsCartOpen(true)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  {getCartCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gray-800 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-medium">
                      {getCartCount()}
                    </span>
                  )}
                </button>
                <span className="text-xs font-semibold text-gray-800 ml-1">
                  {getCartTotal().toFixed(2).replace('.', ',')} ZŁ
                </span>
              </div>
            </div>

            {/* Ikony mobilne - po prawej */}
            <div className="lg:hidden flex items-center gap-2.5">
              <button
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Szukaj"
                onClick={() => setIsSearchOpen(true)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button
                className="text-gray-700 hover:text-gray-900 transition-colors relative"
                aria-label="Ulubione"
                onClick={() => setIsWishlistOpen(true)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {Array.isArray(wishlist) && wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gray-800 text-white text-[8px] rounded-full w-3.5 h-3.5 flex items-center justify-center font-medium">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button
                className="text-gray-700 hover:text-gray-900 transition-colors relative"
                aria-label="Koszyk"
                onClick={() => setIsCartOpen(true)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gray-800 text-white text-[8px] rounded-full w-3.5 h-3.5 flex items-center justify-center font-medium">
                    {getCartCount()}
                  </span>
                )}
              </button>
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
          <div className="lg:hidden fixed left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto" style={{ top: '80px' }}>
            <div className="px-4 pt-16 pb-24 space-y-1">
              <Link
                href="#produkty"
                className="block px-5 py-5 text-sm uppercase tracking-wider text-gray-800 hover:bg-gray-50 transition-colors border-b border-gray-100 font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                PRODUKTY
              </Link>
              <a
                href="https://www.zglowawpiorach.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-5 py-5 text-sm uppercase tracking-wider text-gray-800 hover:bg-gray-50 transition-colors border-b border-gray-100 font-medium text-center"
              >
                O MARCE
              </a>
              <Link
                href="#blog"
                className="block px-5 py-5 text-sm uppercase tracking-wider text-gray-800 hover:bg-gray-50 transition-colors border-b border-gray-100 font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                BLOG
              </Link>
              <Link
                href="/vouchery"
                className="block px-5 py-5 text-sm uppercase tracking-wider text-gray-800 hover:bg-gray-50 transition-colors border-b border-gray-100 font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                VOUCHERY
              </Link>
              <Link
                href="#kontakt"
                className="block px-5 py-5 text-sm uppercase tracking-wider text-gray-800 hover:bg-gray-50 transition-colors border-b border-gray-100 font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                KONTAKT
              </Link>
            </div>
          </div>
        )}
      </nav>
      </div>

      {/* Wishlist Drawer */}
      {isWishlistOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/50"
          onClick={() => setIsWishlistOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-full md:max-w-md bg-white shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-medium text-gray-900">Ulubione ({Array.isArray(wishlist) ? wishlist.length : 0})</h2>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {!Array.isArray(wishlist) || wishlist.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">Brak produktów w ulubionych</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {wishlist.map((product) => (
                    <div key={product.id} className="flex gap-3 sm:gap-4 border-b border-gray-200 pb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{product.price} zł</p>
                      </div>
                      <button
                        onClick={() => {
                          removeFromWishlist(product.id);
                        }}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/50"
          onClick={() => setIsCartOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-full md:max-w-md bg-white shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-medium text-gray-900">Koszyk ({getCartCount()})</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {!Array.isArray(cart) || cart.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">Koszyk jest pusty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-3 sm:gap-4 border-b border-gray-200 pb-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">{item.price} zł</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-base sm:text-lg font-medium text-gray-900 mb-4">
                      <span>Suma:</span>
                      <span>{getCartTotal().toFixed(2).replace('.', ',')} zł</span>
                    </div>
                    <button className="w-full bg-gray-900 text-white py-2.5 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors">
                      Przejdź do kasy
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Search Modal */}
      {isSearchOpen && (
        <div className="lg:hidden fixed inset-0 z-[200] bg-white">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Szukaj produktów..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-base ml-2 w-full text-gray-900 placeholder-gray-500"
                  autoFocus
                />
              </div>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Search Results */}
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
              {isLoadingProducts ? (
                <div className="p-4 text-center text-gray-500">Ładowanie...</div>
              ) : searchQuery.length > 0 && searchResults.length > 0 ? (
                <div className="space-y-1">
                  {searchResults.map((product) => {
                    const isVoucher = 'isVoucher' in product;
                    return isVoucher ? (
                      <Link
                        key={product.id}
                        href="/vouchery"
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <img
                          src={product.images?.[0]?.url}
                          alt={product.tytul || product.nazwa}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate">
                            {product.tytul || product.nazwa}
                          </h4>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            {product.opis?.replace(/<[^>]*>/g, '').slice(0, 60)}...
                          </p>
                        </div>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        key={product.id}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const productId = product.id;
                          // Store in localStorage as fallback
                          localStorage.setItem('openProductId', String(productId));
                          setIsSearchOpen(false);
                          setSearchQuery('');
                          setTimeout(() => {
                            const win = window as Window & { openProductModal?: (id: number) => void };
                            if (win.openProductModal) {
                              win.openProductModal(productId);
                            }
                          }, 150);
                        }}
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors w-full text-left"
                      >
                        <img
                          src={product.images?.[0]?.url}
                          alt={product.tytul || product.nazwa}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate">
                            {product.tytul || product.nazwa}
                          </h4>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            {product.opis?.replace(/<[^>]*>/g, '').slice(0, 60)}...
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : searchQuery.length > 0 ? (
                <div className="p-4 text-center text-gray-500">
                  Brak wyników dla &quot;{searchQuery}&quot;
                </div>
              ) : (
                <div className="p-4 text-center text-gray-400">
                  Wpisz nazwę produktu...
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
