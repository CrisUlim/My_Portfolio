import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      primary: '#00F5FF',
      secondary: '#FF00FF',
      accent: '#7928CA',
      background: {
        dark: '#0A0A0F',
        light: '#F7F7F9',
      },
      glass: {
        light: 'rgba(255, 255, 255, 0.1)',
        dark: 'rgba(0, 0, 0, 0.3)',
      },
    },
  },
  fonts: {
    heading: '"Space Grotesk", sans-serif',
    body: '"Inter", sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        bg: 'brand.background.dark',
        color: 'whiteAlpha.900',
      },
      '*::placeholder': {
        color: 'whiteAlpha.400',
      },
      '*, *::before, *::after': {
        borderColor: 'whiteAlpha.300',
      },
    },
  },
  components: {
    Button: {
      variants: {
        glass: {
          bg: 'brand.glass.dark',
          backdropFilter: 'blur(10px)',
          border: '1px solid',
          borderColor: 'whiteAlpha.200',
          color: 'white',
          _hover: {
            bg: 'brand.glass.light',
            transform: 'translateY(-2px)',
          },
          _active: {
            transform: 'translateY(0)',
          },
        },
        neon: {
          bg: 'transparent',
          color: 'brand.primary',
          border: '1px solid',
          borderColor: 'brand.primary',
          _hover: {
            boxShadow: '0 0 20px brand.primary',
            transform: 'translateY(-2px)',
          },
          _active: {
            transform: 'translateY(0)',
          },
        },
      },
    },
    Link: {
      baseStyle: {
        color: 'brand.primary',
        _hover: {
          textDecoration: 'none',
          color: 'brand.secondary',
        },
      },
    },
  },
});

export default theme; 