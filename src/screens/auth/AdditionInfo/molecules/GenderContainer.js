import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";

const GenderContainer = ({ index, txt }) => {
  const [isSelect, setIsSelect] = useState(0);
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        setIsSelect(index);
      }}
      style={[
        styles.mainContainer,
        {
          // backgroundColor:  isSelect ==index ? colors.primary : colors.white,
          borderRadius: 50,
          borderColor:  isSelect == index  ? colors.orange : colors.black,
          borderWidth: 1,
        },
      ]}
    >
      <CustomText
        label={txt}
        color={ isSelect ==  index  ? colors.orange : colors.black}
        fontFamily="bold"
        fontSize={verticalScale(10)}
      />
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
