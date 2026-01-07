import Navigation from '../components/Navigation';
import Kontakt from '../components/Kontakt';

export default function RegulaminSklepu() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="h-[88px]"></div>

      <main className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Nagłówek */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wider">
            Regulamin sklepu
          </h1>
          <p className="text-base text-gray-600 font-light max-w-2xl mx-auto">
            Zapoznaj się z zasadami korzystania ze sklepu Z Głową w Piórach
          </p>
        </div>

        {/* Treść regulaminu */}
        <div className="bg-[#f9f7f4] border border-gray-200 p-8 md:p-12">
          <div className="prose prose-gray max-w-none">
            {/* Rozdział I */}
            <div className="mb-8">
              <h3 className="text-base font-medium text-gray-800 mb-6">Rozdział I. Postanowienia Ogólne i Definicje</h3>

              <section className="mb-10">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 1. Definicje
                </h2>
                <div className="space-y-3 text-gray-700 text-sm md:text-base">
                  <p><strong>Sprzedawca:</strong> Ilona Barszcz, zamieszkała pod adresem: ul. Prószkowska ⅗, 45-710 Opole, prowadząca sprzedaż za pośrednictwem Sklepu w ramach działalności nierejestrowanej na podstawie art. 5 ust. 1 Ustawy z dnia 6 marca 2018 r. Prawo Przedsiębiorców.</p>
                  <p><strong>Sklep:</strong> Sklep internetowy dostępny pod adresem www.zglowawpiorach.pl, prowadzony przez Sprzedawcę.</p>
                  <p><strong>Klient:</strong> Podmiot dokonujący zakupu w Sklepie.</p>
                  <p><strong>Konsument:</strong> Klient będący osobą fizyczną dokonującą ze Sprzedawcą czynności prawnej niezwiązanej bezpośrednio z jej działalnością gospodarczą lub zawodową.</p>
                  <p><strong>Towar:</strong> Rękodzieło (biżuteria, ozdoby, akcesoria) z naturalnych piór i innych materiałów prezentowane w Sklepie. W związku z rękodziełem i naturalnymi materiałami, Towar może nieznacznie różnić się kolorem, kształtem czy fakturą od prezentowanego na zdjęciach, co wynika z unikalności materiału i ręcznego wykonania.</p>
                  <p><strong>Cena Obniżona:</strong> Cena, przy której informuje się o obniżeniu jej wysokości (w rozumieniu art. 4 ust. 2 Ustawy o informowaniu o cenach towarów i usług).</p>
                  <p><strong>Formularz Zwrotu/Reklamacji:</strong> Wzór dokumentu stanowiący Załącznik nr 1/2 do niniejszego Regulaminu.</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 2. Postanowienia Wstępne
                </h2>
                <div className="space-y-3 text-gray-700 text-sm md:text-base">
                  <p>1. Niniejszy Regulamin określa zasady zawierania umów sprzedaży, realizacji Zamówień, dostaw, płatności, oraz zasady postępowania reklamacyjnego i prawo odstąpienia od umowy.</p>
                  <p>2. Klient może skontaktować się ze Sprzedawcą za pomocą:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>adresu e-mail: <a href="mailto:z.glowa.w.piorach@gmail.com" className="text-gray-800 hover:text-gray-900 underline transition-colors">z.glowa.w.piorach@gmail.com</a></li>
                    <li>numeru telefonu: <a href="tel:+48607885250" className="text-gray-800 hover:text-gray-900 underline transition-colors">607 885 250</a></li>
                  </ul>
                  <p>3. Wszystkie ceny Towarów w Sklepie są cenami brutto. Sprzedawca, działając w ramach działalności nierejestrowanej, jest zwolniony podmiotowo z podatku od towarów i usług (VAT) na podstawie art. 113 ust. 1 i 9 Ustawy o VAT. Oznacza to, że podane ceny nie zawierają doliczonego podatku VAT. Informacja o statusie podatkowym Sprzedawcy jest również dostępna w stopce Sklepu.</p>
                  <p>4. Sprzedawca wystawia Klientowi dokument potwierdzający zakup (rachunek lub fakturę bez VAT) na wyraźne żądanie Klienta. Żądanie wystawienia rachunku oraz uzupełnienie danych (imię i nazwisko lub nazwa firmy, adres) jest możliwe do zaznaczenia na końcowym etapie składania Zamówienia.</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 3. Filozofia Sklepu i Specyfika Towaru (Upcycling)
                </h2>
                <div className="space-y-3 text-gray-700 text-sm md:text-base">
                  <p>1. Ideą Sklepu jest promocja upcyclingu i zrównoważonej konsumpcji. Towar oferowany w Sklepie jest tworzony w duchu upcyclingu, co polega na przetwarzaniu i łączeniu już istniejących materiałów w nowe, artystyczne kompozycje, aby nie generować bezsensownej produkcji masowej.</p>
                  <p>2. <strong>Pochodzenie Piór:</strong> Pióra użyte do realizacji Towaru pochodzą z naturalnego pierzenia ptaków hodowlanych lub domowych i zostały przez nie zgubione w trakcie sezonowej wymiany upierzenia. Sprzedawca gwarantuje, że dokłada wszelkich starań aby pióra były pozyskane w sposób etyczny.</p>
                  <p>3. <strong>Pozostałe Elementy Biżuterii:</strong> Część elementów konstrukcyjnych (np. bazy kolczyków, łańcuszki, koraliki, kamienie, elementy dekoracyjne, elementy skórzane) pochodzi z upcyclingu biżuterii z outletów, secondhandów, pchlich targów oraz kolekcji prywatnych.</p>
                  <p>4. <strong>Charakterystyka Towaru:</strong> Z uwagi na upcycling i naturalne pochodzenie materiałów, Towar może nosić i posiadać:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>naturalne skazy lub nieregularności na piórach (np. drobne pęknięcia, przebarwienia, nieregularny kształt, wyszczerbienia)</li>
                    <li>drobne ślady użytkowania, patyny, przetarcia lub defekty konstrukcji na odzyskiwanych elementach biżuterii/ozdób</li>
                  </ul>
                  <p>5. Klient akceptuje i przyjmuje do wiadomości, że zakup Towaru z upcyclingu oznacza akceptację jego unikatowego charakteru oraz opisanych w punkcie 4. cech. Cechy te nie stanowią wady Towaru w rozumieniu przepisów prawa.</p>
                  <p>6. Sprzedawca dokłada wszelkich starań aby wiernie opisać i przedstawić na fotografiach i w opisie detale produktu uwzględniając cechy wymienione w punkcie 4.</p>
                  <p>7. Kwestie użytkowania, czyszczenia, przechowywania i przewożenia produktów zostały szczegółowo opisane w sekcji FAQ, proszę o zapoznanie się z ich treścią oraz o stosowanie się do ich zaleceń.</p>
                </div>
              </section>
            </div>

            <div className="border-t border-gray-300 my-8"></div>

            {/* Rozdział II */}
            <div className="mb-8">
              <h3 className="text-base font-medium text-gray-800 mb-6">Rozdział II. Składanie i Realizacja Zamówień</h3>

              <section className="mb-10">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 4. Proces Zakupu
                </h2>
                <div className="space-y-3 text-gray-700 text-sm md:text-base">
                  <p>1. Klient składa Zamówienie poprzez dodanie Towaru do koszyka i wypełnienie formularza zamówienia, podając dane niezbędne do realizacji transakcji.</p>
                  <p>2. Umowa sprzedaży zostaje zawarta z chwilą otrzymania przez Klienta wiadomości e-mail z potwierdzeniem przyjęcia Zamówienia do realizacji przez Sprzedawcę.</p>
                  <p>3. Realizacja Zamówienia następuje po dokonaniu płatności przez Klienta. W przypadku Towarów wykonywanych na zamówienie, realizacja rozpoczyna się po zaksięgowaniu płatności i ewentualnym potwierdzeniu przez Klienta szczegółów personalizacji (np. kolor piór, długość).</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 5. Płatności i Dostawa
                </h2>
                <div className="space-y-3 text-gray-700 text-sm md:text-base">
                  <p>1. Klient ma do wyboru następujące metody płatności: przelew tradycyjny, płatności elektroniczne, BLIK.</p>
                  <p>2. Termin realizacji Zamówienia (przygotowanie do wysyłki) wynosi 2-5 DNI ROBOCZYCH. W przypadku biżuterii wykonywanej na indywidualne zamówienie, termin ten jest podany w opisie produktu lub ustalony indywidualnie z klientem.</p>
                  <p>3. Dostawa Towaru realizowana jest za pośrednictwem InPost (dostawa do domu na wskazany adres lub do paczkomatu). Klient ponosi koszty dostawy. Sprzedawca zobowiązuje się do należytego zabezpieczenia Towaru, w szczególności ze względu na delikatną naturę piór, w trakcie wysyłki.</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 6. Obowiązki informacyjne (Dyrektywa Omnibus)
                </h2>
                <div className="space-y-3 text-gray-700 text-sm md:text-base">
                  <p>1. W przypadku wprowadzenia Ceny Obniżonej, Sprzedawca obok informacji o cenie Towaru:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>wskazuje Cenę Aktualną (obowiązującą w momencie zakupu)</li>
                    <li>wskazuje Najniższą Cenę Towaru, jaka obowiązywała w okresie 30 dni przed wprowadzeniem obniżki</li>
                  </ul>
                  <p>2. Jeżeli Towar jest oferowany do sprzedaży krócej niż 30 dni, Sprzedawca informuje o Najniższej Cenie w okresie od rozpoczęcia oferowania Towaru do wprowadzenia obniżki.</p>
                </div>
              </section>
            </div>

            <div className="border-t border-gray-300 my-8"></div>

            {/* Rozdział III */}
            <div className="mb-8">
              <h3 className="text-base font-medium text-gray-800 mb-6">Rozdział III. Prawa Konsumenta, Reklamacje i Rękodzieło</h3>

              <section className="mb-10">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 7. Prawo Odstąpienia od Umowy (Zwroty)
                </h2>
                <div className="space-y-3 text-gray-700 text-sm md:text-base">
                  <p>1. Konsument ma prawo odstąpić od umowy sprzedaży (zwrócić Towar) w terminie 14 dni bez podania przyczyny.</p>
                  <p>2. Bieg terminu do odstąpienia od umowy rozpoczyna się od dnia, w którym Konsument lub wskazana przez niego osoba trzecia (inna niż przewoźnik) weszła w posiadanie Towaru.</p>
                  <p>3. Konsument dokonuje zwrotu poprzez złożenie oświadczenia o odstąpieniu od umowy poprzez uzupełnienie <a href="/zwroty" className="text-gray-800 hover:text-gray-900 underline transition-colors">Formularza Zwrotu</a> i odesłanie go oraz Towaru na adres Sprzedawcy: Ilona Barszcz, ul. Prószkowska ⅗, 45-710 Opole.</p>
                  <p>4. Konsument ponosi bezpośrednie koszty zwrotu Towaru. Zwracany Towar powinien być kompletny i, w miarę możliwości, znajdować się w oryginalnym opakowaniu. Klient odpowiada za zmniejszenie wartości Towaru będące wynikiem korzystania z niego w sposób wykraczający poza konieczny do stwierdzenia charakteru, cech i funkcjonowania Towaru (np. zerwana, widocznie zniszczona biżuteria).</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 8. WYJĄTEK – Biżuteria Personalizowana (Rękodzieło na Zamówienie)
                </h2>
                <div className="space-y-3 text-gray-700 text-sm md:text-base">
                  <p>1. Prawo do odstąpienia od umowy (zwrotu) nie przysługuje Konsumentowi w odniesieniu do umów, w których przedmiotem świadczenia jest Towar nieprefabrykowany, wyprodukowany według specyfikacji Konsumenta lub służący zaspokojeniu jego zindywidualizowanych potrzeb (art. 38 pkt 3 Ustawy o prawach konsumenta).</p>
                  <p>2. Dotyczy to w szczególności biżuterii z piór:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>wykonanej na indywidualne zamówienie (wykonanej na podstawie przesłanego przez Klienta wzoru lub projektu)</li>
                    <li>stworzonej na podstawie ścisłych wytycznych Klienta co do kolorystyki, długości, konkretnego gatunku piór lub nietypowego łączenia materiałów</li>
                  </ul>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 9. Reklamacje Towaru (Rękojmia)
                </h2>
                <div className="space-y-3 text-gray-700 text-sm md:text-base">
                  <p>1. Sprzedawca odpowiada za brak zgodności Towaru z umową (wada) istniejący w chwili jego dostarczenia i ujawniony w ciągu dwóch lat od tej chwili.</p>
                  <p>2. Reklamacja powinna zostać złożona pisemnie lub mailowo i zawierać: imię i nazwisko, adres, numer Zamówienia, opis wady, datę jej stwierdzenia oraz żądanie Klienta (naprawa, wymiana, obniżenie ceny, odstąpienie od umowy). Dostępny jest <a href="/reklamacja" className="text-gray-800 hover:text-gray-900 underline transition-colors">Formularz Reklamacji</a>.</p>
                  <p>3. Sprzedawca rozpatrzy reklamację w terminie 14 dni od dnia jej otrzymania.</p>
                  <p>4. Z uwagi na delikatną naturę Towaru (pióra), uszkodzenia mechaniczne powstałe w wyniku niewłaściwego użytkowania lub konserwacji po dostawie nie są objęte rękojmią. Zaleca się postępowanie zgodnie z załączoną instrukcją pielęgnacji.</p>
                </div>
              </section>
            </div>

            <div className="border-t border-gray-300 my-8"></div>

            {/* Rozdział IV */}
            <div className="mb-6">
              <h3 className="text-base font-medium text-gray-800 mb-6">Rozdział IV. Opiniowanie i Postanowienia Końcowe</h3>

              <section className="mb-10">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 10. Opinie o Produktach (Omnibus)
                </h2>
                <div className="space-y-3 text-gray-700 text-sm md:text-base">
                  <p>1. Sprzedawca podejmuje uzasadnione i proporcjonalne kroki, aby zapewnić, że publikowane w Sklepie opinie pochodzą od Klientów, którzy faktycznie kupili Towar.</p>
                  <p>2. Weryfikacja opinii polega na: Umożliwieniu dodania opinii tylko za pośrednictwem linku wysyłanego po zrealizowaniu Zamówienia. Sprawdzeniu, czy adres e-mail Klienta zgadza się z adresem przypisanym do numeru Zamówienia.</p>
                  <p>3. Sprzedawca nie zleca publikowania fałszywych opinii ani nie usuwa pozytywnych recenzji w celu manipulacji.</p>
                  <p>4. Niezależnie od możliwości zamieszczenia opinii w Sklepie, Sprzedawca serdecznie zaprasza Klientów do dzielenia się swoimi wrażeniami z zakupu oraz zdjęciami Towaru na oficjalnych profilach Sprzedawcy w mediach społecznościowych, w szczególności na Facebooku i Instagramie. Opinie zamieszczone w mediach społecznościowych nie podlegają weryfikacji zgodnie z punktem 2. niniejszego paragrafu.</p>
                </div>
              </section>

              <section className="mb-6">
                <h2 className="text-sm uppercase tracking-wide text-gray-800 mb-4 font-medium">
                  § 11. Postanowienia Końcowe
                </h2>
                <div className="space-y-3 text-gray-700 text-sm md:text-base">
                  <p>1. Regulamin wchodzi w życie z dniem 06.12.2025 roku.</p>
                  <p>2. W sprawach nieuregulowanych Regulaminem mają zastosowanie przepisy prawa polskiego, w szczególności przepisy Kodeksu Cywilnego oraz Ustawy o prawach konsumenta.</p>
                  <p>3. Informacje dotyczące ochrony danych osobowych znajdują się w <a href="/polityka-prywatnosci" className="text-gray-800 hover:text-gray-900 underline transition-colors">Polityce Prywatności</a> dostępnej na stronie Sklepu.</p>
                  <p>4. Załączniki (do pobrania przez Klienta):</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><a href="/zwroty" className="text-gray-800 hover:text-gray-900 underline transition-colors">Wzór Formularza Odstąpienia od Umowy</a></li>
                    <li><a href="/reklamacja" className="text-gray-800 hover:text-gray-900 underline transition-colors">Wzór Formularza Reklamacji</a></li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Informacja dodatkowa */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            W razie pytań dotyczących Regulaminu prosimy o kontakt: <a href="mailto:z.glowa.w.piorach@gmail.com" className="text-gray-800 hover:text-gray-900 underline transition-colors">z.glowa.w.piorach@gmail.com</a>
          </p>
        </div>
      </main>

      <Kontakt />
    </div>
  );
}
