import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link href="/screens/home">
        <Text>Profile</Text>
      </Link>
    </View>
  );
}
