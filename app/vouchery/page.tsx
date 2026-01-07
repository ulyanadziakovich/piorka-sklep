import Navigation from '../components/Navigation';
import Kontakt from '../components/Kontakt';
import Image from 'next/image';

export default function Vouchery() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="h-[72px] sm:h-[80px] md:h-[88px]"></div>

      <main className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Nagłówek */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wider">
            Voucher podarunkowy
          </h1>
          <p className="text-base text-gray-600 font-light max-w-2xl mx-auto">
            Idealny prezent dla bliskiej osoby
          </p>
        </div>

        {/* Treść */}
        <div className="bg-[#f9f7f4] border border-gray-200 p-8 md:p-12">
          {/* Zdjęcie bonu */}
          <div className="mb-10 flex justify-center">
            <div className="relative w-full max-w-2xl aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/bon.jpg"
                alt="Voucher podarunkowy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Tekst informacyjny */}
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-light text-gray-900 mb-6 text-center">
              Voucher podarunkowy – idealny prezent
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Czasem wiemy, że chcemy kogoś obdarować czymś wyjątkowym, ale nie wiemy dokładnie czym... 🙃
              </p>

              <p>
                Jeśli wiesz, że bliska Ci osoba marzy o unikalnej biżuterii z piór, ale nie wiesz jakiej konkretnie – <strong>voucher podarunkowy</strong> jest rozwiązaniem idealnym!
              </p>

              <p>
                Obdarowana osoba będzie mogła sama wybrać w pracowni <span className="font-medium">Z Głową w Piórach</span> to, co spodoba jej się najbardziej. Może to być:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Gotowa kompozycja</strong> dostępna od ręki z aktualnej kolekcji</li>
                <li><strong>Indywidualne zamówienie</strong> – personalizowana biżuteria stworzona specjalnie dla niej, w dogodnym terminie</li>
              </ul>

              <div className="bg-white border-l-4 border-gray-800 p-6 my-6">
                <p className="text-lg font-medium text-gray-900 mb-2">
                  ✓ Voucher ważny przez <strong>1 rok</strong> od daty zakupu
                </p>
                <p className="text-base text-gray-700">
                  ✓ Możliwość realizacji na zamówienie indywidualne
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-300 text-center">
                <p className="text-lg mb-4">Zapraszam do kontaktu w sprawie voucherów!</p>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Email:</span>{' '}
                    <a href="mailto:zglowawpiorach@gmail.com" className="text-gray-800 hover:text-gray-900 underline transition-colors">
                      zglowawpiorach@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Telefon:</span>{' '}
                    <a href="tel:+48607885250" className="text-gray-800 hover:text-gray-900 underline transition-colors">
                      +48 607 885 250
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Kontakt />
    </div>
  );
}
