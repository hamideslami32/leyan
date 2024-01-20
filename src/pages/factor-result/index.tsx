import HeaderPortalTitle from '@/components/shared/header-portal-title/HeaderPortalTitle';
import Portal from '@/utils/portal';
import Image from 'next/image';

const FactorResult = () => {
  return (
    <div className='mx-auto my-16 grid max-w-cs place-items-center'>
      <Portal destination='mobile-header-portal'>
        <HeaderPortalTitle title='وضعیت سفارش' />
      </Portal>
      <Image
        src={'/images/success-purchase.png'}
        width={176}
        height={176}
        alt='factor-result'
      />
      <p className='my-10 text-2xl font-bold text-success'>
        سفارش شما با موفقیت ثبت شد
      </p>
      <p className='text-center leading-8'>
        از قسمت مدیریت سفارشات می‌توانید روند پردازش سفارشتان را پیگیری کنید.
        <br />
        همچنین در صورت داشتن هرگونه سوال مربوط به سفارشات در روزهای کاری از ساعت
        ۹ الی ۱۸ با شماره تماس ۲۴۸۱۰۰-۰۲۱ تماس بگیرید
      </p>
    </div>
  );
};

export default FactorResult;
