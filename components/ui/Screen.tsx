import { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { theme } from '@/constants/theme';

type ScreenProps = PropsWithChildren<{ padded?: boolean }>;

export const Screen = ({ children, padded = true }: ScreenProps) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={[styles.container, padded && styles.padded]}>{children}</View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  padded: {
    paddingHorizontal: theme.spacing.md,
  },
});
