import React from 'react';
import {
  Shield, ArrowRight, Key, Lock, ShieldCheck,
  ChevronDown, Zap, Globe, Menu, ShieldAlert
} from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-['Space_Grotesk'] selection:bg-orange-500/50">

      {/* Top Banner - Ultra Minimalist */}
      <nav className="border-b border-white/10 bg-black/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-orange-500 p-1.5 rounded-sm transition-transform group-hover:rotate-90">
              <Shield size={20} className="text-black" fill="black" />
            </div>
            <span className="font-['Bebas_Neue'] text-3xl tracking-wider uppercase">Ressua</span>
          </div>

          <div className="hidden lg:flex gap-10 text-[11px] uppercase tracking-[0.3em] font-bold text-zinc-400">
            <a href="#services" className="hover:text-orange-500 transition">Services</a>
            <a href="#about" className="hover:text-orange-500 transition">Metode</a>
            <a href="#resources" className="hover:text-orange-500 transition">Ressourcer</a>
            <a href="#blog" className="hover:text-orange-500 transition">Blog</a>
          </div>

          <button className="bg-white text-black px-6 py-2.5 rounded-sm font-bold text-[11px] uppercase tracking-widest hover:bg-orange-500 transition-all">
            Book Samtale
          </button>
        </div>
      </nav>

      {/* Hero - Brutalist Style */}
      <header className="pt-32 pb-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-orange-500 mb-8">
            <div className="h-[1px] w-12 bg-orange-500"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Sikring af din digitale arv</span>
          </div>

          <h1 className="font-['Bebas_Neue'] text-[80px] md:text-[160px] leading-[0.85] uppercase mb-10 tracking-tighter">
            DIN DIGITALE EJENDOM.<br />
            <span className="text-orange-500 italic">SIKRET FOR EVIGT.</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed max-w-xl">
              Vi leverer arkitekturen til dem, der ikke overlader deres Bitcoin til tilfældighederne.
              Ingen mellemmænd. Ingen modpartsrisiko. Kun suveræn kontrol.
            </p>
            <div className="flex justify-start md:justify-end">
              <button className="group flex items-center gap-4 border border-white/20 px-8 py-5 hover:bg-white hover:text-black transition-all">
                <span className="font-bold uppercase tracking-widest text-sm">Start Onboarding</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Services - Grid Blocks */}
      <section id="services" className="bg-black relative">
        <div className="grid md:grid-cols-3">

          {/* Service 1 */}
          <div className="border-r border-b border-white/10 p-12 hover:bg-zinc-950 transition-colors group">
            <Key className="text-orange-500 mb-8 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-['Bebas_Neue'] text-4xl mb-6 uppercase tracking-wide">Cold Storage Setup</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">Vi designer dit fysiske sikkerhedslag. Fra hardware-valg til sikring af seed-phrases på stål.</p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-300">
              <ShieldCheck size={14} className="text-orange-500" /> Institutionel Sikkerhed
            </div>
          </div>

          {/* Service 2 */}
          <div className="border-r border-b border-white/10 p-12 hover:bg-zinc-950 transition-colors group">
            <Lock className="text-orange-500 mb-8 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-['Bebas_Neue'] text-4xl mb-6 uppercase tracking-wide">Multi-Sig Vault</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">2-af-3 eller 3-af-5 setups. Vi fjerner "single point of failure" i din opsparing.</p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-300">
              <ShieldCheck size={14} className="text-orange-500" /> Ingen modpartsrisiko
            </div>
          </div>

          {/* Service 3 */}
          <div className="border-b border-white/10 p-12 hover:bg-zinc-950 transition-colors group">
            <ShieldAlert className="text-orange-500 mb-8 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="font-['Bebas_Neue'] text-4xl mb-6 uppercase tracking-wide">Arv & Succession</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">Hvordan får dine arvinger adgang? Vi bygger den tekniske bro til næste generation.</p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-300">
              <ShieldCheck size={14} className="text-orange-500" /> Fremtidssikret
            </div>
          </div>

        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.5em] mb-8 block">Vores Filosofi</span>
          <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl mb-12 leading-tight">
            "Don't Trust. <span className="text-orange-500 underline decoration-1 underline-offset-8">Verify.</span>"
          </h2>
          <p className="text-zinc-400 text-lg font-light leading-relaxed italic">
            Bitcoin blev skabt til at fjerne tillid til tredjeparter. Ressua hjælper dig med at tage det sidste skridt og blive din egen bank. Vi rører aldrig dine nøgler – vi lærer dig at mestre dem.
          </p>
        </div>
      </section>

      {/* Booking - The Call to Action */}
      <section id="booking" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="font-['Bebas_Neue'] text-6xl uppercase mb-8">Klar til at sikre din formue?</h2>
            <p className="text-zinc-500 mb-10 text-lg">Book en uforpligtende 30-minutters intro-samtale. Vi gennemgår dit nuværende setup og identificerer sårbarheder.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border border-white/5 bg-zinc-950/50">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-xs uppercase font-bold tracking-widest">100% Privat og diskret</span>
              </div>
              <div className="flex items-center gap-4 p-4 border border-white/5 bg-zinc-950/50">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-xs uppercase font-bold tracking-widest">Gennemtestede Open-source metoder</span>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900 aspect-square md:aspect-auto rounded-sm border border-white/10 flex items-center justify-center p-8">
            <div className="text-center">
              <p className="text-zinc-600 font-black uppercase tracking-[0.3em] mb-6">Calendly Integration</p>
              <button className="bg-white text-black px-12 py-4 font-black uppercase tracking-widest text-xs">Vælg Tidspunkt</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="font-['Bebas_Neue'] text-4xl">RESSUA</div>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-zinc-600">
            <span className="hover:text-white cursor-pointer transition">Nostr</span>
            <span className="hover:text-white cursor-pointer transition">Signal</span>
            <span className="hover:text-white cursor-pointer transition">Twitter</span>
          </div>
          <div className="text-[10px] text-zinc-800 font-black uppercase tracking-widest">
            © 2026 ENS EGEN EJENDOM. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;