import React, { Fragment, useEffect, useState } from "react";
import { Modal, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import PostScreen from "../screens/PostScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RouteScreen from "../screens/RouteScreen";
import SearchTopNav from "./SearchTopNav";

const TxtInput = styled.TextInput`
  background-color: #030d12;
  margin-top: 16px;
  height: 40px;
  padding: 0px 20px;
  border-radius: 20px;
  color: #cecece;
`;

const Stack = createStackNavigator();

export default function SearchStack() {
  const [modalVisible, setModalVisible] = useState(false);

  function SearchInput() {
    return (
      <TxtInput
        maxLength={60}
        disableFullscreenUI={false}
        placeholder="Search"
        placeholderTextColor={"rgba(206, 206, 206, .4)"}
      />
    );
  }

  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        animationEnabled: false,
        headerStyle: {
          backgroundColor: "#07211F",
        },
        headerTintColor: "#CECECE",
      }}
    >
      <Stack.Screen
        name="Search"
        options={{ headerTitle: SearchInput }}
        component={SearchTopNav}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
