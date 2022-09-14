import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import { verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../../components/Spacer";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const InputField = ({ label, arrow = true }) => {
  return (
    <>
      <View>
        <CustomText color={colors.darkOrange} fontFamily={"bold"} fontSize={11}>
          {label}
        </CustomText>
        <Spacer height={10} />
        {/* <TextInput
          style={{
            borderBottomWidth: 1,
            paddingVertical: verticalScale(5),
          }}
        /> */}
        <View
          style={{
            borderBottomWidth: 1,
            paddingVertical: verticalScale(5),
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput style={{ width: "90%" }} />
          {arrow ? (
            <TouchableOpacity activeOpacity={0.6}>
              <FontAwesomeIcon name="chevron-right" />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </View>
    </>
  );
};

export default InputField;
