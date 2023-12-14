import { Image } from '@chakra-ui/image';
import { Divider } from '@chakra-ui/layout';
import { Radio, RadioGroup } from '@chakra-ui/radio';

const ShippingMethods = () => {
  return (
    <div>
      <h2 className='mb-6 text-2xl font-bold'>نحوه ارسال</h2>
      <RadioGroup defaultValue='tipax' className='rounded-md border p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Radio value='tipax' size={'lg'} />
            <Image src='/images/tipax.png' alt='shipping-tipax' />
            <span>ارسال سفارشی تیپاکس</span>
          </div>
          <div className='text-sm text-secondary-600'>
            هزینه ارسال: ۱۲,۰۰۰ تومان
          </div>
        </div>
        <Divider className='my-4' />
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Radio value='postex' size={'lg'} />
            <Image src='/images/postex.png' alt='shipping-postex' />
            <span>ارسال ویژه پستکس</span>
          </div>
          <div className='text-sm text-secondary-600'>
            هزینه ارسال: ۱۲,۰۰۰ تومان
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default ShippingMethods;
