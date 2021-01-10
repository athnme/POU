import React, { Fragment, useEffect, useState } from "react";
import { Modal, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import YourPostScreen from "../screens/YourPostScreen";
import YourProfileScreen from "../screens/YourProfileScreen";
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

export default function YourProfileStack() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Fragment>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <LinearGradient
          colors={["#07211F", "#030D12"]}
          style={styles.container}
        >
          <TopBar>
            <HeaderOne>New Point</HeaderOne>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <CloseIcon />
            </TouchableOpacity>
          </TopBar>
          <AddScreen
            modaling={() => {
              setModalVisible(false);
            }}
          />
        </LinearGradient>
      </Modal>
      <Stack.Navigator
        initialRouteName="You"
        screenOptions={{
          animationEnabled: false,
          headerStyle: {
            backgroundColor: "#07211F",
          },
          headerTintColor: "#CECECE",
        }}
      >
        <Stack.Screen
          name="You"
          options={{
            headerTitle: "You",
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
          component={YourProfileScreen}
        />
        <Stack.Screen
          name="Point"
          options={{ title: "Point" }}
          component={YourPostScreen}
        />
        <Stack.Screen
          name="Route"
          options={{ title: "Route" }}
          component={RouteScreen}
        />
      </Stack.Navigator>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
