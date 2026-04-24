mport React from 'react';
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

      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Profesjonalny transport bez kompromisów</h2>
        <p className="text-lg mb-6 text-gray-300">Transport krajowy i międzynarodowy • Spedycja • Logistyka</p>
        <button className="bg-[#4fc3f7] text-black px-8 py-3 rounded font-bold hover:bg-cyan-400 transition">
          Poproś o wycenę
        </button>
      </section>

      <section id="services" className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="bg-[#122b3a] border border-[#1e4d66] p-6 text-center rounded-lg">
          <Truck className="mx-auto mb-4 text-[#4fc3f7]" size={48} />
          <h3 className="text-xl font-semibold mb-2">Transport krajowy</h3>
          <p className="text-gray-300 text-sm">Realizujemy przewozy na terenie całej Polski.</p>
        </div>
        <div className="bg-[#122b3a] border border-[#1e4d66] p-6 text-center rounded-lg">
          <Globe className="mx-auto mb-4 text-[#4fc3f7]" size={48} />
          <h3 className="text-xl font-semibold mb-2">Transport międzynarodowy</h3>
          <p className="text-gray-300 text-sm">Obsługujemy całą Unię Europejską.</p>
        </div>
      </section>

      <footer id="contact" className="text-center border-t border-gray-800 pt-10">
        <h2 className="text-3xl font-bold mb-8 text-[#4fc3f7]">Kontakt</h2>
        <p className="mb-2">📞 784-083-494 | ✉ biuro@th-transport.eu</p>
      </footer>
    </div>
  );
}