import { Image, StyleSheet, Text, View } from 'react-native';
import Header from '../../src/components/Header';
import PrimaryButton from '../../src/components/PrimaryButton';
import { colors } from '../../src/theme/colors';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Header title="Profile" />
      <View style={styles.body}>
        <Image source={require('../../assets/images/logo.png')} style={styles.avatar} />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john@passly.app</Text>
        <PrimaryButton label="Edit Profile" onPress={() => {}} style={{ marginTop: 24, alignSelf: 'stretch' }} />
        <PrimaryButton label="Logout" variant="outline" onPress={() => {}} style={{ marginTop: 12, alignSelf: 'stretch' }} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  body: { padding: 24, alignItems: 'center' },
  avatar: { width: 96, height: 96, borderRadius: 48, marginVertical: 16 },
  name: { fontSize: 20, fontWeight: '700', color: colors.textPrimary },
  email: { fontSize: 14, color: colors.textSecondary, marginTop: 4 },
});
