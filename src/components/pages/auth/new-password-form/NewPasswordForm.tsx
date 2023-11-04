import Button from '@/components/shared/ui/button/Button';
import Textfield from '@/components/shared/ui/textfield/Textfield';
import Link from 'next/link';

import ArrowRightIcon from '@/assets/icons/arrow-right.svg';

const validationRules = [
  'حداقل ۸ حرف',
  'شامل عدد',
  'شامل علامت (@#!&)',
  'شامل یک حرف بزرگ و کوچک',
];

const NewPasswordForm = () => {
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

      <div className='mt-14'>
        <div className='text-lg font-bold mb-10'>تغییر رمز عبور</div>
        <Textfield type='password' placeholder='رمز عبور جدید' />
        <ul className='flex flex-col gap-1 my-6'>
          {validationRules.map((rule, i) => (
            <li key={i} className='list-disc text-sm mr-4 text-gray-500'>
              {rule}
            </li>
          ))}
        </ul>
        <Textfield
          type='password'
          placeholder='تکرار رمز عبور جدید'
          className='mt-4'
        />

        <Button className='w-full bg-black text-white my-6'>ورود</Button>
      </div>
    </div>
  );
};

export default NewPasswordForm;
