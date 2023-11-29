import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import ClockIcon from '@/assets/icons/clock.svg';
import { LinkBox, LinkOverlay } from '@chakra-ui/react';

import Image from 'next/image';
import Link from 'next/link';

const blogFakeData = [
  {
    title: 'نرخ خرید تضمینی گندم ۱۵ هزار تومان تصویب شد',
    lastUpdate: '۲ ساعت قبل',
    image: 'wheat-2',
  },
  {
    title: 'رکورد صادرات و واردات چای شکسته شد',
    lastUpdate: '۵ ساعت قبل',
    image: 'tea',
  },
  {
    title: '۱۰۰ هزار تن گندم در ۶ استان خرید تضمینی شد',
    lastUpdate: '۲ اردیبهشت ۱۴۰۲',
    image: 'wheat',
  },
];

const BlogSuggestion = () => {
  return (
    <section className='mb-24 px-4 md:px-0'>
      <div className='mb-7 flex items-center justify-between'>
        <h2 className='text-lg font-bold'>جدیدترین‌های مجله</h2>
        <Link
          className='flex items-center gap-1 text-sm !text-primary-500'
          href='/'>
          <span>مشاهده همه</span>
          <ArrowLeftIcon width='20' height='20' />
        </Link>
      </div>
      <div className='flex flex-col gap-6 md:flex-row'>
        {blogFakeData.map((item, index) => {
          return (
            <LinkBox key={index} className='flex-1 rounded-md border p-4'>
              <Image
                width='352'
                height='165'
                alt={item.title}
                src={`/images/home/blog-${item.image}.png`}
                className='md:auto w-full rounded-md'
              />
              <div className='mt-3 flex flex-col gap-1'>
                <LinkOverlay href='/'>{item.title}</LinkOverlay>
                <div className='flex items-center gap-2 text-sm text-gray-500'>
                  <ClockIcon width='20' height='20' />
                  <span>{item.lastUpdate}</span>
                </div>
              </div>
            </LinkBox>
          );
        })}
      </div>
    </section>
  );
};

export default BlogSuggestion;
