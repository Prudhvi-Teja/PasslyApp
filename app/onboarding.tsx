import { Image, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { colors } from '../src/theme/colors';
import PrimaryButton from '../src/components/PrimaryButton';

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Passly</Text>
      <Text style={styles.subtitle}>Send parcels with travelers heading your way.</Text>
      <PrimaryButton label="Get Started" onPress={() => router.replace('/(tabs)')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center', padding: 24 },
  logo: { width: 110, height: 110, resizeMode: 'contain', marginBottom: 24 },
  title: { fontSize: 26, fontWeight: '800', color: colors.textPrimary, marginBottom: 8 },
  subtitle: { fontSize: 15, color: colors.textSecondary, textAlign: 'center', marginBottom: 32 },
});
