import Link from 'next/link';
import PopularCard from './PopularCard';

const popularItems = [
  {
    link: '/',
    imageUrl: '/images/home/popular/1.png',
  },
  {
    link: '/',
    imageUrl: '/images/home/popular/2.png',
  },
  {
    link: '/',
    imageUrl: '/images/home/popular/3.png',
  },
  {
    link: '/',
    imageUrl: '/images/home/popular/4.png',
  },
];

const PopularCards = () => {
  return (
    <div className='grid grid-cols-2 gap-2 px-4 md:grid-cols-4 md:px-0'>
      {popularItems.map((item, index) => (
        <Link key={index} href={item.link}>
          <PopularCard source={item.imageUrl} />
        </Link>
      ))}
    </div>
  );
};

export default PopularCards;
