import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../../src/components/Card';
import PrimaryButton from '../../src/components/PrimaryButton';
import { colors, spacing } from '../../src/theme/colors';
import { trips } from '../../src/data/mockData';

export default function Home() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={{ padding: spacing.lg, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.heroTitle}>Where to today?</Text>
        </View>

        <Text style={styles.h2}>Quick actions</Text>
        <View style={styles.row}>
          <PrimaryButton label="Post a Trip" onPress={() => router.push('/post-travel')} style={{ flex: 1, marginRight: 8 }} />
          <PrimaryButton label="Send Parcel" variant="outline" onPress={() => router.push('/send-parcel')} style={{ flex: 1, marginLeft: 8 }} />
        </View>

        <Text style={styles.h2}>Upcoming trips</Text>
        {trips.map(t => (
          <Card
            key={t.id}
            title={`${t.from} → ${t.to}`}
            subtitle={`${t.date} • ${t.traveler}`}
            badge="Active"
            onPress={() => router.push({ pathname: '/details/[id]', params: { id: t.id } })}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  hero: {
    backgroundColor: colors.primarySoft, padding: 20, borderRadius: 20, marginBottom: 20,
    borderWidth: 1, borderColor: colors.primaryLight,
  },
  greeting: { fontSize: 14, color: colors.textSecondary, fontWeight: '500' },
  heroTitle: { fontSize: 24, fontWeight: '800', color: colors.textPrimary, marginTop: 4 },
  h2: { fontSize: 16, fontWeight: '700', color: colors.textPrimary, marginVertical: 12 },
  row: { flexDirection: 'row', marginBottom: 8 },
});
