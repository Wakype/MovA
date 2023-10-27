'use client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import React, { ReactNode } from 'react';
const theme = extendTheme({
  components: {},
});

const CustomChakra = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default CustomChakra;
