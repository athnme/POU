import React, { Fragment, useEffect, useState } from "react";
import { Modal, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import PostScreen from "../screens/PostScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RouteScreen from "../screens/RouteScreen";
import NotificationsTopNav from "./NotificationsTopNav";

const Stack = createStackNavigator();

export default function NotificationsStack() {
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
        options={{ headerTitle: "Notifications" }}
        component={NotificationsTopNav}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
