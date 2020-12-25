import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { LogoIcon } from "../Icons";

const MapContainer = styled.View`
  flex: 1;
  background-color: black;
`;

export default function RouteScreen({ route, navigation }) {
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
          customMapStyle={[
            {
              elementType: "geometry",
              stylers: [
                {
                  color: "#212121",
                },
              ],
            },
            {
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#757575",
                },
              ],
            },
            {
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#212121",
                },
              ],
            },
            {
              featureType: "administrative",
              elementType: "geometry",
              stylers: [
                {
                  color: "#757575",
                },
              ],
            },
            {
              featureType: "administrative.country",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9e9e9e",
                },
              ],
            },
            {
              featureType: "administrative.land_parcel",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#bdbdbd",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#757575",
                },
              ],
            },
            {
              featureType: "poi.business",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [
                {
                  color: "#181818",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#616161",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#1b1b1b",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#2c2c2c",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#8a8a8a",
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry",
              stylers: [
                {
                  color: "#373737",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [
                {
                  color: "#3c3c3c",
                },
              ],
            },
            {
              featureType: "road.highway.controlled_access",
              elementType: "geometry",
              stylers: [
                {
                  color: "#4e4e4e",
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#616161",
                },
              ],
            },
            {
              featureType: "transit",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#757575",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [
                {
                  color: "#000000",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#3d3d3d",
                },
              ],
            },
          ]}
          showsUserLocation
          region={{
            latitude: post.latitude,
            longitude: post.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            title={post.location}
            coordinate={{
              latitude: post.latitude,
              longitude: post.longitude,
            }}
          >
            <LogoIcon />
          </Marker>
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
