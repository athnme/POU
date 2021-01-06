import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import PostSmall from "../cards/PostSmall";

const getPosts = async () => {
  let uri = `https://pou-server.loca.lt/posts?_expand=user`;

  const response = await fetch(uri);
  const posts = await response.json();
  return posts;
};

export default function SearchPointScreen({ navigation }) {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);
  if (!posts) {
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
        data={posts}
        renderItem={({ item }) => (
          <PostSmall
            postScreen={() => navigation.navigate("Point", { id: item.id })}
            postPath={item.id}
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
  },
});
