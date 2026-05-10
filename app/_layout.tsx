import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} initialRouteName="splash">
        <Stack.Screen name="splash" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="post-travel" options={{ presentation: 'modal' }} />
        <Stack.Screen name="send-parcel" options={{ presentation: 'modal' }} />
        <Stack.Screen name="details/[id]" />
      </Stack>
    </GestureHandlerRootView>
  );
}
