import React, { useState } from 'react';

type dataType = {
  id: number;
  title: string;
  tag: string;
};

type ProductTabbarProps = {
  className?: string;
  data: dataType[];
};

function ProductTabbar(props: ProductTabbarProps) {
  const { className, data } = props;

  const [tab, setTab] = useState<number>(0);

  const handleClick = (item: dataType) => {
    setTab(item.id);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <ul className='flex items-end justify-start border-b border-secondary-300'>
        {data.length
          ? data.map(item => (
              <li
                key={item.id}
                className={`cursor-pointer border-b-2 px-5 py-4 text-center ${
                  tab === item.id
                    ? 'border-secondary-900 text-secondary-900'
                    : 'border-transparent text-secondary-500'
                }`}
                onClick={() => handleClick(item)}>
                {item.title}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default ProductTabbar;
