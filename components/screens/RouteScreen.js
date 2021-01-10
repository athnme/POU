import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { LogoIcon } from "../Icons";
import MapStyle from "../styles/MapStyle";
import useUserLocation from "../UserLocation";
import { YourImgS } from "../YourImg";

const MapContainer = styled.View`
  flex: 1;
  background-color: black;
`;

export default function RouteScreen({ route }) {
  const { location, errorMsg } = useUserLocation();

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
      <MapContainer>
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          customMapStyle={MapStyle}
          region={{
            latitude: (post.latitude + location.coords.latitude) / 2,
            longitude: (post.longitude + location.coords.longitude) / 2,
            latitudeDelta: 0.12,
            longitudeDelta: 0.12,
          }}
        >
          <Marker
            coordinate={{
              latitude: post.latitude,
              longitude: post.longitude,
            }}
          >
            <LogoIcon />
          </Marker>
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          >
            <YourImgS
              color="#cecece"
              imgSrc={{
                uri:
                  "https://images.unsplash.com/photo-1570158268183-d296b2892211?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzB8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              }}
            />
          </Marker>
          <MapViewDirections
            precision="high"
            origin={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            destination={{
              latitude: post.latitude,
              longitude: post.longitude,
            }}
            strokeWidth={6}
            strokeColor="#cecece"
            apikey="AIzaSyDiPy_OD_Ok8m7RTHG5JAa43MDxp2fPMis"
          />
        </MapView>
      </MapContainer>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
