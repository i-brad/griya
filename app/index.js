import { Link, Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Root = () => {
  return (
    <View>
      <Text>home</Text>
      <Stack.Screen options={{ title: "Overview" }} />
      <Link href="/home/message">Go home</Link>
    </View>
  );
};

export default Root;
