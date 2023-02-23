import { extendTheme, theme } from '@chakra-ui/react'

import global from './global'

export const customTheme = extendTheme({
  ...theme,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: () => ({
      ...global,
    }),
  },
  colors: {
    ...theme.colors,
  },
})
