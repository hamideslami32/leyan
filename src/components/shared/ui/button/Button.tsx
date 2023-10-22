import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  const { children, className } = props;
  return <button className={classNames('h-12 rounded-md', className)}>{children}</button>;
};

export default Button;
