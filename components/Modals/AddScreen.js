import React from "react";
import styled from "styled-components";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import { BtnTextCta, BtnTextDefault } from "../styles/Typography";
import { YourImgS } from "../YourImg";
import MapStyle from "../styles/MapStyle";
import useUserLocation from "../UserLocation";

const PointCreator = styled.ScrollView`
  padding: 0 16px 16px;
`;

const ImgUploadContainer = styled.View`
  border-radius: 16px;
  height: 284px;
  overflow: hidden;
`;

const ImgContainer = styled.Image`
  width: 100%;
  height: 100%;
`;

const ImgMenu = styled.View`
  position: relative;
  bottom: 66px;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 16px 16px;
`;

const BtnCta = styled.TouchableOpacity`
  background-color: #33d17c;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  border-radius: 40px;
  border-width: 2px;
`;

const BtnDefault = styled(BtnCta)`
  background-color: rgba(0, 0, 0, 0.4);
  border-color: #cecece;
`;

const PicCaption = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

const ProfileImgL = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 64px;
  border-style: solid;
  border-width: 2px;
  border-color: #cecece;
  overflow: hidden;
`;

const ProfileImg = styled.Image`
  width: 100%;
  height: 100%;
`;

const TxtInput = styled.TextInput`
  background-color: #030d12;
  margin-top: 16px;
  height: 40px;
  padding: 0px 20px;
  border-radius: 20px;
  color: #cecece;
`;

const Caption = styled(TxtInput)`
  height: 108px;
  padding: 10px 20px;
  margin: 0px 0px 0px 16px;
  flex: 1;
`;

const Map = styled.View`
  background-color: black;
  height: 280px;
  margin: 16px 0;
  border-radius: 16px;
  overflow: hidden;
`;

const BtnContainer = styled.View`
  padding-bottom: 16px;
  flex-direction: row;
`;

const ImgBg = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export default function AddScreen() {
  const { location, errorMsg } = useUserLocation();
  return (
    <LinearGradient colors={["#07211F", "#030D12"]} style={styles.container}>
      <PointCreator>
        <ImgUploadContainer>
          <ImgBg source={require("../../assets/Picholder.jpg")}>
            <ImgContainer />
            <ImgMenu>
              <BtnDefault>
                <BtnTextDefault>add image</BtnTextDefault>
              </BtnDefault>
            </ImgMenu>
          </ImgBg>
        </ImgUploadContainer>
        <PicCaption>
          <ProfileImgL>
            <ImgBg source={require("../../assets/profileplaceholder.jpg")}>
              <ProfileImg />
            </ImgBg>
          </ProfileImgL>
          <Caption
            textAlignVertical="top"
            maxLength={120}
            multiline={true}
            disableFullscreenUI={false}
            placeholder="write a caption"
            placeholderTextColor={"rgba(206, 206, 206, .4)"}
          />
        </PicCaption>

        <TxtInput
          maxLength={60}
          disableFullscreenUI={false}
          placeholder="add name of locationn"
          placeholderTextColor={"rgba(206, 206, 206, .4)"}
        />
        <TxtInput
          maxLength={60}
          disableFullscreenUI={false}
          placeholder="mark for someone (optional)"
          placeholderTextColor={"rgba(206, 206, 206, .4)"}
        />
        <Map>
          <MapView
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            customMapStyle={MapStyle}
            region={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
            >
              <YourImgS color="#cecece" />
            </Marker>
          </MapView>
        </Map>
        <BtnContainer>
          <BtnDefault style={{ flex: 1, marginRight: 8 }}>
            <BtnTextDefault>clear</BtnTextDefault>
          </BtnDefault>
          <BtnCta style={{ flex: 1, marginLeft: 8 }}>
            <BtnTextCta>post</BtnTextCta>
          </BtnCta>
        </BtnContainer>
      </PointCreator>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
