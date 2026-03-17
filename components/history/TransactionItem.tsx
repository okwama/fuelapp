import { StyleSheet, Text, View } from 'react-native';

import { Card } from '@/components/ui/Card';
import { theme } from '@/constants/theme';
import { formatCurrencyKsh, formatLitres } from '@/lib/utils';
import { Transaction } from '@/types';

type TransactionItemProps = {
  transaction: Transaction;
};

export const TransactionItem = ({ transaction }: TransactionItemProps) => (
  <Card style={styles.card}>
    <View style={styles.row}>
      <Text style={styles.station}>{transaction.stationName}</Text>
      <Text style={styles.amount}>{formatCurrencyKsh(transaction.amountKsh)}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.meta}>{new Date(transaction.date).toLocaleDateString('en-KE')}</Text>
      <Text style={styles.meta}>{formatLitres(transaction.litres)}</Text>
      <Text style={styles.points}>+{transaction.pointsEarned} pts</Text>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  card: { gap: theme.spacing.sm, marginBottom: theme.spacing.sm },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  station: { color: theme.colors.textPrimary, fontWeight: '700', fontSize: theme.typography.body },
  amount: { color: theme.colors.textPrimary, fontWeight: '800', fontSize: theme.typography.body },
  meta: { color: theme.colors.textSecondary, fontSize: theme.typography.caption },
  points: { color: theme.colors.primary, fontSize: theme.typography.caption, fontWeight: '700' },
});
