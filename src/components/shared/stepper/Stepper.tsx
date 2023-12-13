import BasketIcon from '@/assets/icons/basket.svg';
import WalletIcon from '@/assets/icons/wallet.svg';
import TruckIcon from '@/assets/icons/truck.svg';
import StepperItem from './StepperItem';
import { ReactNode } from 'react';

interface StepperProps {
  activeStep: number;
}

type Step = {
  icon: ReactNode;
  title: string;
};

const stepperData: Step[] = [
  {
    icon: <BasketIcon width='40' height='40' />,
    title: 'سبد خرید',
  },
  {
    icon: <TruckIcon width='40' height='40' />,
    title: 'زمان و نحوه ارسال',
  },
  {
    icon: <WalletIcon width='40' height='40' />,
    title: 'پرداخت فاکتور',
  },
];

const Stepper = (props: StepperProps) => {
  const { activeStep } = props;
  return (
    <div className='mx-auto hidden max-w-[690px] py-10 text-gray-500 md:block'>
      <div className='flex items-center gap-4'>
        {stepperData.map((item, index) => {
          return (
            <StepperItem
              key={index}
              icon={item.icon}
              title={item.title}
              isLast={stepperData.length === index + 1}
              isActive={activeStep >= index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
