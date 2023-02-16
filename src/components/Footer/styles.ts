import { chakra, Flex } from '@chakra-ui/react'

export const Container = chakra(Flex, {
  baseStyle: {
    width: '100%',
    color: 'gray.600',
    marginTop: 4,
    paddingTop: '70px',
    paddingBottom: '30px',
    paddingX: '10px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
})

export const IconsBox = chakra(Flex, {
  baseStyle: {
    gap: 4,
    alignItems: 'center',
  },
})
