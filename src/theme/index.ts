import { theme } from '@chakra-ui/core';

export default {
    ...theme,
    fonts: {
        ...theme.fonts,
        heading: '"Lilita One", sans-serif',
        body: "Nunito, sans-serif"
    },
    fontSizes: {
        ...theme.fontSizes,
        logo: '125px'
    },
    fontWeights: {
        ...theme.fontWeights,
        thin: 300
    },
    colors: {
        ...theme.colors,
        petcode: {
            blue: '#51BCDA',
            yellow: '#FBC658',
            teal: '#51CBCE',
            neutral: {
                100: '#F7FAFC',
                200: '#EDF2F7',
                300: '#E2E8F0',
                400: '#CBD5E0',
                500: '#A0AEC0',
                600: '#718096',
                700: '#4A5568'
            },
        }
    }
};
