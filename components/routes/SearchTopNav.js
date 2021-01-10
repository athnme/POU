import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import FeedScreen from "../screens/FeedScreen";
import SearchPointScreen from "../screens/SearchPointScreen";
import SearchProfileScreen from "../screens/SearchProfileScreen";
import SearchLocationScreen from "../screens/SearchLocationScreen";

const Tab = createMaterialTopTabNavigator();

export default function SearchTopNav({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Points"

      tabBarOptions={{
        activeTintColor: "#33D17C",
        inactiveTintColor: "#cecece",
        style: { backgroundColor: "#07211f" },
        indicatorStyle: {
          backgroundColor: "#33d17c",
          height: 1,
        },
      }}
    >
      <Tab.Screen name="Points" component={SearchPointScreen} />
      <Tab.Screen name="Profiles" component={SearchProfileScreen} />
      <Tab.Screen name="Locations" component={SearchLocationScreen} />
    </Tab.Navigator>
  );
}
