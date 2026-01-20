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
    { name: "Serviços", href: "#servicos" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Contato", href: "#contato" },
  ],

  // Informações de contato
  contact: {
    email: "nutrivita.app@gmail.com",
    phone: "(45) 99147-3601",
    whatsapp: "554591473601", // Número sem formatação para link
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
