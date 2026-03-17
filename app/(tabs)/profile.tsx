import { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';

import { SettingRow } from '@/components/profile/SettingRow';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Screen } from '@/components/ui/Screen';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { mockUser } from '@/constants/mockUser';
import { theme } from '@/constants/theme';
import { FuelType } from '@/types';

const fuels: FuelType[] = ['petrol', 'diesel', 'super'];

export default function ProfileScreen() {
  const [preferredFuel, setPreferredFuel] = useState<FuelType>(mockUser.preferredFuel);
  const [notifications, setNotifications] = useState(mockUser.notificationPreference.pushEnabled);
  const [priceAlerts, setPriceAlerts] = useState(mockUser.notificationPreference.priceAlertsEnabled);

  return (
    <Screen>
      <View style={styles.container}>
        <SectionHeader title="Profile" subtitle="Account and preferences" />

        <Card>
          <Text style={styles.name}>{mockUser.fullName}</Text>
          <Text style={styles.meta}>{mockUser.phoneNumber}</Text>
          <Text style={styles.meta}>{mockUser.vehicleRegistration}</Text>
        </Card>

        <SettingRow
          label="Preferred fuel"
          rightElement={
            <View style={styles.toggleRow}>
              {fuels.map((fuel) => (
                <Pressable
                  key={fuel}
                  onPress={() => {
                    // TODO: replace with Supabase query
                    setPreferredFuel(fuel);
                  }}
                  style={[styles.fuelPill, preferredFuel === fuel && styles.fuelPillActive]}
                >
                  <Text style={[styles.fuelText, preferredFuel === fuel && styles.fuelTextActive]}>{fuel}</Text>
                </Pressable>
              ))}
            </View>
          }
        />

        <SettingRow
          label="Notifications"
          rightElement={
            <Switch
              value={notifications}
              onValueChange={(value) => {
                // TODO: replace with Supabase query
                setNotifications(value);
              }}
              thumbColor={theme.colors.textPrimary}
              trackColor={{ true: theme.colors.primary, false: theme.colors.border }}
            />
          }
        />

        <SettingRow
          label="Price alerts"
          rightElement={
            <Switch
              value={priceAlerts}
              onValueChange={(value) => {
                // TODO: replace with Supabase query
                setPriceAlerts(value);
              }}
              thumbColor={theme.colors.textPrimary}
              trackColor={{ true: theme.colors.primary, false: theme.colors.border }}
            />
          }
        />

        <Button
          label="Sign out"
          variant="secondary"
          onPress={() => {
            // TODO: replace with Supabase query
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, gap: theme.spacing.md },
  name: { color: theme.colors.textPrimary, fontSize: theme.typography.h2, fontWeight: '800' },
  meta: { color: theme.colors.textSecondary, fontSize: theme.typography.caption, marginTop: 4 },
  toggleRow: { flexDirection: 'row', gap: 6 },
  fuelPill: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: theme.radius.pill,
  },
  fuelPillActive: { backgroundColor: theme.colors.primary, borderColor: theme.colors.primary },
  fuelText: { color: theme.colors.textPrimary, fontSize: theme.typography.tiny, fontWeight: '600' },
  fuelTextActive: { color: '#09110D' },
});
