import classNames from "classnames";
import { InputHTMLAttributes } from "react";

export interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Textfield = (props: TextfieldProps) => {
  const { label, className, ...restProps } = props;
  return (
    <div className={classNames(className, 'bg-gray-300 text-gray-600 rounded-md')}>
      {!!label && <span>{label}</span>}
      <input {...restProps} className="bg-transparent" />
    </div>
  );
};

export default Textfield;
