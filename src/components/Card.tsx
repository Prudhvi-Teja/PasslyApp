import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';

export default function Card({ title, subtitle, onPress }: { title: string; subtitle?: string; onPress?: () => void }) {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.sub}>{subtitle}</Text>}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: { backgroundColor: colors.white, borderRadius: 12, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: colors.border },
  title: { fontSize: 16, fontWeight: '700', color: colors.textPrimary },
  sub: { fontSize: 13, color: colors.textSecondary, marginTop: 4 },
});
