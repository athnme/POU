import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import LocationCard from "../cards/LocationCard";

const getLocations = async () => {
  let uri = `https://pou-server.loca.lt/cities`;

  const response = await fetch(uri);
  const locations = await response.json();
  return locations;
};

export default function SearchLocationScreen({ navigation }) {
  const [locations, setLocations] = useState(null);
  useEffect(() => {
    getLocations().then((locations) => setLocations(locations));
  }, []);
  if (!locations) {
    return (
      <LinearGradient
        colors={["#07211F", "#030D12"]}
        style={styles.container}
      />
    );
  }
  return (
    <LinearGradient colors={["#07211F", "#030D12"]} style={styles.container}>
      <FlatList
        style={{ padding: 12 }}
        numColumns={2}
        data={locations}
        renderItem={({ item }) => (
          <LocationCard locationImg={item.img} locationName={item.name} />
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
