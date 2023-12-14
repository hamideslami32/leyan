import HeaderPortalTitle from '@/components/shared/header-portal-title/HeaderPortalTitle';
import EmptyAddress from '@/components/pages/checkout/EmptyAddress';
import ShippingMethods from '@/components/pages/checkout/ShippingMethods';
// import ShippingSchedule from '@/components/pages/checkout/ShippingSchedule';
import Invoice from '@/components/shared/invoice/Invoice';
import Stepper from '@/components/shared/stepper/Stepper';
import Portal from '@/utils/portal';
import { Heading } from '@chakra-ui/react';

const address = () => {
  return (
    <div className='mx-auto mb-10 max-w-cs'>
      <Portal destination='mobile-header-portal'>
        <HeaderPortalTitle title='زمان و نحوه ارسال' />
      </Portal>
      <Stepper activeStep={1} />
      <Heading mb={6} mt={10} size={'lg'}>
        آدرس تحویل سفارش
      </Heading>
      <div className='flex flex-col gap-4 md:flex-row'>
        <div className='flex flex-1 flex-col gap-10'>
          <EmptyAddress />
          <ShippingMethods />
        </div>
        <div className='md:w-[300px]'>
          <Invoice />
          <div className='pt-3 text-sm text-secondary-600'>
            هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از
            سبد حذف می‌شوند
          </div>
        </div>
      </div>
    </div>
  );
};

export default address;
