import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    mainBg: '#171923',
    bg: '#2D3748',
    fontColor: '#ebf8ff',
    borderColor: '#D53F8C',
    shadows: 'rgba(255, 255, 255, 0.2)'
  },
  Menu: {
    background: 'orange'
  },
  styles: {
    global: () => ({
      body: {
        background: 'mainBg'
      }
    })
  }
})
