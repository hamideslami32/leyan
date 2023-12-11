import Invoice from '@/components/shared/invoice/Invoice';
import Stepper from '@/components/shared/stepper/Stepper';
import { Heading } from '@chakra-ui/react';

const payment = () => {
  return (
    <div className='mx-auto mb-10 max-w-cs'>
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
