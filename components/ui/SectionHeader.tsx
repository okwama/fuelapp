import { StyleSheet, Text, View } from 'react-native';

import { theme } from '@/constants/theme';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  rightText?: string;
};

export const SectionHeader = ({ title, subtitle, rightText }: SectionHeaderProps) => (
  <View style={styles.row}>
    <View>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
    {rightText ? <Text style={styles.rightText}>{rightText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: theme.typography.h2,
    fontWeight: '700',
  },
  subtitle: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.caption,
    marginTop: 2,
  },
  rightText: {
    color: theme.colors.primary,
    fontSize: theme.typography.caption,
    fontWeight: '600',
  },
});
