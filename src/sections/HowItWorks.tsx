import { Container } from "@/components";

const steps = [
  {
    number: "01",
    title: "Análise",
    description: "Entendemos seu negócio e identificamos oportunidades de melhoria.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: "from-cyan-500 to-teal-500",
    bgLight: "bg-cyan-50",
    borderColor: "border-cyan-200",
  },
  {
    number: "02",
    title: "Planejamento",
    description: "Desenhamos a solução ideal com escopo e cronograma definidos.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    color: "from-primary to-violet-500",
    bgLight: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Construímos com metodologias ágeis e entregas incrementais.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: "from-violet-500 to-purple-500",
    bgLight: "bg-violet-50",
    borderColor: "border-violet-200",
  },
  {
    number: "04",
    title: "Entrega & Suporte",
    description: "Implantação completa com suporte contínuo garantido.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-emerald-500 to-green-500",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.04)_0%,transparent_60%)] pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex flex-col items-center gap-2 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Nossa Metodologia</span>
            <div className="w-10 h-0.5 bg-linear-to-r from-primary to-cyan-500 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Como{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-cyan-500">
              funciona
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            Processo estruturado que garante entregas de qualidade dentro do prazo
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute top-13 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-cyan-300 via-primary to-emerald-400 opacity-40 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className={`${step.bgLight} border ${step.borderColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1`}>
                {/* Icon circle */}
                <div className={`w-15 h-15 mx-auto mb-5 rounded-full bg-linear-to-br ${step.color} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}>
                  {step.icon}
                </div>

                {/* Step number badge */}
                <div className="text-center mb-3">
                  <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-linear-to-r ${step.color} text-white`}>
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-center text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow on mobile/tablet between steps */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-3">
                  <svg className="w-5 h-5 text-gray-300 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
