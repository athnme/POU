import React, { Fragment, useEffect, useState } from "react";
import { Modal, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import FeedScreen from "../screens/FeedScreen";
import PostScreen from "../screens/PostScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RouteScreen from "../screens/RouteScreen";
import AddScreen from "../Modals/AddScreen";
import { AddIcon, LogoType, CloseIcon } from "../Icons";
import { HeaderOne } from "../styles/Typography";

const Btn = styled.TouchableOpacity`
  margin-right: 16px;
`;

const TopBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 56px;
`;

const Stack = createStackNavigator();

export default function LikeStack() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Stack.Navigator
      initialRouteName="Liked Points"
      screenOptions={{
        animationEnabled: false,
        headerStyle: {
          backgroundColor: "#07211F",
        },
        headerTintColor: "#CECECE",
      }}
    >
      <Stack.Screen
        name="Liked Points"
        options={{
          headerTitle: "Liked Points",
          headerRight: () => (
            <Btn
              onPress={() => {
                setModalVisible(true);
              }}
            >
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
