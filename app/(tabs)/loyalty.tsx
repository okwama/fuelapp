import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import { PointsCard } from '@/components/loyalty/PointsCard';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Screen } from '@/components/ui/Screen';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { mockUser } from '@/constants/mockUser';
import { theme } from '@/constants/theme';

export default function LoyaltyScreen() {
  const router = useRouter();

  // TODO: replace with Supabase query
  const onRedeem = () => {
    // Placeholder: redemption logic will be connected to backend rules.
  };

  return (
    <Screen>
      <View style={styles.container}>
        <SectionHeader title="Loyalty" subtitle="Track points and unlock rewards" />
        <PointsCard points={mockUser.loyaltyPoints} target={500} />

        <View style={styles.actions}>
          <Button
            label="Show QR"
            onPress={() => {
              // TODO: replace with Supabase query
              router.push('/station/qr-scan');
            }}
          />
          <Button label="Redeem" variant="secondary" disabled={mockUser.loyaltyPoints < 500} onPress={onRedeem} />
        </View>

        <Card>
          <Text style={styles.benefitsTitle}>Recent rewards & benefits</Text>
          <Text style={styles.benefitsText}>• 5% weekend cashback at partner stations</Text>
          <Text style={styles.benefitsText}>• Free car wash after 700 pts</Text>
        </Card>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, gap: theme.spacing.md },
  actions: { gap: theme.spacing.sm },
  benefitsTitle: { color: theme.colors.textPrimary, fontSize: theme.typography.body, fontWeight: '700' },
  benefitsText: { color: theme.colors.textSecondary, fontSize: theme.typography.caption, marginTop: 6 },
});
