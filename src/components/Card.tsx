import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius } from '../theme/colors';

type Props = {
  title: string;
  subtitle?: string;
  badge?: string;
  onPress?: () => void;
};

export default function Card({ title, subtitle, badge, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && { transform: [{ scale: 0.98 }], opacity: 0.95 }]}
    >
      <View style={styles.iconWrap}>
        <Ionicons name="airplane" size={20} color={colors.primary} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      {badge && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      )}
      <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: colors.card, padding: 14, borderRadius: radius.lg,
    marginBottom: 10, borderWidth: 1, borderColor: colors.border,
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 2,
  },
  iconWrap: {
    width: 42, height: 42, borderRadius: 12, backgroundColor: colors.primarySoft,
    alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  title: { fontSize: 15, fontWeight: '700', color: colors.textPrimary },
  subtitle: { fontSize: 12, color: colors.textSecondary, marginTop: 2 },
  badge: { backgroundColor: colors.primaryLight, paddingHorizontal: 8, paddingVertical: 4, borderRadius: radius.pill, marginRight: 8 },
  badgeText: { fontSize: 11, fontWeight: '700', color: colors.primaryDark },
});
