import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { Input } from '@chakra-ui/react';
import classNames from 'classnames';

import SearchIcon from '@/assets/icons/search.svg';

interface SearchInputProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const SearchInput = (props: SearchInputProps) => {
  const { setIsOpen, isOpen } = props;
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchRef.current?.focus) {
      searchRef.current.addEventListener('focus', () => {
        setIsOpen(true);
      });
      searchRef.current.addEventListener('blur', () => {
        setIsOpen(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={classNames(
        'flex h-12 w-full items-center rounded-md border border-transparent bg-gray-100 pr-4 text-sm placeholder:text-gray-600 lg:max-w-[600px]',
        isOpen && '!border-black',
      )}>
      <SearchIcon className={isOpen ? '' : 'text-gray-400'} />
      <Input
        name='search'
        bgColor='transparent'
        ref={searchRef}
        className='bg-transpar mr-2 h-full w-full px-1'
        placeholder='جستجو در محصولات'
      />
    </div>
  );
};

export default SearchInput;
