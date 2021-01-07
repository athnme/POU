import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CloseIcon, CheckIcon } from "../Icons";
import { HeaderFive, HeaderSix } from "../styles/Typography";
import { UserImgL } from "../YourImg";

const CardContainer = styled.View`
  background-color: #042f2c;
  flex-direction: row;
  align-items: center;
  border-radius: 16px;
  padding: 16px;
`;

const NameContainer = styled.View`
  margin: 0 16px;
  flex: 1;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default function FollowRequestCard() {
  return (
    <CardContainer>
      <TouchableOpacity>
        <UserImgL />
      </TouchableOpacity>
      <NameContainer>
        <TouchableOpacity>
          <HeaderFive>Tanya</HeaderFive>
        </TouchableOpacity>
        <HeaderSix>wants to follow you</HeaderSix>
      </NameContainer>
      <ButtonContainer>
        <TouchableOpacity>
          <CheckIcon color="#cecece" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 16 }}>
          <CloseIcon color="#cecece" />
        </TouchableOpacity>
      </ButtonContainer>
    </CardContainer>
  );
}
