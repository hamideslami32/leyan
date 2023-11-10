import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: '400',
    fontSize: '16px',
  },
  sizes: {
    unsized: {},
    md: {
      h: 12,
      px: 4,
    },
  },
  variants: {
    unstyled: {
      display: 'inline-flex',
      color: 'secondary.900',
      p: 0,
      m: 0,
    },
    solid: ({ colorScheme }) => ({
      rounded: 'md',
      h: 12,
      bg: `${colorScheme}.800`,
      textColor: 'white',

      _hover: {
        bg: `${colorScheme}.700`,
      },
    }),
  },
});
