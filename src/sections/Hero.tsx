import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative flex flex-col min-h-screen overflow-hidden bg-linear-to-b from-[#1c0f33] to-[#120821]">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center pt-32 pb-16">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-9">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs tracking-widest text-purple-300/60">01 / SOFTWARE STUDIO</span>
              <div className="h-px flex-1 max-w-16 bg-white/10" />
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.08] mb-8 max-w-2xl">
              Nossa solução em software para simplificar suas operações
            </h1>

            <p className="text-base md:text-lg text-purple-200/60 max-w-lg leading-relaxed mb-10">
              Desenvolvemos software sob medida e soluções de automação para otimizar
              processos e acelerar o crescimento da sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
              >
                {siteConfig.cta.primary}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/20 text-white font-semibold text-sm hover:border-white/50 transition-colors"
              >
                {siteConfig.cta.secondary}
              </a>
            </div>
          </div>

          {/* Proof column */}
          <div className="lg:col-span-3 flex lg:flex-col lg:justify-end gap-8 lg:gap-6 pt-2 lg:border-l lg:border-white/10 lg:pl-8">
            {[
              { value: "50+", label: "Projetos entregues" },
              { value: "5 anos", label: "De experiência" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-serif text-2xl text-white mb-0.5">{stat.value}</div>
                <div className="text-xs text-purple-200/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#produtos"
        aria-label="Ver mais seções"
        className="relative z-10 mx-auto mb-4 animate-bounce text-purple-300/70 hover:text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </a>

      {/* Closing strip */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 py-6">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          {["Software sob medida", "Automação de processos", "Integrações", "Analytics & BI"].map((item) => (
            <span key={item} className="font-mono text-[11px] tracking-widest text-purple-300/60">
              {item.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
