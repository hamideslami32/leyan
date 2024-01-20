import Image from 'next/image';
import { Button, Divider, Text } from '@chakra-ui/react';

import TrashIcon from '@/assets/icons/trash.svg';
import ShopIcon from '@/assets/icons/shop.svg';
import StarFilledIcon from '@/assets/icons/star-filled.svg';

const RegisteredComment = () => {
  return (
    <div className='flex gap-4 rounded-md border p-4'>
      <div>
        <div className='h-20 w-20 overflow-hidden rounded-md border'>
          <Image
            className='object-cover'
            src='/images/product-sample.png'
            width='80'
            height='80'
            alt='product-image'
          />
        </div>
      </div>
      <div className='flex-1'>
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <span className='text-lg font-bold'>عنوان نظر ثبت شده</span>
              <div className='flex items-center gap-1'>
                <span>۴.۵</span>
                <StarFilledIcon />
              </div>
            </div>
            <span className='rounded-lg bg-success-100 px-2 py-1 text-sm text-success'>
              تایید شده
            </span>
          </div>
          <p className='my-4 text-sm leading-7 text-secondary-500'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
          <div className='flex items-center gap-4 text-sm text-secondary-600'>
            <div className='flex items-center gap-1'>
              <p className='h-5 w-5 rounded-full bg-info'></p>
              <p>رنگ آبی روشن</p>
            </div>
            <div className='flex items-center gap-1'>
              <ShopIcon />
              <Text>فروشگاه نیرو ابزار</Text>
            </div>
          </div>
        </div>
        <Divider className='my-4' />
        <div className='text-left'>
          <Button
            variant={'outline'}
            leftIcon={<TrashIcon />}
            borderColor={'error.DEFAULT'}
            color='error.DEFAULT'>
            حذف دیدگاه
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisteredComment;
