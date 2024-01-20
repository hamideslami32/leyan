import HeaderPortalTitle from '@/components/shared/header-portal-title/HeaderPortalTitle';
import Invoice from '@/components/shared/invoice/Invoice';
import Stepper from '@/components/shared/stepper/Stepper';
import Portal from '@/utils/portal';
import { Heading } from '@chakra-ui/react';

const payment = () => {
  return (
    <div className='mx-auto mb-10 max-w-cs'>
      <Portal destination='mobile-header-portal'>
        <HeaderPortalTitle title='پرداخت فاکتور' />
      </Portal>
      <Stepper activeStep={2} />
      <Heading mb={6} mt={10} size={'lg'}>
        نحوه پرداخت
      </Heading>
      <div className='flex gap-4'>
        <div className='flex-1 border'></div>
        <div className='w-[300px]'>
          <Invoice />
        </div>
      </div>
    </div>
  );
};

export default payment;
