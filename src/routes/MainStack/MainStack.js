import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import base from "../../screens/home/base";
import profile from "../../screens/home/profile";
import search from "../../screens/home/search";
import favorite from "../../screens/home/favorite";
import chat from "../../screens/home/chat";
import icons from "../../../assets/icons";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "../../utils/Colors";
import EditProfile from "../../screens/home/editProfile/EditProfile";
import interests from "../../screens/home/interests";
import { AntDesign } from "@expo/vector-icons";

const MainStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          height: verticalScale(70),
        },
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Profile") {
            iconName = "user";
            size = focused ? 25 : 20;
          } else if (route.name === "Chat") {
            iconName = "message1";
            size = focused ? 25 : 20;
            return (
              <AntDesign
                name={iconName}
                size={moderateScale(size)}
                color="black"
              />
            );
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
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: "#000",
        activeBackgroundColor: "#fff",
        showIcon: true,
      }}
      initialRouteName="Profile"
    >
      <Tab.Screen name="Search" component={search} />
      <Tab.Screen name="Favorite" component={favorite} />
      <Tab.Screen name="Home" component={base} />
      <Tab.Screen name="Chat" component={chat} />
      <Tab.Screen name="Profile" component={profile} />
      {/* <Tab.Screen
        options={{
          tabBarItemStyle: { display: "none" },
        }}
        name="EditProfile"
        component={EditProfile}
      /> */}
      {/* <Tab.Screen name="Profile" component={interests} /> */}
    </Tab.Navigator>
  );
};

export default MainStack;
