"use client";

import { useState } from "react";
import { Container } from "@/components";

const steps = [
  {
    number: "01",
    title: "Análise",
    description: "Entendemos seu negócio e identificamos oportunidades de melhoria.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    number: "02",
    title: "Planejamento",
    description: "Desenhamos a solução ideal com escopo e cronograma definidos.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    gradient: "from-primary to-violet-500",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Construímos com metodologias ágeis e entregas incrementais.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-500",
  },
  {
    number: "04",
    title: "Entrega & Suporte",
    description: "Implantação completa com suporte contínuo garantido.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-green-500",
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="como-funciona" className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.04)_0%,transparent_60%)] pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex flex-col items-center gap-2 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Nossa Metodologia</span>
            <div className="w-10 h-0.5 bg-linear-to-r from-primary to-cyan-500 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Como funciona
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            Processo estruturado que garante entregas de qualidade dentro do prazo
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => {
            const isActive = active === index;
            return (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`group relative rounded-2xl p-8 text-left transition-all duration-300 cursor-pointer border focus:outline-none
                  ${isActive
                    ? `bg-linear-to-br ${step.gradient} border-transparent shadow-2xl -translate-y-2`
                    : "bg-white border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-primary/20"
                  }`}
              >
                {/* Icon circle */}
                <div className={`w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center transition-all duration-300
                  ${isActive
                    ? "bg-white/20 text-white"
                    : "bg-gray-50 text-primary group-hover:bg-primary/10"
                  }`}
                >
                  {step.icon}
                </div>

                {/* Step number badge */}
                <div className="text-center mb-3">
                  <span className={`text-xs font-bold tracking-widest transition-colors duration-300
                    ${isActive ? "text-white/60" : "text-gray-400"}`}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className={`text-lg font-bold text-center mb-3 transition-colors duration-300
                  ${isActive ? "text-white" : "text-gray-900"}`}
                >
                  {step.title}
                </h3>

                <p className={`text-sm text-center leading-relaxed transition-colors duration-300
                  ${isActive ? "text-white/80" : "text-gray-500"}`}
                >
                  {step.description}
                </p>

                <div className={`mt-6 mx-auto h-0.5 rounded-full transition-all duration-300
                  ${isActive ? "w-10 bg-white/50" : "w-0 bg-primary"}`}
                />
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
