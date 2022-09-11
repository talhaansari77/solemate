import { View, Text, TextInput } from "react-native";
import React from "react";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import { Spacer } from "../../../../components/Spacer";
import { moderateScale, scale } from "react-native-size-matters";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const HeightField = () => {
  return (
    <>
      <View style={{ paddingHorizontal: scale(10) }}>
        <CustomText
          label={"Height"}
          color={colors.darkOrange}
          fontFamily={"bold"}
          fontSize={11}
        />

        <Spacer height={10} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: scale(20),
            // justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1 }}>
            <CustomText>Feet</CustomText>
            <View
              style={{
                borderWidth: 1,
                padding: moderateScale(2),
                borderRadius: moderateScale(10),
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ width: "80%", alignItems: "center" }}>
                <TextInput
                  placeholder={"6"}
                  style={{ marginLeft: scale(20) }}
                />
              </View>
              <View>
                <FontAwesomeIcon name="chevron-down" />
              </View>
            </View>
          </View>

          <Spacer width={10} />
          <View style={{ flex: 1 }}>
            <CustomText>Inches</CustomText>
            <View
              style={{
                borderWidth: 1,
                padding: moderateScale(2),
                borderRadius: moderateScale(10),
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ width: "80%", alignItems: "center" }}>
                <TextInput
                  placeholder={"6 "}
                  style={{ marginLeft: scale(20) }}
                />
              </View>
              <View>
                <FontAwesomeIcon name="chevron-down" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default HeightField;
