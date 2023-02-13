import { Flex, chakra, Text } from '@chakra-ui/react'

export const TitleBox = chakra(Flex, {
  baseStyle: {
    paddingY: 8,
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const Title = chakra(Text, {
  baseStyle: {
    fontSize: 40,
    fontWeight: 800,
    color: 'gray.700',
  },
})

export const Subtitle = chakra(Text, {
  baseStyle: {
    color: 'gray.400',
  },
})

export const ProductsBox = chakra(Flex, {
  baseStyle: {
    width: '100%',
    gap: 6,
    marginTop: 6,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
})
