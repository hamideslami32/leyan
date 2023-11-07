import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { accordionAnatomy } from '@chakra-ui/anatomy';

const helper = createMultiStyleConfigHelpers(accordionAnatomy.keys);

export const Accordion = helper.defineMultiStyleConfig({
  baseStyle: {
    container: {
      border: 'none',
      borderBottom: '1px #E6E8EC solid',
    },
    button: {
      py: 6,
    },
    panel: {
      color: 'secondary.600',
    },
  },
});
