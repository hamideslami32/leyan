import { Button, Divider } from '@chakra-ui/react';
import InvoiceRow from './InvoiceRow';

const Invoice = () => {
  return (
    <div className='flex flex-col gap-3 rounded-md bg-gray-100 p-4'>
      <InvoiceRow title='قیمت کالا‌ها' price={28000} />
      <InvoiceRow color='error.500' title='تخفیف' price={8000} />
      <Divider />
      <InvoiceRow title='هزینه ارسال' price={12000} />
      <Divider />
      <InvoiceRow title='اعتبار کیف پول' price={12000} />
      <InvoiceRow
        isBold
        color='secondary.900'
        title='مبلغ قابل پرداخت'
        price={32000}
      />
      <Button w={'full'}>افزایش اعتبار</Button>
    </div>
  );
};

export default Invoice;
