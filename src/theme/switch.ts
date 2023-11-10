import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { switchAnatomy } from '@chakra-ui/anatomy';

const helper = createMultiStyleConfigHelpers(switchAnatomy.keys);

export const Switch = helper.defineMultiStyleConfig({
  sizes: {
    filter: {
      thumb: {
        w: 'auto',
        h: '100%',
        aspectRatio: 1,

        _checked: {
          transform: 'translateX(-20px)',
        },
      },
      track: {
        p: '3px',
        w: '40px',
        h: '20px',
      },
    },
  },
  variants: {
    filter: {
      thumb: {
        bg: 'secondary.600',
        _checked: {
          translate: 'translateX(-60px)',
          bg: 'secondary.100',
        },
      },
      track: {
        border: 'solid 1px',
        borderColor: 'secondary.600',
        bg: 'white',
        _checked: {
          bg: '#00AA4F',
          borderColor: '#00AA4F',
        },
      },
    },
  },
});
