import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styled from "react-native-styled-components";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/Colors";
import { verticalScale, scale, moderateScale } from "react-native-size-matters";
import icons from "../../../../assets/icons";
import SettingItem from "./molecules/SettingItem";

const Settings = () => {
  const [count, setCount] = useState(-1)
  const SettingsArray = [
    {
      id: 1,
      name: "Account Management",
      icon: icons.profileIcon,
    },
    {
      id: 2,
      name: "Confidentiality",
      icon: icons.lockIcon,
    },
    {
      id: 3,
      name: "Language",
      icon: icons.langWhite,
    },
    {
      id: 4,
      name: "Stickers",
      icon: icons.smileIcon,
    },
    {
      id: 5,
      name: "Notification",
      icon: icons.notificationIcon,
    },
    {
      id: 6,
      name: "Privacy policy",
      icon: icons.noteIcon,
    },
    {
      id: 7,
      name: "QR code",
      icon: icons.qrIcon,
    },
    {
      id: 8,
      name: "Favorites",
      icon: icons.starIcon,
    },
    {
      id: 9,
      name: "Video settings",
      icon: icons.camIcon,
    },
    {
      id: 10,
      name: "Clear cache",
      icon: icons.trashIcon,
    },
  ];
  return (
    <Container>
      <TouchableOpacity activeOpacity={0.6}>
        <View>
          <CustomText
            fontSize={16}
            fontWeight={"700"}
            alignSelf={"flex-end"}
            marginRight={12}
            marginTop={10}
            color={colors.primary}
          >
            Done
          </CustomText>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.6}>
        <View>
          <CustomText
            fontSize={28}
            fontWeight={"700"}
            marginLeft={18}
            marginBottom={35}
            marginTop={20}
          >
            Settings
          </CustomText>
        </View>
      </TouchableOpacity>

      {SettingsArray.map((setting, index) => (
        <SettingItem name={setting.name} icon={setting.icon} setCount={setCount} count={count} index={index} key={index} />
      ))}
    </Container>
  );
};

const Container = styled(SafeAreaView, {
  width: "100%",
  // alignItems: "center",
  // flexDirection: "column",
  padding: moderateScale(20),
  flex: 1,
});

export default Settings;
