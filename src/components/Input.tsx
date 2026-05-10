import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { colors } from '../theme/colors';

export default function Input({ label, ...props }: TextInputProps & { label: string }) {
  return (
    <View style={{ marginBottom: 14 }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholderTextColor={colors.textSecondary} style={styles.input} {...props} />
    </View>
  );
}
const styles = StyleSheet.create({
  label: { fontSize: 13, fontWeight: '600', color: colors.textPrimary, marginBottom: 6 },
  input: { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 12, fontSize: 15, color: colors.textPrimary },
});
