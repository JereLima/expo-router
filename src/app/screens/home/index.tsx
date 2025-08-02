import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link href="/screens/profile">
        <Text>Home</Text>
      </Link>
    </View>
  );
}
