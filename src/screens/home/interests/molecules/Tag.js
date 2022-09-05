import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from "react";
import styled from "react-native-styled-components";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../utils/Colors";
import CustomText from "../../../../components/CustomText";

const Tag = ({name}) => {
  const Border = styled(TouchableOpacity, (props) => ({
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: moderateScale(14),
    width: Dimensions.get("window").width / 3 - 35,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: verticalScale(5),
    padding: moderateScale(8),
    marginRight: scale(17),
    backgroundColor: props.backgroundColor,
  }));

  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Border
        activeOpacity={0.6}
        onPress={() => {
          setIsChecked(!isChecked);
        }}
        backgroundColor={isChecked ? colors.primary : ""}
      >
        <CustomText
          fontSize={16}
          fontWeight={"bold"}
          color={isChecked ? colors.white : colors.black}
        >
          {name}
        </CustomText>
      </Border>
    </>
  );
};

export default Tag;
