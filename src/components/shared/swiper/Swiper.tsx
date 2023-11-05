// Import Swiper React components
import { ReactNode } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

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

  return (
    <Swiper
      // breakpoints={breakpoints}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      className={classNames('relative', radius && `rounded-${radius}`)}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      mousewheel
      observer
      observeParents
      observeSlideChildren
      pagination={
        showPagination && {
          clickable: true,
        }
      }
      navigation={{
        prevEl: `#prev`,
        nextEl: `#next`,
      }}>
      {showNavigation && (
        <>
          <RightArrowCircle
            id='prev'
            width='40'
            height='40'
            className='text-white cursor-pointer z-10 absolute top-1/2 -translate-y-1/2 right-6'
          />
          <LeftArrowCircle
            id='next'
            width='40'
            height='40'
            className='text-white cursor-pointer z-10 absolute top-1/2 -translate-y-1/2 left-6'
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
