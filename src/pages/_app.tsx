import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from '../styles/theme'

import { Layout } from '@/components/Layout'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
