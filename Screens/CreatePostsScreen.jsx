import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

export const CreatePostsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Створити Публікацію</Text>
    </View>
  );
};
