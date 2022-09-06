import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../../screens/auth/welcome";
import login from "../../screens/auth/login";
import signup from "../../screens/auth/signup";
import EditProfile from "../../screens/home/editProfile/EditProfile";

const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={Settings} />
      {/* <Stack.Screen name="MainSettings" component={MainSettings} /> */}
      {/* <Stack.Screen name="GeneralSettings" component={GeneralSettings} /> */}

      {/* <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={login} />

      <Stack.Screen name="Signup" component={signup} /> */}

      <Stack.Screen name="Signup" component={signup} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default AuthStack;
