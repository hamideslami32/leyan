import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

import QuestionIcon from '@/assets/icons/question.svg';
import Portal from '@/utils/portal';
import HeaderPortalTitle from '@/components/shared/header-portal-title/HeaderPortalTitle';

const FAQ = () => {
  return (
    <div className='px-6 pb-32 pt-14 leading-7'>
      <Portal destination='mobile-header-portal'>
        <HeaderPortalTitle title='پرسش های متداول' />
      </Portal>
      <div className='mx-auto w-full max-w-cs'>
        <div className='mb-14'>
          <p className='mb-2.5 text-lg font-bold'>عنوان متن در اینجا</p>
          <p className='text-secondary-600'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی
          </p>
        </div>

        <div className='mb-6 flex items-center gap-5'>
          <QuestionIcon />
          <p className='text-lg font-bold text-black'>پرسش های متداول</p>
        </div>

        <div className='rounded-lg border border-solid border-secondary-300 px-6'>
          <Accordion variant='faq'>
            <AccordionItem>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='right'>
                  لورم ایپسوم
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>لورم ایپسوم</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='right'>
                  لورم ایپسوم
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='right'>
                  لورم ایپسوم{' '}
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
