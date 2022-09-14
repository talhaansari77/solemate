import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { scale, ScaledSheet, verticalScale } from "react-native-size-matters";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import icons from "../../../../../assets/icons";
import { Spacer } from "../../../../components/Spacer";

const GenderContainer = ({ index, txt, isSelect, setIsSelect }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        setIsSelect(index);
      }}
      style={[
        styles.mainContainer,
        {
          borderColor: isSelect == index ? colors.darkOrange : colors.black,
          borderRadius: 50,
          // borderColor: color,
          borderWidth: 1,
          flexDirection: "row",
        },
      ]}
    >
      <View style={{ flex: 7, alignItems: "center" }}>
        <CustomText
          label={txt}
          color={isSelect == index ? colors.darkOrange : colors.black}
          fontFamily="bold"
          fontSize={verticalScale(10)}
          marginLeft={scale(30)}
        />
      </View>
      {isSelect == index ? (
        <View style={{ flex: 3, alignItems: "center" }}>
          <Image
            source={icons.orangeCircleIcon}
            style={{ height: verticalScale(20), width: scale(20) }}
            resizeMode={"contain"}
          />
        </View>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default GenderContainer;

const styles = ScaledSheet.create({
  mainContainer: {
    width: "130@s",
    height: "35@vs",
    alignItems: "center",
    justifyContent: "center",
  },
});
