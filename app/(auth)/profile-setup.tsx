import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';

import { Button } from '@/components/ui/Button';
import { Screen } from '@/components/ui/Screen';
import { theme } from '@/constants/theme';
import { FuelType } from '@/types';

const fuelTypes: FuelType[] = ['petrol', 'diesel', 'super'];

export default function ProfileSetupScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [vehicleReg, setVehicleReg] = useState('');
  const [preferredFuel, setPreferredFuel] = useState<FuelType>('petrol');

  // TODO: replace with Supabase query
  const onSave = () => {
    if (name.trim().length > 2) {
      router.replace('/(tabs)');
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Setup your profile</Text>

        <TextInput
          placeholder="Full name"
          placeholderTextColor={theme.colors.textSecondary}
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Vehicle registration"
          placeholderTextColor={theme.colors.textSecondary}
          style={styles.input}
          value={vehicleReg}
          onChangeText={setVehicleReg}
        />

        <Text style={styles.label}>Preferred fuel</Text>
        <View style={styles.toggleRow}>
          {fuelTypes.map((fuel) => (
            <Pressable
              key={fuel}
              onPress={() => {
                // TODO: replace with Supabase query
                setPreferredFuel(fuel);
              }}
              style={[styles.toggle, preferredFuel === fuel && styles.activeToggle]}
            >
              <Text style={[styles.toggleText, preferredFuel === fuel && styles.activeToggleText]}>{fuel}</Text>
            </Pressable>
          ))}
        </View>

        <Button label="Save & Continue" onPress={onSave} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', gap: theme.spacing.md },
  title: { color: theme.colors.textPrimary, fontSize: theme.typography.title, fontWeight: '800' },
  input: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    color: theme.colors.textPrimary,
    paddingHorizontal: theme.spacing.md,
    height: 52,
  },
  label: { color: theme.colors.textSecondary, fontSize: theme.typography.caption },
  toggleRow: { flexDirection: 'row', gap: theme.spacing.sm },
  toggle: {
    flex: 1,
    height: 44,
    borderRadius: theme.radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  activeToggle: { backgroundColor: theme.colors.primary, borderColor: theme.colors.primary },
  toggleText: { color: theme.colors.textPrimary, fontWeight: '600' },
  activeToggleText: { color: '#09110D' },
});
