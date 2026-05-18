import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#4F46E5" }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 pt-36 pb-10 px-4 text-center">
        {/* Badge */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-white">Soluções em Tecnologia</span>
          <div className="w-10 h-0.5 bg-white/40 rounded-full" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 max-w-3xl">
          Nossa Solução em Software para Simplificar
          <br />
          Suas{" "}
          <span
            className="text-white"
            style={{ fontStyle: "italic", fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Operações
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
          Desenvolvemos software sob medida e soluções de automação para otimizar
          processos e acelerar o crescimento da sua empresa.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-all shadow-lg"
          >
            {siteConfig.cta.primary}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-all"
          >
            {siteConfig.cta.secondary}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* App Screenshots */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-0">
        <div className="relative h-72 md:h-96">

          {/* Back window — Loca Fácil (shifted left and behind) */}
          <div className="absolute left-0 right-0 top-8 rounded-t-2xl overflow-hidden shadow-xl shadow-gray-300/40 border border-gray-200/60 z-0">
            <div className="relative">
              <Image
                src="/images/app-preview-locafacil.png"
                alt="Loca Fácil"
                width={1200}
                height={700}
                className="w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Front window — Healthy App (shifted right and in front) */}
          <div className="absolute left-44 md:left-64 right-0 top-0 rounded-t-2xl overflow-hidden shadow-2xl shadow-gray-400/30 border border-gray-200/60 z-10">
            <div className="relative">
              <Image
                src="/images/app-preview.png"
                alt="Healthy App"
                width={1200}
                height={700}
                className="w-full object-cover object-top"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
