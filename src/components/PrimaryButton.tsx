import { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { colors, radius } from '../theme/colors';

type Props = {
  label: string;
  onPress?: () => void;
  variant?: 'solid' | 'outline';
  style?: ViewStyle;
};

export default function PrimaryButton({ label, onPress, variant = 'solid', style }: Props) {
  const scale = useRef(new Animated.Value(1)).current;
  const isOutline = variant === 'outline';

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => Animated.spring(scale, { toValue: 0.96, useNativeDriver: true }).start()}
      onPressOut={() => Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start()}
    >
      <Animated.View
        style={[
          styles.btn,
          isOutline ? styles.outline : styles.solid,
          { transform: [{ scale }] },
          style,
        ]}
      >
        <Text style={[styles.label, { color: isOutline ? colors.primary : colors.white }]}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: { paddingVertical: 14, paddingHorizontal: 20, borderRadius: radius.lg, alignItems: 'center', justifyContent: 'center' },
  solid: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary, shadowOpacity: 0.3, shadowRadius: 12, shadowOffset: { width: 0, height: 6 }, elevation: 6,
  },
  outline: { backgroundColor: colors.white, borderWidth: 1.5, borderColor: colors.primary },
  label: { fontSize: 15, fontWeight: '700' },
});
