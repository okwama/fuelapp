import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { theme } from '@/constants/theme';

type ButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  rightIcon?: ReactNode;
};

export const Button = ({ label, onPress, disabled = false, variant = 'primary', rightIcon }: ButtonProps) => (
  <Pressable
    disabled={disabled}
    onPress={onPress}
    style={({ pressed }) => [
      styles.base,
      variant === 'secondary' ? styles.secondary : styles.primary,
      disabled && styles.disabled,
      pressed && styles.pressed,
    ]}
  >
    <Text style={[styles.label, variant === 'secondary' && styles.secondaryLabel]}>{label}</Text>
    {rightIcon}
  </Pressable>
);

const styles = StyleSheet.create({
  base: {
    height: 48,
    borderRadius: theme.radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  disabled: {
    opacity: 0.55,
  },
  pressed: {
    opacity: 0.85,
  },
  label: {
    color: '#09110D',
    fontSize: theme.typography.body,
    fontWeight: '700',
  },
  secondaryLabel: {
    color: theme.colors.textPrimary,
  },
});
