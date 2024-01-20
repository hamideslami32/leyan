import {
  Button,
  Divider,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@chakra-ui/react';

const AddressDetail = () => {
  return (
    <ModalContent maxW={'660px'} w={'full'} h={'500px'} bg={'white'}>
      <ModalHeader>
        <div className='text-lg'>جزئیات آدرس</div>
        <div className='text-sm font-normal text-secondary-600'>
          جزئیات آدرس پستی خود را به دقت در زیر وارد کنید.
        </div>
      </ModalHeader>
      <Divider />
      <ModalCloseButton />
      <ModalBody>
        <AddressDetail />
      </ModalBody>
      <ModalFooter>
        <div className='flex flex-1 text-sm text-secondary-600'></div>
        <Button w={'170px'} colorScheme='blue' mr={3}>
          ثبت آدرس
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default AddressDetail;
