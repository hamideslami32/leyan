import { extendTheme } from '@chakra-ui/react';
import * as colors from './colors';

import { Input } from './input';
import { Textarea } from './textarea';
import { Button } from './button';
import { Select } from './select';
import { Accordion } from './accordion';

export const theme = extendTheme({
  colors: colors,
  direction: 'rtl',
  components: {
    Input,
    Textarea,
    Button,
    Select,
    Accordion,
  },
});
