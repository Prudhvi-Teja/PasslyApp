import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import Header from '../../src/components/Header';
import PrimaryButton from '../../src/components/PrimaryButton';
import Card from '../../src/components/Card';
import { trips } from '../../src/data/mockData';
import { colors } from '../../src/theme/colors';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header title="Passly" />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={styles.h2}>Quick actions</Text>
        <View style={styles.row}>
          <PrimaryButton label="Post a Trip" onPress={() => router.push('/post-travel')} style={{ flex: 1, marginRight: 8 }} />
          <PrimaryButton label="Send Parcel" variant="outline" onPress={() => router.push('/send-parcel')} style={{ flex: 1, marginLeft: 8 }} />
        </View>
        <Text style={styles.h2}>Upcoming trips</Text>
        {trips.map(t => (
          <Card key={t.id} title={`${t.from} → ${t.to}`} subtitle={`${t.date} • ${t.traveler}`} onPress={() => router.push(`/details/${t.id}`)} />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  h2: { fontSize: 16, fontWeight: '700', color: colors.textPrimary, marginVertical: 12 },
  row: { flexDirection: 'row', marginBottom: 8 },
});
