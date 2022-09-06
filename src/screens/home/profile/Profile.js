import { View, SafeAreaView } from "react-native";
import React from "react";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/Colors";
import commonStyles from "../../../utils/CommonStyles";
import styled from "react-native-styled-components";
import { moderateScale } from "react-native-size-matters";
import { Spacer } from "../../../components/Spacer";
import ProfileNav from "./molecules/ProfileNav";
import ProfileDetail from "./molecules/ProfileDetail";
import ProfilePicture from "./molecules/ProfilePicture";

const Profile = () => {
  return (
    <Container>
      <Spacer height={15}/>
      <ProfileNav />
      <Spacer height={10} />
      <CustomText fontSize={24} color={colors.black} fontFamily={'bold'}>
        Edit Profile
      </CustomText>
      <Spacer height={40} />
      <ProfilePicture />
      {/* Details */}
      <Spacer height={50} />
      <ProfileDetail />
    </Container>
  );
};

export default Profile;

export const Container = styled(View, {
  width: '100%',
  padding: moderateScale(25),
  flex: 1,
});
