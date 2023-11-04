import SearchIcon from '@/assets/icons/search.svg';
import Button from '@/components/shared/ui/button/Button';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);
  useEffect(() => {
    if (searchRef.current?.focus) {
      searchRef.current.addEventListener('focus', () => {
        setIsFocus(true);
      });
      searchRef.current.addEventListener('blur', () => {
        setIsFocus(false);
      });
    }
  }, []);
  return (
    <div
      className={classNames(
        'flex items-center border border-transparent pr-4 h-12 w-full max-w-[600px] text-sm bg-gray-200 placeholder:text-gray-600 rounded-md',
        isFocus && '!border-black',
      )}>
      <Button variant='icon'>
        <SearchIcon className={isFocus ? '' : 'text-gray-400'} />
      </Button>
      <input
        ref={searchRef}
        className='w-full h-full mr-2 px-1 bg-transparent outline-none'
        placeholder='جستجو در محصولات'
      />
    </div>
  );
};

export default SearchBar;
