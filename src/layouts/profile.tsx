import Image from 'next/image';
import { ReactNode } from 'react';
import { Button, Divider, IconButton, Link } from '@chakra-ui/react';

import EditIcon from '@/assets/icons/edit.svg';
import Basket2Icon from '@/assets/icons/basket-2.svg';
import WalletIcon from '@/assets/icons/wallet.svg';
import CommentIcon from '@/assets/icons/comment.svg';
import LocationIcon from '@/assets/icons/location.svg';
import UserIcon from '@/assets/icons/user.svg';
import LogoutIcon from '@/assets/icons/logout.svg';

const sideBarItems = [
  {
    icon: <Basket2Icon />,
    title: 'سفارش‌ها',
    link: '/profile/orders',
  },
  {
    icon: <WalletIcon />,
    title: 'کیف پول',
    link: '/profile/wallet',
  },
  {
    icon: <CommentIcon />,
    title: 'دیدگاه‌ها',
    link: '/profile/comments',
  },
  {
    icon: <LocationIcon />,
    title: 'آدرس‌ها',
    link: '/profile/address',
  },
  {
    icon: <UserIcon />,
    title: 'اطلاعات حساب کاربری',
    link: '/profile/user-info',
  },
];

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='mx-auto my-6 flex max-w-cs gap-8'>
      <div className='flex min-h-[500px] w-[280px] flex-col gap-5 rounded-md p-3 shadow-cs'>
        <div className='flex gap-2'>
          <Image
            width='56'
            height='56'
            src={'/images/profile-avatar.png'}
            alt='profile-avatar'
          />
          <div className='flex flex-1 justify-between'>
            <div>
              <p>یونس نصراصفهانی</p>
              <p className='text-sm text-secondary-500'>۰۹۱۳۰۱۹۹۴۲۷</p>
            </div>
            <IconButton
              size={'sm'}
              variant={'icon'}
              icon={<EditIcon width='20' heigh='20' />}
              color={'info.DEFAULT'}
              aria-label='edit-user-info'
            />
          </div>
        </div>
        <Divider />
        <div className='flex flex-col gap-3'>
          <div className='flex items-center justify-between text-sm text-secondary-600'>
            <span>موجودی کیف پول</span>
            <p className='flex items-center gap-1'>
              <span className='text-lg font-bold text-secondary-900'>
                ۹۰۰,۰۰۰
              </span>
              <span>تومان</span>
            </p>
          </div>
          <Button variant={'outline'} w={'full'}>
            افزایش موجودی
          </Button>
        </div>
        <Divider />
        <div className='flex flex-col gap-5 text-sm text-secondary-600'>
          {sideBarItems.map(item => (
            <Link
              href={item.link}
              key={item.title}
              className='flex items-center gap-2'>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
          <div className='flex cursor-pointer items-center gap-2'>
            <LogoutIcon />
            <span>خروج از حساب کاربری</span>
          </div>
        </div>
      </div>
      <div className='flex-1 rounded-md border'>{children}</div>
    </div>
  );
};

export default ProfileLayout;
