import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Card } from '@/components/ui/Card';
import { theme } from '@/constants/theme';
import { formatDistanceKm, getStationStatusLabel } from '@/lib/utils';
import { Station } from '@/types';

type StationListItemProps = {
  station: Station;
  onPress: () => void;
};

export const StationListItem = ({ station, onPress }: StationListItemProps) => (
  <Pressable onPress={onPress}>
    <Card style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.name}>{station.name}</Text>
        <Text style={[styles.status, station.status === 'open' ? styles.open : styles.closed]}>
          {getStationStatusLabel(station.status)}
        </Text>
      </View>
      <Text style={styles.meta}>{formatDistanceKm(station.distanceKm)} away</Text>
      <View style={styles.pricesRow}>
        <Text style={styles.priceText}>P: {station.prices.petrol}</Text>
        <Text style={styles.priceText}>D: {station.prices.diesel}</Text>
        <Text style={styles.priceText}>S: {station.prices.super}</Text>
      </View>
    </Card>
  </Pressable>
);

const styles = StyleSheet.create({
  card: { marginBottom: theme.spacing.sm, gap: 8 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 8 },
  name: { color: theme.colors.textPrimary, fontSize: theme.typography.body, fontWeight: '700', flex: 1 },
  status: { fontSize: theme.typography.caption, fontWeight: '600' },
  open: { color: theme.colors.primary },
  closed: { color: theme.colors.danger },
  meta: { color: theme.colors.textSecondary, fontSize: theme.typography.caption },
  pricesRow: { flexDirection: 'row', justifyContent: 'space-between' },
  priceText: { color: theme.colors.textPrimary, fontSize: theme.typography.caption, fontWeight: '600' },
});
