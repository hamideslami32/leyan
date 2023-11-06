import { useState } from 'react';

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className='relative'>
      <div
        className='flex h-full w-full select-none items-center rounded-md bg-secondary-200 px-4'
        onClick={toggleHandler}>
        <p>دراپ داون</p>
      </div>
      {isOpen && (
        <div className='absolute left-0 right-0 top-full z-10 bg-secondary-100 p-4'>
          <div>آپشن یک</div>
          <div>آپشن دو</div>
        </div>
      )}
    </div>
  );
};

export default Select;
