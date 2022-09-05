import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import base from "../../screens/home/base";
import profile from "../../screens/home/profile";
import search from "../../screens/home/search";
import favorite from "../../screens/home/favorite";
import chat from "../../screens/home/chat";
import { verticalScale } from "react-native-size-matters";

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
          if (route.name === 'Profile') {
            iconName = 'autoprefixer';
            size = focused ? 25 : 20;
            // color = focused ? color.primary : '#555';
          } else if (route.name === 'Screen_B') {
            iconName = 'btc';
            size = focused ? 25 : 20;
            // color = focused ? '#f0f' : '#555';
          }
          return (
            <></>
            // <FontAwesome5
            //   name={iconName}
            //   size={size}
            //   color={color}
            // />
          )
        }
      })}
      // tabBarOptions={{
        
      //   activeTintColor: '#f0f',
      //   inactiveTintColor: '#555',
      //   activeBackgroundColor: '#fff',
      //   inactiveBackgroundColor: '#999',
      //   showLabel: true,
      //   labelStyle: { fontSize: 14 },
      //   showIcon: true,
      // }}
      activeColor='#f0edf6'
      inactiveColor='#3e2465'
      barStyle={{ backgroundColor: '#694fad' }}
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
