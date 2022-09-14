import { View, Text } from "react-native";
import React from "react";
import { Spacer } from "../../../../components/Spacer";
import { PaddingLeft } from "../Profile";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../utils/Colors";
import CustomText from "../../../../components/CustomText";

const AboutMeText = () => {
  return (
    <>
      {/* About Me */}
      <Spacer height={30} />
      <PaddingLeft>
        <View
          style={{
            paddingRight: scale(5),
          }}
        >
          <CustomText fontSize={14} color={colors.gray} fontFamily={"bold"}>
            About Me
          </CustomText>
          <View style={{ paddingVertical: verticalScale(5) }}>
            <CustomText fontSize={13} color={colors.black} fontFamily={"bold"}>
              Instagram is great when it comes to OOTDs—outfit of the day—and
              quick style inspirations, but blogs are where the serious
              fashionistas go to write about trends, advice, and the latest
              fashion innovations. Not feeling particularly stylish today?
              Fashion blogs can give you inspiration for dressing well even on
              those lazy mornings. Got your eye on this season’s hottest trends?
              These blogs are great for helping you figure out which clothing
              pieces and colors suit your frame. They can also provide you with
              ideas about mixing and matching pieces to create a dozen perfect
              looks without breaking the bank.
            </CustomText>
          </View>
        </View>
      </PaddingLeft>
      <Spacer height={20} />
    </>
  );
};

export default AboutMeText;
