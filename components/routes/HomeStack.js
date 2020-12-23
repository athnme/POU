import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";

import FeedScreen from "../screens/FeedScreen";
import PostScreen from "../screens/PostScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RouteScreen from "../screens/RouteScreen";
import { AddIcon, LogoType } from "../Icons";

const Btn = styled.TouchableOpacity`
  margin-right: 16px;
`;

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
          options={{
            headerTitle: LogoType,
            headerRight: () => (
              <Btn onPress={() => alert("Heyooo")}>
                <AddIcon />
              </Btn>
            ),
          }}
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
        <Stack.Screen
          name="Route"
          options={{ title: "Route" }}
          component={RouteScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
