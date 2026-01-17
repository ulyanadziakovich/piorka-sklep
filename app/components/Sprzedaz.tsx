'use client';

import { useRef, useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';

interface Product {
  id: number;
  name: string;
  tytul: string;
  description: string;
  opis: string;
  price: number;
  images: Array<{ url: string; width: number; height: number }>;
  przeznaczenie_ogolne: string;
  featured: boolean;
}

export default function Produkty() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addToWishlist, removeFromWishlist, isInWishlist, addToCart } = useShop();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products from API...');
        const response = await fetch('/api/products');
        console.log('Response status:', response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Received data:', data);

        if (data.products && Array.isArray(data.products)) {
          setProducts(data.products);
          console.log(`Loaded ${data.products.length} products`);
        } else {
          console.warn('No products array in response');
          setProducts([]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error instanceof Error ? error.message : 'Nie udało się pobrać produktów');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Open product modal - exposed globally for search
  const openProductById = (productId: string | number) => {
    const id = typeof productId === 'string' ? parseInt(productId) : productId;
    const product = products.find(p => p.id === id);
    if (product) {
      setSelectedProduct(product);
      setSelectedImageIndex(0);
    }
  };

  // Expose function globally for search to call
  useEffect(() => {
    (window as Window & { openProductModal?: (id: string | number) => void }).openProductModal = openProductById;
    return () => {
      delete (window as Window & { openProductModal?: (id: string | number) => void }).openProductModal;
    };
  }, [products]);

  // Check URL param and localStorage on mount and periodically
  useEffect(() => {
    const checkForProductToOpen = () => {
      // Check URL param
      const params = new URLSearchParams(window.location.search);
      const urlProductId = params.get('product');
      if (urlProductId && products.length > 0) {
        openProductById(urlProductId);
        window.history.replaceState({}, '', '/');
        return;
      }

      // Check localStorage fallback
      const storedProductId = localStorage.getItem('openProductId');
      if (storedProductId && products.length > 0) {
        localStorage.removeItem('openProductId');
        openProductById(storedProductId);
      }
    };

    checkForProductToOpen();

    // Check periodically for localStorage changes (mobile fallback)
    const interval = setInterval(checkForProductToOpen, 200);

    return () => clearInterval(interval);
  }, [products]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.85;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Bestsellery - produkty oznaczone jako featured lub wszystkie jeśli nie ma featured
  const featuredProducts = products.filter(p => p.featured);
  const bestsellers = (featuredProducts.length > 0 ? featuredProducts : products.slice(0, 5)).map(product => ({
    id: product.id,
    image: product.images[0]?.url || '/2.jpg',
    name: product.tytul || product.name,
    desc: product.opis || product.description,
    price: `${product.price.toFixed(2)} zł`,
  }));

  // Mapowanie kategorii z API na kategorie wyświetlane
  const mapCategoryToDisplay = (apiCategory: string): string => {
    const mapping: { [key: string]: string } = {
      'kolczyki': 'KOLCZYKI',
      'kolczyki_komplet': 'KOLCZYKI',
      'na_szyje': 'WISIORY',
      'bransoletki': 'BRANSOLETKI',
      'pierścionek': 'PIERŚCIONEK',
      'meskie': 'MĘSKIE',
      'komplet': 'KOMPLET',
    };
    return mapping[apiCategory] || 'WISIORY';
  };

  const categories = [
    { name: 'KOLCZYKI', image: '/kolczyk.jpg' },
    { name: 'WISIORY', image: '/naszyjnik.jpg' },
    { name: 'BRANSOLETKI', image: '/bransoletka.jpg' },
    { name: 'PIERŚCIONEK', image: '/piers.jpg' },
    { name: 'KOMPLET', image: '/komplet.jpg' },
    { name: 'MĘSKIE', image: '/inne.jpg' },
  ];

  // Konwersja produktów z API do formatu używanego w komponencie
  const apiProducts = products.map(product => ({
    id: product.id,
    image: product.images[0]?.url || '/2.jpg',
    name: product.tytul || product.name,
    desc: product.opis || product.description,
    price: `${product.price.toFixed(2)} zł`,
    category: mapCategoryToDisplay(product.przeznaczenie_ogolne),
  }));

  const filteredProducts = selectedCategory
    ? apiProducts.filter(product => product.category === selectedCategory)
    : apiProducts;

  if (loading) {
    return (
      <section id="produkty" className="py-20 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="flex items-center justify-center min-h-[400px]">
            <p className="text-gray-600">Ładowanie produktów...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="produkty" className="py-20 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <p className="text-red-600 mb-4">Błąd: {error}</p>
            <p className="text-gray-600 text-sm">Sprawdź konsolę przeglądarki (F12) dla szczegółów</p>
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section id="produkty" className="py-20 px-4 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="flex items-center justify-center min-h-[400px]">
            <p className="text-gray-600">Brak produktów w bazie danych. Dodaj produkty w panelu admina.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="produkty" className="py-10 sm:py-16 md:py-20 px-3 sm:px-4 bg-white">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-5 lg:px-10 xl:px-12">
        {/* Nagłówek bestsellery */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-thin text-gray-800 tracking-wider">
            bestsellery
          </h2>
        </div>

        {/* Karuzela bestsellery */}
        <div className="relative mb-10 sm:mb-16 md:mb-20">
          <button
            onClick={() => scroll('left')}
            className="absolute -left-1 sm:-left-2 md:-left-6 lg:-left-10 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 hidden sm:flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all text-gray-700 hover:text-gray-900 text-lg sm:text-2xl"
            aria-label="Poprzedni"
          >
            ←
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute -right-1 sm:-right-2 md:-right-6 lg:-right-10 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 hidden sm:flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all text-gray-700 hover:text-gray-900 text-lg sm:text-2xl"
            aria-label="Następny"
          >
            →
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 overflow-x-auto pb-4 sm:pb-6 snap-x snap-mandatory scroll-smooth scrollbar-hide"
          >
            {bestsellers.map((product, i) => {
              const fullProduct = products.find(p => p.id === product.id);
              return (
                <div
                  key={i}
                  className="flex-none w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] snap-start"
                >
                  <div
                    className="group relative bg-white transition-all duration-500 hover:shadow-2xl cursor-pointer"
                    onClick={() => fullProduct && setSelectedProduct(fullProduct)}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        loading={i < 2 ? 'eager' : 'lazy'}
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-3 sm:top-4 md:top-5 right-3 sm:right-4 md:right-5 z-10 flex flex-col gap-1.5 sm:gap-2">
                        <button
                          className="text-white text-2xl sm:text-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] hover:scale-110 transition-transform"
                          aria-label="Dodaj do ulubionych"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (fullProduct) {
                              const shopProduct = {
                                id: fullProduct.id,
                                name: fullProduct.tytul || fullProduct.name,
                                price: fullProduct.price.toFixed(2),
                                image: fullProduct.images[0]?.url || '/2.jpg',
                                description: fullProduct.opis || fullProduct.description,
                              };
                              if (isInWishlist(fullProduct.id)) {
                                removeFromWishlist(fullProduct.id);
                              } else {
                                addToWishlist(shopProduct);
                              }
                            }
                          }}
                        >
                          {fullProduct && isInWishlist(fullProduct.id) ? '♥' : '♡'}
                        </button>
                        <button
                          className="text-white text-xl sm:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] hover:scale-110 transition-transform"
                          aria-label="Dodaj do koszyka"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (fullProduct) {
                              const shopProduct = {
                                id: fullProduct.id,
                                name: fullProduct.tytul || fullProduct.name,
                                price: fullProduct.price.toFixed(2),
                                image: fullProduct.images[0]?.url || '/2.jpg',
                                description: fullProduct.opis || fullProduct.description,
                              };
                              addToCart(shopProduct);
                            }
                          }}
                        >
                          🛒
                        </button>
                      </div>
                    </div>
                    <div className="py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 text-center">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-900 mb-2 sm:mb-2.5 tracking-wide">
                        {product.name}
                      </h3>
                      <p
                        className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-5 font-light line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: product.desc }}
                      />
                      <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tekst opisowy i kategorie */}
        <div className="mb-10 sm:mb-16 md:mb-20">
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 bg-gradient-to-br from-gray-50 to-white border border-gray-200 relative">
            <p className="text-center text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed italic font-light tracking-wide">
              Kiedy chcesz czegoś naprawdę wyjątkowego…<br />
              <span className="text-gray-600">
                Coś, co porusza się przy każdym Twoim kroku, mieni się w świetle i przypomina, że prawdziwe piękno pochodzi z natury.
              </span>
            </p>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedCategory(category.name)}
              >
                <div
                  className={`aspect-square bg-cover bg-center relative overflow-hidden transition-all ${
                    selectedCategory === category.name ? 'ring-4 ring-gray-800' : ''
                  }`}
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className={`absolute inset-0 transition-colors flex items-center justify-center ${
                    selectedCategory === category.name
                      ? 'bg-black/50'
                      : 'bg-black/30 group-hover:bg-black/40'
                  }`}>
                    <h3 className="text-white text-xs sm:text-sm md:text-base font-medium uppercase tracking-wide px-1 sm:px-2">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pozostałe produkty - siatka */}
        <div className="mb-8 sm:mb-12 md:mb-16 flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-thin text-gray-800 tracking-wider">
            {selectedCategory ? selectedCategory : 'Pozostałe produkty'}
          </h3>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 underline"
            >
              Pokaż wszystkie
            </button>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 px-3 sm:px-4">
            <div className="max-w-2xl text-center">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
                Niestety w tym momencie nie ma akcesorii z tej kategorii, ale mogę zrobić na zamówienie specjalnie dla Ciebie!
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                A moje prace archiwalne można zobaczyć{' '}
                <a
                  href="https://www.zglowawpiorach.pl/galeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 font-medium underline hover:text-gray-600 transition-colors"
                >
                  tutaj
                </a>
              </p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="bg-gray-900 text-white py-2.5 sm:py-3 px-6 sm:px-8 text-xs sm:text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors"
              >
                Zobacz wszystkie produkty
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {filteredProducts.map((product, index) => {
              const fullProduct = products.find(p => p.id === product.id);
              return (
                <div
                  key={index}
                  className="group relative bg-white transition-all duration-500 hover:shadow-2xl cursor-pointer"
                  onClick={() => fullProduct && setSelectedProduct(fullProduct)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 flex flex-col gap-1">
                      <button
                        className="text-white text-xl sm:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] hover:scale-110 transition-transform"
                        aria-label="Dodaj do ulubionych"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (fullProduct) {
                            const shopProduct = {
                              id: fullProduct.id,
                              name: fullProduct.tytul || fullProduct.name,
                              price: fullProduct.price.toFixed(2),
                              image: fullProduct.images[0]?.url || '/2.jpg',
                              description: fullProduct.opis || fullProduct.description,
                            };
                            if (isInWishlist(fullProduct.id)) {
                              removeFromWishlist(fullProduct.id);
                            } else {
                              addToWishlist(shopProduct);
                            }
                          }
                        }}
                      >
                        {fullProduct && isInWishlist(fullProduct.id) ? '♥' : '♡'}
                      </button>
                      <button
                        className="text-white text-lg sm:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] hover:scale-110 transition-transform"
                        aria-label="Dodaj do koszyka"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (fullProduct) {
                            const shopProduct = {
                              id: fullProduct.id,
                              name: fullProduct.tytul || fullProduct.name,
                              price: fullProduct.price.toFixed(2),
                              image: fullProduct.images[0]?.url || '/2.jpg',
                              description: fullProduct.opis || fullProduct.description,
                            };
                            addToCart(shopProduct);
                          }
                        }}
                      >
                        🛒
                      </button>
                    </div>
                  </div>
                  <div className="py-3 sm:py-4 px-2 sm:px-3 text-center">
                    <h3 className="text-sm sm:text-base md:text-lg font-light text-gray-900 mb-1 sm:mb-1.5 tracking-wide line-clamp-2">
                      {product.name}
                    </h3>
                    <p
                      className="text-xs md:text-sm text-gray-600 mb-2 sm:mb-3 font-light line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: product.desc }}
                    />
                    <p className="text-base sm:text-lg md:text-xl font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal produktu */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-2 sm:p-4"
          onClick={() => {
            setSelectedProduct(null);
            setSelectedImageIndex(0);
          }}
        >
          <div
            className="bg-white max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Przycisk zamknięcia */}
            <button
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg text-gray-800 hover:text-gray-900 text-xl sm:text-2xl transition-colors"
              onClick={() => {
                setSelectedProduct(null);
                setSelectedImageIndex(0);
              }}
              aria-label="Zamknij"
            >
              ×
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 p-4 sm:p-6 md:p-10">
              {/* Galeria zdjęć */}
              <div className="space-y-4">
                {/* Główne zdjęcie */}
                {selectedProduct.images && selectedProduct.images.length > 0 ? (
                  <>
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={selectedProduct.images[selectedImageIndex]?.url || selectedProduct.images[0]?.url}
                        alt={selectedProduct.tytul || selectedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Miniaturki */}
                    {selectedProduct.images.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto">
                        {selectedProduct.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            className={`flex-shrink-0 w-20 h-20 overflow-hidden bg-gray-100 border-2 transition-all ${
                              selectedImageIndex === index
                                ? 'border-gray-800'
                                : 'border-transparent hover:border-gray-400'
                            }`}
                          >
                            <img
                              src={image.url}
                              alt={`${selectedProduct.tytul || selectedProduct.name} - miniaturka ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src="/2.jpg"
                      alt={selectedProduct.tytul || selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Informacje o produkcie */}
              <div className="flex flex-col">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 sm:mb-4 tracking-wide">
                  {selectedProduct.tytul || selectedProduct.name}
                </h2>

                <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mb-4 sm:mb-6">
                  {selectedProduct.price.toFixed(2)} zł
                </p>

                <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-200">
                  <h3 className="text-sm uppercase tracking-wide text-gray-600 mb-2 font-medium">
                    Opis
                  </h3>
                  <div
                    className="text-base text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: selectedProduct.opis || selectedProduct.description || '' }}
                  />
                </div>

                {selectedProduct.przeznaczenie_ogolne && (
                  <div className="mb-6">
                    <h3 className="text-sm uppercase tracking-wide text-gray-600 mb-2 font-medium">
                      Kategoria
                    </h3>
                    <p className="text-base text-gray-700">
                      {mapCategoryToDisplay(selectedProduct.przeznaczenie_ogolne)}
                    </p>
                  </div>
                )}

                <div className="mt-auto pt-4 sm:pt-6">
                  <button
                    className="w-full bg-gray-900 text-white py-3 sm:py-4 px-6 sm:px-8 text-xs sm:text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors"
                    onClick={() => {
                      const shopProduct = {
                        id: selectedProduct.id,
                        name: selectedProduct.tytul || selectedProduct.name,
                        price: selectedProduct.price.toFixed(2),
                        image: selectedProduct.images[0]?.url || '/2.jpg',
                        description: selectedProduct.opis || selectedProduct.description,
                      };
                      addToCart(shopProduct);
                    }}
                  >
                    Dodaj do koszyka
                  </button>
                  <button
                    className="w-full mt-2 sm:mt-3 border border-gray-300 text-gray-800 py-3 sm:py-4 px-6 sm:px-8 text-xs sm:text-sm uppercase tracking-wide hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      const shopProduct = {
                        id: selectedProduct.id,
                        name: selectedProduct.tytul || selectedProduct.name,
                        price: selectedProduct.price.toFixed(2),
                        image: selectedProduct.images[0]?.url || '/2.jpg',
                        description: selectedProduct.opis || selectedProduct.description,
                      };
                      if (isInWishlist(selectedProduct.id)) {
                        removeFromWishlist(selectedProduct.id);
                      } else {
                        addToWishlist(shopProduct);
                      }
                    }}
                  >
                    {isInWishlist(selectedProduct.id) ? '♥' : '♡'} {isInWishlist(selectedProduct.id) ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}