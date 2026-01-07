import Navigation from '../components/Navigation';
import Kontakt from '../components/Kontakt';

export default function Reklamacja() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="h-[72px] sm:h-[80px] md:h-[88px]"></div>

      <main className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Nagłówek */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wider">
            Formularz reklamacji towaru
          </h1>
          <p className="text-base text-gray-600 font-light max-w-2xl mx-auto">
            Wypełnij i odeślij w przypadku stwierdzenia wady Towaru
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
              <p>Adres do zwrotów / wysyłki reklamacji: <span className="font-medium">ul. Prószkowska ⅗, 45-710 Opole</span></p>
              <p>Adres e-mail: <a href="mailto:z.glowa.w.piorach@gmail.com" className="text-gray-800 hover:text-gray-900 underline transition-colors">z.glowa.w.piorach@gmail.com</a></p>
            </div>
          </div>

          <div className="border-t border-gray-300 my-8"></div>

          {/* Dane klienta */}
          <div className="mb-10">
            <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
              1. Dane klienta (konsumenta)
            </h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[200px]">Imię i Nazwisko:</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[200px]">Adres Klienta:</span>
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

          {/* Dane zamówienia */}
          <div className="mb-10">
            <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
              2. Dane zamówienia
            </h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[240px]">Numer Zamówienia:</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[240px]">Data zawarcia umowy:</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[240px]">Data stwierdzenia wady:</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 my-8"></div>

          {/* Opis reklamowanego towaru */}
          <div className="mb-10">
            <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
              3. Opis reklamowanego towaru
            </h2>
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
            </div>
          </div>

          <div className="border-t border-gray-300 my-8"></div>

          {/* Opis wady */}
          <div className="mb-10">
            <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
              4. Opis wady i okoliczności
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="mb-2">Proszę o szczegółowe opisanie, na czym polega niezgodność Towaru z umową (wada) i kiedy została stwierdzona:</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Opis wady (np. "pękło zapięcie", "pióro jest uszkodzone"):</p>
                  <div className="border-b border-gray-400 pb-1 min-h-[40px]">
                    ___________________________________________________________________________
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Okoliczności stwierdzenia wady (np. "wada istniała przy dostawie", "pojawiła się po 3 dniach użytkowania"):</p>
                <div className="border-b border-gray-400 pb-1 min-h-[40px]">
                  ___________________________________________________________________________
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 my-8"></div>

          {/* Żądanie klienta */}
          <div className="mb-10">
            <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
              5. Żądanie klienta (proszę wybrać jedno z żądań)
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4">Z tytułu braku zgodności Towaru z umową, żądam:</p>
              <div className="space-y-3 pl-2">
                <div className="flex items-start gap-3">
                  <span className="text-lg">☐</span>
                  <p>Naprawy Towaru</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">☐</span>
                  <p>Wymiany Towaru na nowy (o ile jest to możliwe)</p>
                </div>
              </div>
              <p className="mt-6 mb-3 text-sm italic">Jeżeli naprawa lub wymiana są niemożliwe/niezgodne z prawem, Klientowi przysługuje:</p>
              <div className="space-y-3 pl-2">
                <div className="flex items-start gap-3">
                  <span className="text-lg">☐</span>
                  <div className="flex-1">
                    <p>Obniżenia ceny Towaru (proszę podać żądaną kwotę obniżki): <span className="inline-block min-w-[80px] border-b border-gray-400 pb-1 mx-2">_______</span> zł</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">☐</span>
                  <p>Odstąpienia od umowy (zwrotu pieniędzy) – tylko w przypadku, gdy wada jest istotna</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 my-8"></div>

          {/* Zwrot środków */}
          <div className="mb-10">
            <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
              6. Zwrot środków
            </h2>
            <p className="text-sm text-gray-600 mb-4 italic">(Tylko w przypadku żądania Obniżenia Ceny lub Odstąpienia od Umowy)</p>
            <div className="space-y-3 text-gray-700">
              <p className="mb-3">Proszę o zwrot kwoty na rachunek bankowy:</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="min-w-[200px]">Numer rachunku (IBAN):</span>
                <div className="flex-1 border-b border-gray-400 pb-1">____________________________</div>
              </div>
            </div>
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
              <p className="text-xs text-gray-600 italic mt-2">(Wymagany jedynie w przypadku wysyłki formularza w wersji papierowej)</p>
            </div>
          </div>
        </div>

        {/* Ważne informacje */}
        <div className="mt-12 bg-white border border-gray-200 p-6 md:p-8">
          <h3 className="text-base font-medium text-gray-800 mb-4 flex items-start gap-2">
            <span className="text-xl">💡</span>
            <span>Ważne informacje dodatkowe dla klienta</span>
          </h3>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-medium mb-1">Termin:</p>
              <p>Sprzedawca rozpatrzy reklamację w terminie 14 dni od dnia jej otrzymania.</p>
            </div>
            <div>
              <p className="font-medium mb-1">Wyjątki (Uszkodzenia i Upcycling):</p>
              <p className="mb-2">Reklamacja nie obejmuje:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Uszkodzeń mechanicznych powstałych w wyniku niewłaściwego użytkowania lub konserwacji po dostawie (zaleca się postępowanie zgodnie z załączoną instrukcją pielęgnacji).</li>
                <li>Cech wynikających z filozofii upcyclingu i naturalnego pochodzenia materiałów. Dotyczy to m.in.: naturalnych skaz lub nieregularności na piórach (np. drobne przebarwienia), oraz drobnych śladów użytkowania, patyny lub przetarć na odzyskiwanych elementach biżuterii. Cechy te, o ile zostały opisane, nie stanowią wady Towaru.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-1">Wysyłka:</p>
              <p>Do reklamowanego Towaru należy dołączyć dowód zakupu (rachunek lub potwierdzenie zamówienia jeśli taki został wystawiony w ramach działalności nierejestrowanej).</p>
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
