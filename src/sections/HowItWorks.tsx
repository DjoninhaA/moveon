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
    <section id="como-funciona" className="py-20 md:py-28 border-t border-gray-200 bg-gray-50">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs tracking-widest text-gray-400">06 / METODOLOGIA</span>
          <div className="h-px flex-1 max-w-16 bg-gray-200" />
        </div>
        <div className="grid md:grid-cols-12 gap-6 mb-16">
          <h2 className="md:col-span-6 font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900">
            Como funciona
          </h2>
          <p className="md:col-span-5 md:col-start-8 text-gray-500 text-base leading-relaxed self-end">
            Processo estruturado que garante entregas de qualidade dentro do prazo.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-px bg-gray-200">
          {steps.map((step, index) => {
            const isActive = active === index;
            return (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`group text-left p-6 md:p-8 transition-colors duration-200 cursor-pointer focus:outline-none border-t-2 ${
                  isActive ? "bg-white border-primary" : "bg-gray-50 border-transparent hover:bg-white"
                }`}
              >
                <span className={`font-serif text-4xl md:text-5xl block mb-8 transition-colors duration-200 ${
                  isActive ? "text-primary" : "text-gray-300"
                }`}>
                  {step.number}
                </span>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
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
