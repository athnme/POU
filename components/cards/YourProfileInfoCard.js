import React, { useEffect, useState } from "react";
import { View } from "react-native";
import styled from "styled-components";

import {
  BtnTextCta,
  BtnTextDefault,
  HeaderFive,
  HeaderSix,
  HeaderThree,
} from "../styles/Typography";
import { OptionsIcon } from "../Icons";

const PicStatContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 4px;
`;

const ProfileImgL = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 64px;
  border-style: solid;
  border-width: 2px;
  border-color: #cecece;
`;

const StatsContainer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
  padding: 0 16px;
`;

const Stats = styled.View`
  align-items: center;
`;

const NameButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px 16px;
`;

const NameContainer = styled.View`
  flex: 2;
`;

const BtnDefault = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  border-radius: 40px;
  border-width: 2px;
  border-color: #cecece;
  margin-left: 48px;
  flex: 1;
`;

const Btn = styled.TouchableOpacity`
  margin-left: 16px;
`;

export default function YourProfileInfoCard({
  userImg,
  pointCount,
  followerCount,
  followingCount,
  wholeName,
  userName,
  message,
}) {
  return (
    <View>
      <PicStatContainer>
        <ProfileImgL source={{ uri: `${userImg}` }} />
        <StatsContainer>
          <Stats>
            <HeaderThree>{pointCount}</HeaderThree>
            <HeaderSix>points</HeaderSix>
          </Stats>
          <Stats>
            <HeaderThree>26</HeaderThree>
            <HeaderSix>followers</HeaderSix>
          </Stats>
          <Stats>
            <HeaderThree>12</HeaderThree>

            <HeaderSix>follows</HeaderSix>
          </Stats>
        </StatsContainer>
      </PicStatContainer>
      <NameButtonContainer>
        <NameContainer>
          <HeaderFive>{userName}</HeaderFive>
          <HeaderSix>{wholeName}</HeaderSix>
        </NameContainer>
        <BtnDefault>
          <BtnTextDefault>settings</BtnTextDefault>
        </BtnDefault>
      </NameButtonContainer>
    </View>
  );
}
