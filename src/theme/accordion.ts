import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { accordionAnatomy } from '@chakra-ui/anatomy';

const helper = createMultiStyleConfigHelpers(accordionAnatomy.keys);

export const Accordion = helper.defineMultiStyleConfig({
  variants: {
    faq: {
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
    filter: {
      container: {
        border: 'none',
      },
      button: {
        p: 0,
        fontSize: 'lg',
      },
      icon: {
        color: 'secondary.500',
        w: '24px',
        h: '24px',
      },
      panel: {
        px: 0,
        py: 2,
      },
    },
  },
});
