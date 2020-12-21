import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

import { HeaderFive, HeaderFour, HeaderSix } from "../styles/Typography";
import { LikeIcon, LocationIcon, OptionsIcon } from "../Icons";

const PointWrapper = styled.View`
  padding: 12px 16px;
`;

const ProfileContainer = styled.View`
  z-index: 1;
  flex-direction: row;
`;

const ProfileImgL = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 64px;
  border-style: solid;
  border-width: 2px;
  border-color: #cecece;
`;

const NameOptContainer = styled.View`
  height: 32px;
  flex: 1;
  padding-left: 8px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const PointContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: -32px;
`;

const PointCard = styled.TouchableOpacity`
  background-color: #042f2c;
  flex: 1;
  border-radius: 16px;
`;

const PointImg = styled.Image`
  width: 100%;
  height: 300px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const Caption = styled(HeaderFour)`
  padding: 16px;
`;

const LikeContainer = styled.View`
  width: 100%;
  padding: 0 16px 16px;
  flex-direction: row;
  justify-content: space-between;
`;

const Likers = styled.View`
  flex-direction: row;
  align-items: center;
`;

const LikerImgContainer = styled.View`
  flex-direction: row;
  padding: 0 8px;
`;

const ProfileImgS = styled(ProfileImgL)`
  width: 24px;
  height: 24px;
  margin-left: -8px;
  border-color: #042f2c;
`;

const LocationContainer = styled.View`
  width: 32px;
  padding-top: 48px;
  align-items: center;
`;

const LocationInfo = styled.View`
  width: 240px;
  transform: rotate(-90deg);
  position: absolute;
  align-items: flex-end;
  justify-content: center;
  height: 32px;
  left: -104;
  top: 183;
`;

export default function Post(props) {
  return (
    <PointWrapper>
      <ProfileContainer>
        <TouchableOpacity>
          <ProfileImgL source={{ uri: `${props.userImg}` }} />
        </TouchableOpacity>
        <NameOptContainer>
          <TouchableOpacity>
            <HeaderSix>{props.userName}</HeaderSix>
          </TouchableOpacity>
          <TouchableOpacity>
            <OptionsIcon />
          </TouchableOpacity>
        </NameOptContainer>
      </ProfileContainer>
      <PointContainer>
        <LocationContainer>
          <LocationIcon />
          <LocationInfo>
            <HeaderSix>
              {props.location} | <HeaderFive>{props.locationName}</HeaderFive>
            </HeaderSix>
          </LocationInfo>
        </LocationContainer>
        <PointCard onPress={props.postScreen}>
          <PointImg source={{ uri: `${props.postImgSrc}` }} />
          <Caption>{props.caption}</Caption>
          <LikeContainer>
            <Likers>
              <LikerImgContainer>
                <ProfileImgS source={{ uri: `${props.userImg}` }} />
                <ProfileImgS source={{ uri: `${props.userImg}` }} />
                <ProfileImgS source={{ uri: `${props.userImg}` }} />
              </LikerImgContainer>
              <HeaderSix>
                and <HeaderFive>{props.likerNumber} others</HeaderFive> liked
                this
              </HeaderSix>
            </Likers>
            <TouchableOpacity>
              <LikeIcon />
            </TouchableOpacity>
          </LikeContainer>
        </PointCard>
      </PointContainer>
    </PointWrapper>
  );
}
