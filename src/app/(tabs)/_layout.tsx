import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, animation: "shift" }}>
      <Tabs.Screen
        name="dashboard/index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons
              name="zodiac-sagittarius"
              size={size}
              color={focused ? "blue" : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="resume/index"
        options={{
          title: "Resumo",
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons
              name="abacus"
              size={size}
              color={focused ? "blue" : color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="charts/index"
        options={{
          title: "Resumo",
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons
              name="file-document"
              size={size}
              color={focused ? "blue" : color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
