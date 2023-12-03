import { thousandSeperator } from '@/utils';
import { Box } from '@chakra-ui/react';
import classNames from 'classnames';

interface InvoiceRowProps {
  title: string;
  price: number;
  color?: string;
  isBold?: boolean;
}

const InvoiceRow = (props: InvoiceRowProps) => {
  const { title, price, color = 'gray', isBold } = props;
  return (
    <Box color={color} className='flex justify-between text-gray-500'>
      <div className='text-sm'>{title}</div>
      <div className={classNames(isBold && 'text-xl font-bold')}>
        {thousandSeperator(price)}
        <span className='mr-1 text-xs'>تومان</span>
      </div>
    </Box>
  );
};

export default InvoiceRow;
