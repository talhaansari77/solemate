import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import base from "../../screens/home/base";
import profile from "../../screens/home/profile";
import search from "../../screens/home/search";
import favorite from "../../screens/home/favorite";
import chat from "../../screens/home/chat";
import icons from "../../../assets/icons";
import { moderateScale, verticalScale } from "react-native-size-matters";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "../../utils/Colors";

const MainStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      // screenOptions={{
      //   headerShown: false,
      //   tabBarShowLabel: false,

      //   tabBarStyle: {
      //     height: verticalScale(60),
      //     alignItems: "center",
      //     justifyContent: "center",
      //     padding: verticalScale(12),

      //     backgroundColor: "#171E26",
      //   },
      // }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Profile") {
            iconName = "user";
            size = focused ? 25 : 20;
          } else if (route.name === "Chat") {
            iconName = "phone";
            size = focused ? 25 : 20;
          } else if (route.name === "Home") {
            iconName = "home";
            size = focused ? 25 : 20;
          } else if (route.name === "Favorite") {
            iconName = "heart";
            size = focused ? 25 : 20;
          } else if (route.name === "Search") {
            iconName = "search";
            size = focused ? 25 : 20;
          }

          return (
            <Feather name={iconName} size={moderateScale(size)} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: "#000",
        activeBackgroundColor: "#fff",
        // showLabel: false,   
        showIcon: true,
      }}
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
      initialRouteName="Profile"
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
