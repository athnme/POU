import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ProfileCard from "../cards/ProfileCard";

const getProfiles = async () => {
  let uri = `https://pou-server.loca.lt/users`;

  const response = await fetch(uri);
  const profiles = await response.json();
  return profiles;
};

export default function SearchProfileScreen({ navigation }) {
  const [profiles, setProfiles] = useState(null);
  useEffect(() => {
    getProfiles().then((profiles) => setProfiles(profiles));
  }, []);
  if (!profiles) {
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
        style={{ paddingHorizontal: 16, paddingTop: 16 }}
        data={profiles}
        renderItem={({ item }) => (
          <ProfileCard
            profileScreen={() =>
              navigation.navigate("Profile", { id: item.id })
            }
            userName={item.userName}
            userWholeName={item.wholeName}
            userImgSrc={item.userImg}
          />
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
