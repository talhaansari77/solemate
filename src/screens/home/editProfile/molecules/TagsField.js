import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "../../../../components/CustomText";
import { Spacer } from "../../../../components/Spacer";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../utils/Colors";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const TagsField = ({title}) => {
  return (
    <>
      <View>
        <CustomText
          label={title}
          color={colors.darkOrange}
          fontFamily={"medium"}
          fontSize={11}
        />

        <Spacer height={10} />
        <View
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.9}
            style={{
              paddingVertical: verticalScale(6),
              paddingHorizontal: scale(20),
              backgroundColor: colors.primary,
              borderRadius: moderateScale(20),

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomText color={colors.white}>Gamer</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              paddingVertical: verticalScale(6),
              paddingHorizontal: scale(20),
              borderRadius: moderateScale(15),
              borderStyle: "dashed",
              borderColor: colors.primary,
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: scale(5),
            }}
          >
            <CustomText color={colors.primary} fontFamily={"bold"}>
              Add More
            </CustomText>
            <Spacer width={5} />
            <View
              style={{
                backgroundColor: colors.primary,
                height: 20,
                width: 20,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon name="plus" color={colors.white} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default TagsField;
