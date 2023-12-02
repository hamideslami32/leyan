import { mainCategories } from '@/components/layout/main-menu/mega-menu/MegaMenu';
import { useWindowSize } from '@/utils/hooks/useWindowSize';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Link,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import { categoriesData } from '@/components/pages/home/categories/Categories';

const Categories = () => {
  const { width } = useWindowSize();

  const router = useRouter();
  if (width > 768) router.push('/');

  return (
    <div className='overflow-y-scsroll'>
      <Accordion allowToggle>
        {mainCategories.map((category, index) => (
          <AccordionItem key={index} className='border-b p-2'>
            <h2>
              <AccordionButton h={16}>
                <Box
                  className='flex gap-2'
                  as='span'
                  flex='1'
                  fontSize={'lg'}
                  fontWeight={'bold'}
                  textAlign='right'>
                  {category.icon}
                  {category.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} minH={'auto'}>
              <Link
                href={'/'}
                className='flex items-center gap-2'
                mb={6}
                color={'primary.500'}>
                <span>همه محصولات ادوات کشاورزی</span>
                <ArrowLeftIcon width='20' height='20' />
              </Link>
              <Accordion allowToggle>
                {mainCategories.map((category, index) => (
                  <AccordionItem key={index} className='py-2' border={'none'}>
                    <h2>
                      <AccordionButton h={10} px={0}>
                        <Box as='span' flex='1' textAlign='right'>
                          {category.title}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} px={0}>
                      <div className={`flex flex-wrap gap-x-5 gap-y-8`}>
                        {categoriesData.map((item, index) => (
                          <Link
                            href={item.link}
                            key={index}
                            className='flex shrink-0 flex-col items-center'>
                            <Image
                              src={item.imageUrl}
                              alt={item.title}
                              width='64'
                              height='64'
                              className='hover:drop-shadow'
                            />
                            <span className='mt-2 text-center'>
                              {item.title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Categories;
