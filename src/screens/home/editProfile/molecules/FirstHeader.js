import { View, Text } from "react-native";
import React from "react";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";

const FirstHeader = () => {
  return (
    <CustomText fontSize={24} color={colors.black}  fontFamily={'bold'}>
      Profile Picture
    </CustomText>
  );
};

export default FirstHeader;
