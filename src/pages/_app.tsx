import { ChakraProvider } from '@chakra-ui/react'
import { Toaster } from 'react-hot-toast'

import { Layout } from '@/components/Layout'
import { ShoppingCartProvider } from '@/hooks/ShoppingCart'

import { customTheme } from '../styles/theme'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <ShoppingCartProvider>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </ShoppingCartProvider>
    </ChakraProvider>
  )
}
