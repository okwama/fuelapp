import { StyleSheet, Text, View } from 'react-native';

import { Card } from '@/components/ui/Card';
import { theme } from '@/constants/theme';

type PointsCardProps = {
  points: number;
  target: number;
};

export const PointsCard = ({ points, target }: PointsCardProps) => {
  const progress = Math.min(points / target, 1);

  return (
    <Card style={styles.card}>
      <Text style={styles.label}>FuelPoints Balance</Text>
      <Text style={styles.points}>{points} pts</Text>
      <Text style={styles.helper}>Earn 2 pts per litre</Text>
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>
      <Text style={styles.target}>Target: {target} pts for redemption</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { gap: theme.spacing.sm },
  label: { color: theme.colors.textSecondary, fontSize: theme.typography.caption },
  points: { color: theme.colors.textPrimary, fontSize: theme.typography.title, fontWeight: '800' },
  helper: { color: theme.colors.textSecondary, fontSize: theme.typography.caption },
  progressTrack: { height: 8, borderRadius: 999, backgroundColor: theme.colors.border, overflow: 'hidden' },
  progressFill: { height: 8, borderRadius: 999, backgroundColor: theme.colors.primary },
  target: { color: theme.colors.textSecondary, fontSize: theme.typography.caption },
});
