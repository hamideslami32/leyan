import Link from 'next/link';

const linksData = {
  لیان: [
    {
      title: 'وبلاگ لیان',
      link: '/blog',
    },
    {
      title: 'عضویت در پنل فروشندگان',
      link: '/portal/register',
    },
    {
      title: 'فرصت های شغلی',
      link: '/careers',
    },
    {
      title: 'درباره لیان',
      link: '/about',
    },
    {
      title: 'تماس با لیان',
      link: '/contact-us',
    },
  ],
  'خدمات مشتریان': [
    {
      title: 'پرسش‌های متداول',
      link: '/faq',
    },
    {
      title: 'قوانین و مقررات',
      link: '/privacy-policy',
    },
    {
      title: 'ضمانت کالا',
      link: '/guarantee',
    },
    {
      title: 'گزارش تخلف فروشنده',
      link: '/report-issue',
    },
  ],
  'راهنمای خرید': [
    {
      title: 'نحوه ثبت سفارش',
      link: '/guide/how-to-register-order',
    },
    {
      title: 'رویه ارسال سفارشات',
      link: '/guide/delivery-types',
    },
    {
      title: 'شیوه های پرداخت',
      link: '/guide/payment-methods',
    },
  ],
};

const FooterLinks = () => {
  return (
    <div className='flex flex-1'>
      {Object.keys(linksData).map((key, index) => {
        const list = (linksData as Record<string, any>)[key];
        return (
          <div key={index} className='flex flex-1 flex-col gap-4'>
            <div className='font-bold'>{key}</div>
            <ul className='flex flex-col'>
              {list.map((item: any, index: number) => (
                <Link href={item.link} key={index} className='inline-block'>
                  <li className='mb-3 text-sm text-gray-600'>{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default FooterLinks;
