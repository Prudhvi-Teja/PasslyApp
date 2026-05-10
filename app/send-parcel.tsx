import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import Header from '../src/components/Header';
import Input from '../src/components/Input';
import PrimaryButton from '../src/components/PrimaryButton';
import { colors } from '../src/theme/colors';

export default function SendParcel() {
  const [pickup, setPickup] = useState(''); const [drop, setDrop] = useState(''); const [desc, setDesc] = useState('');
  return (
    <View style={styles.container}>
      <Header title="Send a Parcel" onBack={() => router.back()} />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Input label="Pickup" value={pickup} onChangeText={setPickup} placeholder="Pickup city" />
        <Input label="Drop-off" value={drop} onChangeText={setDrop} placeholder="Drop-off city" />
        <Input label="Description" value={desc} onChangeText={setDesc} placeholder="Parcel details" />
        <PrimaryButton label="Find Travelers" onPress={() => router.back()} style={{ marginTop: 16 }} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: colors.background } });
