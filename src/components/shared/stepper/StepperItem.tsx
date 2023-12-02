import { Text } from '@chakra-ui/react';
import classNames from 'classnames';
import { ReactNode } from 'react';

export interface StepperItemProps {
  icon: ReactNode;
  title: string;
  isLast: boolean;
  isActive: boolean;
}

const StepperItem = (props: StepperItemProps) => {
  const { icon, title, isLast, isActive } = props;
  return (
    <>
      <div
        className={classNames(
          'flex items-center gap-2',
          isActive && 'text-success',
        )}>
        {icon}
        <Text fontSize='lg'>{title}</Text>
      </div>
      {!isLast && (
        <div className='h-0 w-[90px] border-t border-dashed border-gray-600'></div>
      )}
    </>
  );
};

export default StepperItem;
