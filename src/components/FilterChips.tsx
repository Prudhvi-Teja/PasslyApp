import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';

export default function FilterChips({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
      {options.map(opt => {
        const active = opt === value;
        return (
          <TouchableOpacity key={opt} onPress={() => onChange(opt)} style={[styles.chip, active && styles.active]}>
            <Text style={[styles.txt, active && { color: colors.white }]}>{opt}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  row: { paddingHorizontal: 16, paddingVertical: 12, gap: 8 },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.white, marginRight: 8 },
  active: { backgroundColor: colors.primary, borderColor: colors.primary },
  txt: { color: colors.textPrimary, fontSize: 13, fontWeight: '600' },
});
