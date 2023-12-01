import { Text } from '@chakra-ui/react';
import classNames from 'classnames';
import { ReactNode } from 'react';

export interface StepperItemProps {
  icon: ReactNode;
  title: string;
  isLast: boolean;
  isPassed: boolean;
}

const StepperItem = (props: StepperItemProps) => {
  const { icon, title, isLast, isPassed } = props;
  return (
    <>
      <div
        className={classNames(
          'flex items-center gap-2',
          isPassed && 'text-success',
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
