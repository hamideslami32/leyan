import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { menuAnatomy } from '@chakra-ui/anatomy';

const helper = createMultiStyleConfigHelpers(menuAnatomy.keys);

export const Menu = helper.defineMultiStyleConfig({
  baseStyle: {
    item: {
      _focusWithin: {
        bg: '#eee',
      },
    },
  },
  variants: {
    authMenu: {
      list: {
        paddingTop: 0,
        paddingBottom: 0,
      },
      item: {
        alignItems: 'center',
        h: '48px',
      },
    },
  },
});
