import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Post from "../cards/Post";

const getPosts = async () => {
  let uri = `http://localhost:5000/posts?_expand=user`;

  const response = await fetch(uri);
  const posts = await response.json();
  return posts;
};

export default function FeedScreen({ navigation }) {
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
        numColumns={60}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnStyle}
        data={posts}
        renderItem={({ item }) => (
          <Post
            postPath={item.id}
            userName={item.user.userName}
            userImg={item.user.userImg}
            postImgSrc={item.postImg}
            caption={item.caption}
            locationName={item.locationName}
            location={item.location}
            likerImg1={item.likerImg1}
            likerImg2={item.likerImg2}
            likerImg3={item.likerImg3}
            firstLiker={item.firstLiker}
            likerNumber={item.likerNumber}
          />
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  listContainer: {
    paddingVertical: 8,
  },
  columnStyle: {
    justifyContent: "center",
  },
});
