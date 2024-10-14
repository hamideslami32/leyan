import { Button } from '@chakra-ui/react';
import Image from 'next/image';

const WaitingForCommentsCard = () => {
  return (
    <div className='flex items-center justify-between rounded-md border p-4'>
      <div className='flex items-center gap-4'>
        <div className='h-20 w-20 overflow-hidden rounded-md border'>
          <Image
            className='object-cover'
            src='/images/product-sample.webp'
            width='80'
            height='80'
            alt='product-image'
          />
        </div>
        <p>شمش طلای ۵۰ گرمی</p>
      </div>
      <Button variant={'outline'}>ثبت دیدگاه</Button>
    </div>
  );
};

export default WaitingForCommentsCard;
