import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack";
import LikeStack from "./LikeStack";
import YourProfileStack from "./YourProfileStack";
import SearchStack from "./SearchStack";
import NotificationsStack from "./NotificationsStack";
import { HomeIcon, LikeIcon, NotificationIcon, SearchIcon } from "../Icons";

import { YourImgS } from "../YourImg";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "#33d17c",
          inactiveTintColor: "#cecece",
          showLabel: false,
          keyboardHidesTabBar: true,
          style: { backgroundColor: "#030D12", borderTopColor: "#030D12" },
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          }}
          name="Home"
          component={HomeStack}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color }) => <SearchIcon color={color} />,
          }}
          name="Search"
          component={SearchStack}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Liked Points",
            tabBarIcon: ({ color }) => <LikeIcon color={color} />,
          }}
          name="Liked Points"
          component={LikeStack}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Notifications",
            tabBarIcon: ({ color }) => <NotificationIcon color={color} />,
          }}
          name="Notifications"
          component={NotificationsStack}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "You",
            tabBarIcon: ({ color }) => (
              <YourImgS
                color={color}
                imgSrc={{
                  uri:
                    "https://images.unsplash.com/photo-1570158268183-d296b2892211?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzB8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                }}
              />
            ),
          }}
          name="You"
          component={YourProfileStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
