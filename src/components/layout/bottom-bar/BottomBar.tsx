import { Button, Link } from '@chakra-ui/react';

import BasketIcon from '@/assets/icons/basket.svg';
import UserIcon from '@/assets/icons/user.svg';
import CategoryIcon from '@/assets/icons/category.svg';
import HomeIcon from '@/assets/icons/home.svg';

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
  return (
    <div className='shadow-custom fixed bottom-0 left-0 right-0 z-30 w-screen border bg-white lg:hidden'>
      <ul className='flex'>
        {bottomMenuData.map((item, index) => (
          <Button
            as={Link}
            href={item.link}
            h={14}
            key={index}
            variant={'text'}
            className='flex !h-16 flex-1 flex-col gap-1 !rounded-none !text-sm hover:bg-gray-200'>
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default BottomBar;
