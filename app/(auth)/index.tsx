import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';

import { Button } from '@/components/ui/Button';
import { Screen } from '@/components/ui/Screen';
import { theme } from '@/constants/theme';
import { normalizeKenyanPhoneNumber } from '@/lib/utils';

export default function LoginScreen() {
  const router = useRouter();
  const [phone, setPhone] = useState('+254');

  // TODO: replace with Supabase query
  const onContinue = () => {
    const normalized = normalizeKenyanPhoneNumber(phone);
    const valid = /^\+2547\d{8}$/.test(normalized);
    if (valid) {
      router.push('/otp');
    }
  };

  return (
    <Screen>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
        <Text style={styles.title}>FuelStation</Text>
        <Text style={styles.subtitle}>Enter your Kenyan phone number to continue.</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholder="+2547XXXXXXXX"
          placeholderTextColor={theme.colors.textSecondary}
          style={styles.input}
        />
        <Text style={styles.hint}>We&apos;ll send a 6-digit OTP to verify your account.</Text>
        <Button label="Continue" onPress={onContinue} />
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', gap: theme.spacing.md },
  title: { color: theme.colors.textPrimary, fontSize: theme.typography.title, fontWeight: '800' },
  subtitle: { color: theme.colors.textSecondary, fontSize: theme.typography.body },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    color: theme.colors.textPrimary,
    paddingHorizontal: theme.spacing.md,
    height: 52,
    fontSize: theme.typography.body,
  },
  hint: { color: theme.colors.textSecondary, fontSize: theme.typography.caption },
});
