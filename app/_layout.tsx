import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import GettingStarted from './components/GettingStarted';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    "SpaceMono": require('../assets/fonts/SpaceMono-Regular.ttf'),
    "Nunito": require('../assets/fonts/Nunito.ttf'),
    "NunitoItalic": require('../assets/fonts/Nunito-italic.ttf'),
    "Poppins": require('../assets/fonts/Poppins-Bold.ttf'),
    "PoppinsBlack": require('../assets/fonts/Poppins-Black.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Or replace with a loading screen
  }

  return (
    <ThemeProvider value={colorScheme === 'light' ? DefaultTheme : DarkTheme}>
      <Stack 
        initialRouteName="/componentsGettingStarted"
        screenOptions={{ headerShown: false }} 
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="components" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
