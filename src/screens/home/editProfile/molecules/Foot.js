import { View, Text } from "react-native";
import React from "react";
import styled from "react-native-styled-components";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import { Spacer } from "../../../../components/Spacer";

const Foot = () => {
  return (
    <Footer>
      <CustomText fontSize={14} color={colors.gray} fontFamily={'regular'}>
        More than 50 stickers are <Link>here</Link>
      </CustomText>
      <Spacer height={10} />
      <CustomText fontSize={14} color={colors.gray} fontFamily={'regular'}>
        Sign up for VIP account and get access to the premium collection of
        stickers
      </CustomText>
    </Footer>
  );
};

export default Foot;

const Footer = styled(View, {
  justifyContent: "center",
});
const Link = styled(Text, {
  textDecorationLine: "underline",
  color: "darkblue",
});
