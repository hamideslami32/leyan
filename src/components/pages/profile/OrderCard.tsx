import { Divider, IconButton } from '@chakra-ui/react';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import Image from 'next/image';
import Link from 'next/link';

const OrderCard = () => {
  return (
    <div className='flex flex-col gap-4 rounded-md border p-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4 text-sm'>
          <p>
            <span className='text-secondary-500'>شماره سفارش: </span>
            <span>۴۵۲۴۰۰۱۲۳</span>
          </p>
          <p>
            <span className='text-secondary-500'>تاریخ ثبت سفارش: </span>
            <span>۱۴۰۲/۹/۱۲ - ۱۳:۲۴</span>
          </p>
          <p>
            <span className='text-secondary-500'>مبلغ پرداختی: </span>
            <span>۲۴,۳۰۰,۰۰۰ تومان</span>
          </p>
        </div>
        <IconButton
          variant={'text'}
          as={Link}
          size={'sm'}
          href={'#'}
          aria-label='link-to-order-detail'
          icon={<ArrowLeftIcon />}
        />
      </div>
      <Divider />
      <div className='flex gap-6'>
        <div className=' h-20 w-20 overflow-hidden rounded-md border'>
          <Image
            className='object-cover'
            src='/images/product-sample.png'
            width='80'
            height='80'
            alt='product-image'
          />
        </div>
        <div>
          <p>الکتروپمپ پلی اتیلن 0.5 اسب بخار آبار پمپ مدل PM16</p>
          <p className='mt-2 flex items-center text-sm text-secondary-500'>
            <span className='ml-2 inline-block h-4 w-4 rounded-full bg-info'></span>
            رنگ آبی روشن
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
