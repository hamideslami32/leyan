import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

type Variants = "normal" | "outlined" | "icon";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variants;
}

const variantStyles: Record<Variants, string> = {
  normal: "!bg-black !text-white",
  outlined: "!border-black border",
  icon: "!px-0",
};

const Button = (props: ButtonProps) => {
  const { children, className, variant = "normal" } = props;
  return (
    <button
      className={classNames(
        "flex gap-2 px-4 items-center h-12 rounded-md",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
