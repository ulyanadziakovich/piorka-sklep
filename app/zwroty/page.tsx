import Navigation from '../components/Navigation';
import Kontakt from '../components/Kontakt';

export default function Zwroty() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="h-[88px]"></div>

      <main className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Nagłówek */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wider">
            Odstąpienie od umowy
          </h1>
          <p className="text-base text-gray-600 font-light max-w-2xl mx-auto">
            Wypełnij poniższy formularz i odeślij tylko w przypadku chęci odstąpienia od umowy
          </p>
        </div>

        {/* Formularz */}
        <div className="bg-[#f9f7f4] border border-gray-200 p-8 md:p-12">
          {/* Adresat */}
          <div className="mb-10">
            <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
              Adresat
            </h2>
            <div className="space-y-1 text-gray-700">
              <p>Sprzedawca: <span className="font-medium">Ilona Barszcz</span></p>
              <p>Adres do zwrotów: <span className="font-medium">ul. Prószkowska ⅗, 45-710 Opole</span></p>
              <p>Adres e-mail: <a href="mailto:z.glowa.w.piorach@gmail.com" className="text-gray-800 hover:text-gray-900 underline transition-colors">z.glowa.w.piorach@gmail.com</a></p>
            </div>
          </div>

          <div className="border-t border-gray-300 my-8"></div>

          {/* Oświadczenie */}
          <div className="mb-10">
            <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
              Oświadczenie o odstąpieniu od umowy sprzedaży
            </h2>
            <p className="text-gray-700 mb-6">
              Niniejszym oświadczam, że odstępuję od umowy sprzedaży następującego/ych Towaru/ów:
            </p>
            <div className="space-y-3 text-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[200px]">Nazwa Towaru:</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[200px]">Numer katalogowy/SKU:</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[200px]">Cena Towaru:</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[200px]">Ilość:</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-6">
                <span className="min-w-[200px]">Data złożenia zamówienia:</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[200px]">Data odbioru Towaru:</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 my-8"></div>

          {/* Dane klienta */}
          <div className="mb-10">
            <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
              Dane klienta (konsumenta)
            </h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[200px]">Imię i Nazwisko:</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[200px]">Adres:</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[200px]">Numer Zamówienia:</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[200px]">Telefon (opcjonalnie):</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[200px]">Adres e-mail:</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 my-8"></div>

          {/* Zwrot środków */}
          <div className="mb-10">
            <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
              Zwrot środków pieniężnych
            </h2>
            <p className="text-gray-700 mb-6">
              Proszę o zwrot kwoty <span className="inline-block min-w-[100px] border-b border-gray-400 pb-1 mx-2">__________</span> zł wynikającej z odstąpienia od umowy sprzedaży na następujący rachunek bankowy:
            </p>
            <div className="space-y-3 text-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[200px]">Nazwa Banku:</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[200px]">Numer rachunku (IBAN):</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[200px]">Właściciel Rachunku:</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-6 italic">
              Oświadczam, że Konsumentem jestem ja (właściciel rachunku bankowego), a mój rachunek bankowy służy wyłącznie do celów prywatnych.
            </p>
          </div>

          <div className="border-t border-gray-300 my-8"></div>

          {/* Podpis i data */}
          <div className="mb-6">
            <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
              Podpis i data
            </h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[200px]">Miejscowość i data:</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[200px]">Podpis Konsumenta:</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
            </div>
          </div>
        </div>

        {/* Informacja dodatkowa */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">
            Formularz można wydrukować, wypełnić i wysłać pocztą na powyższy adres lub zeskanować i przesłać e-mailem.
          </p>
          <p className="text-sm text-gray-600">
            W razie pytań prosimy o kontakt: <a href="mailto:z.glowa.w.piorach@gmail.com" className="text-gray-800 hover:text-gray-900 underline transition-colors">z.glowa.w.piorach@gmail.com</a>
          </p>
        </div>
      </main>

      <Kontakt />
    </div>
  );
}
