import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Root() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Link href={{ pathname: "/screens/user/[id]", params: { id: 223 } }}>
        <Text>User</Text>
      </Link> */}
      <Link href="/(tabs)/charts">
        <Text>Tab</Text>
      </Link>
    </View>
  );
}
