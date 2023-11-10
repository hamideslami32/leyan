/* eslint-disable @next/next/no-img-element */
import StarFilledIcon from '@/assets/icons/star-filled.svg';

interface ProductCardProps {
  showRating?: boolean;
  productData: any;
}

const ProductCard = (props: ProductCardProps) => {
  const { showRating = false, productData } = props;

  return (
    <div className='flex w-[240px] flex-col rounded-md bg-white'>
      <div className='h-[55%]'>
        <img
          alt='product-1'
          src='/images/product-sample.png'
          className='roundend-t-md mx-auto object-scale-down'
        />
      </div>
      <div className='flex flex-1 flex-col justify-between p-4'>
        <div className='text-sm'>{productData.title}</div>
        {showRating && (
          <div className='mt-2 flex items-center justify-between text-xs'>
            <span className='text-red-500'>{productData.remaining}</span>
            <span className='flex items-center'>
              <span className='ml-1 mt-1'>{productData.rating}</span>
              <StarFilledIcon width='16' height='16' />
            </span>
          </div>
        )}
        <div className='mt-4 flex justify-between'>
          {/* TODO // change bg-red-500 and add color pallete */}
          <span className='h-6 rounded-xl bg-red-500 px-3 py-1 text-xs text-white'>
            ۱۲٪
          </span>
          <div className='flex flex-col'>
            <span className='text-sm'>
              <span className='ml-1 text-xl font-bold'>
                {productData.finalPrice}
              </span>
              تومان
            </span>
            <span className='text-gray-600 line-through'>
              {productData.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
