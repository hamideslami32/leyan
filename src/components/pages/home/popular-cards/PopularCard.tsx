/* eslint-disable @next/next/no-img-element */
interface PopularCardProps {
  source: string;
}

const PopularCard = (props: PopularCardProps) => {
  const { source } = props;
  return (
    <div className='w-[291px] h-[200px]'>
      <img
        className='w-full max-w-sm h-[200px] object-cover rounded-lg hover:opacity-90'
        src={source}
        alt='popular'
      />
    </div>
  );
};

export default PopularCard;
