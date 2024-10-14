import { useMemo } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Flex,
  Grid,
  Text,
  Button,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  StackDivider,
  Switch,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

import Categories from '@/components/pages/home/categories/Categories';
import ProductCard from '@/components/shared/product-card/ProductCard';
import SortButton from '@/components/pages/product-list-page/SortButton';
import { products } from '@/components/pages/home/best-sellers/BestSellers';

import SortIcon from '@/assets/icons/sort.svg';
import FilterIcon from '@/assets/icons/filter.svg';
import TrashIcon from '@/assets/icons/trash.svg';
import SearchIcon from '@/assets/icons/search.svg';
import Portal from '@/utils/portal';
import MobileSearch from '@/components/layout/search-bar/MobileSearch';

const breadcrumbData = [
  {
    title: 'لیان',
    link: '/',
  },
  {
    title: 'طلا',
    link: '/categories/farming-equipment',
  },
  {
    title: 'شمش ۵۰ گرمی',
    link: '/categories/farming-equipment/tractor-supply',
  },
];

const ProductList = () => {
  const productCards = useMemo(
    () =>
      products.map((product, idx) => (
        <ProductCard
          width='full'
          showRating
          autoWidth
          isBordered
          key={idx}
          productData={product}
        />
      )),
    [],
  );

  return (
    <>
      <Portal destination='mobile-header-portal'>
        <MobileSearch />
      </Portal>
      <div className='h-12 border-b bg-white md:hidden'>
        <Button variant={'text'} leftIcon={<FilterIcon />}>
          فیلترها
        </Button>
        <Button variant={'text'} leftIcon={<SortIcon />}>
          پربازدیدترین
        </Button>
      </div>
      <div className='px-4 pb-28 pt-8'>
        <div className='mx-auto max-w-cs'>
          <Breadcrumb
            color='secondary.600'
            fontSize='sm'
            mb={6}
            display={{ base: 'none', md: 'flex' }}>
            {breadcrumbData.map((item, index) => (
              <BreadcrumbItem key={index} isCurrentPage>
                <BreadcrumbLink href={item.link}>{item.title}</BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>

          <Heading as='h1' mb={6}>
            شمش ۵۰ گرمی
          </Heading>

          <Box as='section' mb={6}>
            <Heading as='h2' fontSize='lg' mb={5}>
              دسته بندی ها
            </Heading>
            <Categories
              showTitle={false}
              centerItems={false}
              hasPadding={false}
            />
          </Box>

          <Flex
            gap={6}
            align='flex-start'
            flexDirection={{ base: 'column', md: 'row' }}>
            <Box
              display={{ base: 'none', md: 'block' }}
              bg='#ffffff'
              rounded='md'
              shadow='lg'
              p={4}
              w='282px'
              flexShrink={0}>
              <Flex justify='space-between' mb={8}>
                <Text fontWeight={700} fontSize='xl' color='secondary.900'>
                  فیلترها
                </Text>
                <Button
                  gap={1}
                  size='sm'
                  color='#2E83FD'
                  variant='text'
                  leftIcon={<TrashIcon width='20' height='20' />}>
                  حذف فیلترها
                </Button>
              </Flex>
              <Stack
                spacing={3}
                divider={<StackDivider color='secondary.300' />}>
                <Accordion allowMultiple variant='filter'>
                  <AccordionItem>
                    <AccordionButton>
                      <Box as='span' flex='1' textAlign='right'>
                        برند ها
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel>
                      <InputGroup variant='unstyled' size='unsized'>
                        <InputLeftElement
                          right='12px'
                          w='24px'
                          h='24px'
                          top='50%'
                          pointerEvents='none'
                          transform='translateY(-50%)'>
                          <SearchIcon className='text-secondary-500' />
                        </InputLeftElement>
                        <Input
                          h='40px'
                          placeholder='جستجو در برند‌ ...'
                          rounded='md'
                          pr='42px'
                          variant='search'
                          size='search'
                          bg='secondary.200'
                        />
                      </InputGroup>

                      <Switch size='filter' variant='filter' />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowMultiple variant='filter'>
                  <AccordionItem>
                    <AccordionButton>
                      <Box as='span' flex='1' textAlign='right'>
                        برند ها
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel>lorem ipsom</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Stack>
            </Box>
            <Box flexGrow={1} w={'full'}>
              <Flex
                display={{ base: 'none', lg: 'flex' }}
                gap={3}
                px={3}
                alignItems='center'
                bg='secondary.100'
                h='56px'
                mb={8}
                rounded='base'>
                <Flex gap={2}>
                  <SortIcon />
                  <Text>مرتب سازی:</Text>
                </Flex>
                <SortButton>پربازدیدترین</SortButton>
                <SortButton>جدیدترین</SortButton>
                <SortButton active>پرفروش‌ترین</SortButton>
                <SortButton>ارزان‌ترین</SortButton>
                <SortButton>گران‌ترین</SortButton>
                {/* <SortButton>سریع‌ترین ارسال</SortButton>
              <SortButton>پیشنهاد خریداران</SortButton> */}

                <Text fontSize='sm' color='secondary.600' mr='auto'>
                  3,093,488 کالا
                </Text>
              </Flex>
              <Grid
                gridTemplateColumns={{
                  base: '1fr',
                  md: '1fr 1fr',
                  lg: '1fr 1fr 1fr',
                }}
                gap={6}>
                {productCards}
              </Grid>
            </Box>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default ProductList;
