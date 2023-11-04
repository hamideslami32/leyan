import BurgerMenuIcon from '@/assets/icons/burger-menu.svg';
import LocationIcon from '@/assets/icons/location.svg';
import Button from '@/components/shared/ui/button/Button';
import Link from 'next/link';

const links = [
  { link: '#', title: 'تخفیف‌های ویژه', icon: '' },
  { link: '#', title: 'پرفروش‌ترین‌ها', icon: '' },
  { link: '#', title: 'خرید اقساطی', icon: '' },
  { link: '#', title: 'مجله اگری‌بالکا', icon: '' },
  { link: '#', title: 'فروشنده شوید!', icon: '' },
];

const MainMenu = () => {
  return (
    <div className='grid place-items-center my-4'>
      <div className='flex w-full max-w-screen-xl items-center justify-between'>
        <div className='flex items-center'>
          <div className='flex gap-3 items-center ml-10'>
            <Button variant='icon'>
              <BurgerMenuIcon />
            </Button>
            <span className='text-lg'>دسته‌بندی کالاها</span>
          </div>
          <nav>
            <ul className='flex'>
              {links.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className='ml-3 text-gray-400'>
                    {item.icon}
                    <span className='mr-2'>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Button className='flex items-center' variant='text'>
          <LocationIcon />
          <span className='text-sm mr-2'>ارسال به اصفهان، اصفهان</span>
        </Button>
      </div>
    </div>
  );
};

export default MainMenu;
