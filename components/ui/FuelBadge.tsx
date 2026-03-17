import { StyleSheet, Text, View } from 'react-native';

import { theme } from '@/constants/theme';
import { getFuelColor } from '@/lib/utils';
import { FuelType } from '@/types';

type FuelBadgeProps = {
  fuelType: FuelType;
};

export const FuelBadge = ({ fuelType }: FuelBadgeProps) => (
  <View style={[styles.badge, { borderColor: getFuelColor(fuelType) }]}>
    <Text style={[styles.text, { color: getFuelColor(fuelType) }]}>{fuelType.toUpperCase()}</Text>
  </View>
);

const styles = StyleSheet.create({
  badge: {
    borderWidth: 1,
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
  },
  text: {
    fontSize: theme.typography.tiny,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
});
