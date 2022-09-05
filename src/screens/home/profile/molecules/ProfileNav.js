import { TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "../../../../components/CustomText";
import Ionicons from "react-native-vector-icons/Ionicons";
import styled from "react-native-styled-components";
import commonStyles from "../../../../utils/CommonStyles";
import { colors } from "../../../../utils/Colors";

const ProfileNav = () => {
  return (
    <Row>
      <TouchableOpacity>
        <Ionicons name="ios-arrow-back" size={30} />
      </TouchableOpacity>
      <TouchableOpacity>
        <CustomText fontSize={14} color={colors.primary} fontFamily={'bold'}>
          Done
        </CustomText>
      </TouchableOpacity>
    </Row>
  );
};

export default ProfileNav;

const Row = styled(View, {
  ...commonStyles.rowContainer,
  justifyContent: "space-between",
});
