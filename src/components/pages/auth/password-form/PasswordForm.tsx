import Button from '@/components/shared/ui/button/Button';
import Textfield from '@/components/shared/ui/textfield/Textfield';
import Link from 'next/link';

import ArrowRightIcon from '@/assets/icons/arrow-right.svg';

const PasswordForm = () => {
  return (
    <div className='w-[400px] border p-4'>
      <div className='relative'>
        <div className='text-3xl font-bold text-center mt-4'>
          پالیـــزبــــان
        </div>
        <Link className='absolute right-2 top-2' href='/'>
          <ArrowRightIcon class />
        </Link>
      </div>
      <div className='mt-16'>
        <div className='text-lg font-bold mb-10'>رمز عبور را وارد کنید</div>
        <Textfield type='password' />
        <div className='text-sm flex flex-col gap-3 mt-6'>
          <Link href='/'>ورود با کد یک بار مصرف</Link>
          <Link href='/'>فراموشی رمز عبور</Link>
        </div>
        <Button className='w-full bg-black text-white my-6'>ادامه</Button>
      </div>
    </div>
  );
};

export default PasswordForm;
