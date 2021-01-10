import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import FollowRequestCard from "../cards/FollowRequestCard";

export default function FollowRequestScreen() {
  return (
    <LinearGradient colors={["#07211F", "#030D12"]} style={styles.container}>
      <FollowRequestCard />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});
