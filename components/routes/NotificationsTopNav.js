import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import FollowRequestScreen from "../screens/FollowRequestsScreen";
import MarkedForYouScreen from "../screens/MarkedForYouScreen";

const Tab = createMaterialTopTabNavigator();

export default function SearchTopNav({ navigation }) {
  return (
    <Tab.Navigator
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
      <Tab.Screen name="Follow Requests" component={FollowRequestScreen} />
      <Tab.Screen name="Marked for you" component={MarkedForYouScreen} />
    </Tab.Navigator>
  );
}
