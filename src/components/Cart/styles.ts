import { Flex, chakra, Box, Text } from '@chakra-ui/react'
import Link from 'next/link'

export const Container = chakra(Box, {
  baseStyle: {
    width: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 100,
    transition: 'all 1s ease-in-out',
  },
})

export const Content = chakra(Box, {
  baseStyle: {
    height: '100vh',
    width: '600px',
    background: 'white',
    float: 'right',
    paddingY: '40px',
    paddingX: '10px',
    position: 'relative',
  },
})

export const CartHeadingButton = chakra(Flex, {
  baseStyle: {
    gap: 1,
    marginLeft: '10px',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 500,
    cursor: 'pointer',
  },
})

export const YourCartText = chakra(Text, {
  baseStyle: {
    marginLeft: 2,
  },
})

export const NumItemsText = chakra(YourCartText, {
  baseStyle: {
    color: 'red.500',
  },
})

export const LinkBox = chakra(Link, {
  baseStyle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
})

export const EmptyCartBox = chakra(Flex, {
  baseStyle: {
    width: '100%',
    padding: '50px',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const EmptyCarText = chakra(Text, {
  baseStyle: {
    fontSize: 20,
    fontWeight: 600,
  },
})

export const ReturnShoppingButton = chakra(Flex, {
  baseStyle: {
    width: '100%',
    maxWidth: '400px',
    paddingY: 2,
    paddingX: 4,
    borderRadius: 16,
    fontSize: 20,
    marginTop: 8,
    textTransform: ['uppercase'],
    background: 'red.500',
    color: 'white',
    cursor: 'pointer',
    justifyContent: 'center',
    transform: 'scale(1, 1)',
    transition: 'transform 0.5s ease',

    _hover: {
      transform: 'scale(1.05, 1.05)',
    },
  },
})
