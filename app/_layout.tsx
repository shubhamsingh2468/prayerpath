import "../global.css";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    // Hide splash screen
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 500);
  }, []);

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#F9F7F2' } }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="app-selection" />
        <Stack.Screen name="intercept" />
        <Stack.Screen name="player" />
        <Stack.Screen name="reflection" />
        <Stack.Screen name="dashboard" />
      </Stack>
    </SafeAreaProvider>
  );
}
