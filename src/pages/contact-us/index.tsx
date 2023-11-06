import Link from 'next/link';
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Input,
  Textarea,
  Select,
} from '@chakra-ui/react';

const ContactUs = () => {
  return (
    <div className='p-6'>
      <div className='mx-auto max-w-cs'>
        <form className='mb-14 rounded-lg border border-solid border-secondary-300 p-6'>
          <h1 className='mb-2.5 text-2xl font-bold text-secondary-700'>
            تماس با پالیزبان
          </h1>
          <p className='text-secondary-600'>
            لطفا پیش از تماس با الگری بالکا، بابت دریافت سوال خود ابتدا{' '}
            <Link href='/faq' className='text-primary'>
              پرسش های متداول
            </Link>{' '}
            را مشاهده کنید.
          </p>

          <Divider borderColor='secondary.300' borderBottomWidth='1px' my={6} />

          <Grid gridTemplateColumns='1fr 1fr' rowGap={4} columnGap={6}>
            <Select>
              <option value='test'>test</option>
              <option value='test1'>test</option>
              <option value='test2'>test</option>
            </Select>
            <Input placeholder='نام و نام خانوادگی' />
            <Input placeholder='ایمیل' />
            <Input placeholder='شماره تماس' />
            <Textarea placeholder='متن پیام شما' gridColumn='span 2' rows={6} />
          </Grid>

          <Divider borderColor='secondary.300' borderBottomWidth='1px' my={6} />

          <Button colorScheme='secondary' display='flex' px={10} mr='auto'>
            ارسال پیام
          </Button>
        </form>

        <Flex lineHeight='28px' direction='column' alignItems='stretch' gap={6}>
          <Box as='section'>
            <h3 className='mb-2.5 text-lg font-bold'>آدرس دفتر مرکزی</h3>
            <p className='text-secondary-600'>
              استان تهران شهر تهران - خیابان گاندی جنوبی - نبش خیابان ۲۱ - پلاک
              ۲۸
            </p>
          </Box>

          <Box as='section'>
            <h3 className='mb-2.5 text-lg font-bold'>خدمات پس از فروش</h3>
            <p className='text-secondary-600'>
              لطفاً کالا را برای بازگرداندن و ارسال آن به خدمات پس از فروش
              دیجی‌کالا از طریق پست، تنها به صندوق پستی 3469-15875 ارسال
              کنید.(شما می‌توانید از طریق بخش سفارش‌های من اقدام به بازگردانی
              کالا کنید)
            </p>
          </Box>

          <Box as='section'>
            <h3 className='mb-2.5 text-lg font-bold'>مرکز امور مشتریان</h3>
            <p className='text-secondary-600'>
              تهران، نارمک ، رسالت شرق به غرب بعد از خیابان حیدرخانی، نرسیده به
              خیابان ۱۲ پلاک ۵۴۹ (شنبه تا پنجشنبه 9 الی 18 به جز ایام تعطیل
              رسمی) <br />
              تهران، ونک ، خیابان ولیعصر، خیابان خدامی ، روبه روی هتل هما ، نبش
              شادی ۱، پلاک ۱/۳۱ (شنبه تا پنجشنبه 9 الی 18 به جز ایام تعطیل رسمی){' '}
              <br />
              تهران، بلوار فرحزادی، نبش سیمای ایران، مرکز خرید پلاتین، طبقه اول
              واحد ۱۰۷ (شنبه تا پنجشنبه 9 الی 18 به جز ایام تعطیل رسمی) <br />
            </p>
          </Box>

          <Flex direction='column' gap={1.5}>
            <p className='mb-2.5 text-lg font-bold'>
              هفت روز هفته، میزبان صدای گرم شما هستیم!
            </p>
            <p className='text-secondary-600'>
              <span>تلفن: </span>
              <span dir='ltr' className='font-bold text-secondary-900'>
                ۰۲۱ - ۵۱۲۰۰۸۹۳
              </span>
            </p>
            <p className='text-secondary-600'>
              <span>ایمیل: </span>
              <span dir='ltr' className='font-bold text-secondary-900'>
                info@agribazzar.ir
              </span>
            </p>
          </Flex>

          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d648.4850894015469!2d51.370366232765164!3d35.68389364491483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1699254538366!5m2!1sen!2s'
            width='800'
            height='300'
            className='border-none! w-full rounded-lg'
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'></iframe>
        </Flex>
      </div>
    </div>
  );
};

export default ContactUs;
