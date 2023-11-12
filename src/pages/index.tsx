/* eslint-disable @next/next/no-img-element */
import BestSellers, {
  products,
} from '@/components/pages/home/best-sellers/BestSellers';
import Categories from '@/components/pages/home/categories/Categories';
import PopularCards from '@/components/pages/home/popular-cards/PopularCards';
import CustomCarousel from '@/components/shared/custom-carousel/CustomCarousel';
import ProductCard from '@/components/shared/product-card/ProductCard';
import Swiper from '@/components/shared/swiper/Swiper';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useMemo } from 'react';

const Home = () => {
  const renderedDataCustomSlider: ReactNode[] = useMemo(() => {
    return products.map((product, i) => (
      <ProductCard productData={product} key={i} showRating />
    ));
  }, []);

  const firstSliderData: ReactNode[] = useMemo(() => {
    return [...new Array(5)].map((_, i) => (
      <div key={i} className='h-[400px]'>
        <img
          src='/images/home/banner.png'
          alt='banner'
          className='rounded-lg'
        />
      </div>
    ));
  }, []);

  return (
    <div className='p-6'>
      <div className='mx-auto w-full max-w-cs'>
        <div className='my-8 rounded-lg'>
          <Swiper data={firstSliderData} showNavigation showPagination />
        </div>
        <PopularCards />
        <Categories />
        <BestSellers />
        <div className='my-10 flex justify-between'>
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
        <CustomCarousel
          title={'تخفیف های ویژه'}
          link={'/'}
          data={renderedDataCustomSlider}
        />
        <CustomCarousel
          title={'بر اساس بازدید های شما'}
          link={'/'}
          data={renderedDataCustomSlider}
        />
      </div>
    </div>
  );
};

export default Home;
