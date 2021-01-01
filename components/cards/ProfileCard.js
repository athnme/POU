import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styled from "styled-components/native";
import { HeaderFive, HeaderSix } from "../styles/Typography";
import { UserImgL } from "../YourImg";

const CardContainer = styled.TouchableOpacity`
  background-color: #042f2c;
  border-radius: 16px;
  margin-bottom: 8px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
`;

const NameContainer = styled.View`
  padding-left: 16px;
  flex: 1;
`;

export default function ProfileCard({
  userImgSrc,
  userName,
  userWholeName,
  profileScreen,
}) {
  return (
    <CardContainer onPress={profileScreen}>
      <UserImgL userImg={userImgSrc} />
      <NameContainer>
        <HeaderFive>{userName}</HeaderFive>
        <HeaderSix>{userWholeName}</HeaderSix>
      </NameContainer>
    </CardContainer>
  );
}
