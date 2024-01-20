/* eslint-disable @next/next/no-img-element */
import MobileSearch from '@/components/layout/search-bar/MobileSearch';
import BestSellers from '@/components/pages/home/best-sellers/BestSellers';
import Swiper from '@/components/shared/swiper/Swiper';
import ExpandableText from '@/components/shared/ui/expandable-text/ExpandableText';
import Portal from '@/utils/portal';
import { Heading } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useMemo } from 'react';

const MainCategoryLanding = () => {
  const firstSliderData: ReactNode[] = useMemo(() => {
    return [...new Array(5)].map((_, i) => (
      <Link href={'/'} key={i}>
        <img
          src='/images/home/banner.png'
          alt='banner'
          className='!h-auto !w-full rounded-lg object-cover'
        />
      </Link>
    ));
  }, []);

  return (
    <div className='py-4'>
      <Portal destination='mobile-header-portal'>
        <MobileSearch />
      </Portal>
      <div className='mx-auto w-full max-w-cs'>
        <div className='mb-8 rounded-lg px-4 md:px-0'>
          <Swiper
            data={firstSliderData}
            showNavigation
            showPagination
            slidesPerView={1}
          />
        </div>
        <Image
          alt='banner'
          className='my-8 rounded-lg'
          src='/images/landing-banner.png'
          width='1200'
          height='150'
        />
        <BestSellers />
        <div className='my-16'>
          <Heading size={'md'} textAlign={'center'} className='mb-6'>
            ابزار آلات کشاورزی بر اساس برند
          </Heading>
          <div className='flex justify-center gap-4'>
            {[...new Array(5)].map((_, index) => (
              <Image
                key={index}
                alt='category'
                src='/images/landing-category.png'
                width='180'
                height='180'
              />
            ))}
          </div>
        </div>
        <div className='mt-10 flex flex-col justify-between gap-4 px-4 md:flex-row md:px-0'>
          <Link href='/'>
            <Image
              height='248'
              width='588'
              src='/images/home/middle-banner.png'
              alt='banner'
              className='rounded-lg'
            />
          </Link>
          <Link href='/'>
            <Image
              height='248'
              width='588'
              src='/images/home/middle-banner-2.png'
              alt='banner'
              className='rounded-lg'
            />
          </Link>
        </div>
        <div className='mt-32'>
          <Heading size={'md'} className='mb-3'>
            ابزارآلات کشاورزی
          </Heading>
          <ExpandableText noOfLines={3}>
            گوشی موبایل iPhone 13 CH پرچم‌دار جدید شرکت اپل است که با چند ویژگی
            جدید و دوربین دوگانه روانه بازار شده است. نمایشگر آیفون 13 به پنل
            Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه
            کند. این نمایشگر رزولوشن بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی
            6.1 اینچی‌اش، حدود 460 پیکسل را در هر اینچ جا داده است. امکان شارژ
            بی‌‌سیم باتری در این گوشی وجود دارد. تشخیص چهره با استفاده از دوربین
            جلو دیگر ویژگی است که در آیفون جدید اپل به کار گرفته شده است. از نظر
            سخت‌‌افزاری این گوشی از تراشه­‌ی جدید A15. گوشی موبایل iPhone 13 CH
            پرچم‌دار جدید شرکت اپل است که با چند ویژگی جدید و دوربین دوگانه
            روانه بازار شده است. نمایشگر آیفون 13 به پنل Super Retina مجهز ‌شده
            است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند. این نمایشگر رزولوشن
            بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 460
            پیکسل را در هر اینچ جا داده است. امکان شارژ بی‌‌سیم باتری در این
            گوشی وجود دارد. تشخیص چهره با استفاده از دوربین جلو دیگر ویژگی است
            که در آیفون جدید اپل به کار گرفته شده است. از نظر سخت‌‌افزاری این
            گوشی از تراشه­‌ی جدید A15
          </ExpandableText>
        </div>
      </div>
    </div>
  );
};

export default MainCategoryLanding;
