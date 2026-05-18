/**
 * Configurações do site
 * Centralize informações que podem mudar aqui
 */

export const siteConfig = {
  name: "Move On",
  description: "Soluções em software e automação para impulsionar seu negócio",
  tagline: "Transforme sua empresa com tecnologia inteligente",

  // Links de navegação
  navigation: [
    { name: "Produtos", href: "#produtos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Contato", href: "#contato" },
  ],

  // Informações de contato
  contact: {
    email: "Comercial@moveonsistemas.com.br",
    phone: "(45) 99137-5409",
    whatsapp: "5545991375409", // Número sem formatação para link
    address: "Toledo, Pr",
  },

  // Redes sociais
  social: {
    linkedin: "https://linkedin.com/company/",
    github: "https://github.com/",
    instagram: "https://instagram.com/",
  },

  // CTAs
  cta: {
    primary: "Fale Conosco",
    secondary: "Saiba Mais",
  },

  // Mensagem padrão do WhatsApp
  whatsappMessage: "Olá! Gostaria de saber mais sobre os serviços da Move On.",
} as const;
