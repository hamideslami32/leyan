/* eslint-disable @next/next/no-img-element */
import {
  Button,
  IconButton,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from '@chakra-ui/react';
import { useState } from 'react';

import LinkList from './LinkList';
import { lastSearchData, mostPopularData } from './DesktopSearch';
import SearchInput from './SearchInput';

import ClockIcon from '@/assets/icons/clock.svg';
import FireIcon from '@/assets/icons/fire.svg';
import SearchIcon from '@/assets/icons/search.svg';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';

const MobileSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        as={Button}
        onClick={() => setIsOpen(true)}
        rounded={'lg'}
        justifyContent={'start'}
        leftIcon={<SearchIcon className={isOpen ? '' : 'text-gray-400'} />}
        className='text !flex w-full justify-start !bg-gray-100  !text-sm !text-gray-400'>
        جستجو در محصولات
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size={'full'}>
        <ModalContent bg={'white'}>
          <ModalHeader px={4} py={2}>
            <IconButton
              aria-label='back'
              w={12}
              height={12}
              icon={<ArrowRightIcon />}
              variant={'outline'}
              rounded={'xl'}
              onClick={() => setIsOpen(false)}
            />
          </ModalHeader>
          <ModalBody px={4}>
            <div>
              <SearchInput isOpen={isOpen} setIsOpen={setIsOpen} />
              <Link className='flex flex-col rounded-lg py-4'>
                <img
                  alt='search-banner'
                  src='/images/search-sample.png'
                  className='rounded-lg object-cover'
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
