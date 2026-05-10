import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../theme/colors';

type Props = { label: string; onPress: () => void; variant?: 'solid' | 'outline'; loading?: boolean; style?: ViewStyle };
export default function PrimaryButton({ label, onPress, variant = 'solid', loading, style }: Props) {
  const isOutline = variant === 'outline';
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={[styles.btn, isOutline && styles.outline, style]}>
      {loading ? <ActivityIndicator color={isOutline ? colors.primary : colors.white} /> :
        <Text style={[styles.label, isOutline && { color: colors.primary }]}>{label}</Text>}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: { backgroundColor: colors.primary, paddingVertical: 14, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  outline: { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: colors.primary },
  label: { color: colors.white, fontWeight: '700', fontSize: 15 },
});
