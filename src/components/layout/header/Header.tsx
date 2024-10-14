import Link from 'next/link';
import BasketButton from './BasketButton';
import AuthButton from './AuthButton';
import DesktopSearch from '../search-bar/DesktopSearch';

const Header = () => {
  return (
    <header className='border-b border-gray-200 px-4 py-2 lg:px-0'>
      <div className='mx-auto flex w-full max-w-cs justify-between'>
        <div className='hidden flex-1 items-center md:flex'>
          <Link href='/' className='ml-6 hidden items-center lg:flex'>
            <span className='text-4xl font-bold'>لیان</span>
          </Link>
          <DesktopSearch />
        </div>
        <div id='mobile-header-portal' className='w-full md:hidden'></div>
        {/* <div className='font-bold md:hidden'>
          سبد خرید
          <span className='mr-2 inline-grid h-6 w-6 place-items-center rounded-full bg-error text-xs text-white'>
            ۲
          </span>
        </div> */}
        <div className='flex-end hidden gap-4 lg:flex'>
          <BasketButton />
          <AuthButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
