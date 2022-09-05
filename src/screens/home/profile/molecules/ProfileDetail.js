import React from "react";
import { View } from "react-native";
import { scale } from "react-native-size-matters";
import styled from "react-native-styled-components";
import CustomText from "../../../../components/CustomText";
import { Spacer } from "../../../../components/Spacer";
import { colors } from "../../../../utils/Colors";
import commonStyles from "../../../../utils/CommonStyles";

const ProfileDetail = () => {
  return (
    <>
      <Row>
        <CustomText fontSize={scale(14)} color={colors.gray}>
          Name
        </CustomText>
        <CustomText
          fontSize={scale(15)}
          color={colors.black}
          fontWeight={"800"}
        >
          Scarlet Witch
        </CustomText>
      </Row>
      <Spacer height={30} />
      <Row>
        <CustomText fontSize={scale(14)} color={colors.gray}>
          Gender
        </CustomText>
        <CustomText
          fontSize={scale(15)}
          color={colors.black}
          fontWeight={"800"}
        >
          Female
        </CustomText>
      </Row>
      <Spacer height={30} />
      <Row>
        <CustomText fontSize={scale(14)} color={colors.gray}>
          Date of birth
        </CustomText>
        <CustomText
          fontSize={scale(15)}
          color={colors.black}
          fontWeight={"800"}
        >
          16.06.1995
        </CustomText>
      </Row>
    </>
  );
};

export default ProfileDetail;

const Row = styled(View, {
  ...commonStyles.rowContainer,
  justifyContent: "space-between",
});
