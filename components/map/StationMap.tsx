import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { theme } from '@/constants/theme';
import { Station } from '@/types';

type StationMapProps = {
  stations: Station[];
  onSelectStation?: (stationId: string) => void;
};

export const StationMap = ({ stations, onSelectStation }: StationMapProps) => (
  <View style={styles.wrapper}>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: -1.286389,
        longitude: 36.817223,
        latitudeDelta: 0.14,
        longitudeDelta: 0.14,
      }}
      showsUserLocation
    >
      {stations.map((station) => (
        <Marker
          key={station.id}
          coordinate={{ latitude: station.latitude, longitude: station.longitude }}
          title={station.name}
          description={`${station.status.toUpperCase()} • KSh ${station.prices.petrol}/L`}
          onPress={() => onSelectStation?.(station.id)}
        />
      ))}
    </MapView>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: theme.radius.lg,
    overflow: 'hidden',
    borderColor: theme.colors.border,
    borderWidth: 1,
    height: 220,
  },
  map: {
    flex: 1,
  },
});
