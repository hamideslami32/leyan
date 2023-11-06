import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: '400',
    fontSize: '16px',
  },
  sizes: {
    md: {
      h: 12,
      px: 4,
    },
  },
  variants: {
    solid: {
      rounded: 'md',
      h: 12,
      bg: 'black',
      textColor: 'white',

      _hover: {
        bg: 'secondary.900',
      },
    },
  },
});
