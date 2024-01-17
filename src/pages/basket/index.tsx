import BasketItem from '@/components/pages/basket/BasketItem';
import HeaderPortalTitle from '@/components/shared/header-portal-title/HeaderPortalTitle';
import Invoice from '@/components/shared/invoice/Invoice';
import Stepper from '@/components/shared/stepper/Stepper';
import Portal from '@/utils/portal';
import { Heading } from '@chakra-ui/react';

const Basket = () => {
  return (
    <div className='mx-auto mb-10 max-w-cs'>
      <Portal destination='mobile-header-portal'>
        <HeaderPortalTitle title='سبد خرید' />
      </Portal>
      <Stepper activeStep={0} />
      <Heading
        display={{ base: 'none', md: 'block' }}
        mb={6}
        mt={10}
        size={'lg'}>
        سبد خرید شما
      </Heading>
      <div className='flex flex-col gap-4 pb-16 md:flex-row'>
        <div className='flex flex-1 flex-col md:gap-4'>
          <BasketItem />
          <BasketItem />
        </div>
        <div className='md:w-[300px]'>
          <Invoice />
        </div>
      </div>
    </div>
  );
};

export default Basket;
