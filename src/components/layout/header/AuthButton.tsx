import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

import Image from 'next/image';

// Menu icons
import UserIcon from '@/assets/icons/user.svg';
import BasketIcon from '@/assets/icons/basket.svg';
import WalletIcon from '@/assets/icons/wallet.svg';
import CommentIcon from '@/assets/icons/comment.svg';
import LogoutIcon from '@/assets/icons/logout.svg';
import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';

const AuthButton = () => {
  return (
    <div className='z-10'>
      <Menu variant={'authMenu'}>
        <MenuButton as={Button} leftIcon={<UserIcon />}>
          ورود یا ثبت‌نام
        </MenuButton>
        <MenuList>
          <MenuItem className='flex items-center justify-between'>
            <Image
              src='/images/avatar.png'
              width='32'
              height='32'
              alt='avatar'
            />
            <div>یونس نصرتهرانی</div>
            <ChevronLeftIcon />
          </MenuItem>
          <MenuDivider my={0} />
          <MenuItem icon={<BasketIcon />}>
            <div>سفارش‌ها</div>
          </MenuItem>
          <MenuItem icon={<WalletIcon />}>
            <div className='flex justify-between'>
              <span>کیف پول</span>
              <span className='text-sm text-gray-500'>۹۰۰,۰۰۰ تومان</span>
            </div>
          </MenuItem>
          <MenuItem icon={<CommentIcon />}>
            <div>دیدگاه‌ها</div>
          </MenuItem>
          <MenuItem icon={<LogoutIcon />}>خروج از حساب کاربری</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default AuthButton;
