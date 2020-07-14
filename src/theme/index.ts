import { theme } from '@chakra-ui/core';

export default {
    ...theme,
    fonts: {
        ...theme.fonts,
        heading: '"Lilita One", sans-serif',
        body: "Nunito, sans-serif"
    },
    colors: {
        ...theme.colors,
        petcode: {
          blue: '#51BCDA',
          yellow: '#FBC658',
          teal: '#51CBCE'
        }
    }
};
