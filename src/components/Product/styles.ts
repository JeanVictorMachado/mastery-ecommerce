import { chakra, Box, Img, Text } from '@chakra-ui/react'

export const CardBox = chakra(Box, {
  baseStyle: {
    width: '250px',
    height: '250px',
    transform: 'scale(1, 1)',
    transition: 'transform 0.5s ease',
    color: 'gray.600',

    _hover: {
      transform: 'scale(1.1, 1.05)',
    },
  },
})

export const Image = chakra(Img, {
  baseStyle: {
    borderRadius: 16,
    background: 'gray.200',
  },
})

export const Name = chakra(Text, {
  baseStyle: {
    fontWeight: 500,
    marginTop: 1,
  },
})

export const Price = chakra(Text, {
  baseStyle: {
    fontWeight: 800,
  },
})
