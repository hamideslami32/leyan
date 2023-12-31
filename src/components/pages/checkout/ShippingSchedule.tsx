import { Divider } from '@chakra-ui/layout';
import { Radio, RadioGroup } from '@chakra-ui/radio';

const ShippingSchedule = () => {
  return (
    <div>
      <h2 className='mb-6 text-2xl font-bold'>زمان ارسال</h2>
      <RadioGroup defaultValue='shipping' className='rounded-md p-4 md:border'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Radio value='1' size={'lg'} />
            <span>شنبه ۲۶ اردیبهشت ۱۴۰۲</span>
          </div>
          <div className='text-sm text-secondary-600'>ساعت ۹ الی ۲۲</div>
        </div>
        <Divider className='my-4' />
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Radio value='2' size={'lg'} />
            <span>یکشنبه ۲۷ اردیبهشت ۱۴۰۲</span>
          </div>
          <div className='text-sm text-secondary-600'>ساعت ۹ الی ۲۲</div>
        </div>
        <Divider className='my-4' />
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Radio value='3' size={'lg'} />
            <span>دوشنبه ۲۸ اردیبهشت ۱۴۰۲</span>
          </div>
          <div className='text-sm text-secondary-600'>ساعت ۹ الی ۲۲</div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default ShippingSchedule;
