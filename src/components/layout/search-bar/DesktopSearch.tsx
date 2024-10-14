/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from 'react';
import { Card, Input, Link } from '@chakra-ui/react';

import SearchIcon from '@/assets/icons/search.svg';

import ClockIcon from '@/assets/icons/clock.svg';
import FireIcon from '@/assets/icons/fire.svg';
import { LinkType } from '@/types';
import LinkList from './LinkList';
import SearchInput from './SearchInput';
import classNames from 'classnames';

import { useOutsideClick } from '@chakra-ui/react';

export const lastSearchData: LinkType[] = [
  {
    title: 'ابزارآلات کشاورزی',
    link: '/',
  },
  {
    title: 'شمش ۵۰ گرمی',
    link: '/',
  },
  {
    title: 'کود های شیمیایی',
    link: '/',
  },
  {
    title: 'ابزارآلات کشاورزی',
    link: '/',
  },
  {
    title: 'شمش ۵۰ گرمی',
    link: '/',
  },
  {
    title: 'کود های شیمیایی',
    link: '/',
  },
];

export const mostPopularData: LinkType[] = [
  {
    title: 'ابزارآلات کشاورزی',
    link: '/',
  },
  {
    title: 'شمش ۵۰ گرمی',
    link: '/',
  },
  {
    title: 'کود های شیمیایی',
    link: '/',
  },
];

const DesktopSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const searchListRef = useRef<HTMLDivElement>(null);

  useOutsideClick({ ref: searchListRef, handler: () => setIsOpen(false) });

  return (
    <div className='relative z-20 w-full'>
      <div
        onClick={() => setIsOpen(true)}
        className={classNames(
          'flex h-12 w-full items-center rounded-md border border-transparent bg-gray-100 pr-4 text-sm placeholder:text-gray-600 lg:max-w-[600px]',
          isOpen && '!border-black',
        )}>
        <SearchIcon className={isOpen ? '' : 'text-gray-400'} />
        <Input
          name='search'
          readOnly
          bgColor='transparent'
          className='bg-transpar h-full w-full px-1'
          placeholder='جستجو در محصولات'
        />
      </div>
      {isOpen && (
        <Card
          maxW={600}
          ref={searchListRef}
          position={'absolute'}
          className='-top-0'>
          <SearchInput isOpen={isOpen} setIsOpen={setIsOpen} />
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
            <LinkList data={lastSearchData} />
          </div>
          <div className='my-8 pr-4'>
            <div className='flex items-center'>
              <FireIcon />
              <span className='mr-3'>پرطرفدارترین جستجو‌ها</span>
            </div>
            <LinkList data={mostPopularData} />
          </div>
        </Card>
      )}
    </div>
  );
};

export default DesktopSearch;
