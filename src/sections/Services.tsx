import { Container } from "@/components";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Software Sob Medida",
    description: "Sistemas personalizados que se adaptam às necessidades específicas do seu negócio.",
    color: "cyan",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Automação de Processos",
    description: "Automatize tarefas repetitivas e aumente a eficiência operacional.",
    color: "primary",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Integrações",
    description: "Conecte sistemas e plataformas em um ecossistema integrado.",
    color: "emerald",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Analytics & BI",
    description: "Dashboards e relatórios para decisões baseadas em dados.",
    color: "violet",
  },
];

const colorClasses = {
  cyan: "from-cyan-500 to-cyan-600 shadow-cyan-500/30",
  primary: "from-primary to-primary-dark shadow-primary/30",
  emerald: "from-emerald-500 to-emerald-600 shadow-emerald-500/30",
  violet: "from-violet-500 to-violet-600 shadow-violet-500/30",
};

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Decorative Curves - Top */}
      <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none opacity-20">
        <svg viewBox="0 0 1200 200" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,100 Q300,20 600,100 T1200,100"
            fill="none"
            stroke="url(#services-gradient-1)"
            strokeWidth="1.5"
          />
          <path
            d="M0,120 Q300,40 600,120 T1200,120"
            fill="none"
            stroke="url(#services-gradient-2)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="services-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="services-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Dots */}
      <div className="absolute top-20 left-[10%] w-2 h-2 bg-primary/15 rounded-full animate-pulse" />
      <div className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-cyan-500/15 rounded-full animate-pulse delay-500" />
      <div className="absolute bottom-32 left-[20%] w-1 h-1 bg-violet-500/15 rounded-full animate-pulse delay-300" />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/5 border border-primary/10 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm text-gray-600 font-medium">Nossos Serviços</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Soluções completas em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
              tecnologia
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Oferecemos um conjunto completo de serviços para transformar e otimizar sua operação
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} flex items-center justify-center text-white mb-5 shadow-lg`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-2 text-gray-400 group-hover:text-primary transition-colors">
                <span className="text-sm">Saiba mais</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
