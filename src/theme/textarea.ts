import { defineStyleConfig } from '@chakra-ui/react';

export const Textarea = defineStyleConfig({
  baseStyle: {
    pr: 4,
    pl: 4,
    pt: 3,
    transition: 'border-color 300ms',
    resize: 'none',
  },
  variants: {
    unstyled: {
      _placeholder: {
        fontSize: '14px',
      },
      backgroundColor: '#f1f2f4',
      borderRadius: '4px',
      border: 'solid 2px transparent',
      _focus: {
        bg: 'secondary.200',
        border: 'solid 2px #131B1F',
      },
    },
  },
  defaultProps: {
    variant: 'unstyled',
  },
});
