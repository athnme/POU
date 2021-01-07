import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import MarkedCard from "../cards/MarkedCard.js";

export default function MarkedForYouScreen() {
  return (
    <LinearGradient colors={["#07211F", "#030D12"]} style={styles.container}>
      <MarkedCard />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});
