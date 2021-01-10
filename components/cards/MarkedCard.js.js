import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CloseIcon, CheckIcon, LikeIcon } from "../Icons";
import { HeaderFive, HeaderFour, HeaderSix } from "../styles/Typography";
import { UserImgL, UserImgS } from "../YourImg";

const CardContainer = styled.View`
  background-color: #042f2c;
  border-radius: 16px;
  overflow: hidden;
`;
const ProfileContainer = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  padding: 16px;
`;

const Div = styled.View`
  flex-direction: row;
`;

const Pic = styled.Image`
  flex: 1;
  background-color: darkgrey;
`;

const PointtInfo = styled.View`
  flex: 1;
  padding: 0 16px 16px;
`;

const PointProfile = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export default function MarkedCard() {
  return (
    <CardContainer>
      <Div>
        <ProfileContainer>
          <TouchableOpacity style={{ marginRight: 16 }}>
            <UserImgL />
          </TouchableOpacity>
          <TouchableOpacity>
            <HeaderFive>Tanya</HeaderFive>
          </TouchableOpacity>
          <HeaderSix> marked for you:</HeaderSix>
        </ProfileContainer>
        <TouchableOpacity style={{ margin: 16 }}>
          <CloseIcon color="#cecece" />
        </TouchableOpacity>
      </Div>
      <TouchableOpacity>
        <Div>
          <Pic />
          <PointtInfo>
            <PointProfile>
              <TouchableOpacity>
                <UserImgS color="#cecece" />
              </TouchableOpacity>
              <TouchableOpacity>
                <HeaderFive style={{ marginLeft: 8 }}>Tanya</HeaderFive>
              </TouchableOpacity>
            </PointProfile>
            <HeaderFour>
              OMG Guys, I found an awesome cocktail bar in cologne! 🥂😍
            </HeaderFour>
            <TouchableOpacity style={{ marginTop: 16, alignSelf: "flex-end" }}>
              <LikeIcon color="#cecece" />
            </TouchableOpacity>
          </PointtInfo>
        </Div>
      </TouchableOpacity>
    </CardContainer>
  );
}
