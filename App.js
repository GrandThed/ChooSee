import React from "react";

// React native components
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// Components
import axios from "axios";

// Routing imports
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./pages/homeScreen/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
