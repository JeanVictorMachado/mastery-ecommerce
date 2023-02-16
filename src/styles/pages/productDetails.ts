import { Box, chakra, Flex, Img } from '@chakra-ui/react'

export const Container = chakra(Flex, {
  baseStyle: {
    gap: '40px',
    margin: '40px',
    marginTop: '60px',
    color: 'gray.600',
  },
})

export const ImageBox = chakra(Box, {
  baseStyle: {},
})

export const Image = chakra(Img, {
  baseStyle: {},
})
