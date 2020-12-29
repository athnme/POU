import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ModalTest() {
  return (
    <LinearGradient
      colors={["#07211F", "#030D12"]}
      style={styles.container}
    ></LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
