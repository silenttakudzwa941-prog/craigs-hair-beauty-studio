"use client";

import { useState } from "react";

const phone = "263774449111";
const whatsapp = (subject = "an appointment") =>
  `https://wa.me/${phone}?text=${encodeURIComponent(`Hello Craig's Hair & Beauty Studio, I would like to enquire about ${subject}.`)}`;

const navigation = [
  ["Home", "#home"],
  ["Hair", "#hair"],
  ["Wig Installation", "#installation"],
  ["Hair Collection", "#wigs"],
  ["Nails", "#nails"],
  ["Facials", "#facials"],
  ["Visit Us", "#locations"],
];

const wigs = [
  { name: "Silky Straight", type: "Classic straight finish", image: "/Silky-Straight.jpg" },
  { name: "Soft Body Wave", type: "Soft flowing waves", image: "/Soft-Body-Wave.jpg" },
  { name: "Signature Curls", type: "Full, defined texture", image: "/Signature-Curls.jpg" },
  { name: "The Chic Bob", type: "Short and sophisticated", image: "/The-Chic-Bob.jpg" },
];

function Photo({ src, alt, className = "", priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div role="img" aria-label={alt} className={`flex items-center justify-center bg-[#ded5c8] p-6 text-center font-serif text-xl italic text-[#8b765c] ${className}`}>
      Craig&apos;s Studio
    </div>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} onError={() => setFailed(true)} className={`object-cover ${className}`} />
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`text-[10px] font-semibold uppercase tracking-[0.35em] ${light ? "text-[#d3b88b]" : "text-[#9b794d]"}`}>{children}</p>;
}

