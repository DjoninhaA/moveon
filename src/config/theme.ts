/**
 * Tema centralizado da aplicação
 *
 * Para alterar as cores da aplicação, modifique apenas este arquivo.
 * As cores são exportadas e usadas no globals.css via CSS variables.
 *
 * COMO ALTERAR AS CORES:
 * 1. Modifique os valores hex abaixo
 * 2. As mudanças serão refletidas automaticamente em toda a aplicação
 *
 * Exemplo: Para mudar a cor primária para azul:
 * primary: '#3B82F6'
 */

export const theme = {
  colors: {
    // Cor principal da marca (botões, links, destaques)
    primary: "#6366F1", // Indigo - Mude aqui para alterar a cor principal
    primaryLight: "#818CF8",
    primaryDark: "#4F46E5",

    // Cor secundária/accent (elementos de destaque secundários)
    secondary: "#10B981", // Emerald - Mude aqui para alterar a cor secundária
    secondaryLight: "#34D399",
    secondaryDark: "#059669",

    // Cores neutras
    background: "#FFFFFF",
    backgroundAlt: "#F9FAFB",
    backgroundDark: "#111827",

    foreground: "#111827",
    foregroundMuted: "#6B7280",
    foregroundLight: "#9CA3AF",

    // Bordas e divisores
    border: "#E5E7EB",
    borderDark: "#374151",
  },

  // Espaçamentos padrão
  spacing: {
    section: "5rem", // py-20
    sectionMobile: "3rem", // py-12
  },

  // Tipografia
  fonts: {
    sans: "var(--font-geist-sans), system-ui, sans-serif",
    mono: "var(--font-geist-mono), monospace",
  },
} as const;

// Tipo para usar o tema de forma tipada
export type Theme = typeof theme;
