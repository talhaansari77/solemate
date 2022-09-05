import { View, Text, Image, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import SettingsArray from "./molecules/SettingsArray";
import styled from "react-native-styled-components";
import CustomText from "../../../components/CustomText";
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';


const Settings = () => {
  return (
    <Container>
    <TouchableOpacity>
      <View>
        <CustomText fontSize={16} fontWeight={'700'} alignSelf={'flex-end'} marginRight={12} marginTop={10} color={'green'}  >
        Done
        </CustomText>
        </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <View>
        <CustomText fontSize={28} fontWeight={'700'} marginLeft={18} marginBottom={35} marginTop={20}  >
        Settings
        </CustomText>
        </View>
    </TouchableOpacity>

        {SettingsArray.map((settings, index) => {
          return (
      <TouchableOpacity>
            <View style={{ flexDirection: "row", paddingBottom: 38, marginLeft: 20, }}>
              <Image style={{marginRight: scale(10), marginTop: verticalScale(5)}} source={settings.icon} />
              <CustomText fontSize={15} >{settings.name}</CustomText>
            </View>
     </TouchableOpacity>
          );
        })}
    </Container>
  );
};

const Container = styled(SafeAreaView, {
  width: "100%",
  // alignItems: "center",
  // flexDirection: "column",
  padding: moderateScale(20) ,
  flex: 1,
});

export default Settings;