function Inquiry({ subject, children, light = false }: { subject: string; children: React.ReactNode; light?: boolean }) {
  return (
    <a href={whatsapp(subject)} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-3 border px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] transition duration-300 hover:-translate-y-0.5 ${light ? "border-[#d3b88b] bg-[#d3b88b] text-[#171512] hover:bg-white hover:border-white" : "border-[#24211d] bg-[#24211d] text-white hover:border-[#9b794d] hover:bg-[#9b794d]"}`}>
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f8f5ef] text-[#24211d]">
      <div className="bg-[#171512] px-4 py-2.5 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-[#d5bb91]">The art of looking & feeling beautiful</div>
      <header className="sticky top-0 z-50 border-b border-[#d9d0c2] bg-[#f8f5ef]/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-5 lg:px-12">
          <a href="#home" className="shrink-0" aria-label="Craig's Hair and Beauty Studio home">
            <span className="block font-serif text-[30px] leading-none tracking-[0.03em]">CRAIG&apos;S</span>
            <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.31em] text-[#9b794d]">Hair & Beauty Studio</span>
          </a>
          <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
            {navigation.map(([label, href]) => <a key={href} href={href} className="text-[11px] font-medium uppercase tracking-[0.08em] transition hover:text-[#9b794d]">{label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="hidden border border-[#24211d] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] transition hover:bg-[#24211d] hover:text-white sm:block">Book an Appointment ↗</a>
            <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" className="border border-[#d9d0c2] px-3 py-2 text-lg xl:hidden">{menuOpen ? "✕" : "☰"}</button>
          </div>
        </div>
        {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="grid gap-4 border-t border-[#d9d0c2] bg-[#f8f5ef] px-6 py-6 xl:hidden">{navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="text-xs uppercase tracking-[0.15em]">{label}</a>)}<a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9b794d]">Book an Appointment ↗</a></nav>}
      </header>

      <main>
        <section id="home" className="scroll-mt-28 bg-[#e9e1d5]">
          <div className="mx-auto grid max-w-[1440px] lg:min-h-[690px] lg:grid-cols-[0.94fr_1.06fr]">
            <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16 lg:py-24">
              <Eyebrow>Welcome to Craig&apos;s Studio · Harare</Eyebrow>
              <h1 className="mt-8 max-w-xl font-serif text-[clamp(3.8rem,7vw,7.5rem)] leading-[0.95] tracking-[-0.055em]">Beauty,<br /><span className="italic text-[#9b794d]">beautifully</span><br />defined.</h1>
              <div className="mt-9 h-px w-20 bg-[#9b794d]" />
              <p className="mt-7 max-w-md text-[15px] leading-8 text-[#635b51]">A refined destination for hair, wigs, nails and skincare. Discover your signature look at Craig&apos;s Hair & Beauty Studio.</p>
              <div className="mt-9 flex flex-wrap gap-3"><Inquiry subject="a beauty appointment">Book Your Visit</Inquiry><a href="#services" className="inline-flex items-center border border-[#8d8376] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] transition hover:bg-white">Explore Services ↓</a></div>
              <p className="mt-12 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#827365]">Highland Park Mall <span className="mx-2 text-[#a38b6d]">✦</span> Madokero Mall</p>
            </div>
            <div className="relative min-h-[460px] overflow-hidden lg:min-h-full">
              <Photo priority src="/hero.jpg" alt="Editorial beauty portrait, illustrative demo photograph" className="absolute inset-0 h-full w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 border-l border-[#d3b88b] pl-4 text-[11px] uppercase tracking-[0.25em] text-white">Your beauty. Our passion.</div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-28 px-5 py-20 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[1240px] text-center"><Eyebrow>Our world of beauty</Eyebrow><h2 className="mt-5 font-serif text-4xl tracking-[-0.04em] sm:text-6xl">The Craig&apos;s Experience</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#6e655c]">Explore the services and styles that make every visit feel special.</p></div>
          <div className="mx-auto mt-14 grid max-w-[1240px] gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Hair Dressing", "#hair", "/hair-dressing.jpg"],
              ["Wig Installation", "#installation", "/wig-installation.jpg"],
              ["The Hair Collection", "#wigs", "/wigs-in-stock.jpg"],
              ["Nail Care", "#nails", "/nailcare.jpg"],
              ["Facials", "#facials", "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80"],
            ].map(([name, href, src], i) => <a key={name} href={href} className="group relative block aspect-[3/4] overflow-hidden bg-[#d9d0c2]"><Photo src={src} alt={`${name} illustrative photograph`} className="h-full w-full transition-transform duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" /><div className="absolute bottom-0 left-0 p-5 text-white"><span className="text-[10px] tracking-[0.25em] text-[#d3b88b]">0{i + 1}</span><h3 className="mt-2 font-serif text-2xl">{name}</h3><span className="mt-3 block text-[10px] uppercase tracking-[0.2em]">Explore ↗</span></div></a>)}
          </div>
        </section>

        <section id="hair" className="scroll-mt-28 bg-[#eee8de] px-5 py-20 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-2 lg:gap-24"><div className="grid grid-cols-[1fr_0.72fr] items-end gap-4"><div className="aspect-[3/4] overflow-hidden"><Photo src="/hairstyle.jpg" alt="Hair styling inspiration" className="h-full w-full" /></div><div className="mb-8 aspect-[3/4] overflow-hidden"><Photo src="/wig.webp" alt="Hair salon inspiration" className="h-full w-full" /></div></div><div><Eyebrow>01 / The art of hair</Eyebrow><h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-[-0.04em] sm:text-6xl">Hair that makes<br /><span className="italic text-[#9b794d]">a statement.</span></h2><p className="mt-7 max-w-lg text-sm leading-8 text-[#665d54]">From beautiful braids and protective styles to weaving and elegant finishing, find a look that feels uniquely yours.</p><div className="mt-7 flex flex-wrap gap-2">{["Braiding", "Weaving", "Hair Styling"].map(x => <span key={x} className="border border-[#cbbfae] px-4 py-2 text-xs text-[#665d54]">{x}</span>)}</div><div className="mt-9"><Inquiry subject="hair dressing or braiding">Enquire About Hair</Inquiry></div></div></div></section>

        <section id="installation" className="scroll-mt-28 px-5 py-20 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-2 lg:gap-24"><div className="order-2 lg:order-1"><Eyebrow>02 / Perfectly styled</Eyebrow><h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-[-0.04em] sm:text-6xl">The perfect<br /><span className="italic text-[#9b794d]">installation.</span></h2><p className="mt-7 max-w-lg text-sm leading-8 text-[#665d54]">Your wig, expertly styled for a polished finish. Explore installation and styling enquiries for your next look.</p><div className="mt-9"><Inquiry subject="wig installation and styling">Book Wig Installation</Inquiry></div></div><div className="order-1 aspect-[5/4] overflow-hidden lg:order-2"><Photo src="/finished.jpg" alt="Wig styling inspiration" className="h-full w-full py-4" /></div></div></section>

        <section id="wigs" className="scroll-mt-28 bg-[#1c1a18] px-5 py-20 text-[#f8f5ef] lg:px-12 lg:py-28"><div className="mx-auto max-w-[1240px]"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><Eyebrow light>03 / Discover your next look</Eyebrow><h2 className="mt-5 font-serif text-5xl tracking-[-0.04em] sm:text-6xl">The Hair <span className="italic text-[#d3b88b]">Collection.</span></h2><p className="mt-5 max-w-xl text-sm leading-7 text-white/60">Explore our curated preview of wig styles. Discover a look you love and enquire directly on WhatsApp.</p></div><span className="w-fit border border-[#73634c] px-4 py-2 text-[10px] uppercase tracking-[0.17em] text-[#d3b88b]">Illustrative demo catalogue</span></div><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{wigs.map((wig, i) => <article key={wig.name} className="group"><div className="relative aspect-[3/4] overflow-hidden bg-[#c7bcae]"><Photo src={wig.image} alt={`${wig.name} sample style photograph, not verified inventory`} className="h-full w-full transition-transform duration-700 group-hover:scale-105" /><span className="absolute left-3 top-3 bg-[#f8f5ef] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#24211d]">Sample 0{i + 1}</span></div><h3 className="mt-5 font-serif text-2xl">{wig.name}</h3><p className="mt-1 text-xs text-white/55">{wig.type}</p><a href={whatsapp(`the ${wig.name} wig style shown in your website demo`)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block border-b border-[#d3b88b] pb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#d3b88b] transition hover:text-white">Enquire on WhatsApp ↗</a></article>)}</div><p className="mt-10 text-xs leading-6 text-white/45">Demo imagery and style names are illustrative only. Actual stock, product photos, prices and availability must be confirmed by Craig&apos;s Studio.</p></div></section>

        <section id="nails" className="scroll-mt-28 bg-[#eee8de] px-5 py-20 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-2 lg:gap-24"><div className="grid grid-cols-2 gap-4"><div className="aspect-[3/4] overflow-hidden"><Photo src="manicure.jpg" alt="Manicure inspiration" className="h-full w-full" /></div><div className="mt-10 aspect-[3/4] overflow-hidden"><Photo src="/pedicure.jpg" alt="Nail care inspiration" className="h-full w-full" /></div></div><div><Eyebrow>04 / The finishing touch</Eyebrow><h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-[-0.04em] sm:text-6xl">A little luxury,<br /><span className="italic text-[#9b794d]">at your fingertips.</span></h2><p className="mt-7 max-w-lg text-sm leading-8 text-[#665d54]">Make time for beautiful nails and thoughtful care with our manicure and pedicure services.</p><div className="mt-7 flex flex-wrap gap-2">{["Manicures", "Pedicures", "Nail Styling"].map(x => <span key={x} className="border border-[#cbbfae] px-4 py-2 text-xs text-[#665d54]">{x}</span>)}</div><div className="mt-9"><Inquiry subject="manicure or pedicure services">Enquire About Nails</Inquiry></div></div></div></section>

        <section id="facials" className="scroll-mt-28 px-5 py-20 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-2 lg:gap-24"><div className="order-2 lg:order-1"><Eyebrow>05 / Your moment to glow</Eyebrow><h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-[-0.04em] sm:text-6xl">A moment<br /><span className="italic text-[#9b794d]">for yourself.</span></h2><p className="mt-7 max-w-lg text-sm leading-8 text-[#665d54]">Take a moment to unwind and refresh with facial care designed around your beauty routine. Enquire about the treatments available at the studio.</p><div className="mt-9"><Inquiry subject="facial treatments">Enquire About Facials</Inquiry></div></div><div className="order-1 aspect-[5/4] overflow-hidden lg:order-2"><Photo src="/facial.jpg" alt="Relaxing facial treatment inspiration" className="h-full w-full" /></div></div></section>

        <section className="bg-[#b79a70] px-5 py-20 text-center text-[#211c16] lg:py-24"><Eyebrow>Let&apos;s create your next look</Eyebrow><h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">Your next beauty moment starts here.</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-7">Enquire about a service or request an appointment at either of our Harare locations.</p><div className="mt-9"><Inquiry subject="an appointment at Highland Park Mall or Madokero Mall">Contact Craig&apos;s Studio</Inquiry></div></section>

        <section id="locations" className="scroll-mt-28 bg-[#f8f5ef] px-5 py-20 lg:px-12 lg:py-28"><div className="mx-auto max-w-[1240px]"><div className="text-center"><Eyebrow>Find us in Harare</Eyebrow><h2 className="mt-5 font-serif text-5xl tracking-[-0.04em] sm:text-6xl">Visit the Studio</h2></div><div className="mt-12 grid gap-5 md:grid-cols-2">{["Highland Park Mall", "Madokero Mall"].map((place, i) => <div key={place} className="border border-[#d9d0c2] bg-white px-8 py-10 sm:px-12"><span className="text-xs tracking-[0.2em] text-[#9b794d]">0{i + 1} / HARARE</span><h3 className="mt-5 font-serif text-3xl">{place}</h3><p className="mt-3 text-sm text-[#74695e]">Harare, Zimbabwe</p><a href={whatsapp(`an appointment at ${place}`)} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block border-b border-[#9b794d] pb-2 text-[11px] font-semibold uppercase tracking-[0.15em]">Enquire About This Branch ↗</a></div>)}</div></div></section>
      </main>
      <footer className="bg-[#171512] px-5 py-14 text-white lg:px-12"><div className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-2"><div><h2 className="font-serif text-4xl">CRAIG&apos;S</h2><p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-[#d3b88b]">Hair & Beauty Studio</p><p className="mt-6 text-sm text-white/55">Your beauty. Our passion.</p></div><div className="md:text-right"><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d3b88b]">Get in touch</p><a href="tel:+263774449111" className="mt-4 block text-sm hover:text-[#d3b88b]">077 444 9111</a><a href="mailto:craigsstudio20@gmail.com" className="mt-2 block break-all text-sm hover:text-[#d3b88b]">craigsstudio20@gmail.com</a><p className="mt-2 text-sm text-white/55">Highland Park Mall · Madokero Mall</p></div></div><div className="mx-auto mt-12 flex max-w-[1240px] flex-col justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/45 sm:flex-row"><p>© {new Date().getFullYear()} Craig&apos;s Hair & Beauty Studio</p><p>Designed &amp; Developed by <span className="text-[#d3b88b]">Zimbillboards Media</span></p></div></footer>
    </div>
  );
}
