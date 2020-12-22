import React from "react";
import styled from "styled-components/native";

const PointContainer = styled.TouchableOpacity`
  margin: 4px;
  flex-grow: 2;
`;

const Img = styled.Image`
  height: 180px;
  border-radius: 16px;
`;

export default function PostSmall(props) {
  return (
    <PointContainer>
      <Img source={{ uri: `${props.postImgSrc}` }} />
    </PointContainer>
  );
}
