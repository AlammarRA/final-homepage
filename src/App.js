import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import Home from './Home';
import SmallWithSocial from './Footer';
import Nav from './Navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
      <Nav/>
        <Grid minH="50vh" p={3}>

          <VStack spacing={8}>
           <Home/>
          </VStack>
        </Grid>
        <SmallWithSocial/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
