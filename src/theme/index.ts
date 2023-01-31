import {
  configureFonts,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';

const fontConfig = {
  ios: {
    regular: {
      fontFamily: 'Sora_400Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Sora_400Regular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Sora_400Regular',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Sora_400Regular',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'Sora_400Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Sora_400Regular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Sora_400Regular',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Sora_400Regular',
      fontWeight: 'normal',
    },
  },
};

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#770FDF',
    secondary: '#0FDF8F',
    background: '#f5f5f5',
    white: '#FFFFFF',
    border: '#E6E6E6',
    labelSection: '#A0A0A0',
    black: '#000',
  },
  // @ts-ignore
  fonts: configureFonts({ config: fontConfig }),
};
