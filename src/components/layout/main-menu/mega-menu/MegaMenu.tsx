import { Divider } from '@chakra-ui/react';
import Link from 'next/link';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import FarmingEquipmentIcon from '@/assets/icons/farming-equipment.svg';
import FarmingMachineryIcon from '@/assets/icons/farming-machinery.svg';
import GardeningEquipmentIcon from '@/assets/icons/gardening-equipment.svg';
import GardeningMachineryIcon from '@/assets/icons/gardening-machinery.svg';
import SoilIcon from '@/assets/icons/soil.svg';
import SeedsIcon from '@/assets/icons/seeds.svg';

export const mainCategories = [
  {
    icon: <FarmingEquipmentIcon />,
    title: 'طلا',
    link: '',
  },
  {
    icon: <FarmingMachineryIcon />,
    title: 'پلاتین',
    link: '',
  },
  {
    icon: <GardeningEquipmentIcon />,
    title: 'نقره',
    link: '',
  },
  {
    icon: <GardeningMachineryIcon />,
    title: 'برلیان',
    link: '',
  },
  {
    icon: <SoilIcon />,
    title: 'زمرد',
    link: '',
  },
  {
    icon: <SeedsIcon />,
    title: 'یاقوت',
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
            <span>طلا گنجینه</span>
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
                <span>طلا</span>
                <ArrowLeftIcon width='20' height='20' />
              </Link>
              <div className='flex flex-col gap-5 text-sm text-gray-500'>
                {[...Array(5)].map((_, i) => (
                  <Link href={'/'} key={i}>
                    شمش ۵۰ گرمی
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
