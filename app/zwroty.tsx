export default function Zwroty() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-2xl font-semibold mb-6">Formularz odstąpienia od umowy</h1>
      <p className="mb-8 text-gray-700">(Wypełnij i odeślij tylko w przypadku chęci odstąpienia od umowy)</p>
      <div className="bg-white rounded-lg shadow p-6 text-sm md:text-base">
        <p className="mb-2"><b>Adresat:</b></p>
        <p>Sprzedawca: Ilona Barszcz,</p>
        <p>Adres do zwrotów: ul. Prószkowska ⅗, 45-710 Opole,</p>
        <p>Adres e-mail: <a href="mailto:z.glowa.w.piorach@gmail.com" className="underline">z.glowa.w.piorach@gmail.com</a></p>
        <hr className="my-4" />
        <p className="mb-2 font-semibold">OŚWIADCZENIE O ODSTĄPIENIU OD UMOWY SPRZEDAŻY</p>
        <p>Niniejszym oświadczam, że odstępuję od umowy sprzedaży następującego/ych Towaru/ów:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Nazwa Towaru: ____________________________</li>
          <li>Numer katalogowy/SKU (jeśli dotyczy): ____________________________</li>
          <li>Cena Towaru: ____________________________</li>
          <li>Ilość: ____________________________</li>
        </ul>
        <p>Data zawarcia umowy (Data złożenia zamówienia): ____________________________</p>
        <p>Data odbioru Towaru: ____________________________</p>
        <hr className="my-4" />
        <p className="mb-2 font-semibold">DANE KLIENTA (KONSUMENTA)</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Imię i Nazwisko Konsumenta: ____________________________</li>
          <li>Adres Konsumenta: ____________________________</li>
          <li>Numer Zamówienia: ____________________________</li>
          <li>Numer telefonu (opcjonalnie): ____________________________</li>
          <li>Adres e-mail: ____________________________</li>
        </ul>
        <hr className="my-4" />
        <p className="mb-2 font-semibold">ZWROT ŚRODKÓW PIENIĘŻNYCH</p>
        <p>Proszę o zwrot kwoty <span className="inline-block min-w-[120px] border-b border-gray-400"></span> zł wynikającej z odstąpienia od umowy sprzedaży na następujący rachunek bankowy:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Nazwa Banku: ____________________________</li>
          <li>Numer rachunku bankowego (IBAN): ____________________________</li>
          <li>Imię i Nazwisko Właściciela Rachunku: ____________________________</li>
        </ul>
        <p className="mb-4">Oświadczam, że Konsumentem jestem ja (właściciel rachunku bankowego), a mój rachunek bankowy służy wyłącznie do celów prywatnych.</p>
        <hr className="my-4" />
        <p className="mb-2 font-semibold">PODPIS I DATA</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Miejscowość i data: ____________________________</li>
          <li>Podpis Konsumenta: ____________________________</li>
        </ul>
      </div>
    </main>
  );
}
