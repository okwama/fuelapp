import { useMemo, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import { StationMap } from '@/components/map/StationMap';
import { StationListItem } from '@/components/station/StationListItem';
import { Pressable } from 'react-native';
import { Screen } from '@/components/ui/Screen';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { mockStations } from '@/constants/mockStations';
import { theme } from '@/constants/theme';
import { FuelType } from '@/types';

const fuels: FuelType[] = ['petrol', 'diesel', 'super'];

export default function HomeScreen() {
  const router = useRouter();
  const [fuelFilter, setFuelFilter] = useState<FuelType>('petrol');
  const [refreshing, setRefreshing] = useState(false);

  const filteredStations = useMemo(() => [...mockStations].sort((a, b) => a.prices[fuelFilter] - b.prices[fuelFilter]), [fuelFilter]);

  // TODO: replace with Supabase query
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 800);
  };

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={theme.colors.primary} />}
      >
        <SectionHeader title="Good evening, Amina" subtitle="Find the best nearby fuel prices" />
        <View style={styles.filterRow}>
          {fuels.map((fuel) => (
            <Pressable
              key={fuel}
              onPress={() => {
                // TODO: replace with Supabase query
                setFuelFilter(fuel);
              }}
              style={[styles.pill, fuelFilter === fuel && styles.activePill]}
            >
              <Text style={[styles.pillText, fuelFilter === fuel && styles.activePillText]}>{fuel.toUpperCase()}</Text>
            </Pressable>
          ))}
        </View>

        <StationMap stations={filteredStations} onSelectStation={(id) => router.push(`/station/${id}`)} />

        <SectionHeader title="Nearby stations" subtitle="Sorted by selected fuel price" />
        {filteredStations.map((station) => (
          <StationListItem key={station.id} station={station} onPress={() => router.push(`/station/${station.id}`)} />
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { paddingBottom: theme.spacing.xl, gap: theme.spacing.md },
  filterRow: { flexDirection: 'row', gap: theme.spacing.sm },
  pill: {
    flex: 1,
    borderRadius: theme.radius.pill,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activePill: { backgroundColor: theme.colors.primary, borderColor: theme.colors.primary },
  pillText: { color: theme.colors.textPrimary, fontSize: theme.typography.caption, fontWeight: '700' },
  activePillText: { color: '#09110D' },
});
