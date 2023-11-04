import { version } from '../../../../package.json';
import Image from 'next/image';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';

import GuarantyIcon from '@/assets/icons/guaranty.svg';
import SupportIcon from '@/assets/icons/support.svg';
import OriginalityIcon from '@/assets/icons/originality.svg';
import FastDeliveryIcon from '@/assets/icons/fast-delivery.svg';

const facilitiesData = [
  {
    icon: <FastDeliveryIcon width='40' height='40' />,
    title: 'امکان تحویل سریع',
  },
  { icon: <GuarantyIcon width='40' height='40' />, title: 'ضمانت بازگشت کالا' },
  { icon: <SupportIcon width='40' height='40' />, title: 'پشتیبانی ۲۴ ساعته' },
  {
    icon: <OriginalityIcon width='40' height='40' />,
    title: 'تضمین اصالت کالا',
  },
];

const Footer = () => {
  return (
    <footer>
      <div className='bg-gray-100 flex justify-center gap-10 items-center h-24'>
        {facilitiesData.map((item, index) => (
          <div key={index} className='flex items-center'>
            {item.icon}
            <span className='mr-2'>{item.title}</span>
          </div>
        ))}
      </div>
      <div>
        <div className='max-w-[1200px] mx-auto my-6'>
          <div className='flex'>
            <FooterLinks />
            <FooterContact />
          </div>
          <div className='h-[1px] bg-gray-300 my-6'></div>
          <div className='flex justify-between gap-6'>
            <div className='max-w-[65%]'>
              <h3 className='text-3xl mb-3'>پالیزبان</h3>
              <p className='text-gray-600 text-sm leading-7'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت.
              </p>
            </div>
            <div className='flex gap-4 items-center'>
              <Image
                src='/images/enamad.png'
                height='120'
                width='120'
                alt='enamad'
              />
              <Image
                src='/images/union.png'
                height='120'
                width='120'
                alt='union'
              />
              <Image
                src='/images/samandehi.png'
                height='120'
                width='120'
                alt='samandehi'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center h-12 bg-gray-100'>
        <div className='max-w-screen-lg mx-auto text-center text-sm text-gray-600'>
          کلیه حقوق این سایت متعلق به شرکت نوژن گستر گیل (پالیزبان) است و هر
          گونه سواستفاده از آن پیگیری قانونی خواهد داشت.
          <span className='mr-2'>{`version: ${version}`}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
