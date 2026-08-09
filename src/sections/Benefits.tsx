import { Container } from "@/components";

const benefits = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Agilidade",
    description: "Processos mais rápidos e decisões ágeis com automação inteligente.",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Redução de Custos",
    description: "Elimine tarefas manuais e reduza erros operacionais significativos.",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Escalabilidade",
    description: "Soluções que crescem junto com o seu negócio sem limites.",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Segurança",
    description: "Dados protegidos com as melhores práticas de segurança do mercado.",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Precisão",
    description: "Elimine erros humanos com processos totalmente automatizados.",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Suporte Integral",
    description: "Equipe especializada sempre pronta para ajudar quando precisar.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-gray-900">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-14">
          {/* Left - Content */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs tracking-widest text-gray-500">05 / BENEFÍCIOS</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Benefícios que fazem a diferença
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-12">
              Descubra como podemos transformar a operação da sua empresa com
              soluções tecnológicas de ponta.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
              {[
                { value: "50+", label: "Projetos entregues" },
                { value: "98%", label: "Clientes satisfeitos" },
                { value: "5 anos", label: "De experiência" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-mono text-xl text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Benefits list */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 border-t border-white/10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="border-b border-white/10 sm:odd:border-r sm:border-white/10 p-6"
              >
                <div className="flex items-center gap-2.5 mb-3 text-gray-500">
                  {benefit.icon}
                  <h3 className="text-base font-semibold text-white">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
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
