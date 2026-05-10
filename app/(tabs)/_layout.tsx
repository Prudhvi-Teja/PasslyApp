import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform, View } from 'react-native';
import { colors } from '../../src/theme/colors';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600', marginBottom: 4 },
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 88 : 64,
          paddingTop: 8,
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 12, shadowOffset: { width: 0, height: -4 },
          elevation: 12,
        },
        tabBarIcon: ({ color, focused, size }) => {
          const icons: Record<string, any> = {
            index: focused ? 'home' : 'home-outline',
            feed: focused ? 'compass' : 'compass-outline',
            profile: focused ? 'person' : 'person-outline',
          };
          return (
            <View style={{ alignItems: 'center' }}>
              {focused && <View style={{ width: 24, height: 3, borderRadius: 2, backgroundColor: colors.primary, marginBottom: 4 }} />}
              <Ionicons name={icons[route.name] ?? 'ellipse'} size={size} color={color} />
            </View>
          );
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="feed" options={{ title: 'Feed' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
