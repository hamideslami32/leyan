/* eslint-disable @next/next/no-img-element */
interface PopularCardProps {
  source: string;
}

const PopularCard = (props: PopularCardProps) => {
  const { source } = props;
  return (
    <div>
      <img
        className='h-[200px] w-full rounded-lg object-cover hover:opacity-90'
        src={source}
        alt='popular'
      />
    </div>
  );
};

export default PopularCard;
