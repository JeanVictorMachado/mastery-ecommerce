import { chakra, Box, Text } from '@chakra-ui/react'

export const Container = chakra(Box, {
  baseStyle: {
    padding: 4,
  },
})

export const Title = chakra(Text, {
  baseStyle: {},
})

export const NavbarBox = chakra(Box, {
  baseStyle: {},
})

export const MainBox = chakra(Box, {
  baseStyle: {
    width: '100%',
    maxWidth: '1400px',
    margin: 'auto',
  },
})

export const FooterBox = chakra(Box, {
  baseStyle: {},
})
