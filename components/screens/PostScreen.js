import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import {
  HeaderSix,
  HeaderFive,
  HeaderFour,
  HeaderThree,
  HeaderTwo,
  HeaderOne,
  ParagraphDefault,
  ParagraphBold,
  BtnTextDefault,
  BtnTextCta,
} from "../styles/Typography";

export default function PostScreen({ navigation }) {
  return (
    <LinearGradient colors={["#07211F", "#030D12"]} style={styles.container}>
      <HeaderSix>Point Screen</HeaderSix>
      <TouchableHighlight onPress={() => navigation.navigate("Profile")}>
        <BtnTextDefault>Profile</BtnTextDefault>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("Home")}>
        <BtnTextDefault>Home</BtnTextDefault>
      </TouchableHighlight>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
