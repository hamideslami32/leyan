import Image from 'next/image';

import SearchBar from '../search-bar/SearchBar';
import Link from 'next/link';
import { useWindowSize } from '@/utils/hooks/useWindowSize';
import BasketButton from './BasketButton';
import AuthButton from './AuthButton';

const Header = () => {
  const { width } = useWindowSize();
  return (
    <header className='border-b border-gray-200 px-2 py-4 md:px-0'>
      <div className='mx-auto flex w-full max-w-cs justify-between'>
        <div className='flex flex-1 items-center'>
          {width > 768 && (
            <Link href='/' className='ml-6 flex items-center'>
              <Image
                width='132'
                height='33'
                src={'/logo.svg'}
                alt='logo'
                draggable={false}
              />
            </Link>
          )}
          <SearchBar />
        </div>
        {width > 768 && (
          <div className='flex-end flex gap-4'>
            <BasketButton />
            <AuthButton />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
