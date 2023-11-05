import Image from 'next/image';
import Link from 'next/link';

const categoriesData = [
  {
    link: '/',
    title: 'ابزارآلات کشاورزی',
    imageUrl: '/images/home/categories/1.png',
  },
  {
    link: '/',
    title: 'سموم و آفت‌کش',
    imageUrl: '/images/home/categories/2.png',
  },
  {
    link: '/',
    title: 'ماشین‌آلات کشاورزی',
    imageUrl: '/images/home/categories/3.png',
  },
  {
    link: '/',
    title: 'دکوراسیون باغی',
    imageUrl: '/images/home/categories/4.png',
  },
];
const Categories = () => {
  return (
    <div className='my-16'>
      <h2 className='text-center font-bold text-xl mb-6'>دسته‌بندی‌ها</h2>
      <div className='flex justify-center gap-16'>
        {categoriesData.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className='flex flex-col items-center'>
            <Image
              src={item.imageUrl}
              alt={item.title}
              width='120'
              height='120'
              className='hover:drop-shadow'
            />
            <span className='mt-4'>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
