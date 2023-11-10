import { ReactNode, useMemo } from 'react';
import Image from 'next/image';

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Text,
  Button,
} from '@chakra-ui/react';

import { products } from '@/components/pages/home/best-sellers/BestSellers';
import ProductCard from '@/components/shared/product-card/ProductCard';
import CustomCarousel from '@/components/shared/custom-carousel/CustomCarousel';
import ExpandableText from '@/components/shared/ui/expandable-text/ExpandableText';
import SuggestionCard from '@/components/pages/product/SuggestionCard';
import ProductTabbar from '@/components/pages/product/ProductTabbar';
import TableProduct from '@/components/pages/product/TableProduct';
import CommentBox from '@/components/shared/comment/CommentBox';
import ProductDetails from '@/components/pages/product/ProductDetails';

import GuarantyIcon from '@/assets/icons/guaranty.svg';
import SupportIcon from '@/assets/icons/support.svg';
import OriginalityIcon from '@/assets/icons/originality.svg';
import FastDeliveryIcon from '@/assets/icons/fast-delivery.svg';
import StartsIcon from '@/assets/icons/star-filled.svg';
import ShopIcon from '@/assets/icons/shop.svg';
import SecurityIcon from '@/assets/icons/security-ok.svg';

const facilitiesData = [
  {
    icon: <FastDeliveryIcon width='40' height='40' />,
    title: 'امکان تحویل سریع',
  },
  { icon: <GuarantyIcon width='40' height='40' />, title: 'ضمانت بازگشت کالا' },
  { icon: <SupportIcon width='40' height='40' />, title: 'پشتیبانی ۲۴ ساعته' },
  {
    icon: <OriginalityIcon width='40' height='40' />,
    title: 'تضمین اصالت کالا',
  },
];

const tabbarProduct = [
  {
    id: 0,
    title: 'معرفی محصول',
    tag: '/intro-product',
  },
  {
    id: 1,
    title: 'بررسی تخصصی',
    tag: '/expert-check',
  },
  {
    id: 2,
    title: 'مشخصات',
    tag: '/specifications',
  },
  {
    id: 3,
    title: 'دیدگاه کاربران',
    tag: '/comments',
  },
];

