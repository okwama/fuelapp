import { useMemo, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';

import { Button } from '@/components/ui/Button';
import { Screen } from '@/components/ui/Screen';
import { theme } from '@/constants/theme';

export default function OtpScreen() {
  const router = useRouter();
  const [code, setCode] = useState('');

  const cells = useMemo(() => code.padEnd(6, ' ').split('').slice(0, 6), [code]);

  // TODO: replace with Supabase query
  const onVerify = () => {
    if (code.length === 6) {
      router.push('/profile-setup');
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.subtitle}>Enter the 6-digit code sent to your number.</Text>

        <View style={styles.otpCells}>
          {cells.map((cell, index) => (
            <View key={`${cell}-${index}`} style={styles.cell}>
              <Text style={styles.cellText}>{cell}</Text>
            </View>
          ))}
        </View>

        <TextInput
          value={code}
          onChangeText={(value) => setCode(value.replace(/[^0-9]/g, '').slice(0, 6))}
          keyboardType="number-pad"
          style={styles.hiddenInput}
          autoFocus
        />
        <Text style={styles.timer}>Resend code in 00:24</Text>
        <Button label="Verify" onPress={onVerify} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', gap: theme.spacing.md },
  title: { color: theme.colors.textPrimary, fontSize: theme.typography.title, fontWeight: '800' },
  subtitle: { color: theme.colors.textSecondary, fontSize: theme.typography.body },
  otpCells: { flexDirection: 'row', justifyContent: 'space-between', gap: theme.spacing.sm },
  cell: {
    flex: 1,
    height: 56,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: { color: theme.colors.textPrimary, fontSize: theme.typography.h1, fontWeight: '700' },
  hiddenInput: { position: 'absolute', opacity: 0, width: 1, height: 1 },
  timer: { color: theme.colors.textSecondary, fontSize: theme.typography.caption, textAlign: 'center' },
});
