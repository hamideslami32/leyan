// Import Swiper React components
import { ReactNode, useRef } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

import RightArrowCircle from '@/assets/icons/right-arrow-circle.svg';
import LeftArrowCircle from '@/assets/icons/left-arrow-circle.svg';
import classNames from 'classnames';

export interface CustomSwiperCarouselProps extends SwiperProps {
  data: ReactNode[];
  showPagination?: boolean;
  showNavigation?: boolean;
  radius?: 'md' | 'lg' | 'xl';
}

const SwiperCarousel = (props: CustomSwiperCarouselProps) => {
  const {
    data = [],
    slidesPerView = 'auto',
    showPagination,
    showNavigation,
    spaceBetween = 24,
    radius,
  } = props;

  const swiperRef = useRef<SwiperType>();

  return (
    <Swiper
      onBeforeInit={swiper => {
        swiperRef.current = swiper;
      }}
      // breakpoints={breakpoints}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      className={classNames('relative', radius && `rounded-${radius}`)}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={swiper => console.log(swiper)}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      mousewheel
      observer
      observeParents
      observeSlideChildren
      pagination={
        showPagination && {
          clickable: true,
        }
      }>
      {showNavigation && (
        <>
          <RightArrowCircle
            onClick={() => swiperRef.current?.slidePrev()}
            width='40'
            height='40'
            className='absolute right-6 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-white'
          />
          <LeftArrowCircle
            onClick={() => swiperRef.current?.slideNext()}
            width='40'
            height='40'
            className='absolute left-6 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-white'
          />
        </>
      )}

      {!!data.length &&
        data.map((item, index) => {
          return <SwiperSlide key={index}>{item}</SwiperSlide>;
        })}
    </Swiper>
  );
};

export default SwiperCarousel;
