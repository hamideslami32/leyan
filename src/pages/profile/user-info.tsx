import ProfileLayout from '@/layouts/profile';
import { Button, Divider, Input } from '@chakra-ui/react';

const UserInfo = () => {
  return (
    <ProfileLayout>
      <h1 className='text-xl font-bold'>اطلاعات حساب کاربری</h1>
      <div className='my-8 rounded-md border p-4'>
        <div className='grid grid-cols-2 gap-4'>
          <Input placeholder='نام و نام خانوادگی' />
          <Input placeholder='کد ملی' />
          <Input placeholder='شماره موبایل' />
          <Input placeholder='ایمیل' />
        </div>
        <Divider className='my-4' />
        <div className='text-left'>
          <Button variant={'outline'} h={10}>
            ثبت تغییرات
          </Button>
        </div>
      </div>
      <div className='mt-10'>
        <h2 className='mb-6 font-bold'>تغییر رمزعبور</h2>
        <div className='rounded-md border p-4'>
          <div>
            <div className='grid grid-cols-2 gap-4'>
              <Input placeholder='رمز عبور جدید' />
              <Input placeholder='تکرار رمز عبور جدید' />
            </div>
            <ul className='px-4 pt-4 text-sm text-secondary-600'>
              <li className='list-disc'>حداقل ۸ حرف</li>
              <li className='list-disc'>شامل عدد</li>
              <li className='list-disc'>شامل علامت (@#!&)</li>
              <li className='list-disc'>شامل یک حرف بزرگ و کوچک</li>
            </ul>
          </div>
          <Divider className='my-4' />
          <div className='text-left'>
            <Button variant={'outline'} h={10}>
              رمز عبور جدید
            </Button>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default UserInfo;
