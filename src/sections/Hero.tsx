import { Container, Button } from "@/components";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      </div>

      {/* Decorative Flowing Lines - Left Side */}
      <div className="absolute left-0 top-0 h-full w-32 md:w-48 lg:w-64 pointer-events-none opacity-50">
        <svg viewBox="0 0 200 800" className="h-full w-full" preserveAspectRatio="none">
          <path
            d="M-50,0 Q100,200 50,400 T-50,800"
            fill="none"
            stroke="url(#gradient-left-1)"
            strokeWidth="2"
          />
          <path
            d="M-30,100 Q120,300 70,500 T-30,900"
            fill="none"
            stroke="url(#gradient-left-2)"
            strokeWidth="1.5"
          />
          <path
            d="M-70,50 Q80,250 30,450 T-70,850"
            fill="none"
            stroke="url(#gradient-left-3)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="gradient-left-1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
              <stop offset="30%" stopColor="#6366f1" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient-left-2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="40%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#6366f1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient-left-3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Decorative Flowing Lines - Right Side */}
      <div className="absolute right-0 top-0 h-full w-32 md:w-48 lg:w-64 pointer-events-none opacity-50">
        <svg viewBox="0 0 200 800" className="h-full w-full" preserveAspectRatio="none">
          <path
            d="M250,0 Q100,200 150,400 T250,800"
            fill="none"
            stroke="url(#gradient-right-1)"
            strokeWidth="2"
          />
          <path
            d="M230,100 Q80,300 130,500 T230,900"
            fill="none"
            stroke="url(#gradient-right-2)"
            strokeWidth="1.5"
          />
          <path
            d="M270,50 Q120,250 170,450 T270,850"
            fill="none"
            stroke="url(#gradient-right-3)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="gradient-right-1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="30%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient-right-2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
              <stop offset="40%" stopColor="#6366f1" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient-right-3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-500/40 rounded-full animate-pulse delay-300" />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-violet-500/40 rounded-full animate-pulse delay-500" />
      <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-primary/30 rounded-full animate-pulse delay-700" />
      <div className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-pulse delay-1000" />

      <Container size="wide" className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary/5 border border-primary/10 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-gray-600 font-medium">
              Soluções em Tecnologia
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
            Transforme seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
              negócio
            </span>{" "}
            com tecnologia
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Desenvolvemos software sob medida e soluções de automação
            inteligente para otimizar processos e acelerar o crescimento da sua
            empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={`https://wa.me/${
                siteConfig.contact.whatsapp
              }?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="md"
                className="bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 shadow-lg shadow-primary/25 flex items-center gap-2 text-sm sm:text-base px-4 sm:px-6 py-3"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {siteConfig.cta.primary}
              </Button>
            </a>
          </div>
        </div>
      </Container>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
