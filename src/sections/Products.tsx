"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components";

const products = [
  {
    name: "Healthy App",
    tagline: "Gestão de Saúde",
    description:
      "Plataforma completa para clínicas e profissionais de saúde gerenciarem pacientes, agenda, consultas e finanças em um só lugar.",
    features: ["Agenda de consultas", "Prontuário eletrônico", "Controle financeiro", "Relatórios"],
    images: [
      { src: "/images/healthy/app-preview.png", label: "Dashboard" },
      { src: "/images/healthy/agenda.png", label: "Agenda" },
      { src: "/images/healthy/pacientes.png", label: "Pacientes" },
      { src: "/images/healthy/planos.png", label: "Planos" },
      { src: "/images/healthy/config.png", label: "Configurações" },
    ],
  },
  {
    name: "Loca Fácil",
    tagline: "Gestão de Locações",
    description:
      "Sistema intuitivo para empresas de locação controlarem itens, clientes, contratos e pagamentos com total praticidade.",
    features: ["Cadastro de itens", "Controle de clientes", "Gestão de contratos", "Pagamentos"],
    images: [
      { src: "/images/locafacil/app-preview-locafacil.png", label: "Dashboard" },
      { src: "/images/locafacil/locacao.png", label: "Locações" },
      { src: "/images/locafacil/pagamentos.png", label: "Pagamentos" },
    ],
  },
];

export function Products() {
  const [active, setActive] = useState(0);
  const [slide, setSlide] = useState(0);

  const stateRef = useRef({ active, slide });
  stateRef.current = { active, slide };

  const currentImages = products[active].images;
  const safeSlide = slide % currentImages.length;

  const next = useCallback(() => {
    const { active: a, slide: s } = stateRef.current;
    const images = products[a].images;
    if (s + 1 >= images.length) {
      setActive((prev) => (prev + 1) % products.length);
      setSlide(0);
    } else {
      setSlide(s + 1);
    }
  }, []);

  const prev = () => {
    setSlide((s) => (s - 1 + currentImages.length) % currentImages.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="produtos" className="py-20 md:py-28 border-t border-gray-200 bg-white">
      <Container size="wide">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs tracking-widest text-gray-400">02 / PRODUTOS</span>
          <div className="h-px flex-1 max-w-16 bg-gray-200" />
        </div>
        <div className="grid md:grid-cols-12 gap-6 mb-14">
          <h2 className="md:col-span-6 font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900">
            Soluções prontas para o seu negócio
          </h2>
          <p className="md:col-span-5 md:col-start-8 text-gray-500 text-base leading-relaxed self-end">
            Produtos desenvolvidos para atender segmentos específicos com excelência.
          </p>
        </div>

        {/* Cards + Carousel */}
        <div className="grid lg:grid-cols-[2fr_3fr] gap-8 items-start">
          {/* Product list */}
          <div className="border-t border-gray-200">
            {products.map((product, index) => {
              const isActive = active === index;
              return (
                <button
                  key={index}
                  onClick={() => { setActive(index); setSlide(0); }}
                  className={`group w-full text-left border-b border-gray-200 border-l-2 pl-5 pr-4 py-6 transition-colors duration-200 cursor-pointer focus:outline-none ${
                    isActive ? "border-l-primary bg-gray-50" : "border-l-transparent hover:bg-gray-50"
                  }`}
                >
                  <span className={`font-mono text-xs tracking-widest mb-2 block transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-gray-400"
                  }`}>
                    {product.tagline}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4 text-gray-500">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                    {product.features.map((feature, i) => (
                      <span key={i} className="text-xs text-gray-500 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-gray-400" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Carousel */}
          <div className="lg:sticky lg:top-24">
            <div className="relative rounded-lg overflow-hidden border border-gray-200">
              {/* Slides */}
              <div className="relative overflow-hidden bg-gray-50" style={{ minHeight: "340px" }}>
                {currentImages.map((img, i) => (
                  <div
                    key={i}
                    className={`transition-opacity duration-500 ${i === safeSlide ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.label}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}

                {/* Prev / Next */}
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-gray-400 transition-colors"
                  aria-label="Anterior"
                >
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-gray-400 transition-colors"
                  aria-label="Próximo"
                >
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Label */}
                <div className="absolute bottom-3 left-3 z-10">
                  <span className="font-mono text-xs px-2.5 py-1 bg-white border border-gray-200 text-gray-700">
                    {currentImages[safeSlide].label}
                  </span>
                </div>
              </div>

              {/* Dots */}
              <div className="flex items-center justify-center gap-2 py-4 bg-white border-t border-gray-200">
                {currentImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`transition-all duration-300 ${
                      i === safeSlide ? "w-5 h-1 bg-primary" : "w-1 h-1 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
