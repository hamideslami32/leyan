import ProfileLayout from '@/layouts/profile';
import SearchIcon from '@/assets/icons/search.svg';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import Table from '@/components/shared/table/Table';

const tableHeaders = [
  'شماره تراکنش',
  'تاریخ و ساعت',
  'مبلغ',
  'نوع تراکنش',
  'توضیحات',
];

const tableData = [
  {
    transactionId: '۵۲۳۵۰۰۱۳۹',
    date: new Date().getTime(),
    price: '۱,۵۰۰,۰۰۰',
    transactionType: 'افزایش شارژ / اعتبار بابت استرداد',
    description: 'درخواست استرداد به شماره ۴۲۳۵۲۳ و شماره سفارش ۱۲۵۲۳۵۶۲۳۰۰',
  },
  {
    transactionId: '۵۲۳۵۰۰۱۴۰',
    date: new Date().getTime(),
    price: '۱,۵۰۰,۰۰۰',
    transactionType: 'کاهش شارژ بابت خرید',
    description: 'سفارش ۱۴۲۵۱۵۰۰۲ - خرید کالا',
  },
];

const Wallet = () => {
  return (
    <ProfileLayout>
      <h1 className='text-xl font-bold'>سفارش های من</h1>
      <div className='my-8 flex justify-between rounded-md border p-4'>
        <div className='flex flex-col gap-4'>
          <div className='font-bold'>موجودی کیف پول</div>
          <div className='flex items-center gap-1'>
            <span className='text-xl font-bold text-success'>۵۵,۰۰۰</span>
            <span className='text-xs text-secondary-500'>تومان</span>
          </div>
        </div>
        <div>
          <div className='mb-2 font-bold'>افزایش موجودی</div>
          <div className='flex gap-2'>
            <div className='flex items-center justify-between rounded-md bg-secondary-200 pl-4'>
              <Input variant={'unstyled'} placeholder='مبلغ مورد نظر' />
              <span className='text-xs text-secondary-500'>تومان</span>
            </div>
            <Button size={'sm'} h='12'>
              پرداخت آنلاین
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className='mb-3 flex items-center justify-between'>
          <h2 className='text-lg font-bold'>لیست تراکنش‌ها</h2>
          <InputGroup maxW={48}>
            <InputRightElement
              pointerEvents='none'
              className='static ml-3 mt-2 text-secondary-500'>
              <SearchIcon width='20' height='20' />
            </InputRightElement>
            <Input
              bg={'transparent'}
              fontSize={'small'}
              variant={'outline'}
              h={10}
              placeholder='جستجو شماره تراکنش'
            />
          </InputGroup>
        </div>
        <Table headers={tableHeaders} data={tableData} />
      </div>
    </ProfileLayout>
  );
};

export default Wallet;
