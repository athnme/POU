import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { HeaderThree, HeaderTwo } from "../styles/Typography";

const PointContainer = styled.TouchableOpacity`
  border-radius: 16px;
  overflow: hidden;
  flex: 1;
  margin: 4px;
`;

const Img = styled.ImageBackground`
  height: 180px;
  justify-content: flex-end;
`;

export default function LocationCard({ locationImg, locationName }) {
  return (
    <PointContainer>
      <Img source={{ uri: `${locationImg}` }}>
        <LinearGradient
          style={styles.textContainer}
          colors={["rgba(0, 0, 0, .0)", "rgba(3, 13, 18, .750)"]}
        >
          <HeaderThree>{locationName}</HeaderThree>
        </LinearGradient>
      </Img>
    </PointContainer>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    padding: 16,
  },
});
