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
        <CustomText
          fontSize={scale(14)}
          color={colors.gray}
          fontFamily={"regular"}
        >
          Name
        </CustomText>
        <CustomText
          fontSize={scale(16)}
          color={colors.black}
          fontFamily={"bold"}
        >
          Scarlet Witch
        </CustomText>
      </Row>
      <Spacer height={30} />
      <Row>
        <CustomText
          fontSize={scale(14)}
          color={colors.gray}
          fontFamily={"regular"}
        >
          Gender
        </CustomText>
        <CustomText
          fontSize={scale(16)}
          color={colors.black}
          fontFamily={"bold"}
        >
          Female
        </CustomText>
      </Row>
      <Spacer height={30} />
      <Row>
        <CustomText
          fontSize={scale(14)}
          color={colors.gray}
          fontFamily={"regular"}
        >
          Date of birth
        </CustomText>
        <CustomText
          fontSize={scale(16)}
          color={colors.black}
          fontFamily={"bold"}
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
