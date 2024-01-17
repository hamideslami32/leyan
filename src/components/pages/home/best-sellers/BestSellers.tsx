import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import ProductCard from '@/components/shared/product-card/ProductCard';
import Swiper from '@/components/shared/swiper/Swiper';
import { useWindowSize } from '@/utils/hooks/useWindowSize';
import { Button } from '@chakra-ui/react';

export const products = [
  {
    title: 'سری آبپاش رونیکس مدل RH-4017',
    remaining: 'تنها ۲ عدد در انبار باقی مانده',
    rating: '۴.۵',
    price: 355000,
    finalPrice: 28000,
  },
  {
    title: 'سری آبپاش رونیکس مدل RH-4017',
    remaining: 'تنها ۲ عدد در انبار باقی مانده',
    rating: '۴.۵',
    price: 355000,
    finalPrice: 28000,
  },
  {
    title: 'سری آبپاش رونیکس مدل RH-4017',
    remaining: 'تنها ۲ عدد در انبار باقی مانده',
    rating: '۴.۵',
    price: 355000,
    finalPrice: 28000,
  },
  {
    title: 'سری آبپاش رونیکس مدل RH-4017',
    remaining: 'تنها ۲ عدد در انبار باقی مانده',
    rating: '۴.۵',
    price: 355000,
    finalPrice: 28000,
  },
  {
    title: 'سری آبپاش رونیکس مدل RH-4017',
    remaining: 'تنها ۲ عدد در انبار باقی مانده',
    rating: '۴.۵',
    price: 355000,
    finalPrice: 28000,
  },
  {
    title: 'سری آبپاش رونیکس مدل RH-4017',
    remaining: 'تنها ۲ عدد در انبار باقی مانده',
    rating: '۴.۵',
    price: 355000,
    finalPrice: 28000,
  },
  {
    title: 'سری آبپاش رونیکس مدل RH-4017',
    remaining: 'تنها ۲ عدد در انبار باقی مانده',
    rating: '۴.۵',
    price: 355000,
    finalPrice: 28000,
  },
  {
    title: 'سری آبپاش رونیکس مدل RH-4017',
    remaining: 'تنها ۲ عدد در انبار باقی مانده',
    rating: '۴.۵',
    price: 355000,
    finalPrice: 28000,
  },
  {
    title: 'سری آبپاش رونیکس مدل RH-4017',
    remaining: 'تنها ۲ عدد در انبار باقی مانده',
    rating: '۴.۵',
    price: 355000,
    finalPrice: 28000,
  },
];

const BestSellers = () => {
  const renderedProducts = products.map((product, index) => (
    <ProductCard
      key={index}
      productData={product}
      className='h-44 !w-36 md:h-64 md:!w-60'
    />
  ));

  const { width } = useWindowSize();

  return (
    <div
      className='my-8 py-10 md:rounded-lg'
      style={{ backgroundImage: "url('/images/home/best-sellers-bg.png')" }}>
      {/* <Image
        width='1200'
        height='320'
        src='/images/home/best-sellers-bg.png'
        alt='best-sellers-bg'
        className='rounded-lg inline'
      /> */}
      <div className='z-10 flex h-full w-full items-center pr-4 md:pr-16'>
        <div>
          <h2 className='mb-3 text-center text-xl font-bold text-white md:text-3xl'>
            پـــــرفــــــــروش
            <br /> ‌تـریـــــــن‌هــای
            <br /> اخــیــــــــــــــــــــــر
          </h2>
          <Button
            variant='outline'
            rightIcon={<ArrowLeftIcon />}
            color='white'
            borderColor='white'
            size={'sm'}>
            مشاهده همه کالاها
          </Button>
        </div>
        <div className='flex flex-1 items-center gap-4 overflow-hidden pr-3 md:px-6'>
          <Swiper
            data={renderedProducts}
            slidesPerView={'auto'}
            radius='md'
            spaceBetween={width < 768 ? 4 : undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
