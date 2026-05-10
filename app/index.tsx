import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View, Image } from 'react-native';
import { router } from 'expo-router';
import { colors } from '../src/theme/colors';

export default function Splash() {
  const scale = useRef(new Animated.Value(0.6)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const textTranslate = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(scale, { toValue: 1, duration: 700, easing: Easing.out(Easing.back(1.4)), useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 1, duration: 500, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(textOpacity, { toValue: 1, duration: 400, useNativeDriver: true }),
        Animated.timing(textTranslate, { toValue: 0, duration: 400, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
      ]),
      Animated.delay(600),
    ]).start(() => router.replace('/(tabs)'));
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ scale }], opacity, alignItems: 'center' }}>
       <Image source={require('../assets/images/logo.png')} style={{width:110,height:110}} />
      </Animated.View>
      <Animated.View style={{ opacity: textOpacity, transform: [{ translateY: textTranslate }], marginTop: 24 }}>
        <Text style={styles.title}>PASSLY</Text>
        <Text style={styles.tagline}>Travel together. Deliver smarter.</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  logoCircle: {
    width: 110, height: 110, borderRadius: 55, backgroundColor: colors.white,
    alignItems: 'center', justifyContent: 'center',
    shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 20, shadowOffset: { width: 0, height: 8 }, elevation: 10,
  },
  logoLetter: { fontSize: 56, fontWeight: '800', color: colors.primary, marginTop: -4 },
  title: { fontSize: 32, fontWeight: '800', color: colors.white, letterSpacing: 4, textAlign: 'center' },
  tagline: { fontSize: 13, color: 'rgba(255,255,255,0.85)', marginTop: 6, textAlign: 'center' },
});
