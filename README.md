import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Truck, Globe } from "lucide-react";
export default function Website() {
return (
<div className="min-h-screen bg-[#0b1f2a] text-white p-6">
<header className="flex justify-between items-center mb-10">
<h1 className="text-3xl font-bold text-[#4fc3f7]">TH-Transport</h1>
<nav className="space-x-6">
<a href="#services">Usługi</a>
<a href="#about">O nas</a>
<a href="#quote">Wycena</a>
<a href="#contact">Kontakt</a>
</nav>
</header>
{/* HERO */}
<section className="text-center mb-16">
<h2 className="text-4xl font-bold mb-4">
Profesjonalny transport bez kompromisów
</h2>
<p className="text-lg mb-6 text-gray-300">
Transport krajowy i międzynarodowy • Spedycja • Logistyka
</p>
<Button className="bg-[#4fc3f7] text-black">
Poproś o wycenę
</Button>
</section>
{/* USŁUGI */}
<section id="services" className="grid md:grid-cols-2 gap-6 mb-16">
<Card className="bg-[#122b3a] border border-[#1e4d66]">
<CardContent className="p-6 text-center">
<Truck className="mx-auto mb-4 text-[#4fc3f7]" />
<h3 className="text-xl font-semibold">Transport krajowy</h3>
<p className="text-gray-300">
Realizujemy przewozy na terenie całej Polski, zapewniając terminowość i bezpieczeństwo dostaw.
</p>
</CardContent>
</Card>
<Card className="bg-[#122b3a] border border-[#1e4d66]">
<CardContent className="p-6 text-center">
<Globe className="mx-auto mb-4 text-[#4fc3f7]" />
<h3 className="text-xl font-semibold">Transport międzynarodowy</h3>
<p className="text-gray-300">
Obsługujemy transport na terenie Europy, gwarantując pełną kontrolę i bezpieczeństwo realizacji.
</p>
</CardContent>
</Card>
</section>
{/* O NAS */}
<section id="about" className="mb-16 text-center max-w-3xl mx-auto">
<h2 className="text-3xl font-bold mb-4 text-[#4fc3f7]">O nas</h2>
<p className="text-gray-300 mb-4">
Jesteśmy nowoczesną firmą transportową, posiadającą własną flotę naczep z ruchomą podłogą.
Specjalizujemy się w realizacji transportów krajowych oraz międzynarodowych,
zapewniając terminowość oraz bezpieczeństwo powierzonych ładunków.
</p>
<p className="text-gray-300 mb-4">
Dysponujemy wszystkimi wymaganymi pozwoleniami oraz dokumentacją,
co pozwala nam realizować również transporty specjalistyczne.
</p>
<p className="text-gray-300">
Posiadamy własny dział spedycji, dzięki czemu zapewniamy kompleksową obsługę logistyczną
na każdym etapie realizacji zlecenia.
</p>
</section>
{/* WYCENA */}
<section id="quote" className="mb-16 max-w-xl mx-auto">
<h2 className="text-3xl font-bold mb-6 text-center text-[#4fc3f7]">
Szybka wycena transportu
</h2>
<div className="space-y-4">
<Input placeholder="Miejsce załadunku" />
<Input placeholder="Miejsce rozładunku" />
<Input placeholder="Rodzaj towaru" />
<Input placeholder="Waga / ilość" />
<Textarea placeholder="Dodatkowe informacje" />
<Button className="w-full bg-[#4fc3f7] text-black">
Wyślij zapytanie
</Button>
</div>
</section>
{/* KONTAKT */}
<section id="contact" className="text-center">
<h2 className="text-3xl font-bold mb-4 text-[#4fc3f7]">Kontakt</h2>
<div className="mb-4">
<h3 className="text-xl font-semibold">Transport</h3>
<p>📞 784-083-494</p>
<p>✉ biuro@th-transport.eu</p>
</div>
<div>
<h3 className="text-xl font-semibold">Spedycja</h3>
<p>📞 662 067 405</p>
<p>✉ logistyka@th-transport.eu</p>
</div>
</section>
</div>
);
}
