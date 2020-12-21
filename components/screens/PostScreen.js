import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import {
  HeaderSix,
  HeaderFive,
  HeaderFour,
  BtnTextCta,
} from "../styles/Typography";
import { LikeIcon, LocationIcon, UserIcon } from "../Icons";

const PostImg = styled.Image`
  height: 320px;
`;

const ProfileContainer = styled.View`
  margin-top: -32px;
  padding: 0 16px;
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

const ProfileLocation = styled.View`
  flex: 1;
  padding-left: 16px;
  justify-content: space-around;
`;

const LocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const LocationTextContainer = styled.View`
  padding-left: 8px;
`;

const CaptionContainer = styled.View`
  padding: 16px;
`;

const LikeContainer = styled.View`
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
`;

const Likers = styled.View`
  flex-direction: row;
  align-items: center;
`;

const LikersImgs = styled.View`
  flex-direction: row;
  padding: 0 8px;
`;

const ProfileImgS = styled(ProfileImgL)`
  width: 24px;
  height: 24px;
  margin-left: -8px;
  border-color: #042f2c;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
`;

const Btn = styled.TouchableOpacity`
  margin-left: 16px;
`;

const MapContainer = styled.View`
  padding: 16px 16px 80px;
`;

const Map = styled.View`
  background-color: black;
  height: 360px;
  border-radius: 16px;
`;

const RouteContainer = styled.View`
  width: 100%;
  padding: 16px 32px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

const BtnCta = styled.TouchableOpacity`
  background-color: #33d17c;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  border-radius: 40px;
  margin-left: 48px;
`;

export default function PostScreen({ route, navigation }) {
  const getPost = async () => {
    const { id } = route.params;

    let uri = `https://pou-server.loca.lt/posts/${id}?_expand=user`;

    const response = await fetch(uri);
    const post = await response.json();
    return post;
  };

  const [post, setPost] = useState(null);
  useEffect(() => {
    getPost().then((post) => setPost(post));
  }, []);
  if (!post) {
    return (
      <LinearGradient
        colors={["#07211F", "#030D12"]}
        style={styles.container}
      />
    );
  }
  return (
    <LinearGradient colors={["#07211F", "#030D12"]} style={styles.container}>
      <ScrollView>
        <PostImg source={{ uri: `${post.postImg}` }} />
        <ProfileContainer>
          <TouchableOpacity>
            <ProfileImgL source={{ uri: `${post.user.userImg}` }} />
          </TouchableOpacity>
          <ProfileLocation>
            <TouchableOpacity>
              <HeaderFive>{post.user.userName}</HeaderFive>
            </TouchableOpacity>
            <LocationContainer>
              <LocationIcon />
              <LocationTextContainer>
                <HeaderFive>{post.location}</HeaderFive>
              </LocationTextContainer>
            </LocationContainer>
          </ProfileLocation>
        </ProfileContainer>
        <CaptionContainer>
          <HeaderFour>{post.caption}</HeaderFour>
        </CaptionContainer>
        <LikeContainer>
          <Likers>
            <LikersImgs>
              <ProfileImgS source={{ uri: `${post.user.userImg}` }} />
              <ProfileImgS source={{ uri: `${post.user.userImg}` }} />
              <ProfileImgS source={{ uri: `${post.user.userImg}` }} />
            </LikersImgs>
            <HeaderSix>
              <HeaderFive>{post.user.userName}</HeaderFive> and{" "}
              <HeaderFive>12 others</HeaderFive> liked this
            </HeaderSix>
          </Likers>
          <ButtonContainer>
            <Btn>
              <UserIcon />
            </Btn>
            <Btn>
              <LikeIcon />
            </Btn>
          </ButtonContainer>
        </LikeContainer>
        <MapContainer>
          <Map></Map>
        </MapContainer>
      </ScrollView>
      <RouteContainer>
        <View>
          <HeaderSix>Camberger Str 18</HeaderSix>
          <HeaderSix>51105 Köln</HeaderSix>
        </View>

        <BtnCta>
          <BtnTextCta>lead to point</BtnTextCta>
        </BtnCta>
      </RouteContainer>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
