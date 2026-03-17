import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Card } from '@/components/ui/Card';
import { theme } from '@/constants/theme';

type SettingRowProps = {
  label: string;
  value?: string;
  rightElement?: ReactNode;
  onPress?: () => void;
};

export const SettingRow = ({ label, value, rightElement, onPress }: SettingRowProps) => (
  <Pressable onPress={onPress} disabled={!onPress}>
    <Card style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <View>{rightElement ?? <Text style={styles.value}>{value}</Text>}</View>
    </Card>
  </Pressable>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.sm,
  },
  label: { color: theme.colors.textPrimary, fontSize: theme.typography.body, fontWeight: '600' },
  value: { color: theme.colors.textSecondary, fontSize: theme.typography.caption },
});
