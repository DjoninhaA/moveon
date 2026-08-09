"use client";

import { useState } from "react";
import { Container } from "@/components";

const steps = [
  {
    number: "01",
    title: "Análise",
    description: "Entendemos seu negócio e identificamos oportunidades de melhoria.",
  },
  {
    number: "02",
    title: "Planejamento",
    description: "Desenhamos a solução ideal com escopo e cronograma definidos.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Construímos com metodologias ágeis e entregas incrementais.",
  },
  {
    number: "04",
    title: "Entrega & Suporte",
    description: "Implantação completa com suporte contínuo garantido.",
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="como-funciona" className="min-h-screen flex flex-col justify-center py-20 md:py-28 border-t border-white/10 bg-linear-to-b from-[#1c0f33] to-[#120821]">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs tracking-widest text-purple-300/60">06 / METODOLOGIA</span>
          <div className="h-px flex-1 max-w-16 bg-white/10" />
        </div>
        <div className="grid md:grid-cols-12 gap-6 mb-16">
          <h2 className="md:col-span-6 font-serif text-3xl md:text-4xl lg:text-5xl text-white">
            Como funciona
          </h2>
          <p className="md:col-span-5 md:col-start-8 text-purple-200/60 text-base leading-relaxed self-end">
            Processo estruturado que garante entregas de qualidade dentro do prazo.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-px bg-white/10">
          {steps.map((step, index) => {
            const isActive = active === index;
            return (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`group text-left p-6 md:p-8 transition-colors duration-200 cursor-pointer focus:outline-none border-t-2 ${
                  isActive ? "bg-white/5 border-primary-light" : "bg-transparent border-transparent hover:bg-white/5"
                }`}
              >
                <span className={`font-serif text-4xl md:text-5xl block mb-8 transition-colors duration-200 ${
                  isActive ? "text-primary-light" : "text-purple-300/30"
                }`}>
                  {step.number}
                </span>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-purple-200/60 leading-relaxed">
                  {step.description}
                </p>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
