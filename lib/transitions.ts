import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const sharedSpringConfig = {
  stiffness: 280,
  damping: 32,
  mass: 1,
  overshootClamping: true,
};

// Placeholder alignment with react-native-screen-transitions presets.
export const authSlideTransition: NativeStackNavigationOptions = {
  animation: 'slide_from_right',
};

export const stationDetailTransition: NativeStackNavigationOptions = {
  animation: 'fade_from_bottom',
};

export const sheetSlideUpTransition: NativeStackNavigationOptions = {
  presentation: 'transparentModal',
  animation: 'slide_from_bottom',
};
