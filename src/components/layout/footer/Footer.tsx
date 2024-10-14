import packageData from '../../../../package.json';
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
    <footer className='hidden md:block'>
      <div className='flex h-24 items-center justify-center gap-10 bg-gray-100'>
        {facilitiesData.map((item, index) => (
          <div key={index} className='flex items-center'>
            {item.icon}
            <span className='mr-2'>{item.title}</span>
          </div>
        ))}
      </div>
      <div>
        <div className='mx-auto my-6 max-w-cs'>
          <div className='flex'>
            <FooterLinks />
            <FooterContact />
          </div>
          <div className='my-6 h-[1px] bg-gray-300'></div>
          <div className='flex flex-wrap justify-between gap-6'>
            <div className='max-w-[65%]'>
              <h3 className='mb-3 text-3xl'>لیان</h3>
              <p className='text-sm leading-7 text-gray-600'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت.
              </p>
            </div>
            <div className='flex items-center gap-4'>
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
      <div className='flex h-12 items-center bg-gray-100'>
        <div className='mx-auto max-w-cs text-center text-sm text-gray-600'>
          کلیه حقوق این سایت متعلق به شرکت (لیان) است و هر گونه سواستفاده از آن
          پیگیری قانونی خواهد داشت.
          <span className='mr-2'>{`version: ${packageData.version}`}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
