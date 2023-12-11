import BasketItem from '@/components/pages/basket/BasketItem';
import Invoice from '@/components/shared/invoice/Invoice';
import Stepper from '@/components/shared/stepper/Stepper';
import { Heading } from '@chakra-ui/react';

const Basket = () => {
  return (
    <div className='mx-auto mb-10 max-w-cs'>
      <Stepper activeStep={0} />
      <Heading mb={6} mt={10} size={'lg'}>
        سبد خرید شما
      </Heading>
      <div className='flex gap-4'>
        <div className='flex-1'>
          <BasketItem />
        </div>
        <div className='w-[300px]'>
          <Invoice />
        </div>
      </div>
    </div>
  );
};

export default Basket;
