/* eslint-disable @next/next/no-img-element */
import {
  Badge,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';
import BasketIcon from '@/assets/icons/basket.svg';
import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';
import ShopIcon from '@/assets/icons/shop.svg';
import Counter from '@/components/shared/counter/Counter';
import { useState } from 'react';

const BasketButton = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='z-10'>
      <Menu variant={'authMenu'}>
        <MenuButton variant='outline' as={Button} leftIcon={<BasketIcon />}>
          <span>سبد خرید</span>
          <span className='mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white'>
            2
          </span>
        </MenuButton>
        <MenuList className='w-96'>
          <div className='p-3'>
            <div className='flex !h-52 flex-col'>
              <div className='flex justify-between'>
                <span className='text-gray-600'>۲ کالا در سبد خرید</span>
                <Link className='flex gap-1 text-xs !text-primary-500' href='/'>
                  مشاهده سبد خرید
                  <ChevronLeftIcon width='16' height='16' />
                </Link>
              </div>
              <div className='mt-10 flex'>
                <img
                  className='px-5'
                  src='/images/product-sample-2.png'
                  alt='product-image'
                />
                <div className='flex-1'>
                  <p>الکتروپمپ پلی اتیلن 0.5 اسب بخار آبارا پمپ مدل PM16</p>
                  <div className='mt-3 flex items-center gap-2'>
                    <p className='h-6 w-6 rounded-md bg-info'></p>
                    <p className='text-sm text-gray-500'>رنگ آبی روشن</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className='flex !h-14 items-center gap-3'>
              <ShopIcon />
              <span>فروشگاه نیرو ابزار</span>
              <Badge
                rounded={'full'}
                bg='success.500'
                textColor='white'
                fontWeight={'light'}
                fontSize='.9em'>
                منتخب
              </Badge>
            </div>
            <hr />
            <div className='flex !h-28 justify-between py-4'>
              <div>
                <div className='text-sm text-gray-500'>قیمت فروشنده</div>
                <div className='mb-1 mt-2 text-xs text-error-500'>
                  ۱۲,۰۰۰ تومان تخفیف
                </div>
                <div>
                  <span className='ml-1 text-xl font-bold'>۲۸,۰۰۰</span>
                  <span>تومان</span>
                </div>
              </div>
              <div>
                <Counter count={count} setCount={setCount} />
              </div>
            </div>
          </div>
          <hr />
          <div className='flex justify-between p-3'>
            <div>
              <p className='mb-1 text-xs text-gray-600'>مبلغ قابل پرداخت</p>
              <p>
                <span className='ml-1 text-xl font-bold'>۲۸,۰۰۰</span>
                <span>تومان</span>
              </p>
            </div>
            <Button>ثبت سفارش</Button>
          </div>
        </MenuList>
      </Menu>
    </div>
  );
};

export default BasketButton;
