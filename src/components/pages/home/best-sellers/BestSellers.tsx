import Image from 'next/image';
import Button from '@/components/shared/ui/button/Button';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import ProductCard from '@/components/shared/product-card/ProductCard';
import Swiper from '@/components/shared/swiper/Swiper';

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
    <ProductCard key={index} productData={product} />
  ));
  return (
    <div className='my-8 relative max-w-[1200px] overflow-x-hidden'>
      <Image
        width='1200'
        height='320'
        src='/images/home/best-sellers-bg.png'
        alt='best-sellers-bg'
        className='rounded-lg inline'
      />
      <div className='absolute right-0 top-0 w-full h-full flex items-center pr-16'>
        <div>
          <h2 className='text-3xl text-center text-white font-bold mb-3'>
            پـــــرفــــــــروش
            <br /> ‌تـریـــــــن‌هــای
            <br /> اخــیــــــــــــــــــــــر
          </h2>
          <Button variant='white-outlined'>
            <span className='ml-2'>مشاهده همه کالاها</span>
            <ArrowLeftIcon />
          </Button>
        </div>
        <div className='flex-1 flex gap-4 items-center px-6 overflow-hidden'>
          <Swiper data={renderedProducts} slidesPerView={'auto'} radius='md' />
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
