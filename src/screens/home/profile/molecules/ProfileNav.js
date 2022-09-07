import { TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "../../../../components/CustomText";
import Ionicons from "react-native-vector-icons/Ionicons";
import styled from "react-native-styled-components";
import commonStyles from "../../../../utils/CommonStyles";
import { colors } from "../../../../utils/Colors";
import { Feather } from '@expo/vector-icons'; 
import { moderateScale } from "react-native-size-matters";


const ProfileNav = ({icon}) => {
  return (
    <Row>
      <TouchableOpacity>
        <Ionicons name="ios-arrow-back" size={30} />
      </TouchableOpacity>
      <TouchableOpacity
      activeOpacity={0.6}
      >
        {icon?(
          <Feather name="plus" size={moderateScale(25)} color={colors.black} />


        ):
        <CustomText fontSize={14} color={colors.primary} fontFamily={'bold'}>
        Done
      </CustomText>


        }
      
      </TouchableOpacity>
    </Row>
  );
};

export default ProfileNav;

const Row = styled(View, {
  ...commonStyles.rowContainer,
  justifyContent: "space-between",
});
