import { extendTheme } from '@chakra-ui/react';
import * as colors from './colors';

import { Input } from './input';
import { Textarea } from './textarea';
import { Button } from './button';
import { Menu } from './menu';
import { Select } from './select';
import { Accordion } from './accordion';
import { Switch } from './switch';

export const theme = extendTheme({
  fonts: {
    heading: `peyda, sans-serif`,
    body: `peyda, sans-serif`,
  },
  colors: { ...colors },
  direction: 'rtl',
  components: {
    Input,
    Textarea,
    Button,
    Menu,
    Select,
    Accordion,
    Switch,
  },
});
