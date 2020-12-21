import React, { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeStack from "./components/routes/HomeStack";

export default function App() {
  return (
    <Fragment>
      <HomeStack />
      <StatusBar style="light" />
    </Fragment>
  );
}
