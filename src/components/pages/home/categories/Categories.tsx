import Image from 'next/image';
import Link from 'next/link';

export interface CategoriesProps {
  showTitle?: boolean;
  centerItems?: boolean;
  hasPadding?: boolean;
}

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

const Categories = (props: CategoriesProps) => {
  const { centerItems = true, showTitle = true, hasPadding = true } = props;

  return (
    <div className={hasPadding ? 'my-16' : ''}>
      {showTitle && (
        <h2 className='mb-6 text-center text-xl font-bold'>دسته‌بندی‌ها</h2>
      )}
      <div
        className={`flex flex-wrap ${
          centerItems ? 'justify-center' : 'justify-start'
        } gap-16`}>
        {categoriesData.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className='flex shrink-0 flex-col items-center'>
            <Image
              src={item.imageUrl}
              alt={item.title}
              width='120'
              height='120'
              className='hover:drop-shadow'
            />
            <span className='mt-4 text-center'>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
