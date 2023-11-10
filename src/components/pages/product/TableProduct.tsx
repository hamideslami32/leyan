import React from 'react';
import { Text } from '@chakra-ui/react';

function TableProduct() {
  return (
    <div className='space-y-5 divide-y divide-secondary-300'>
      <div className='flex w-full gap-3 pt-5'>
        <div className='w-[170px]'>
          <Text color='secondary.500'>ابعاد</Text>
        </div>
        <div className='w-[calc(100%-170px)]'>
          <Text color='black'>۱۴۶.۷x۷۱.۵x۷.۶۵</Text>
        </div>
      </div>
      <div className='flex w-full gap-3 pt-5'>
        <div className='w-[170px]'>
          <Text color='secondary.500'>ساختار بدنه</Text>
        </div>
        <div className='w-[calc(100%-170px)]'>
          <Text color='black' lineHeight={7}>
            قاب جلویی و پشتی از جنس شیشه فریم از جنس آلومینیومی صفحه‌نمایش با
            شیشه مقاوم در برابر خط‌وخش با پوشش Gorilla Glass سرامیکی دارای
            استاندارد IP۶۸ (مقاومت در برابر نفوذ آب، گِل، گرد و خاک) دارای
            مقاومت تا ۳۰ دقیقه در آب تا عمق ۶ متر
          </Text>
        </div>
      </div>
      <div className='flex w-full gap-3 pt-5'>
        <div className='w-[170px]'>
          <Text color='secondary.500'>بازه‌ی اندازه صفحه نمایش</Text>
        </div>
        <div className='w-[calc(100%-170px)]'>
          <Text color='black'>۶.۰ اینچ و بزرگتر</Text>
        </div>
      </div>
      <div className='flex w-full gap-3 pt-5'>
        <div className='w-[170px]'>
          <Text color='secondary.500'>فناوری صفحه‌نمایش</Text>
        </div>
        <div className='w-[calc(100%-170px)]'>
          <Text color='black'>Super Retina XDR OLED</Text>
        </div>
      </div>
      <div className='flex w-full gap-3 pt-5'>
        <div className='w-[170px]'>
          <Text color='secondary.500'>ویژگی‌های خاص</Text>
        </div>
        <div className='w-[calc(100%-170px)] space-y-1'>
          <Text color='black'>مقاوم در برابر آب</Text>
          <Text color='black'>دارای بدنه مقاوم</Text>
          <Text color='black'>مناسب عکاسی</Text>
          <Text color='black'>مناسب بازی</Text>
          <Text color='black'>مجهز به حس‌گر تشخیص چهره</Text>
        </div>
      </div>
    </div>
  );
}

export default TableProduct;
