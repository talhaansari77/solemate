import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Chat from "../../screens/home/chat/Chat";
import Request from "../../screens/home/chat/request/Request";


const MessagingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"MessagingStack"}
    >
      <Stack.Screen name="Request" component={Request} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default MessagingStack;

