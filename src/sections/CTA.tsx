import { Container } from "@/components";
import { siteConfig } from "@/config/site";

export function CTA() {
  return (
    <section id="contato" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      {/* Decorative Flowing Lines */}
      <div className="absolute left-0 top-0 bottom-0 w-40 pointer-events-none opacity-40">
        <svg viewBox="0 0 150 600" className="h-full w-full" preserveAspectRatio="none">
          <path
            d="M-20,0 Q100,150 50,300 T-20,600"
            fill="none"
            stroke="url(#cta-gradient-left)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="cta-gradient-left" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-40 pointer-events-none opacity-40">
        <svg viewBox="0 0 150 600" className="h-full w-full" preserveAspectRatio="none">
          <path
            d="M170,0 Q50,150 100,300 T170,600"
            fill="none"
            stroke="url(#cta-gradient-right)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="cta-gradient-right" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Dots */}
      <div className="absolute top-16 left-[15%] w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-[10%] w-1.5 h-1.5 bg-cyan-500/30 rounded-full animate-pulse delay-300" />

      <Container size="wide" className="relative z-10">
        <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 border border-white/20 rounded-full">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm text-white/90">Pronto para começar?</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transforme sua empresa com{" "}
              <span className="text-cyan-300">
                tecnologia inteligente
              </span>
            </h2>

            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar seu negócio 
              a alcançar novos patamares de eficiência e crescimento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg bg-white text-primary hover:bg-gray-100 shadow-lg transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {siteConfig.cta.primary}
              </a>
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white/50 text-white hover:bg-white/10 transition-all duration-200">
                Agendar Demonstração
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>{siteConfig.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
