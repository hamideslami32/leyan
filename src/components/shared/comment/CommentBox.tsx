import React from 'react';
import Image from 'next/image';
import { Text } from '@chakra-ui/react';

import ShopIcon from '@/assets/icons/shop.svg';
import StartsIcon from '@/assets/icons/star-filled.svg';

// TODO: Define a prop type for get data from props and set to this component
function CommentBox() {
  return (
    <div className='flex items-start gap-5'>
      <div className='flex h-10 w-10 items-center justify-center overflow-hidden rounded-full'>
        <Image
          src='/images/avatar.png'
          alt='username`s-avatar'
          width={200}
          height={0}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='w-[calc(100%-1.25rem-2.5rem)] space-y-3'>
        <div className='flex flex-wrap items-center justify-between gap-3'>
          <div className='flex flex-wrap items-center gap-3'>
            <Text>حسین کیانی</Text>
            <Text color='secondary.500'>خریدار</Text>
            <Text color='secondary.500'>23 روز پیش</Text>
          </div>
          <div className='flex gap-1'>
            <StartsIcon />
            <StartsIcon />
            <StartsIcon />
            <StartsIcon />
            <StartsIcon />
          </div>
        </div>
        <Text lineHeight={7}>
          ما سه شب توی هتل اقامت داشتیم رفتار پرسنل خوب نبود اکثرشون عصبی و
          مغرور . موکت ها کثیف .سرویس بهداشتی خوب تمیز نشده بود. صدا از اتاق های
          مجاور خیلی آزاردهنده بود حتی صداهای آروم هم منتقل میشد. اتاقهای بی نور
          یا کم نو بدون ویو و هواکش شبیه زندان انفرادی.
        </Text>
        <div className='flex items-center gap-2 text-secondary-500'>
          <ShopIcon style={{ width: '20px' }} />
          <Text fontSize='sm' color='secondary.500'>
            فروشنده: ابزار کشاورزی سپاهان
          </Text>
        </div>
      </div>
    </div>
  );
}

export default CommentBox;
