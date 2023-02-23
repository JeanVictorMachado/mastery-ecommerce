import { Box, Button, chakra, Flex, Img, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

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
  baseStyle: {
    width: '400px',
    borderRadius: 16,
    background: 'gray.200',
    cursor: 'pointer',
    transition: '.3s ease-in-out',

    _hover: {
      background: 'red.500',
    },
  },
})

export const SmallImagesBox = chakra(Flex, {
  baseStyle: {
    gap: '10px',
    marginTop: '20px',
  },
})

export const SmallImage = chakra(Img, {
  baseStyle: {
    width: '70px',
    height: '70px',
    borderRadius: 8,
    background: 'gray.200',
    cursor: 'pointer',
  },
})

export const ProductDetailsDesc = chakra(Box, {
  baseStyle: {
    gap: '10px',
    marginTop: '20px',
  },
})

export const ProductName = chakra(Text, {
  baseStyle: {
    fontSize: 28,
    color: 'gray.700',
    fontWeight: 700,
  },
})

export const ReviewsBox = chakra(Flex, {
  baseStyle: {
    gap: 1,
    marginTop: 1,
    color: 'red.500',
    alignItems: 'center',
  },
})

export const ReviewsQty = chakra(Text, {
  baseStyle: {
    color: 'gray.500',
    marginLeft: 2,
  },
})

export const DetailTitle = chakra(Text, {
  baseStyle: {
    color: 'gray.700',
    fontWeight: 500,
    marginTop: 2,
  },
})

export const DetailText = chakra(Text, {
  baseStyle: {
    color: 'gray.500',
  },
})

export const PriceDetailText = chakra(Text, {
  baseStyle: {
    marginY: 4,
    fontSize: 22,
    fontWeight: 600,
    color: 'red.500',
  },
})

export const QuantityBox = chakra(Box, {
  baseStyle: {
    width: 150,
  },
})

export const QuantityDesc = chakra(Flex, {
  baseStyle: {
    marginTop: 1,
    border: '1px solid',
    borderColor: 'gray.400',
    justifyContent: ['space-between'],
    alignItems: 'center',
  },
})

export const Minus = chakra(Flex, {
  baseStyle: {
    height: '40px',
    paddingX: 4,
    width: 'min-content',
    borderRight: '1px solid',
    borderColor: 'gray.400',
    color: 'red.500',
    cursor: 'pointer',
    alignItems: 'center',
  },
})

export const Num = chakra(Text, {
  baseStyle: {
    fontWeight: 500,
  },
})

export const Plus = chakra(Minus, {
  baseStyle: {
    borderRight: 'none',
    borderLeft: '1px solid',
    color: 'green.500',
  },
})

export const ButtonsBox = chakra(Flex, {
  baseStyle: {
    gap: 8,
  },
})

export const AddToCartButton = chakra(Button, {
  baseStyle: {
    width: 150,

    marginTop: 8,
    borderRadius: 0,
  },
})

export const BuyNowButton = chakra(AddToCartButton, {
  baseStyle: {},
})

export const MaylikeProductsBox = chakra(Flex, {
  baseStyle: {
    marginTop: 12,
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const Marquee = chakra(motion(Box), {
  baseStyle: {
    width: '100%',
    height: '400px',
    position: 'relative',
    overflowX: 'hidden',
  },
})

export const MaylikeProducts = chakra(Flex, {
  baseStyle: {
    gap: 4,
    marginTop: 12,
    justifyContent: 'center',

    position: 'absolute',
    whiteSpace: 'nowrap',
    willChange: 'transform',
    width: '180%',

    _hover: {
      animationPlayState: 'paused',
    },
  },
})
