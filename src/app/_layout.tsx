import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Start" }} />
        <Stack.Screen
          name="screens/profile/index"
          options={{ title: "Profile" }}
        />
        <Stack.Screen name="screens/home/index" options={{ title: "Home" }} />
        <Stack.Screen name="screens/user/[id]" options={{ title: "usuário" }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
