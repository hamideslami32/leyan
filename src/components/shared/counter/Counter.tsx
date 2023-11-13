import CircleMinusIcon from '@/assets/icons/circle-minus.svg';
import CirclePlusIcon from '@/assets/icons/circle-plus.svg';

interface CounterProps {
  count: number;
  setCount: (val: number) => void;
}

const Counter = (props: CounterProps) => {
  const { count, setCount } = props;

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className='flex items-center gap-4 text-gray-600'>
      <CirclePlusIcon onClick={increase} className='cursor-pointer' />
      <span>{count}</span>
      <CircleMinusIcon onClick={decrease} className='cursor-pointer' />
    </div>
  );
};

export default Counter;
