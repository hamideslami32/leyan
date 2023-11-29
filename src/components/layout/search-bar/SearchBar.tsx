/* eslint-disable @next/next/no-img-element */
import SearchIcon from '@/assets/icons/search.svg';
import {
  Button,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuList,
  Modal,
  ModalContent,
  forwardRef,
} from '@chakra-ui/react';
import classNames from 'classnames';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import ClockIcon from '@/assets/icons/clock.svg';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import FireIcon from '@/assets/icons/fire.svg';
import { useWindowSize } from '@/utils/hooks/useWindowSize';

const SearchInput = forwardRef((props, ref) => {
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
        variant={'unstyled'}
        ref={searchRef}
        className='bg-transpar mr-2 h-full w-full px-1'
        placeholder='جستجو در محصولات'
      />
    </div>
  );
});

const SearchBar = () => {
  const [isFocus, setIsFocus] = useState(false);

  const { width } = useWindowSize();

  return (
    <div className='z-20 w-full'>
      <Menu variant={'authMenu'} isOpen={isFocus}>
        <MenuButton
          w={'full'}
          as={SearchInput}
          isFocus={isFocus}
          setIsFocus={setIsFocus}></MenuButton>
        <MenuList className='w-full'>
          <Link className='flex flex-col'>
            <img
              alt='search-banner'
              src='/images/search-sample.png'
              className='rounded-lg object-cover p-4'
            />
          </Link>
          <div className='my-4 pr-4'>
            <div className='flex items-center'>
              <ClockIcon />
              <span className='mr-3'>آخرین جستجو های شما</span>
            </div>
            <div className='mt-4 flex gap-3 overflow-x-auto'>
              <Button
                as={Link}
                variant={'outline'}
                className='!border-gray-300'
                rightIcon={<ArrowLeftIcon />}>
                ابزارآلات کشاورزی
              </Button>
              <Button
                as={Link}
                variant={'outline'}
                className='!border-gray-300'
                rightIcon={<ArrowLeftIcon />}>
                ملزومات تراکتور
              </Button>
              <Button
                as={Link}
                variant={'outline'}
                className='!border-gray-300'
                rightIcon={<ArrowLeftIcon />}>
                کود های شیمیایی
              </Button>
            </div>
          </div>
          <div className='my-8 pr-4'>
            <div className='flex items-center'>
              <FireIcon />
              <span className='mr-3'>پرطرفدارترین جستجو‌ها</span>
            </div>
            <div className='mt-4 flex gap-3 overflow-x-auto'>
              <Button
                as={Link}
                variant={'outline'}
                className='!border-gray-300'
                rightIcon={<ArrowLeftIcon />}>
                ابزارآلات کشاورزی
              </Button>
              <Button
                as={Link}
                variant={'outline'}
                className='!border-gray-300'
                rightIcon={<ArrowLeftIcon />}>
                ملزومات تراکتور
              </Button>
              <Button
                as={Link}
                variant={'outline'}
                className='!border-gray-300'
                rightIcon={<ArrowLeftIcon />}>
                کود های شیمیایی
              </Button>
            </div>
          </div>
          {
            <Modal size={'full'} isOpen={false} onClose={() => undefined}>
              <ModalContent>test</ModalContent>
            </Modal>
          }
        </MenuList>
      </Menu>
    </div>
  );
};

export default SearchBar;
