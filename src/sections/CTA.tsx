import { Container, ContactForm } from "@/components";
import { siteConfig } from "@/config/site";

export function CTA() {
  return (
    <section
      id="contato"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #ecfdf5 0%, #d1fae5 20%, #ffffff 50%, #ede9fe 80%, #ddd6fe 100%)"
      }}
    >
      {/* Decorative orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-400/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Sparkle - right */}
      <div className="absolute top-20 right-16 pointer-events-none opacity-50">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L17.5 14.5L30 16L17.5 17.5L16 30L14.5 17.5L2 16L14.5 14.5L16 2Z" fill="#6366f1"/>
        </svg>
      </div>
      <div className="absolute bottom-24 left-20 pointer-events-none opacity-40">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2L11 9L18 10L11 11L10 18L9 11L2 10L9 9L10 2Z" fill="#10b981"/>
        </svg>
      </div>

      <Container size="wide" className="relative z-10">
        {/* CTA Card */}
        <div className="relative bg-linear-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-14 overflow-hidden shadow-2xl shadow-primary/20 mb-16">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-cyan-400/15 rounded-full blur-2xl" />

          {/* Small sparkle inside card */}
          <div className="absolute top-6 right-10 opacity-60">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L13 10L21 11L13 12L12 20L11 12L3 11L11 10L12 2Z" fill="white"/>
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div className="flex flex-col items-center gap-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-white/80">Pronto para começar?</span>
              <div className="w-10 h-0.5 bg-linear-to-r from-white/60 to-cyan-300 rounded-full" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Transforme sua empresa com{" "}
              <span
                className="text-cyan-300"
                style={{ fontStyle: "italic", fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                tecnologia inteligente
              </span>
            </h2>

            <p className="text-base text-white/75 mb-8 max-w-lg mx-auto leading-relaxed">
              Entre em contato e descubra como podemos ajudar seu negócio
              a alcançar novos patamares de eficiência e crescimento.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary font-semibold text-sm hover:bg-gray-50 shadow-lg transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {siteConfig.cta.primary}
              </a>
              <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-all">
                Agendar Demonstração
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 pt-7 border-t border-white/20">
              <div className="flex items-center gap-2.5 text-white/75 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/75 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>{siteConfig.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </Container>
    </section>
  );
}
