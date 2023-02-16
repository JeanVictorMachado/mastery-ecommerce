import { Flex, chakra, Box } from '@chakra-ui/react'

export const Container = chakra(Flex, {
  baseStyle: {
    justifyContent: ['space-between'],
    marginBottom: 4,
    position: 'relative',
  },
})

export const LogoBox = chakra(Flex, {
  baseStyle: {
    fontSize: 18,
    color: 'gray',
  },
})

export const CartButton = chakra(Box, {
  baseStyle: {
    fontSize: 25,
    color: 'gray',
    marginRight: 2,
    cursor: 'pointer',
    position: 'relative',
    transition: 'transform .4s ease',

    _hover: {
      transform: 'scale(1.1, 1.1)',
    },
  },
})

export const CartQuantity = chakra(Box, {
  baseStyle: {
    width: 4,
    height: 4,
    fontSize: 10,
    fontWeight: 600,
    borderRadius: '50%',
    position: 'absolute',
    top: 0,
    right: -2,
    color: 'gray.100',
    background: 'red.500',
    textAlign: 'center',
  },
})
