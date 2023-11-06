import { extendTheme } from '@chakra-ui/react';
import * as colors from './colors';

import { Input } from './input';
import { Textarea } from './textarea';
import { Button } from './button';

export const theme = extendTheme({
  colors: colors,
  components: {
    Input,
    Textarea,
    Button,
  },
});
