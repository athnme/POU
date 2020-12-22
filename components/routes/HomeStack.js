import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import FeedScreen from "../screens/FeedScreen";
import PostScreen from "../screens/PostScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#07211F",
          },
          headerTintColor: "#CECECE",
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ title: "POU" }}
          component={FeedScreen}
        />
        <Stack.Screen
          name="Point"
          options={{ title: "Point" }}
          component={PostScreen}
        />
        <Stack.Screen
          name="Profile"
          options={{ title: "Profile" }}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
