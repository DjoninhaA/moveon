import { Container } from "@/components";

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Agilidade",
    description: "Processos mais rápidos e decisões ágeis com automação inteligente.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Redução de Custos",
    description: "Elimine tarefas manuais e reduza erros operacionais significativos.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Escalabilidade",
    description: "Soluções que crescem junto com o seu negócio sem limites.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Segurança",
    description: "Dados protegidos com as melhores práticas de segurança do mercado.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Precisão",
    description: "Elimine erros humanos com processos totalmente automatizados.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Suporte Integral",
    description: "Equipe especializada sempre pronta para ajudar quando precisar.",
  },
];

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: "#4F46E5"
      }}
    >
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/8 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/8 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left - Content */}
          <div>
            <div className="flex flex-col items-start gap-2 mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-white">Por que nos escolher</span>
              <div className="w-10 h-0.5 bg-linear-to-r from-white/60 to-cyan-300 rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Benefícios que{" "}
              <span className="text-white">fazem a diferença</span>
            </h2>
            <p className="text-white text-lg max-w-md leading-relaxed mb-8">
              Descubra como podemos transformar a operação da sua empresa com
              soluções tecnológicas de ponta.
            </p>

            {/* Stats */}
            <div className="flex gap-8">
              {[
                { value: "50+", label: "Projetos entregues" },
                { value: "98%", label: "Clientes satisfeitos" },
                { value: "5 anos", label: "De experiência" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Benefits Grid */}
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white mb-3.5 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-primary mb-1.5 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
