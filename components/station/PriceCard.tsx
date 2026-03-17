import { StyleSheet, Text, View } from 'react-native';

import { Card } from '@/components/ui/Card';
import { FuelBadge } from '@/components/ui/FuelBadge';
import { theme } from '@/constants/theme';
import { formatCurrencyKsh } from '@/lib/utils';
import { FuelType } from '@/types';

type PriceCardProps = {
  fuelType: FuelType;
  price: number;
};

export const PriceCard = ({ fuelType, price }: PriceCardProps) => (
  <Card style={styles.card}>
    <FuelBadge fuelType={fuelType} />
    <Text style={styles.price}>{formatCurrencyKsh(price)}</Text>
    <Text style={styles.unit}>per litre</Text>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    gap: theme.spacing.sm,
  },
  price: {
    color: theme.colors.textPrimary,
    fontSize: theme.typography.h2,
    fontWeight: '800',
  },
  unit: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.caption,
  },
});
