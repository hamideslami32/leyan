import classNames from "classnames";
import { InputHTMLAttributes, ReactElement } from "react";

export interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  endIcon?: ReactElement
}

const Textfield = (props: TextfieldProps) => {
  const { label, className, endIcon, ...restProps } = props;
  return (
    <div className={classNames(className, 'bg-gray-200 text-gray-600 rounded-md h-12')}>
      {!!label && <span>{label}</span>}
      <input {...restProps} className="bg-transparent w-full p-3" />
      {endIcon}
    </div>
  );
};

export default Textfield;
