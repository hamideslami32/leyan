import ProductTabbar from '@/components/pages/product/ProductTabbar';
import OrderCard from '@/components/pages/profile/OrderCard';
import ProfileLayout from '@/layouts/profile';

const tabbarOrders = [
  {
    id: 0,
    title: 'در حال پردازش',
    tag: '/in-progress',
  },
  {
    id: 1,
    title: 'تحویل شده',
    tag: '/delivered',
  },
  {
    id: 2,
    title: 'مرجوع شده',
    tag: '/returned',
  },
  {
    id: 3,
    title: 'لغو شده',
    tag: '/cancelled',
  },
];

const Orders = () => {
  return (
    <ProfileLayout>
      <h1 className='text-xl font-bold'>سفارش های من</h1>
      <div className='flex flex-col gap-4'>
        <ProductTabbar data={tabbarOrders} />
        <div className='flex flex-col gap-4'>
          <OrderCard />
          <OrderCard />
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Orders;
