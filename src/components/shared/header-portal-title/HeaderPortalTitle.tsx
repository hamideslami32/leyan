import { IconButton } from '@chakra-ui/react';
import Link from 'next/link';

import ArrowRightIcon from '@/assets/icons/arrow-right.svg';

interface HeaderPortalTitleProps {
  title: string;
  link?: string;
}

const HeaderPortalTitle = (props: HeaderPortalTitleProps) => {
  const { title, link = '/' } = props;
  return (
    <div className='flex items-center gap-1'>
      <IconButton
        aria-label='back-to-home'
        icon={<ArrowRightIcon width='28' height='28' />}
        as={Link}
        variant={'text'}
        href={link}
      />
      <span className='text-lg font-bold'>{title}</span>
    </div>
  );
};

export default HeaderPortalTitle;
