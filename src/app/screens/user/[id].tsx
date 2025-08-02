import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function User() {
  const { id } = useLocalSearchParams<{ id: string }>();
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
        <Text>Profile {id}</Text>
      </Link>
    </View>
  );
}
