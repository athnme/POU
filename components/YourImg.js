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

export function UserImgL({ userImg }) {
  return (
    <ProfileImgL style={{ borderColor: "#cecece" }}>
      <ImgBg source={require("../assets/profileplaceholder.jpg")}>
        <Img source={{ uri: `${userImg}` }} />
      </ImgBg>
    </ProfileImgL>
  );
}

export function UserImgS({ color }) {
  return (
    <ProfileImgs style={{ borderColor: color }}>
      <ImgBg source={require("../assets/profileplaceholder.jpg")}>
        <Img />
      </ImgBg>
    </ProfileImgs>
  );
}

export function YourImgS({ color, imgSrc }) {
  return (
    <ProfileImgs style={{ borderColor: color }}>
      <ImgBg source={require("../assets/profileplaceholder.jpg")}>
        <Img source={imgSrc} />
      </ImgBg>
    </ProfileImgs>
  );
}

export function YourImgL({ color, imgSrc }) {
  return (
    <ProfileImgL style={{ borderColor: color }}>
      <ImgBg source={require("../assets/profileplaceholder.jpg")}>
        <Img source={imgSrc} />
      </ImgBg>
    </ProfileImgL>
  );
}