const ProductDetailsPage = () => {
  const renderedDataCustomSlider: ReactNode[] = useMemo(() => {
    return products.map((product, i) => (
      <ProductCard productData={product} key={i} showRating />
    ));
  }, []);

  return (
    <>
      <section className='mx-auto w-full max-w-cs space-y-10 py-8'>
        <Breadcrumb spacing='8px' separator='/'>
          <BreadcrumbItem color='secondary.500'>
            <BreadcrumbLink href='#'>پالیزبان</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem color='secondary.500'>
            <BreadcrumbLink href='#'>ادوات کشاورزی</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem color='secondary.500'>
            <BreadcrumbLink href='#'>ملزومات تراکتور</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem color='secondary.500'>
            <BreadcrumbLink href='#'>بیل تراکتوری</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>پمپ سیالات آبار پمپ</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <ProductDetails />
      </section>
      <section className='flex h-24 items-center justify-center gap-10 bg-gray-100'>
        {facilitiesData.map((item, index) => (
          <div key={index} className='flex items-center'>
            {item.icon}
            <span className='mr-2'>{item.title}</span>
          </div>
        ))}
      </section>
      <section className='mx-auto w-full max-w-cs space-y-4 py-10'>
        <div className='itmes-center flex gap-3'>
          <Text as='b' fontSize='lg'>
            سایر فروشندگان این کالا
          </Text>
          <Text as='b' fontSize='sm' color='secondary.500'>
            2 فروشنده
          </Text>
        </div>
        <div className='space-y-3'>
          {Array.from([1, 2, 3]).map((_, index) => (
            <SuggestionCard key={index} />
          ))}
        </div>
      </section>
      <section className='bg-secondary-200 py-3'>
        <div className='mx-auto w-full max-w-cs'>
          <CustomCarousel
            title={'کالاهای ویژه'}
            link={'/'}
            data={renderedDataCustomSlider}
          />
        </div>
      </section>
      <section className='mx-auto w-full max-w-cs py-8'>
        <div className='flex flex-col items-center justify-between gap-8 rounded-xl bg-misc-400 px-4 py-4 md:flex-row md:px-8'>
          <div className='w-full space-y-3 md:w-[30%]'>
            <Text as='b' fontSize='4xl' color='white'>
              خرید اقساطی تجهیزات و ادوات کشاورزی
            </Text>
            <Text fontSize='sm' color='secondary.500'>
              از اگری بالکا اعتبار بگیرید و آنلاین خرید کنید!
            </Text>
          </div>
          <div className='w-full space-y-4 md:w-[30%]'>
            <Image
              src='/images/flower-section.png'
              alt='flowers-on-section'
              width={600}
              height={0}
              className='h-[150px] w-auto object-cover'
            />
          </div>
        </div>
      </section>
      <section className='mx-auto w-full max-w-cs py-8'>
        <ProductTabbar data={tabbarProduct} />
        <section className='mt-8 flex flex-col gap-8 lg:flex-row'>
          <div className='w-full divide-y divide-secondary-300 lg:w-[70%]'>
            <div id={`#${tabbarProduct[0].tag}`} className='space-y-3 py-5'>
              <Text as='b' fontSize='lg'>
                معرفی محصولات
              </Text>
              <ExpandableText noOfLines={4}>
                <Text lineHeight={7} color='secondary.600'>
                  گوشی موبایل iPhone 13 CH پرچم‌دار جدید شرکت اپل است که با چند
                  ویژگی جدید و دوربین دوگانه روانه بازار شده است. نمایشگر آیفون
                  13 به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را
                  به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی دارد؛
                  به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 460 پیکسل را در هر
                  اینچ جا داده است. امکان شارژ بی‌‌سیم باتری در این گوشی وجود
                  دارد. تشخیص چهره با استفاده از دوربین جلو دیگر ویژگی است که در
                  آیفون جدید اپل به کار گرفته شده است. از نظر سخت‌‌افزاری این
                  گوشی از تراشه­‌ی جدید A15
                </Text>
              </ExpandableText>
            </div>
            <div id={`#${tabbarProduct[1].tag}`} className='space-y-3 py-5'>
              <Text as='b' fontSize='lg'>
                بررسی تخصصی
              </Text>
              <ExpandableText noOfLines={4}>
                <Text lineHeight={7} color='secondary.600'>
                  گوشی موبایل iPhone 13 CH گوشی موبایل iPhone 13 CH پرچم‌دار
                  جدید شرکت اپل است که با چند ویژگی جدید و دوربین دوگانه روانه
                  بازار شده است. نمایشگر آیفون 13 به پنل Super Retina مجهز ‌شده
                  است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند. این نمایشگر
                  رزولوشن بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1
                  اینچی‌اش، حدود 460 پیکسل را در هر اینچ جا داده است. امکان شارژ
                  بی‌‌سیم باتری در این گوشی وجود دارد. تشخیص چهره با استفاده از
                  دوربین جلو دیگر ویژگی است که در آیفون جدید اپل به کار گرفته
                  شده است. از نظر سخت‌‌افزاری این گوشی از تراشه­‌ی جدید A15
                </Text>
              </ExpandableText>
            </div>
            <div id={`#${tabbarProduct[2].tag}`} className='space-y-3 py-5'>
              <Text as='b' fontSize='lg'>
                مشخصات
              </Text>
              <TableProduct />
            </div>
            <div id={`#${tabbarProduct[3].tag}`} className='space-y-3 py-5'>
              <div className='flex items-center justify-between pb-5'>
                <div className='flex items-center gap-3'>
                  <Text fontSize='sm' color='secondary.500'>
                    <Text as='b' fontSize='xl' color='black'>
                      4.5
                    </Text>
                    از 5
                  </Text>
                  <div className='flex gap-1'>
                    <StartsIcon />
                    <StartsIcon />
                    <StartsIcon />
                    <StartsIcon />
                    <StartsIcon />
                  </div>
                  <Text fontSize='sm' color='secondary.500'>
                    از مجموع 23 امتیاز
                  </Text>
                </div>
                <Button variant='black'>ثبت دیدگاه جدید</Button>
              </div>
              <Text as='b' fontSize='lg'>
                دیدگاه کاربران
              </Text>
              <CommentBox />
            </div>
          </div>
          <div className='w-full lg:w-[30%]'>
            <Box
              p='6'
              display='flex'
              flexDirection='column'
              gap={3}
              bg='secondary.100'>
              <div className='flex items-center gap-3'>
                <Image
                  src='/images/product-sample-2.png'
                  alt='product-sample'
                  width={700}
                  height={0}
                  className='h-auto w-[150px]'
                />
                <div className='w-calc[100%-150px-0.75rem] flex flex-col gap-4'>
                  <Text fontSize='lg' lineHeight={7}>
                    الکتروپمپ پلی اتیلن 0.5 اسب بخار آبار پمپ مدل PM16
                  </Text>
                  <div className='flex items-center gap-2'>
                    <div className='h-6 w-6 rounded-full bg-blue-500'></div>
                    <Text fontSize='sm' color='secondary.500'>
                      رنگ آبی روشن
                    </Text>
                  </div>
                </div>
              </div>
              <Divider color='secondary.400' />
              <div className='flex items-center gap-3'>
                <ShopIcon />
                <Text fontSize='lg'>فروشگاه نیرو ابزار</Text>
                <span className='rounded-full bg-success-500 px-4 py-1 text-white'>
                  <Text fontSize='sm'>منتخب</Text>
                </span>
              </div>
              <Divider color='secondary.400' />
              <div className='flex items-center gap-3'>
                <SecurityIcon />
                <Text fontSize='md'>گارانتی اصالت و سلامت فیزیکی کالا</Text>
              </div>
              <Divider color='secondary.400' />
              <div className='flex items-start justify-between'>
                <Text fontSize='md' color='secondary.500'>
                  قیمت فروشنده
                </Text>
                <div className='flex flex-col items-end gap-3'>
                  <div className='flex items-center gap-2'>
                    <span className='rounded-full bg-error-500 px-4 py-1 text-white'>
                      <Text fontSize='sm'>12%</Text>
                    </span>
                    <Text as='del' fontSize='sm' color='secondary.500'>
                      35,500
                    </Text>
                  </div>
                  <Text fontSize='sm'>
                    <Text as='b' fontSize='md'>
                      28,000
                    </Text>
                    تومان
                  </Text>
                </div>
              </div>
              <Button variant='black'>افزودن به سبد خرید</Button>
            </Box>
          </div>
        </section>
      </section>
    </>
  );
};

export default ProductDetailsPage;
