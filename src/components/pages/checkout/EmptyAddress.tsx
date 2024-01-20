import LocationIcon from '@/assets/icons/location.svg';
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import AddressDetail from '@/components/shared/address-detail/AddressDetail';
import { useState } from 'react';
import AddressLocation from '@/components/shared/address-location/AddressLocation';
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('../../shared/map/Map'), { ssr: false });

const EmptyAddress = () => {
  const [step, setStep] = useState(1);
  const {
    isOpen: isMapOpen,
    onOpen: onMapOpen,
    onClose: onMapClose,
  } = useDisclosure();
  const {
    isOpen: isAddressOpen,
    // onOpen: onAddressOpen,
    onClose: onAddressClose,
  } = useDisclosure();
  return (
    <div className='flex h-80 flex-col items-center justify-center gap-4 rounded-md md:border'>
      <LocationIcon width='80' height='80' />
      <div className='text-lg font-bold'>هنوز آدرس ثبت نشده است</div>
      <div className='text-sm text-secondary-600'>
        برای پردازش و ارسال سفارش نیاز به ثبت آدرس پستی محل دریافت می‌باشد.
      </div>
      <Button onClick={onMapOpen}>افزودن آدرس جدید</Button>
      <Modal isOpen={isMapOpen} onClose={onMapClose}>
        <ModalOverlay />
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
              // onClick={onLocationSelect}
            >
              تایید و ادامه
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isAddressOpen} onClose={onAddressClose}>
        <ModalOverlay />
        <ModalContent maxW={'660px'} w={'full'} h={'500px'} bg={'white'}>
          {step === 1 ? (
            <AddressLocation setStep={setStep} />
          ) : (
            <AddressDetail />
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EmptyAddress;
