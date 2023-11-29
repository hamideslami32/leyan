import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { inputAnatomy } from '@chakra-ui/anatomy';

const helper = createMultiStyleConfigHelpers(inputAnatomy.keys);

export const Input = helper.defineMultiStyleConfig({
  baseStyle: {
    field: {
      transition: 'border-color 300ms',
    },
  },
  sizes: {
    md: {
      field: {
        h: '48px',
        pr: 4,
        pl: 4,
      },
    },
  },
  variants: {
    unstyled: {
      field: {
        _placeholder: {
          fontSize: '14px',
        },
        borderRadius: '4px',
        border: 'solid 1px transparent',
      },
    },
  },
  defaultProps: { variant: 'unstyled', size: 'md' },
});
