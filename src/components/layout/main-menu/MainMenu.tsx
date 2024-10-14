import BurgerMenuIcon from '@/assets/icons/burger-menu.svg';
import LocationIcon from '@/assets/icons/location.svg';
import Button from '@/components/shared/ui/button/Button';
import MegaMenu from './mega-menu/MegaMenu';

import { Menu, MenuButton, MenuList } from '@chakra-ui/react';
import Link from 'next/link';

const links = [
  { link: '#', title: 'تخفیف‌های ویژه', icon: '' },
  { link: '#', title: 'پرفروش‌ترین‌ها', icon: '' },
  { link: '#', title: 'خرید اقساطی', icon: '' },
  { link: '#', title: 'مجله لیان', icon: '' },
  { link: '#', title: 'فروشنده شوید!', icon: '' },
];

const MainMenu = () => {
  return (
    <div className='my-3 hidden place-items-center lg:grid'>
      <div className='flex w-full max-w-cs items-center justify-between'>
        <div className='flex items-center'>
          <div className='z-10 ml-10 flex items-center gap-3'>
            <Menu>
              <MenuButton>
                <BurgerMenuIcon />
              </MenuButton>
              <MenuList className='-mr-10 !py-0'>
                <MegaMenu />
              </MenuList>
            </Menu>
            <Button variant='icon'></Button>
            <span className='text-lg'>دسته‌بندی کالاها</span>
          </div>
          <nav>
            <ul className='flex'>
              {links.map((item, index) => (
                <li
                  key={index}
                  className='border-b-2 border-transparent py-1 hover:border-green-500'>
                  <Link href={item.link} className='ml-3 text-gray-500'>
                    {item.icon}
                    <span className='mr-2'>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Button className='flex items-center' variant='text'>
          <LocationIcon width='20' height='20' />
          <span className='text-sm'>ارسال به تهران</span>
        </Button>
      </div>
    </div>
  );
};

export default MainMenu;
