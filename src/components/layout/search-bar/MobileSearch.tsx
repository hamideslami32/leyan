/* eslint-disable @next/next/no-img-element */
import {
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
} from '@chakra-ui/react';
import { useState } from 'react';

import ClockIcon from '@/assets/icons/clock.svg';
import FireIcon from '@/assets/icons/fire.svg';
import LinkList from './LinkList';
import { lastSearchData, mostPopularData } from './DesktopSearch';
import SearchInput from './SearchInput';

const MobileSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SearchInput isOpen={isOpen} setIsOpen={setIsOpen} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size={'full'}>
        <ModalContent>
          <ModalBody className='bg-white' px={4}>
            <ModalCloseButton />
            <div className='mt-10'>
              <SearchInput isOpen={isOpen} setIsOpen={setIsOpen} />
              <Link className='flex flex-col'>
                <img
                  alt='search-banner'
                  src='/images/search-sample.png'
                  className='rounded-lg object-cover py-4'
                />
              </Link>
              <div className='my-4'>
                <div className='flex items-center'>
                  <ClockIcon />
                  <span className='mr-3'>آخرین جستجو های شما</span>
                </div>
                <LinkList data={lastSearchData} />
              </div>
              <div className='my-8'>
                <div className='flex items-center'>
                  <FireIcon />
                  <span className='mr-3'>پرطرفدارترین جستجو‌ها</span>
                </div>
                <LinkList data={mostPopularData} />
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MobileSearch;
