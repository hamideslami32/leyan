import { Button } from '@chakra-ui/react';
import BasketIcon from '@/assets/icons/basket.svg';

const BasketButton = () => {
  return (
    <Button variant='outline' leftIcon={<BasketIcon />}>
      سبد خرید
    </Button>
  );
};

export default BasketButton;
