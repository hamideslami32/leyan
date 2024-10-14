import TwitterIcon from '@/assets/icons/twitter.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import YoutubeIcon from '@/assets/icons/youtube.svg';
import Link from 'next/link';

const FooterContact = () => {
  return (
    <div className='mr-16 flex flex-1 flex-col gap-4'>
      <div className='text-lg font-bold'>
        هفت روز هفته، میزبان صدای گرم شما هستیم!
      </div>
      <div className='text-sm'>
        <span className='ml-2 text-gray-600'>تلفن:</span>
        <span className='font-bold' dir='ltr'>
          ۰۲۱ - ۱۲۳۴۵۶۷۸
        </span>
      </div>
      <div className='text-sm'>
        <span className='ml-2 text-gray-600'>ایمیل:</span>
        <span className='font-bold'>info@leyan.org</span>
      </div>
      <div className='flex gap-1'>
        <Link
          href='/'
          className='flex h-10 w-10 items-center justify-center border border-gray-300'>
          <TwitterIcon />
        </Link>
        <Link
          href='/'
          className='flex h-10 w-10 items-center justify-center border border-gray-300'>
          <LinkedinIcon />
        </Link>
        <Link
          href='/'
          className='flex h-10 w-10 items-center justify-center border border-gray-300'>
          <InstagramIcon />
        </Link>
        <Link
          href='/'
          className='flex h-10 w-10 items-center justify-center border border-gray-300'>
          <YoutubeIcon />
        </Link>
      </div>
    </div>
  );
};

export default FooterContact;
