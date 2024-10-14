import Button from '@/components/shared/ui/button/Button';
import Textfield from '@/components/shared/ui/textfield/Textfield';
import Link from 'next/link';

const PhoneNumberForm = () => {
  return (
    <div className='h-[423px] w-[400px] border p-4'>
      <div className='mt-4 text-center text-3xl font-bold'>پالیـــزبــــان</div>
      <div className='mt-16'>
        <div className='mb-2 text-lg font-bold'>ورود یا ثبت‌نام</div>
        <p className='mb-10 text-sm'>
          برای ورود یا ثبت نام شماره موبایل خود را وارد کنید.
        </p>
        <Textfield placeholder='شماره موبایل خود را وارد کنید' />
        <Button className='my-6 w-full bg-black text-white'>ادامه</Button>
        <p className='text-sm'>
          <span>
            ورود یا ثبت‌نام شما به منظور پذیرش{' '}
            <Link href='/' className='text-blue-500'>
              شرایط و قوانین لیان
            </Link>{' '}
            است
          </span>
        </p>
      </div>
    </div>
  );
};

export default PhoneNumberForm;
