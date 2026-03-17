import { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { PriceCard } from '@/components/station/PriceCard';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Screen } from '@/components/ui/Screen';
import { mockStations } from '@/constants/mockStations';
import { theme } from '@/constants/theme';
import { formatDistanceKm, getStationStatusLabel } from '@/lib/utils';

export default function StationDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const station = useMemo(() => mockStations.find((item) => item.id === id) ?? mockStations[0], [id]);

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content}>
        <Card>
          <Text style={styles.name}>{station.name}</Text>
          <Text style={styles.address}>{station.address}</Text>
          <Text style={[styles.status, station.status === 'open' ? styles.open : styles.closed]}>
            {getStationStatusLabel(station.status)}
          </Text>
        </Card>

        <View style={styles.pricesRow}>
          <PriceCard fuelType="petrol" price={station.prices.petrol} />
          <PriceCard fuelType="diesel" price={station.prices.diesel} />
          <PriceCard fuelType="super" price={station.prices.super} />
        </View>

        <Card>
          <Text style={styles.meta}>Distance: {formatDistanceKm(station.distanceKm)}</Text>
          <Text style={styles.meta}>Amenities: {(station.amenities ?? []).join(' • ') || 'Standard service'}</Text>
        </Card>

        <Button
          label="Get Directions"
          variant="secondary"
          onPress={() => {
            // TODO: replace with Supabase query
          }}
        />
        <Button
          label="Earn Points"
          onPress={() => {
            // TODO: replace with Supabase query
            router.push('/station/qr-scan');
          }}
        />

        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>Back</Text>
        </Pressable>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { paddingBottom: theme.spacing.xl, gap: theme.spacing.md },
  name: { color: theme.colors.textPrimary, fontSize: theme.typography.h1, fontWeight: '800' },
  address: { color: theme.colors.textSecondary, marginTop: 6 },
  status: { marginTop: 8, fontWeight: '600' },
  open: { color: theme.colors.primary },
  closed: { color: theme.colors.danger },
  pricesRow: { flexDirection: 'row', gap: theme.spacing.sm },
  meta: { color: theme.colors.textSecondary, marginBottom: 6 },
  back: { color: theme.colors.textSecondary, textAlign: 'center' },
});
