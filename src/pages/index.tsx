/* eslint-disable @next/next/no-img-element */
import BestSellers, {
  products,
} from '@/components/pages/home/best-sellers/BestSellers';
import BlogSuggestion from '@/components/pages/home/blog-suggestion/BlogSuggestion';
import Categories from '@/components/pages/home/categories/Categories';
import PopularCards from '@/components/pages/home/popular-cards/PopularCards';
import CustomCarousel from '@/components/shared/custom-carousel/CustomCarousel';
import ProductCard from '@/components/shared/product-card/ProductCard';
import Swiper from '@/components/shared/swiper/Swiper';
import { useWindowSize } from '@/utils/hooks/useWindowSize';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useMemo } from 'react';

const Home = () => {
  const renderedDataCustomSlider: ReactNode[] = useMemo(() => {
    return products.map((product, i) => (
      <ProductCard isBordered productData={product} key={i} showRating />
    ));
  }, []);

  const { width } = useWindowSize();

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
      <div className='mx-auto w-full max-w-cs'>
        <div className='mb-8 rounded-lg px-4 md:px-0'>
          <Swiper
            data={firstSliderData}
            showNavigation={width > 768}
            showPagination
            slidesPerView={1}
          />
        </div>
        <PopularCards />
        <Categories />
        <BestSellers />
        <div className='my-10 flex flex-col justify-between gap-4 px-4 md:flex-row md:px-0'>
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
        <BlogSuggestion />
      </div>
    </div>
  );
};

export default Home;
