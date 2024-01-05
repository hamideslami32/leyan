import ProductTabbar from '@/components/pages/product/ProductTabbar';
import RegisteredComment from '@/components/pages/profile/RegisteredComment';
import WaitingForCommentsCard from '@/components/pages/profile/WaitingForCommentsCard';
import ProfileLayout from '@/layouts/profile';

const tabbarComments = [
  {
    id: 0,
    title: 'در انتظار ثبت دیدگاه',
    tag: '#',
  },
  {
    id: 1,
    title: 'دیدگاه‌های ثبت شده',
    tag: '#registered-comments',
  },
];

const Comments = () => {
  return (
    <ProfileLayout>
      <h1 className='text-xl font-bold'>دیدگاه‌ها</h1>
      <div className='my-6 flex flex-col gap-4'>
        <ProductTabbar data={tabbarComments} />
      </div>
      <div className='flex flex-col gap-4'>
        <WaitingForCommentsCard />
        <WaitingForCommentsCard />
        <RegisteredComment />
      </div>
    </ProfileLayout>
  );
};

export default Comments;
