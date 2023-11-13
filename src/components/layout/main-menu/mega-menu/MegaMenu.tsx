import { Divider } from '@chakra-ui/react';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import Link from 'next/link';

const mainCategories = [
  {
    icon: '',
    title: 'ادوات کشاورزی',
    link: '',
  },
  {
    icon: '',
    title: 'ماشین‌آلات کشاورزی',
    link: '',
  },
  {
    icon: '',
    title: 'ادوات باغبانی',
    link: '',
  },
  {
    icon: '',
    title: 'ماشین‌آلات باغبانی',
    link: '',
  },
  {
    icon: '',
    title: 'خاک و کود',
    link: '',
  },
  {
    icon: '',
    title: 'بذر و تخم گیاهان',
    link: '',
  },
  {
    icon: '',
    title: 'سموم و آفت‌کش',
    link: '',
  },
  {
    icon: '',
    title: 'مبلمان باغ و ویلا',
    link: '',
  },
];

const MegaMenu = () => {
  return (
    <div className='flex h-[544px] w-[1280px]'>
      <ul className='flex w-60 flex-col py-0'>
        {mainCategories.map((category, index) => (
          <li
            key={index}
            className='flex flex-1 cursor-pointer items-center gap-2 pr-8 hover:bg-gray-200'>
            {category.icon}
            <span>{category.title}</span>
          </li>
        ))}
      </ul>
      <Divider orientation='vertical' />
      <div className='flex-1'>
        <div className='px-6 py-8'>
          <Link href={'/'} className='flex gap-2 !text-primary-500'>
            <span>همه محصولات ادوات کشاورزی</span>
            <ArrowLeftIcon width='20' height='20' />
          </Link>
        </div>
        <div className='flex gap-2 pr-6'>
          {[...new Array(4)].map((item, index) => (
            <div className='flex-1' key={index}>
              <Link href={'/'} className='mb-6 flex items-center gap-2'>
                <Divider
                  orientation='vertical'
                  h={8}
                  borderColor={'green'}
                  borderWidth={2}
                />
                <span>همه محصولات ادوات کشاورزی</span>
                <ArrowLeftIcon width='20' height='20' />
              </Link>
              <div className='flex flex-col gap-5 text-sm text-gray-500'>
                <Link href={'/'}>همه محصولات ادوات کشاورزی</Link>
                <Link href={'/'}>همه محصولات ادوات کشاورزی</Link>
                <Link href={'/'}>همه محصولات ادوات کشاورزی</Link>
                <Link href={'/'}>همه محصولات ادوات کشاورزی</Link>
                <Link href={'/'}>همه محصولات ادوات کشاورزی</Link>
                <Link href={'/'}>همه محصولات ادوات کشاورزی</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
