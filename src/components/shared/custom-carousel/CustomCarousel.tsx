import Link from 'next/link';
import { ReactNode } from 'react';
import SwiperCarousel from '../swiper/Swiper';

interface CustomCarouselProps {
  title: ReactNode;
  link: string;
  data: any[];
}

const CustomCarousel = (props: CustomCarouselProps) => {
  const { link, title, data } = props;
  return (
    <div className='relative my-16'>
      <div className='mb-8 flex items-center justify-between'>
        <span className='text-lg font-bold'>{title}</span>
        <Link href={link} className='text-sm text-blue-500'>
          مشاهده همه
        </Link>
      </div>
      <SwiperCarousel data={data} radius='md' />
    </div>
  );
};

export default CustomCarousel;
