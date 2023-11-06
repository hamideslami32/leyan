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
