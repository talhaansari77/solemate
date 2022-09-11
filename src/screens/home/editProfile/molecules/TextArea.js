import { View, Text, TextInput } from "react-native";
import React from "react";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import { Spacer } from "../../../../components/Spacer";
import { moderateScale } from "react-native-size-matters";

const TextArea = ({label,height, lines = 5 }) => {
  return (
    <>
      <View>
        <CustomText
          label={label}
          color={colors.darkOrange}
          fontFamily={"bold"}
          fontSize={11}
        />
        <Spacer height={10} />
        <TextInput
          multiline={true}
          numberOfLines={lines}
          style={{
            borderWidth: 1,
            padding: moderateScale(5),
            borderRadius: moderateScale(10),
            color: colors.gray,
          }}
        />
      </View>
    </>
  );
};

export default TextArea;
