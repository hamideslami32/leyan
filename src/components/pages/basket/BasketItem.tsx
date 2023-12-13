/* eslint-disable @next/next/no-img-element */
import { Badge, Box } from '@chakra-ui/react';
import ShopIcon from '@/assets/icons/shop.svg';
import SecurityIcon from '@/assets/icons/security-ok.svg';
import Counter from '@/components/shared/counter/Counter';
import { useState } from 'react';

const BasketItem = () => {
  const [count, setCount] = useState(1);

  return (
    <Box
      className='relative flex w-full gap-4 border-b md:border'
      borderRadius={{ base: 'none', md: 'md' }}
      borderColor={'secondary.300'}
      px={{ base: 2, md: 6 }}
      py={7}
      h={64}>
      <div className='flex h-28 w-28 rounded-md border p-2'>
        <img
          alt='product-1'
          src='/images/product-sample.png'
          className='max-h-full object-scale-down'
        />
      </div>
      <div className='flex-1'>
        <div className='font-bold md:text-lg'>
          الکتروپمپ پلی اتیلن 0.5 اسب بخار آبار پمپ مدل PM16
        </div>
        <div className='my-6 flex flex-col gap-2 text-sm text-secondary-600'>
          <div className='flex items-center gap-1'>
            <span className='inline-block h-4 w-4 rounded-full bg-info'></span>
            <span>رنگ آبی روشن</span>
          </div>
          <div className='flex items-center gap-1'>
            <ShopIcon width='16' height='16' />
            <span>فروشگاه نیرو ابزار</span>
            <Badge
              rounded={'full'}
              bg='success.500'
              textColor='white'
              fontWeight={'light'}>
              منتخب
            </Badge>
          </div>
          <div className='flex items-center gap-1'>
            <SecurityIcon width='16' height='16' />
            <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='absolute right-2 mt-6 flex select-none items-center gap-3 md:static md:mt-0'>
            <div className='rounded-lg border border-secondary-900 px-3 py-2'>
              <Counter count={count} setCount={setCount} />
            </div>
            <div>
              <span className='ml-1 text-xl font-bold'>۲۸,۰۰۰</span>تومان
            </div>
            <div className='text-xs font-bold text-error'>
              ۱۲,۰۰۰ تومان تخفیف
            </div>
          </div>
          <div className='hidden text-xs text-secondary-600 md:block'>
            قیمت فروشنده
          </div>
        </div>
      </div>
    </Box>
  );
};

export default BasketItem;
