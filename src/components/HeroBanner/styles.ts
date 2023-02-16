import { chakra, Text, Box, Image, Button, Flex } from '@chakra-ui/react'

export const Container = chakra(Box, {
  baseStyle: {
    height: '500px',
    width: '100%',
    paddingY: '100px',
    paddingX: '80px',
    borderRadius: 16,
    position: 'relative',
    lineHeight: 0.9,
    background: 'gray.300',
  },
})

export const SmallText = chakra(Text, {
  baseStyle: {
    fontSize: 20,
  },
})

export const MidText = chakra(Text, {
  baseStyle: {
    fontSize: 50,
    marginTop: 2,
    fontWeight: 700,
    letterSpacing: 4,
    color: 'gray.800',
  },
})

export const LargeText = chakra(Text, {
  baseStyle: {
    fontSize: 120,
    marginTop: 2,
    marginLeft: -1,
    fontWeight: 700,
    letterSpacing: 4,
    color: 'gray.50',
    textTransform: 'uppercase',
  },
})

export const BannerImage = chakra(Image, {
  baseStyle: {
    width: '450px',
    height: '450px',
    position: 'absolute',
    top: 0,
    right: '10%',
  },
})

export const BannerButton = chakra(Button, {
  baseStyle: {
    marginTop: 8,
    borderRadius: 16,
    fontSize: 18,
    fontWeight: 500,
    color: 'white',
    background: 'red.500',
    zIndex: 1000,

    _hover: {
      background: 'red.600',
    },
  },
})

export const DescBox = chakra(Flex, {
  baseStyle: {
    width: '300px',
    position: 'absolute',
    right: '80px',
    bottom: 8,
    flexDirection: 'column',
  },
})

export const TitleDescription = chakra(Text, {
  baseStyle: {
    fontWeight: 700,
    marginBottom: 4,
    alignSelf: 'flex-end',
    color: 'gray.600',
  },
})

export const Description = chakra(Text, {
  baseStyle: {
    textAlign: 'end',
    color: 'gray.500',
  },
})
