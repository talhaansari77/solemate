import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { colors } from "../../../../utils/Colors";
import CustomText from "../../../../components/CustomText";
import { scale, verticalScale } from "react-native-size-matters";

const SettingItem = ({ name, icon, count, setCount, index }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        // setIsSelected(!selected);
        setCount(index);
      }}
    >
      <View style={{ flexDirection: "row", paddingBottom: 38, marginLeft: 20 }}>
        <Image
          style={{ marginRight: scale(10), marginTop: verticalScale(3) }}
          source={icon}
        />
        <CustomText
          fontSize={15}
          color={count == index ? colors.primary : colors.black}
        >
          {name}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default SettingItem;
