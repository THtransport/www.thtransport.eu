import React from 'react';
// Importujemy ikony, aby działały w sekcji usług
import { Truck, Globe, Phone, Mail } from "lucide-react";

export default function Website() {
  return (
    <div className="min-h-screen bg-[#0b1f2a] text-white p-6 font-sans">
      <header className="flex justify-between items-center mb-10 border-b border-gray-700 pb-4">
        <h1 className="text-3xl font-bold text-[#4fc3f7]">TH-Transport</h1>
        <nav className="space-x-6">
          <a href="#services" className="hover:text-[#4fc3f7]">Usługi</a>
          <a href="#about" className="hover:text-[#4fc3f7]">O nas</a>
          <a href="#quote" className="hover:text-[#4fc3f7]">Wycena</a>
          <a href="#contact" className="hover:text-[#4fc3f7]">Kontakt</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Profesjonalny transport bez kompromisów</h2>
        <p className="text-lg mb-6 text-gray-300">Transport krajowy i międzynarodowy • Spedycja • Logistyka</p>
        <button className="bg-[#4fc3f7] text-black px-8 py-3 rounded font-bold hover:bg-cyan-400 transition">
          Poproś o wycenę
        </button>
      </section>

      {/* USŁUGI */}
      <section id="services" className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="bg-[#122b3a] border border-[#1e4d66] p-6 text-center rounded-lg">
          <Truck className="mx-auto mb-4 text-[#4fc3f7]" size={48} />
          <h3 className="text-xl font-semibold mb-2">Transport krajowy</h3>
          <p className="text-gray-300 text-sm">
            Realizujemy przewozy na terenie całej Polski, zapewniając terminowość i bezpieczeństwo dostaw.
          </p>
        </div>
        <div className="bg-[#122b3a] border border-[#1e4d66] p-6 text-center rounded-lg">
          <Globe className="mx-auto mb-4 text-[#4fc3f7]" size={48} />
          <h3 className="text-xl font-semibold mb-2">Transport międzynarodowy</h3>
          <p className="text-gray-300 text-sm">
            Obsługujemy transport na terenie Europy, gwarantując pełną kontrolę i bezpieczeństwo realizacji.
          </p>
        </div>
      </section>

      {/* O NAS */}
      <section id="about" className="mb-16 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-[#4fc3f7]">O nas</h2>
        <p className="text-gray-300 mb-4">
          Jesteśmy nowoczesną firmą transportową, posiadającą własną flotę naczep z ruchomą podłogą.
          Specjalizujemy się w realizacji transportów krajowych oraz międzynarodowych.
        </p>
      </section>

      {/* WYCENA */}
      <section id="quote" className="mb-16 max-w-xl mx-auto bg-[#122b3a] p-8 rounded-lg border border-[#1e4d66]">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#4fc3f7]">Szybka wycena transportu</h2>
        <div className="space-y-4">
          <input className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-white" placeholder="Miejsce załadunku" />
          <input className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-white" placeholder="Miejsce rozładunku" />
          <input className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-white" placeholder="Rodzaj towaru" />
          <textarea className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-white" placeholder="Dodatkowe informacje" rows="3"></textarea>
          <button className="w-full bg-[#4fc3f7] text-black font-bold p-3 rounded uppercase tracking-wider">Wyślij zapytanie</button>
        </div>
      </section>

      {/* KONTAKT */}
      <footer id="contact" className="text-center border-t border-gray-800 pt-10">
        <h2 className="text-3xl font-bold mb-8 text-[#4fc3f7]">Kontakt</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Transport</h3>
            <p className="flex justify-center items-center gap-2"><Phone size={16}/> 784-083-494</p>
            <p className="flex justify-center items-center gap-2"><Mail size={16}/> biuro@th-transport.eu</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Spedycja</h3>
            <p className="flex justify-center items-center gap-2"><Phone size={16}/> 662 067 405</p>
            <p className="flex justify-center items-center gap-2"><Mail size={16}/> logistyka@th-transport.eu</p>
          </div>
        </div>
      </footer>
    </div>
  );
}