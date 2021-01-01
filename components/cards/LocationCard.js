import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { HeaderThree, HeaderTwo } from "../styles/Typography";

const PointContainer = styled.TouchableOpacity`
  margin: 4px;
  flex-grow: 1;
  height: 180px;
  border-radius: 16px;
  overflow: hidden;
`;

const Img = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

export default function LocationCard({ locationImg, locationName }) {
  return (
    <PointContainer>
      <Img source={{ uri: `${locationImg}` }}>
        <LinearGradient
          style={styles.textContainer}
          colors={["rgba(0, 0, 0, .0)", "rgba(3, 13, 18, .75)"]}
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
