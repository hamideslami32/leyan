import ProfileLayout from '@/layouts/profile';
import { Button, Divider, IconButton, Text } from '@chakra-ui/react';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import CommentIcon from '@/assets/icons/comment.svg';
import SecurityIcon from '@/assets/icons/security-ok.svg';
import ShopIcon from '@/assets/icons/shop.svg';
import Image from 'next/image';

const OrderDetail = () => {
  return (
    <ProfileLayout>
      <div className='flex items-center gap-2'>
        <IconButton
          variant={'text'}
          icon={<ArrowRightIcon />}
          aria-label='back-to-orders'
        />
        <h1 className='text-xl font-bold'>جزئیات سفارش ۴۵۲۴۰۰۱۲۳</h1>
      </div>
      <div className='mt-4 flex items-center gap-2 rounded-md border px-4 py-6 font-bold text-secondary-400'>
        <Text color={'success.DEFAULT'}>دریافت سفارش</Text>
        <div className='flex-1 border-t border-dashed border-secondary-400'></div>
        <Text>پردازش سفارش</Text>
        <div className='flex-1 border-t border-dashed border-secondary-400'></div>
        <Text>آماده سازی ارسال</Text>
        <div className='flex-1 border-t border-dashed border-secondary-400'></div>
        <Text>ارسال مرسوله</Text>
        <div className='flex-1 border-t border-dashed border-secondary-400'></div>
        <Text>تحویل مرسوله</Text>
      </div>
      <div className='mt-4 flex flex-col gap-4 rounded-md border p-4'>
        <div>
          <div className='mb-3 flex items-center gap-4'>
            <p className='flex-1'>
              <span className='text-secondary-500'>شماره سفارش: </span>
              <span>۴۵۲۴۰۰۱۲۳</span>
            </p>
            <p className='flex-1'>
              <span className='text-secondary-500'>تاریخ ثبت سفارش: </span>
              <span>۱۴۰۲/۹/۱۲ - ۱۳:۲۴</span>
            </p>
            <p className='flex-1'>
              <span className='text-secondary-500'>مبلغ پرداختی: </span>
              <span>۲۴,۳۰۰,۰۰۰ تومان</span>
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <p className='flex-1'>
              <span className='text-secondary-500'>شیوه ارسال: </span>
              <span>پست سفارشی تیپاکس</span>
            </p>
            <p className='flex-1'>
              <span className='text-secondary-500'>زمان تحویل: </span>
              <span>۶ تا ۹ روز کاری</span>
            </p>
            <p className='flex-1'>
              <span className='text-secondary-500'>نحوه پرداخت: </span>
              <span>پرداخت نقدی (درب محل)</span>
            </p>
          </div>
        </div>
        <Divider />
        <div className='flex flex-col gap-2 text-secondary-600'>
          <div className='text-secondary-900'>
            اصفهان، خیابان شیخ بهایی، خیابان مستهلک، کوچه کاج، پلاک ۱۵، واحد ۱
          </div>
          <div>تحویل گیرنده: مهدی نصراصفهانی</div>
          <div>زمان ارسال: شنبه ۲۶ اردیبهشت، ساعت ۹ الی ۲۲</div>
        </div>
        <Divider />
        <div className='flex justify-between'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-3'>
              <div className='h-20 w-20 overflow-hidden rounded-md border'>
                <Image
                  className='object-cover'
                  src='/images/product-sample.webp'
                  width='80'
                  height='80'
                  alt='product-image'
                />
              </div>
              <div className='w-calc[100%-150px-0.75rem] flex flex-col gap-4'>
                <Text lineHeight={7}>شمش طلای ۵۰ گرمی</Text>
              </div>
            </div>
            <div className='mr-[88px] flex items-center gap-3'>
              <ShopIcon />
              <Text fontSize='sm'>فروشگاه طلای زرین</Text>
              <span className='rounded-full bg-success-500 px-4 py-1 text-white'>
                <Text fontSize='xs'>منتخب</Text>
              </span>
            </div>
            <div className='mr-[88px] flex items-center gap-3'>
              <SecurityIcon />
              <Text fontSize='sm'>گارانتی اصالت و سلامت فیزیکی کالا</Text>
            </div>
          </div>
          <div className='flex flex-col items-end justify-between'>
            <Button
              size={'sm'}
              variant='text'
              color={'info.DEFAULT'}
              leftIcon={<CommentIcon width='20' height='20' />}>
              ثبت دیدگاه
            </Button>
            <div className='text-sm text-secondary-600'>
              <span>قیمت فروشنده</span>
              <p>
                <span className='text-lg font-bold text-secondary-900'>
                  ۲۸,۰۰۰
                </span>
                <span className='mr-1'>تومان</span>
              </p>
            </div>
          </div>
        </div>
        <Divider />
        <div className='text-left'>
          <Button variant={'outline'} h='10'>
            لغو سفارش
          </Button>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default OrderDetail;
