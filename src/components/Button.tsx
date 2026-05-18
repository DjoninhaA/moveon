import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-white hover:text-primary shadow-lg shadow-primary/25 hover:shadow-primary/40",
    secondary:
      "bg-secondary text-white hover:bg-secondary-dark shadow-lg shadow-secondary/25 hover:shadow-secondary/40",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-foreground-muted hover:text-primary hover:bg-background-alt",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
