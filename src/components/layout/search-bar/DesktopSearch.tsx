/* eslint-disable @next/next/no-img-element */
import { Link, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { useState } from 'react';

import ClockIcon from '@/assets/icons/clock.svg';
import FireIcon from '@/assets/icons/fire.svg';
import { LinkType } from '@/types';
import LinkList from './LinkList';
import SearchInputWithRef from './SearchInputWithRef';

export const lastSearchData: LinkType[] = [
  {
    title: 'ابزارآلات کشاورزی',
    link: '/',
  },
  {
    title: 'ملزومات تراکتور',
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
    title: 'ملزومات تراکتور',
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
    title: 'ملزومات تراکتور',
    link: '/',
  },
  {
    title: 'کود های شیمیایی',
    link: '/',
  },
];

const DesktopSearch = () => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className='z-20 w-full'>
      <Menu isOpen={isFocus} isLazy closeOnSelect={false}>
        <MenuButton
          as={SearchInputWithRef}
          isFocus={isFocus}
          setIsFocus={setIsFocus}></MenuButton>
        <MenuList maxW={'600px'}>
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
        </MenuList>
      </Menu>
    </div>
  );
};

export default DesktopSearch;
