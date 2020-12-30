import React from "react";
import styled from "styled-components";

const ProfileImgL = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 64px;
  border-style: solid;
  border-width: 2px;
  border-color: #cecece;
  overflow: hidden;
`;

const ProfileImgs = styled(ProfileImgL)`
  width: 24px;
  height: 24px;
`;

const ImgBg = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const Img = styled.Image`
  width: 100%;
  height: 100%;
`;

export function YourImgS({ color }) {
  return (
    <ProfileImgs style={{ borderColor: color }}>
      <ImgBg>
        <Img source={require("../assets/profileplaceholder.jpg")} />
      </ImgBg>
    </ProfileImgs>
  );
}

export function YourImgL({ color }) {
  return (
    <ProfileImgL style={{ borderColor: color }}>
      <ImgBg>
        <Img source={require("../assets/profileplaceholder.jpg")} />
      </ImgBg>
    </ProfileImgL>
  );
}
