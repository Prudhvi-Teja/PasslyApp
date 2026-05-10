import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import Header from '../../src/components/Header';
import PrimaryButton from '../../src/components/PrimaryButton';
import { trips } from '../../src/data/mockData';
import { colors } from '../../src/theme/colors';

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const trip = trips.find(t => t.id === id);
  if (!trip) return null;
  return (
    <View style={styles.container}>
      <Header title="Trip Details" onBack={() => router.back()} />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={styles.route}>{trip.from} → {trip.to}</Text>
        <Text style={styles.meta}>Date: {trip.date}</Text>
        <Text style={styles.meta}>Traveler: {trip.traveler}</Text>
        <Text style={styles.meta}>Capacity: {trip.capacity}</Text>
        <PrimaryButton label="Contact Traveler" onPress={() => {}} style={{ marginTop: 24 }} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  route: { fontSize: 22, fontWeight: '800', color: colors.textPrimary, marginBottom: 12 },
  meta: { fontSize: 15, color: colors.textSecondary, marginBottom: 6 },
});
