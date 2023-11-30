import { useEffect, useRef } from 'react';
import { Input, forwardRef } from '@chakra-ui/react';
import classNames from 'classnames';

import SearchIcon from '@/assets/icons/search.svg';

const SearchInputWithRef = forwardRef((props, ref) => {
  const { setIsFocus, isFocus } = props;
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchRef.current?.focus) {
      searchRef.current.addEventListener('focus', () => {
        setIsFocus(true);
      });
      searchRef.current.addEventListener('blur', () => {
        setIsFocus(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      className={classNames(
        'flex h-12 w-full items-center rounded-md border border-transparent bg-gray-100 pr-4 text-sm placeholder:text-gray-600 lg:max-w-[600px]',
        isFocus && '!border-black',
      )}>
      <SearchIcon className={isFocus ? '' : 'text-gray-400'} />
      <Input
        name='search'
        bgColor='transparent'
        ref={searchRef}
        className='bg-transpar mr-2 h-full w-full px-1'
        placeholder='جستجو در محصولات'
      />
    </div>
  );
});

export default SearchInputWithRef;
