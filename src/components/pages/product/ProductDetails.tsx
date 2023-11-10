import { useState } from 'react';
import Image from 'next/image';
import { Divider, Text, Box, Button } from '@chakra-ui/react';

import StarIcon from '@/assets/icons/star-empty.svg';
import CommentIcon from '@/assets/icons/comment.svg';
import PointIcon from '@/assets/icons/3-point.svg';
import InfoIcon from '@/assets/icons/info-colorize.svg';
import ShopIcon from '@/assets/icons/shop.svg';
import SecurityIcon from '@/assets/icons/security-ok.svg';
import ShareIcon from '@/assets/icons/share.svg';
import SplitIcon from '@/assets/icons/split.svg';
import BellIcon from '@/assets/icons/bell.svg';

function ProductDetails() {
  const [color, setColor] = useState<number>(0);

  return (
    <div className='flex flex-col gap-8 lg:flex-row'>
      <div className='flex w-full flex-col gap-8 lg:w-[70%] lg:flex-row'>
        <div className='flex w-full flex-col gap-3 lg:w-[45%]'>
          <div className='relative rounded-md border border-secondary-300'>
            <div className='absolute right-0 top-0 flex flex-col px-2 py-4'>
              <button className='p-3 text-secondary-500'>
                <ShareIcon />
              </button>
              <button className='p-3 text-secondary-500'>
                <SplitIcon />
              </button>
              <button className='p-3 text-secondary-500'>
                <BellIcon />
              </button>
            </div>
            <div className='jsutify-center mx-auto flex w-[80%] items-center'>
              <Image
                src='/images/product-sample.png'
                alt='product-image'
                width={1000}
                height={0}
                className='h-full w-full object-contain'
              />
            </div>
          </div>
          <div className='grid grid-cols-4 gap-3'>
            <div className='flex h-[70px] items-center justify-center rounded-md border border-secondary-300'></div>
            <div className='flex h-[70px] items-center justify-center rounded-md border border-secondary-300'></div>
            <div className='flex h-[70px] items-center justify-center rounded-md border border-secondary-300'></div>
            <div className='flex h-[70px] items-center justify-center rounded-md border border-secondary-300'>
              <PointIcon />
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col gap-4 lg:w-[55%]'>
          <Text as='b' fontSize='xl' color='black'>
            الکتروپمپ 0.5 اسب آبار پمپ مدل PM16
          </Text>
          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-2 text-secondary-600'>
              <StarIcon />
              <Text fontSize='sm' color='secondary.600'>
                ۴.۳ (از مجموع ۵۲ رای)
              </Text>
            </div>
            <div className='flex items-center gap-2 text-secondary-600'>
              <CommentIcon />
              <Text fontSize='sm' color='secondary.600'>
                ۸۲ دیدگاه
              </Text>
            </div>
          </div>
          <Divider color='secondary.300' />
          <div className='flex flex-col gap-10'>
            <div className='space-y-4'>
              <Text as='b' fontSize='lg' color='black'>
                رنگ: آبی روشن
              </Text>
              <div className='flex items-center gap-2'>
                <div
                  className={`h-8 w-8 rounded-full border-2 border-white bg-blue-500 ${
                    color == 0 ? 'outline outline-2 outline-black' : ''
                  } cursor-pointer`}
                  onClick={() => setColor(0)}></div>
                <div
                  className={`h-8 w-8 rounded-full border-2 border-white bg-blue-800 ${
                    color == 1 ? 'outline outline-2 outline-black' : ''
                  } cursor-pointer`}
                  onClick={() => setColor(1)}></div>
                <div
                  className={`bg-misc-khaki h-8 w-8 rounded-full border-2 border-white ${
                    color == 2 ? 'outline outline-2 outline-black' : ''
                  } cursor-pointer`}
                  onClick={() => setColor(2)}></div>
                <div
                  className={`h-8 w-8 rounded-full border-2 border-white bg-error ${
                    color == 3 ? 'outline outline-2 outline-black' : ''
                  } cursor-pointer`}
                  onClick={() => setColor(3)}></div>
                <div
                  className={`h-8 w-8 rounded-full border-2 border-white bg-black ${
                    color == 4 ? 'outline outline-2 outline-black' : ''
                  } cursor-pointer`}
                  onClick={() => setColor(4)}></div>
              </div>
            </div>
            <div className='space-y-4'>
              <Text as='b' fontSize='lg' color='black'>
                ویژگی‌ها
              </Text>
              <div className='space-y-2'>
                <Text color='secondary.600'>
                  جنس بدنه:
                  <span className='text-black'>پلی اتیلن</span>
                </Text>
                <Text color='secondary.600'>
                  محدوده ظرفیت:
                  <span className='text-black'> ۱۰.۱ تا ۲۰ لیتر گنجایش</span>
                </Text>
              </div>
            </div>
          </div>
          <Divider color='secondary.300' />
          <div className='flex items-start gap-2'>
            <div className='w-8'>
              <InfoIcon />
            </div>
            <div className='w-[calc(100%-2.5rem)]'>
              <Text fontSize='sm' color='secondary.600' lineHeight={5}>
                امکان برگشت کالا با دلیل «انصراف از خرید» تنها در صورتی مورد
                قبول است که پلمپ کالا باز نشده باشد. می‌توانید بعد از مهلت
                قانونی ۳۰ روزه، کالای خریداری‌شده را مرجوع کنید.
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-[30%]'>
        <Box
          p='6'
          display='flex'
          flexDirection='column'
          gap={3}
          bg='secondary.100'>
          <div className='flex items-center justify-between'>
            <Text fontSize='sm' color='secondary-500'>
              فروشنده
            </Text>
            <button className='text-sm text-blue-500'>4 فروشنده دیگر</button>
          </div>
          <Divider color='secondary.300' />
          <div className='flex items-center gap-3'>
            <ShopIcon />
            <Text fontSize='lg'>فروشگاه نیرو ابزار</Text>
            <span className='rounded-full bg-success-500 px-4 py-1 text-white'>
              <Text fontSize='sm'>منتخب</Text>
            </span>
          </div>
          <Divider color='secondary.300' />
          <div className='flex items-center gap-3'>
            <SecurityIcon />
            <Text fontSize='md'>گارانتی اصالت و سلامت فیزیکی کالا</Text>
          </div>
          <Divider color='secondary.300' />
          <div className='flex items-start justify-between'>
            <Text fontSize='md' color='secondary.500'>
              قیمت فروشنده
            </Text>
            <div className='flex flex-col items-end gap-3'>
              <div className='flex items-center gap-2'>
                <span className='rounded-full bg-error-500 px-4 py-1 text-white'>
                  <Text fontSize='sm'>12%</Text>
                </span>
                <Text as='del' fontSize='sm' color='secondary.500'>
                  35,500
                </Text>
              </div>
              <Text fontSize='sm'>
                <Text as='b' fontSize='md'>
                  28,000
                </Text>
                تومان
              </Text>
            </div>
          </div>
          <Button variant='black'>افزودن به سبد خرید</Button>
        </Box>
      </div>
    </div>
  );
}

export default ProductDetails;
