import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "gold";
  className?: string;
}

const variants = {
  primary: "button-primary",
  secondary: "button-secondary",
  light: "button-light",
  gold: "button-gold",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${variants[variant]} ${className}`}
    >
      <span>{children}</span>

      <ArrowRight size={16} strokeWidth={1.8} />
    </Link>
  );
}