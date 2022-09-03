import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import base from "../../screens/home/base";
import profile from "../../screens/home/profile";
import search from "../../screens/home/search";
import favorite from "../../screens/home/favorite";
import chat from "../../screens/home/chat";

const MainStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          height: verticalScale(60),
          alignItems: "center",
          justifyContent: "center",
          padding: verticalScale(12),

          backgroundColor: "#171E26",
        },
      }}
    >
      <Tab.Screen name="Search" component={search} />
      <Tab.Screen name="Favorite" component={favorite} />
      <Tab.Screen name="Home" component={base} />
      <Tab.Screen name="Chat" component={chat} />
      <Tab.Screen name="Profile" component={profile} />
    </Tab.Navigator>
  );
};

export default MainStack;
