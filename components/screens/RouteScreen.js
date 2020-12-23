import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

const MapContainer = styled.View`
  flex: 1;
  background-color: black;
`;

export default function RouteScreen() {
  return (
    <LinearGradient colors={["#07211F", "#030D12"]} style={styles.container}>
      <MapContainer></MapContainer>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
