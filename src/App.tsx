import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Provider as PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';

import {
  useFonts,
  Sora_400Regular,
  Sora_600SemiBold,
} from '@expo-google-fonts/sora';

import Routes from './routes';
import theme from './theme';

const App = () => {
  let [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_600SemiBold,
  });

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <PaperProvider theme={theme}>
        <StatusBar
          style="dark"
          translucent
          backgroundColor={theme.colors.background}
        />
        <Routes />
        <Toast />
      </PaperProvider>
    </ThemeProvider>
  );
};

export default App;
