"use client";

import { useState } from "react";
import { Container } from "@/components";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Software Sob Medida",
    description: "Sistemas personalizados que se adaptam às necessidades específicas do seu negócio.",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Automação de Processos",
    description: "Automatize tarefas repetitivas e aumente a eficiência operacional da empresa.",
    gradient: "from-primary to-violet-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Integrações",
    description: "Conecte sistemas e plataformas em um ecossistema digital totalmente integrado.",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Analytics & BI",
    description: "Dashboards e relatórios inteligentes para decisões baseadas em dados reais.",
    gradient: "from-violet-500 to-purple-500",
  },
];

export function Services() {
  const [active, setActive] = useState(1);

  return (
    <section id="servicos" className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.04)_0%,transparent_60%)]" />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex flex-col items-center gap-2 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Nossos Serviços</span>
            <div className="w-10 h-0.5 bg-linear-to-r from-primary to-cyan-500 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Soluções completas em{" "}
            <span className="text-gray-900">tecnologia</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            Um conjunto completo de serviços para transformar e otimizar sua operação
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const isActive = active === index;
            return (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`group relative rounded-2xl p-8 text-left transition-all duration-300 cursor-pointer border focus:outline-none
                  ${isActive
                    ? `bg-linear-to-br ${service.gradient} border-transparent shadow-2xl -translate-y-2`
                    : "bg-white border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-primary/20"
                  }`}
              >
                {/* Icon circle */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300
                  ${isActive
                    ? "bg-white/20 text-white"
                    : "bg-gray-50 text-primary group-hover:bg-primary/10"
                  }`}
                >
                  {service.icon}
                </div>

                <h3 className={`text-lg font-bold text-center mb-3 transition-colors duration-300
                  ${isActive ? "text-white" : "text-gray-900"}`}
                >
                  {service.title}
                </h3>

                <p className={`text-sm text-center leading-relaxed transition-colors duration-300
                  ${isActive ? "text-white" : "text-gray-500"}`}
                >
                  {service.description}
                </p>

                {/* Bottom line indicator */}
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
