"use client";

import { useState } from "react";
import { Container } from "@/components";

const services = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Software Sob Medida",
    description: "Sistemas personalizados que se adaptam às necessidades específicas do seu negócio.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Automação de Processos",
    description: "Automatize tarefas repetitivas e aumente a eficiência operacional da empresa.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Integrações",
    description: "Conecte sistemas e plataformas em um ecossistema digital totalmente integrado.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Analytics & BI",
    description: "Dashboards e relatórios inteligentes para decisões baseadas em dados reais.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Landing Pages",
    description: "Páginas de alta conversão para campanhas, lançamentos e captação de clientes.",
  },
];

export function Services() {
  const [active, setActive] = useState(1);

  return (
    <section id="servicos" className="min-h-screen flex flex-col justify-center py-20 md:py-28 border-t border-white/10 bg-linear-to-b from-[#1c0f33] to-[#120821]">
      <Container size="wide">
        {/* Section Header */}
        <div className="grid md:grid-cols-12 gap-6 mb-14 items-end">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-base tracking-widest text-purple-300/60">03 / SERVIÇOS</span>
              <div className="h-px flex-1 max-w-16 bg-white/10" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
              Soluções completas em tecnologia
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-purple-200/60 text-base leading-relaxed">
              Um conjunto completo de serviços para transformar e otimizar sua operação.
            </p>
          </div>
        </div>

        {/* Services list */}
        <div className="border-t border-white/10">
          {services.map((service, index) => {
            const isActive = active === index;
            return (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`group w-full text-left border-b border-white/10 transition-colors duration-200 cursor-pointer focus:outline-none ${
                  isActive ? "bg-white/5" : "hover:bg-white/5"
                }`}
              >
                <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-center px-1 py-6 md:py-7">
                  <div
                    className={`md:col-span-1 border-l-2 pl-4 -ml-1 font-mono text-sm transition-colors duration-200 ${
                      isActive ? "border-primary-light text-primary-light" : "border-transparent text-purple-300/40"
                    }`}
                  >
                    0{index + 1}
                  </div>
                  <div className={`md:col-span-1 transition-colors duration-200 ${isActive ? "text-primary-light" : "text-purple-300/40"}`}>
                    {service.icon}
                  </div>
                  <h3 className="md:col-span-4 text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="md:col-span-5 text-sm text-purple-200/60 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="md:col-span-1 flex md:justify-end">
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isActive ? "text-primary-light translate-x-1" : "text-white/20"}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
