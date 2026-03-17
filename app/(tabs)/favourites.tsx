import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import { StationListItem } from '@/components/station/StationListItem';
import { Card } from '@/components/ui/Card';
import { Screen } from '@/components/ui/Screen';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { mockFavourites, mockStations } from '@/constants/mockStations';
import { theme } from '@/constants/theme';

export default function FavouritesScreen() {
  const router = useRouter();
  const favouriteStations = mockFavourites
    .map((fav) => mockStations.find((station) => station.id === fav.stationId))
    .filter(Boolean);

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content}>
        <SectionHeader title="Favourites" subtitle="Quick access to your saved stations" />

        {favouriteStations.length ? (
          favouriteStations.map((station) => (
            <StationListItem
              key={station!.id}
              station={station!}
              onPress={() => router.push(`/station/${station!.id}`)}
            />
          ))
        ) : (
          <Card>
            <Text style={styles.emptyTitle}>No favourites yet</Text>
            <Text style={styles.emptySubtitle}>Save stations from Home for quick access.</Text>
          </Card>
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { paddingBottom: theme.spacing.xl },
  emptyTitle: { color: theme.colors.textPrimary, fontSize: theme.typography.body, fontWeight: '700' },
  emptySubtitle: { color: theme.colors.textSecondary, fontSize: theme.typography.caption, marginTop: 6 },
});
