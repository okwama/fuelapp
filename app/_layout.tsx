import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { theme } from '@/constants/theme';
import { sheetSlideUpTransition, stationDetailTransition } from '@/lib/transitions';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.background },
        }}
      >
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="station/[id]" options={stationDetailTransition} />
        <Stack.Screen name="station/qr-scan" options={sheetSlideUpTransition} />
      </Stack>
    </>
  );
}
