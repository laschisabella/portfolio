import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './index.css'
import './translations/i18n';

const theme = extendTheme({ 
  components: {
    Switch: {
      baseStyle: {
        track: {
          bg: '#C3A9CC',
        },
        thumb: {
          bg: '#946AA3',
        },
      },
    },
  },
 })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
