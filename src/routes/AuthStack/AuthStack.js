import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../../screens/auth/welcome";
import Login from "../../screens/auth/login";
import Signup from "../../screens/auth/signup";
import OnBoarding from "../../screens/auth/onBoarding/OnBoarding";
import ViewPager from "../../screens/auth/ViewPager";
import Settings from "../../screens/home/settings";
import MainSettings from "../../screens/home/settings/MainSettings";
import GeneralSettings from "../../screens/home/settings/GeneralSettings";
import EditProfile from "../../screens/home/editProfile";
import profile from "../../screens/home/profile";

const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName={"Login"}
    >
      {/* <Stack.Screen name="OnBoarding" component={OnBoarding} /> */}
      {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
      {/* <Stack.Screen name="ViewPager" component={ViewPager} /> */}

      {/* <Stack.Screen name="Settings" component={Settings} /> */}
      {/* <Stack.Screen name="MainSettings" component={MainSettings} /> */}
      {/* <Stack.Screen name="GeneralSettings" component={GeneralSettings} /> */}

      {/* <Stack.Screen name="Settings" component={Settings} /> */}
      {/* <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} /> */}
      <Stack.Screen name="EditProfile" component={profile} />
    </Stack.Navigator>
  );
};

export default AuthStack;
