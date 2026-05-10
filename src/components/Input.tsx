import { useState } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { colors, radius } from '../theme/colors';

type Props = TextInputProps & { label?: string; error?: string };

export default function Input({ label, error, ...rest }: Props) {
  const [focused, setFocused] = useState(false);
  return (
    <View style={{ marginBottom: 14 }}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...rest}
        onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
        placeholderTextColor={colors.textMuted}
        style={[
          styles.input,
          focused && { borderColor: colors.primary, backgroundColor: colors.white },
          error && { borderColor: colors.danger },
        ]}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 13, fontWeight: '600', color: colors.textSecondary, marginBottom: 6 },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1.5, borderColor: colors.border,
    borderRadius: radius.md, paddingHorizontal: 14, paddingVertical: 12,
    fontSize: 15, color: colors.textPrimary,
  },
  error: { fontSize: 12, color: colors.danger, marginTop: 4 },
});
