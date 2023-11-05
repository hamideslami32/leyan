/* eslint-disable @next/next/no-img-element */
import StarFilledIcon from '@/assets/icons/star-filled.svg';

interface ProductCardProps {
  showRating?: boolean;
  productData: any;
}

const ProductCard = (props: ProductCardProps) => {
  const { showRating = false, productData } = props;
  return (
    <div className='w-[240px] bg-white rounded-md flex flex-col'>
      <div className='h-[55%]'>
        <img
          className='mx-auto
           roundend-t-md object-scale-down'
          alt='product-1'
          src='/images/product-sample.png'
        />
      </div>
      <div className='flex-1 p-4 flex flex-col justify-between'>
        <div className='text-sm'>{productData.title}</div>
        {showRating && (
          <div className='flex justify-between items-center text-xs mt-2'>
            <span className='text-red-500'>{productData.remaining}</span>
            <span className='flex items-center'>
              <span className='ml-1 mt-1'>{productData.rating}</span>
              <StarFilledIcon width='16' height='16' />
            </span>
          </div>
        )}
        <div className='flex justify-between mt-4'>
          {/* TODO // change bg-red-500 and add color pallete */}
          <span className='h-6 bg-red-500 px-3 py-1 rounded-xl text-xs text-white'>
            ۱۲٪
          </span>
          <div className='flex flex-col'>
            <span className='text-sm'>
              <span className='text-xl ml-1 font-bold'>
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
