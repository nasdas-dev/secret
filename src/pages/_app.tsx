import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import React from 'react'
import CTA from '../components/CTA'
import Navbar from '../components/Navbar'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider resetCSS >
          
          <CTA/>
      </ChakraProvider>
  )
}

export default MyApp
