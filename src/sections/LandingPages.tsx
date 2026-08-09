"use client";

import Image from "next/image";
import { Container } from "@/components";

const portfolio = [
  {
    name: "Recanto Madeira",
    niche: "Espaço para Eventos",
    description: "Landing page para espaço de eventos com área para casamentos, festas e celebrações ao ar livre.",
    tag: "Eventos",
    image: "/images/landingpages/recanto-madeira.png",
    url: "https://www.recantomadeira.com/",
  },
  {
    name: "Willian Schroder",
    niche: "Maquiagem & Beleza",
    description: "Página de apresentação pessoal para artista de maquiagem especialista em transformar olhares e histórias.",
    tag: "Beleza",
    image: null,
    url: null,
  },
  {
    name: "Adriana Grando",
    niche: "Psicoterapia de Casal",
    description: "Landing page profissional para psicóloga especialista em terapia de casal e relacionamentos.",
    tag: "Saúde Mental",
    image: "/images/landingpages/adriana-grando.png",
    url: null,
  },
  {
    name: "Benassi Odontologia",
    niche: "Clínica Odontológica",
    description: "Página de captação de pacientes para clínica odontológica com foco em saúde e bem-estar bucal.",
    tag: "Saúde",
    image: "/images/landingpages/odontologia-benassi.png",
    url: null,
  },
  {
    name: "Pablo Tattoo",
    niche: "Estúdio de Tatuagem",
    description: "Landing page criativa para estúdio de tatuagem com portfólio, agendamento e identidade visual marcante.",
    tag: "Arte & Tatuagem",
    image: "/images/landingpages/tattoo.png",
    url: "https://www.pablotattoo.com.br/",
  },
];

export function LandingPages() {
  return (
    <section id="portfolio" className="py-20 md:py-28 border-t border-gray-200 bg-white">
      <Container size="wide">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs tracking-widest text-gray-400">04 / PORTFÓLIO</span>
          <div className="h-px flex-1 max-w-16 bg-gray-200" />
        </div>
        <div className="grid md:grid-cols-12 gap-6 mb-14">
          <h2 className="md:col-span-6 font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900">
            Landing pages que já entregamos
          </h2>
          <p className="md:col-span-5 md:col-start-8 text-gray-500 text-base leading-relaxed self-end">
            Páginas de alta conversão criadas para negócios reais em diferentes segmentos.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {portfolio.map((item, index) => {
            const Wrapper = item.url ? "a" : "div";
            const wrapperProps = item.url
              ? { href: item.url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={index}
                {...wrapperProps}
                className="group relative bg-white block"
              >
                {/* Preview */}
                <div className="relative h-48 overflow-hidden bg-gray-50 border-b border-gray-200">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center">
                      <span className="font-mono text-xs text-gray-400">Preview em breve</span>
                    </div>
                  )}
                  <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest px-2 py-1 bg-white border border-gray-200 text-gray-700">
                    {item.tag.toUpperCase()}
                  </span>
                  {item.url && (
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-900 bg-white px-2.5 py-1 border border-gray-200">
                        Ver site
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="font-mono text-[11px] tracking-widest text-primary mb-3">{item.niche.toUpperCase()}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </Wrapper>
            );
          })}

          {/* CTA card */}
          <div className="group relative bg-gray-50 flex flex-col items-center justify-center p-8 text-center hover:bg-gray-100 transition-colors duration-300 min-h-[280px] cursor-pointer">
            <span className="font-serif text-3xl text-gray-300 mb-4">+</span>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Seu negócio aqui</h3>
            <p className="text-sm text-gray-500 mb-4">Vamos criar sua landing page de alta conversão?</p>
            <a
              href="#contato"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Fale conosco →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
