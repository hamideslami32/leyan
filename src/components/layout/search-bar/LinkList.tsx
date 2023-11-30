import React from 'react';
import { Button, Link } from '@chakra-ui/react';
import { LinkType } from '@/types';

import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';

interface LinkListProps {
  data: LinkType[];
}

const LinkList = (props: LinkListProps) => {
  const { data } = props;
  if (!data) return;
  return (
    <div className='mt-3 flex gap-4 overflow-x-auto pb-3'>
      {data.map((item, index) => (
        <Button
          key={index}
          minW={40}
          as={Link}
          href={item.link}
          variant={'outline'}
          rightIcon={<ArrowLeftIcon />}>
          {item.title}
        </Button>
      ))}
    </div>
  );
};

export default LinkList;
