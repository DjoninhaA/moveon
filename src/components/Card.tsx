import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "bordered";
  hover?: boolean;
}

export function Card({
  children,
  className = "",
  variant = "default",
  hover = true,
}: CardProps) {
  const variants = {
    default: "bg-white",
    elevated: "bg-white shadow-xl",
    bordered: "bg-white border border-border",
  };

  const hoverClass = hover
    ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    : "";

  return (
    <div
      className={`rounded-2xl p-6 md:p-8 ${variants[variant]} ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
}

interface CardIconProps {
  children: ReactNode;
  className?: string;
}

export function CardIcon({ children, className = "" }: CardIconProps) {
  return (
    <div
      className={`w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 ${className}`}
    >
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return (
    <h3 className={`text-xl font-semibold text-foreground mb-2 ${className}`}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({
  children,
  className = "",
}: CardDescriptionProps) {
  return (
    <p className={`text-foreground-muted leading-relaxed ${className}`}>
      {children}
    </p>
  );
}
