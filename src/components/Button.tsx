import clsx from "clsx";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  icon?: boolean;
};

export function Button({
  children,
  variant = "primary",
  href = "#",
  icon = false,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold transition-all duration-300",
        variant === "primary" &&
          "bg-[#7AC943] text-black hover:bg-[#8ee653] hover:shadow-[0_0_30px_rgba(122,201,67,0.35)]",
        variant === "secondary" &&
          "bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15",
        variant === "outline" &&
          "bg-transparent text-white ring-1 ring-white/20 hover:bg-white/10"
      )}
    >
      {children}
      {icon && <ArrowRight size={18} />}
    </a>
  );
}