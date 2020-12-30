import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import PostSmall from "../cards/PostSmall";
import YourProfileInfoCard from "../cards/YourProfileInfoCard";

const getUser = async () => {
  let uri = `https://pou-server.loca.lt/users/1?_embed=posts`;

  const response = await fetch(uri);
  const user = await response.json();
  return user;
};

export default function YourProfileScreen({ route, navigation }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, []);
  if (!user) {
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
        numColumns={2}
        ListHeaderComponent={
          <YourProfileInfoCard
            userName={user.userName}
            wholeName={user.wholeName}
            userImg={user.userImg}
            message={user.message}
            pointCount={user.posts.length}
            followerCount={user.posts.length}
            followingCount={user.posts.length}
          />
        }
        data={user.posts}
        renderItem={({ item }) => (
          <PostSmall
            postScreen={() => navigation.push("Point", { id: item.id })}
            postImgSrc={item.postImg}
          />
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});
