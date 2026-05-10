import { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { colors } from '../src/theme/colors';

export default function Splash() {
  const scale = useRef(new Animated.Value(0.6)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.spring(scale, { toValue: 1, friction: 4, useNativeDriver: true }),
      Animated.timing(opacity, { toValue: 1, duration: 700, useNativeDriver: true }),
    ]).start();
    const t = setTimeout(() => router.replace('/onboarding'), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ scale }], opacity }}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>PASSLY</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  logo: { width: 140, height: 140, resizeMode: 'contain', alignSelf: 'center' },
  title: { color: colors.white, fontSize: 32, fontWeight: '800', letterSpacing: 4, marginTop: 12, textAlign: 'center' },
});
