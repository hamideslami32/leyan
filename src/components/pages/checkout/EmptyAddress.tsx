import LocationIcon from '@/assets/icons/location.svg';
import { Button } from '@chakra-ui/button';

const EmptyAddress = () => {
  return (
    <div className='flex h-80 flex-col items-center justify-center gap-4 rounded-md md:border'>
      <LocationIcon width='80' height='80' />
      <div className='text-lg font-bold'>هنوز آدرس ثبت نشده است</div>
      <div className='text-sm text-secondary-600'>
        برای پردازش و ارسال سفارش نیاز به ثبت آدرس پستی محل دریافت می‌باشد.
      </div>
      <Button>افزودن آدرس جدید</Button>
    </div>
  );
};

export default EmptyAddress;
