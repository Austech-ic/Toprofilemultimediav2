import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from '@chakra-ui/react/provider'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ChakraProvider>
        <App />
      </ChakraProvider>
  </StrictMode>,
)
