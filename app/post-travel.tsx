import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import Header from '../src/components/Header';
import Input from '../src/components/Input';
import PrimaryButton from '../src/components/PrimaryButton';
import { colors } from '../src/theme/colors';

export default function PostTravel() {
  const [from, setFrom] = useState(''); const [to, setTo] = useState(''); const [date, setDate] = useState('');
  return (
    <View style={styles.container}>
      <Header title="Post a Trip" onBack={() => router.back()} />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Input label="From" value={from} onChangeText={setFrom} placeholder="City of departure" />
        <Input label="To" value={to} onChangeText={setTo} placeholder="Destination city" />
        <Input label="Date" value={date} onChangeText={setDate} placeholder="YYYY-MM-DD" />
        <PrimaryButton label="Post Trip" onPress={() => router.back()} style={{ marginTop: 16 }} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: colors.background } });
