import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';

export default function Header({ title, onBack }: { title: string; onBack?: () => void }) {
  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: colors.white }}>
      <View style={styles.bar}>
        {onBack && <TouchableOpacity onPress={onBack}><Text style={styles.back}>‹</Text></TouchableOpacity>}
        <Text style={styles.title}>{title}</Text>
        <View style={{ width: 24 }} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  bar: { height: 52, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: colors.border },
  title: { fontSize: 18, fontWeight: '700', color: colors.primary },
  back: { fontSize: 28, color: colors.primary, width: 24 },
});
