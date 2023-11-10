import { Text, Button } from '@chakra-ui/react';

import ShopIcon from '@/assets/icons/shop.svg';
import SecurityIcon from '@/assets/icons/security-ok.svg';

function SuggestionCard() {
  return (
    <div className='flex flex-col justify-between rounded-lg border border-secondary-300 px-5 py-4 md:flex-row'>
      <div className='space-y-3'>
        <div className='flex items-center gap-3'>
          <ShopIcon />
          <Text fontSize='lg'>فروشگاه نیرو ابزار (اصفهان)</Text>
          <span className='rounded-full bg-success-500 px-4 py-1 text-white'>
            <Text fontSize='sm'>منتخب</Text>
          </span>
        </div>
        <div className='flex items-center gap-3'>
          <SecurityIcon />
          <Text fontSize='md'>گارانتی اصالت و سلامت فیزیکی کالا</Text>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <span className='rounded-full bg-error-500 px-4 py-1 text-white'>
          <Text fontSize='sm'>12%</Text>
        </span>
        <Text as='del' fontSize='sm' color='secondary.500'>
          35,500
        </Text>
        <Text fontSize='sm'>
          <Text as='b' fontSize='md'>
            28,000
          </Text>
          تومان
        </Text>
        <Button variant='black'>افزودن به سبد خرید</Button>
      </div>
    </div>
  );
}

export default SuggestionCard;
