import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { inputAnatomy } from '@chakra-ui/anatomy';

const helper = createMultiStyleConfigHelpers(inputAnatomy.keys);

export const Input = helper.defineMultiStyleConfig({
  baseStyle: {
    field: {
      h: '48px',
      pr: 4,
      pl: 4,
      transition: 'border-color 300ms',
    },
  },
  variants: {
    unstyled: {
      field: {
        _placeholder: {
          fontSize: '14px',
        },
        backgroundColor: 'secondary.200',
        borderRadius: '4px',
        border: 'solid 2px transparent',
        _focus: {
          bg: 'secondary.100',
          border: 'solid 2px #131B1F',
        },
      },
    },
  },
  defaultProps: { variant: 'unstyled' },
});
