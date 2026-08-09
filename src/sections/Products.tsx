"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components";

const products = [
  {
    name: "Healthy App",
    tagline: "Gestão de Saúde",
    description:
      "Plataforma completa para clínicas e profissionais de saúde gerenciarem pacientes, agenda, consultas e finanças em um só lugar.",
    features: ["Agenda de consultas", "Prontuário eletrônico", "Controle financeiro", "Relatórios"],
    url: "https://healthyapp.com.br/",
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
      "Sistema completo para empresas de locação gerenciarem clientes, itens, inventários, locações e catálogos, com controle financeiro integrado em pagamentos.",
    features: ["Clientes", "Itens", "Inventários", "Locações", "Catálogos", "Pagamentos"],
    url: "https://locafacil.moveonsistemas.com.br/",
    images: [
      { src: "/images/locafacil/app-preview-locafacil.png", label: "Dashboard" },
      { src: "/images/locafacil/locacao.png", label: "Locações" },
      { src: "/images/locafacil/pagamentos.png", label: "Pagamentos" },
      { src: "/images/locafacil/catalogo.png", label: "Catalogos" },
    ],
  },
];

export function Products() {
  const [active, setActive] = useState(0);
  const [mainIndex, setMainIndex] = useState(0);
  const product = products[active];
  const mainImage = product.images[mainIndex];

  const selectProduct = (index: number) => {
    setActive(index);
    setMainIndex(0);
  };

  const prevImage = () => {
    setMainIndex((i) => (i - 1 + product.images.length) % product.images.length);
  };

  const nextImage = () => {
    setMainIndex((i) => (i + 1) % product.images.length);
  };

  return (
    <section id="produtos" className="min-h-screen flex flex-col justify-center py-20 md:py-28 border-t border-gray-200 bg-white">
      <Container size="wide">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-base tracking-widest text-gray-400">02 / PRODUTOS</span>
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

        {/* Product tabs */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 mb-10">
          {products.map((p, index) => {
            const isActive = active === index;
            return (
              <button
                key={index}
                onClick={() => selectProduct(index)}
                className={`px-1 pb-4 -mb-px border-b-2 transition-colors duration-200 cursor-pointer focus:outline-none ${
                  isActive ? "border-primary" : "border-transparent"
                }`}
              >
                <span className={`font-mono text-xs tracking-widest block mb-1 transition-colors duration-200 ${
                  isActive ? "text-primary" : "text-gray-400"
                }`}>
                  {p.tagline}
                </span>
                <span className={`text-lg font-semibold transition-colors duration-200 ${
                  isActive ? "text-gray-900" : "text-gray-400"
                }`}>
                  {p.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product content */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Info */}
          <div className="lg:col-span-4">
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-8">
              {product.features.map((feature, i) => (
                <span key={i} className="text-xs text-gray-500 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gray-400" />
                  {feature}
                </span>
              ))}
            </div>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
            >
              Acessar {product.name}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Image gallery */}
          <div className="lg:col-span-8">
            {/* Main image */}
            <div className="relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50 mb-3">
              <Image
                src={mainImage.src}
                alt={mainImage.label}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />

              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="Imagem anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="Próxima imagem"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              <span className="absolute bottom-2 left-2 font-mono text-[10px] tracking-widest px-2 py-1 bg-white/95 border border-gray-200 text-gray-700 rounded">
                {mainImage.label.toUpperCase()}
              </span>

              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/95 border border-gray-200 text-gray-700 text-[11px] font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                Visitar site
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setMainIndex(i)}
                    className={`rounded-md overflow-hidden border-2 bg-gray-50 transition-colors cursor-pointer ${
                      i === mainIndex ? "border-primary" : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.label}
                      width={300}
                      height={200}
                      className="w-full h-auto object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
