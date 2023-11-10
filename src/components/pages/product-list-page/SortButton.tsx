import { ReactNode } from 'react';

interface SortButtonProps {
  children?: ReactNode;
  active?: boolean;
}

const SortButton = (props: SortButtonProps) => {
  const { children, active } = props;

  return (
    <button
      className={`text-sm ${active ? 'text-[#4FA45C]' : 'text-gray-600'}`}>
      {children}
    </button>
  );
};

export default SortButton;
