import {
  Button,
  Divider,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@chakra-ui/react';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../../shared/map/Map'), { ssr: false });

interface AddressLocationProps {
  // eslint-disable-next-line no-unused-vars
  setStep: (val: number) => void;
}

const AddressLocation = (props: AddressLocationProps) => {
  const { setStep } = props;

  return (
    <ModalContent maxW={'660px'} w={'full'} h={'500px'} bg={'white'}>
      <ModalHeader>
        <div className='text-lg'>آدرس جدید</div>
        <div className='text-sm font-normal text-secondary-600'>
          جزئیات آدرس پستی خود را به دقت در زیر وارد کنید.
        </div>
      </ModalHeader>
      <Divider />
      <ModalCloseButton />
      <ModalBody>
        <Map />
      </ModalBody>
      <ModalFooter>
        <div className='flex flex-1 text-sm text-secondary-600'>
          مرسوله های شما به این آدرس ارسال خواهد شد
        </div>
        <Button
          w={'170px'}
          colorScheme='blue'
          mr={3}
          onClick={() => setStep(2)}>
          تایید و ادامه
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default AddressLocation;
