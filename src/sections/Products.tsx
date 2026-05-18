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
    gradient: "from-cyan-500 to-teal-500",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
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
    gradient: "from-primary to-violet-500",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
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
    <section id="produtos" className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.04)_0%,transparent_70%)] pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex flex-col items-center gap-2 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Nossos Produtos</span>
            <div className="w-10 h-0.5 bg-linear-to-r from-primary to-cyan-500 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Soluções prontas para o seu negócio
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            Produtos desenvolvidos para atender segmentos específicos com excelência
          </p>
        </div>

        {/* Cards + Carousel */}
        <div className="grid lg:grid-cols-[2fr_3fr] gap-8 items-center">
          {/* Product cards */}
          <div className="flex flex-col gap-5">
            {products.map((product, index) => {
              const isActive = active === index;
              return (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`group relative rounded-2xl p-5 text-left transition-all duration-300 cursor-pointer border focus:outline-none
                    ${isActive
                      ? `bg-linear-to-br ${product.gradient} border-transparent shadow-2xl`
                      : "bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20"
                    }`}
                >
                  <div className="flex items-start gap-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300
                      ${isActive ? "bg-white/20 text-white" : "bg-gray-50 text-primary group-hover:bg-primary/10"}`}
                    >
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <span className={`text-xs font-bold uppercase tracking-widest mb-1 block transition-colors duration-300
                        ${isActive ? "text-white" : "text-primary"}`}
                      >
                        {product.tagline}
                      </span>
                      <h3 className={`text-xl font-bold mb-2 transition-colors duration-300
                        ${isActive ? "text-white" : "text-gray-900"}`}
                      >
                        {product.name}
                      </h3>
                      <p className={`text-sm leading-relaxed mb-4 transition-colors duration-300
                        ${isActive ? "text-white" : "text-gray-500"}`}
                      >
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, i) => (
                          <span
                            key={i}
                            className={`text-xs font-medium px-3 py-1 rounded-full transition-colors duration-300
                              ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"}`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={`mt-5 h-0.5 rounded-full transition-all duration-300
                    ${isActive ? "w-10 bg-white/50" : "w-0 bg-primary"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Carousel */}
          <div className="lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/60 bg-gray-50">
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Anterior"
                >
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Próximo"
                >
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Label */}
                <div className="absolute bottom-3 left-3 z-10">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/40 text-white backdrop-blur-sm">
                    {currentImages[safeSlide].label}
                  </span>
                </div>
              </div>

              {/* Dots */}
              <div className="flex items-center justify-center gap-2 py-4 bg-white">
                {currentImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === safeSlide ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
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
