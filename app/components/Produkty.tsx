export default function Produkty() {
  const categories = [
    'KOLCZYKI',
    'WISIORY',
    'BRANSOLETKI',
    'MĘSKIE',
    'PIERŚCIONEK'
  ];

  return (
    <section id="produkty" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-center mb-16 text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Kiedy chcesz czegoś naprawdę wyjątkowego…<br />
          Coś, co porusza się przy każdym Twoim kroku, mieni się w świetle i przypomina, że prawdziwe piękno pochodzi z natury.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div
                className="aspect-square bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: 'url(/2.jpg)' }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <h3 className="text-white text-xl font-medium uppercase tracking-wide">
                    {category}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
