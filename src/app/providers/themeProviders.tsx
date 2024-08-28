import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import {  PropsWithChildren } from 'react';

const themeProvider = extendTheme()

export const ThemeProvider= ({children}: PropsWithChildren) =>{
	return (
		<ChakraProvider theme={themeProvider}>
			{children}
		</ChakraProvider>
	)
}
