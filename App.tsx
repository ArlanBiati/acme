import { StatusBar } from 'react-native';
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { ThemeProvider } from 'styled-components';

import { Routes } from '@routes/index';

import theme from '@theme/theme';
import AppLoading from 'expo-app-loading';
import { UserNameProvider } from '@contexts/UserNameProvider';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
  });
  1;
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <UserNameProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </UserNameProvider>
    </>
  );
}
