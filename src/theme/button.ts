import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    rounded: '4px',
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
    black: {
      h: 12,
      bg: 'secondary.900',
      textColor: 'white',

      _hover: {
        bg: `secondary.700`,
      },
    },
    solid: ({ colorScheme }) => ({
      h: 12,
      bg: `${colorScheme}.800`,
      textColor: 'white',

      _hover: {
        bg: `${colorScheme}.700`,
      },
    }),
  },
  defaultProps: {
    variant: 'black',
  },
});
