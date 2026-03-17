import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Screen } from '@/components/ui/Screen';
import { theme } from '@/constants/theme';

export default function QrScanScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.sheetHandle} />
        <Text style={styles.title}>Earn Points QR</Text>

        <Card style={styles.qrPanel}>
          <View style={styles.qrBox}>
            <Text style={styles.qrPlaceholder}>QR TOKEN</Text>
          </View>
          <Text style={styles.note}>Show this to the pump attendant</Text>
          <Text style={styles.expiry}>Token expires in 02:00</Text>
        </Card>

        <Button
          label="Close"
          variant="secondary"
          onPress={() => {
            // TODO: replace with Supabase query
            router.back();
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  sheetHandle: {
    width: 50,
    height: 5,
    borderRadius: 999,
    backgroundColor: theme.colors.border,
    alignSelf: 'center',
  },
  title: { color: theme.colors.textPrimary, fontSize: theme.typography.h2, fontWeight: '700', textAlign: 'center' },
  qrPanel: { gap: theme.spacing.md },
  qrBox: {
    height: 180,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrPlaceholder: { color: theme.colors.textSecondary, fontWeight: '700' },
  note: { color: theme.colors.textPrimary, textAlign: 'center' },
  expiry: { color: theme.colors.textSecondary, textAlign: 'center', fontSize: theme.typography.caption },
});
