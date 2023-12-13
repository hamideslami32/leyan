import { Button, Link } from '@chakra-ui/react';

import BasketIcon from '@/assets/icons/basket.svg';
import UserIcon from '@/assets/icons/user.svg';
import CategoryIcon from '@/assets/icons/category.svg';
import HomeIcon from '@/assets/icons/home.svg';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const bottomMenuData = [
  {
    title: 'خانه',
    link: '/',
    icon: <HomeIcon />,
  },
  {
    title: 'دسته‌بندی‌ها',
    link: '/categories',
    icon: <CategoryIcon />,
  },
  {
    title: 'سبد خرید',
    link: '/basket',
    icon: <BasketIcon />,
  },
  {
    title: 'حساب کاربری',
    icon: <UserIcon />,
  },
];

const BottomBar = () => {
  const pathName = usePathname();
  return (
    <div className='shadow-custom fixed bottom-0 left-0 right-0 z-30 w-screen border bg-white lg:hidden'>
      <ul className='flex'>
        {bottomMenuData.map((item, index) => (
          <Button
            as={Link}
            href={item.link}
            h={16}
            key={index}
            variant={'text'}
            className={classNames(
              'flex flex-1 flex-col gap-1 !rounded-none !text-sm !text-secondary-500 hover:bg-gray-200',
              pathName === item.link && '!text-secondary-900',
            )}>
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default BottomBar;
