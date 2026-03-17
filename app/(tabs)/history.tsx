import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { TransactionItem } from '@/components/history/TransactionItem';
import { Card } from '@/components/ui/Card';
import { Screen } from '@/components/ui/Screen';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { mockTransactions } from '@/constants/mockTransactions';
import { theme } from '@/constants/theme';
import { formatCurrencyKsh, formatLitres } from '@/lib/utils';

export default function HistoryScreen() {
  const totalSpend = mockTransactions.reduce((sum, tx) => sum + tx.amountKsh, 0);
  const totalLitres = mockTransactions.reduce((sum, tx) => sum + tx.litres, 0);
  const totalPoints = mockTransactions.reduce((sum, tx) => sum + tx.pointsEarned, 0);

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content}>
        <SectionHeader title="History" subtitle="Your recent fuel activity" />

        <Card style={styles.summaryCard}>
          <View>
            <Text style={styles.summaryLabel}>Total spend</Text>
            <Text style={styles.summaryValue}>{formatCurrencyKsh(totalSpend)}</Text>
          </View>
          <View>
            <Text style={styles.summaryLabel}>Litres</Text>
            <Text style={styles.summaryValue}>{formatLitres(totalLitres)}</Text>
          </View>
          <View>
            <Text style={styles.summaryLabel}>Points</Text>
            <Text style={styles.summaryValue}>{totalPoints} pts</Text>
          </View>
        </Card>

        {mockTransactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { paddingBottom: theme.spacing.xl },
  summaryCard: { marginBottom: theme.spacing.md, gap: theme.spacing.md },
  summaryLabel: { color: theme.colors.textSecondary, fontSize: theme.typography.caption },
  summaryValue: { color: theme.colors.textPrimary, fontSize: theme.typography.body, fontWeight: '800', marginTop: 4 },
});
