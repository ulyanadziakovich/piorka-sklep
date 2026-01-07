import Navigation from '../components/Navigation';
import Kontakt from '../components/Kontakt';

export default function PolitykaPrywatnosci() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="h-[72px] sm:h-[80px] md:h-[88px]"></div>

      <main className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Nagłówek */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wider">
            Polityka prywatności
          </h1>
          <p className="text-base text-gray-600 font-light max-w-2xl mx-auto">
            Dowiedz się, jak przetwarzamy i chronimy Twoje dane osobowe
          </p>
        </div>

        {/* Treść polityki */}
        <div className="bg-[#f9f7f4] border border-gray-200 p-8 md:p-12">
          <div className="prose prose-gray max-w-none">
            {/* Rozdział I */}
            <div className="mb-8">
              <h3 className="text-base font-medium text-gray-800 mb-6">Rozdział I. Postanowienia Ogólne i Administrator Danych</h3>

              <section className="mb-10">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 1. Postanowienia Wstępne
                </h2>
                <div className="space-y-3 text-gray-700 text-sm md:text-base">
                  <p>1. Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych Klientów w związku z korzystaniem ze Sklepu internetowego www.zglowawpiorach.pl (dalej: Sklep).</p>
                  <p>2. Polityka jest zgodna z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (dalej: RODO).</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 2. Administrator Danych Osobowych
                </h2>
                <div className="space-y-3 text-gray-700 text-sm md:text-base">
                  <p>1. Administratorem Danych Osobowych jest Ilona Barszcz, zamieszkała pod adresem: ul. Prószkowska ⅗, 45-710 Opole.</p>
                  <p>2. Z Administratorem można skontaktować się pod adresem e-mail: <a href="mailto:z.glowa.w.piorach@gmail.com" className="text-gray-800 hover:text-gray-900 underline transition-colors">z.glowa.w.piorach@gmail.com</a></p>
                </div>
              </section>
            </div>

            <div className="border-t border-gray-300 my-8"></div>

            {/* Rozdział II */}
            <div className="mb-8">
              <h3 className="text-base font-medium text-gray-800 mb-6">Rozdział II. Cele, Podstawy i Zakres Przetwarzania Danych</h3>

              <section className="mb-10">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 3. Dane Przetwarzane w Sklepie
                </h2>
                <div className="space-y-4 text-gray-700 text-sm md:text-base">
                  <p>Dane osobowe Klientów są przetwarzane w następujących celach i na następujących podstawach prawnych:</p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-white">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left text-xs font-medium">Cel Przetwarzania</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-xs font-medium">Podstawa Prawna (RODO)</th>
                          <th className="border border-gray-300 px-4 py-2 text-left text-xs font-medium">Zakres Przetwarzanych Danych</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs">
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Realizacja Zamówienia (Umowa Sprzedaży)</td>
                          <td className="border border-gray-300 px-4 py-2">Art. 6 ust. 1 lit. b (wykonanie umowy)</td>
                          <td className="border border-gray-300 px-4 py-2">Imię, nazwisko, adres dostawy, adres e-mail, numer telefonu</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Obowiązki Prawne (Rachunkowość)</td>
                          <td className="border border-gray-300 px-4 py-2">Art. 6 ust. 1 lit. c (obowiązek prawny)</td>
                          <td className="border border-gray-300 px-4 py-2">Imię, nazwisko, adres, dane dotyczące transakcji i płatności</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Reklamacje i Roszczenia</td>
                          <td className="border border-gray-300 px-4 py-2">Art. 6 ust. 1 lit. f (prawnie uzasadniony interes)</td>
                          <td className="border border-gray-300 px-4 py-2">Wszystkie dane z zamówienia oraz korespondencja reklamacyjna</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Newsletter i Marketing</td>
                          <td className="border border-gray-300 px-4 py-2">Art. 6 ust. 1 lit. a (dobrowolna zgoda Klienta)</td>
                          <td className="border border-gray-300 px-4 py-2">Adres e-mail</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Statystyka i Analiza</td>
                          <td className="border border-gray-300 px-4 py-2">Art. 6 ust. 1 lit. f (prawnie uzasadniony interes)</td>
                          <td className="border border-gray-300 px-4 py-2">Dane anonimowe, dane o zachowaniu na stronie (cookies)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 4. Okres Przechowywania Danych
                </h2>
                <div className="space-y-3 text-gray-700 text-sm md:text-base">
                  <p>1. Dane przetwarzane w celu realizacji zamówienia przechowuje się przez okres niezbędny do wykonania umowy, a następnie do upływu terminu przedawnienia roszczeń cywilnoprawnych (standardowo 2 lata od dnia wykonania umowy).</p>
                  <p>2. Dane przetwarzane w celach rachunkowych i podatkowych przechowuje się przez okres 5 lat, licząc od końca roku kalendarzowego, w którym upłynął termin płatności podatku.</p>
                  <p>3. Dane przetwarzane na podstawie zgody (np. newsletter) – do momentu jej wycofania.</p>
                </div>
              </section>
            </div>

            <div className="border-t border-gray-300 my-8"></div>

            {/* Rozdział III */}
            <div className="mb-8">
              <h3 className="text-base font-medium text-gray-800 mb-6">Rozdział III. Odbiorcy Danych i Prawa Klientów</h3>

              <section className="mb-10">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 5. Odbiorcy Danych Osobowych
                </h2>
                <div className="space-y-3 text-gray-700 text-sm md:text-base">
                  <p>Dane osobowe Klientów mogą być udostępniane następującym kategoriom podmiotów:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Dostawcy Usług Płatniczych: Stripe – w celu obsługi płatności</li>
                    <li>Przewoźnicy/Kurierzy: InPost (i inni) – w celu dostarczenia Towaru</li>
                    <li>Dostawcy Usług Hostingu: Firma, na której serwerach znajduje się Sklep</li>
                    <li>Podmioty Księgowe: Zewnętrzne biuro rachunkowe</li>
                  </ul>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 6. Prawa Klientów (RODO)
                </h2>
                <div className="space-y-3 text-gray-700 text-sm md:text-base">
                  <p>Każdy Klient ma prawo do:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Dostępu do swoich danych (otrzymania kopii danych)</li>
                    <li>Sprostowania (poprawiania) swoich danych</li>
                    <li>Usunięcia danych (tzw. "prawo do bycia zapomnianym")</li>
                    <li>Ograniczenia przetwarzania danych</li>
                    <li>Przenoszenia danych do innego administratora</li>
                    <li>Wniesienia sprzeciwu wobec przetwarzania danych (w przypadku, gdy podstawą przetwarzania jest uzasadniony interes Administratora)</li>
                    <li>Wycofania zgody w dowolnym momencie (jeśli przetwarzanie odbywa się na podstawie zgody)</li>
                    <li>Wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych (UODO), jeśli Klient uzna, że przetwarzanie narusza przepisy RODO</li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="border-t border-gray-300 my-8"></div>

            {/* Rozdział IV */}
            <div className="mb-6">
              <h3 className="text-base font-medium text-gray-800 mb-6">Rozdział IV. Polityka Cookies i Pliki Techniczne</h3>

              <section className="mb-10">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 7. Informacje o Plikach Cookies
                </h2>
                <div className="space-y-3 text-gray-700 text-sm md:text-base">
                  <p>1. Sklep wykorzystuje tzw. pliki cookies (ciasteczka) – małe pliki tekstowe wysyłane przez serwer Sklepu i przechowywane na urządzeniu końcowym Klienta (komputer, tablet, telefon).</p>
                  <p>2. Cookies są wykorzystywane w celu:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Technicznym i funkcjonalnym (umożliwienie poprawnego działania Sklepu, utrzymanie sesji)</li>
                    <li>Analitycznym (gromadzenie statystyk, pomagających zrozumieć, jak Klienci korzystają ze Sklepu)</li>
                    <li>Marketingowym (dostosowywanie reklam do preferencji Klienta)</li>
                  </ul>
                </div>
              </section>

              <section className="mb-6">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 8. Zarządzanie Plikami Cookies
                </h2>
                <div className="space-y-3 text-gray-700 text-sm md:text-base">
                  <p>1. Klient ma możliwość wyrażenia zgody na użycie cookies marketingowych i analitycznych za pomocą baneru cookies lub poprzez ustawienia przeglądarki.</p>
                  <p>2. Klient w każdej chwili może samodzielnie zmienić ustawienia dotyczące cookies, określając warunki ich przechowywania i dostępu. Szczegółowe informacje o możliwości i sposobach obsługi cookies dostępne są w ustawieniach oprogramowania (przeglądarki internetowej).</p>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Informacja dodatkowa */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            W razie pytań dotyczących przetwarzania danych osobowych prosimy o kontakt: <a href="mailto:z.glowa.w.piorach@gmail.com" className="text-gray-800 hover:text-gray-900 underline transition-colors">z.glowa.w.piorach@gmail.com</a>
          </p>
        </div>
      </main>

      <Kontakt />
    </div>
  );
}
