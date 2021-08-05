import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import React from 'react'
import CTA from '../components/CTA'
import Navbar from '../components/Navbar'
import parser from '../logic/parser'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  parser;
console.log("hi test 2")
  return (
      <ChakraProvider resetCSS >
          {console.log("hi test 2")}
          <CTA/>
      </ChakraProvider>
  )
}

export default MyApp
