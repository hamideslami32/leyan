import Image from 'next/image';
import Link from 'next/link';
import BasketButton from './BasketButton';
import AuthButton from './AuthButton';
import { useWindowSize } from '@/utils/hooks/useWindowSize';
import DesktopSearch from '../search-bar/DesktopSearch';
import MobileSearch from '../search-bar/MobileSearch';

const Header = () => {
  const { width } = useWindowSize();
  return (
    <header className='border-b border-gray-200 px-4 py-4 lg:px-0'>
      <div className='mx-auto flex w-full max-w-cs justify-between'>
        <div className='flex flex-1 items-center'>
          <Link href='/' className='ml-6 hidden items-center lg:flex'>
            <Image
              width='132'
              height='33'
              src={'/logo.svg'}
              alt='logo'
              draggable={false}
            />
          </Link>
          {width > 768 ? <DesktopSearch /> : <MobileSearch />}
        </div>
        <div className='flex-end hidden gap-4 lg:flex'>
          <BasketButton />
          <AuthButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
