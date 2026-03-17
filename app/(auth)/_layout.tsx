import { Stack } from 'expo-router';

import { authSlideTransition } from '@/lib/transitions';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, ...authSlideTransition }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="otp" />
      <Stack.Screen name="profile-setup" />
    </Stack>
  );
}
