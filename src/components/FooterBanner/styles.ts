import { Flex, chakra, Box, Text, Button, Img } from '@chakra-ui/react'

export const Container = chakra(Flex, {
  baseStyle: {
    width: '100%',
    height: '400px',
    paddingX: '40px',
    borderRadius: 16,
    position: 'relative',
    lineHeight: 1,
    marginTop: '120px',
    color: 'gray.100',
    background: 'red.500',
    alignItems: 'center',
  },
})

export const BannerDescBox = chakra(Flex, {
  baseStyle: {
    width: '100%',
    justifyContent: ['space-between'],
  },
})

export const LeftBox = chakra(Box, {
  baseStyle: {},
})

export const LeftBoxSmallText = chakra(Text, {
  baseStyle: {},
})

export const LeftBoxLargeText = chakra(Text, {
  baseStyle: {
    fontSize: 68,
    fontWeight: 900,
    letterSpacing: 4,
  },
})

export const RightBox = chakra(Box, {
  baseStyle: {
    lineHeight: 1.4,
  },
})

export const RightBoxSmallText = chakra(Text, {
  baseStyle: {
    fontSize: 18,
  },
})

export const RightBoxLargeText = chakra(Text, {
  baseStyle: {
    fontSize: 54,
    fontWeight: 900,
    letterSpacing: 4,
  },
})

export const ShopNowButton = chakra(Button, {
  baseStyle: {
    marginTop: 8,
    borderRadius: 16,
    color: 'red.500',
  },
})

export const Image = chakra(Img, {
  baseStyle: {
    position: 'absolute',
    top: '-25%',
    left: '25%',
  },
})
