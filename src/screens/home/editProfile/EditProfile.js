import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
  Touchable,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import React from "react";
import { Container } from "../profile/Profile";
import ProfileNav from "../profile/molecules/ProfileNav";
import { Spacer } from "../../../components/Spacer";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/Colors";
import UploadPicture from "./molecules/UploadPicture";
import styled from "react-native-styled-components";
import CustomImage from "../../../components/CustomImage";
import { avatarList } from "../../../../assets/avatar";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import PictureBox from "./molecules/PictureBox";
import FirstHeader from "./molecules/FirstHeader";
import SecHeader from "./molecules/SecHeader";
import StickerBox from "./molecules/StickerBox";
import Foot from "./molecules/Foot";
import { useNavigation } from "@react-navigation/native";

const EditProfile = () => {
  return (
    <Container>
      <Spacer height={15} />
      <ProfileNav />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Spacer height={10} />
        <FirstHeader />
        <PictureBox />
        <Spacer height={30} />
        <SecHeader />
        <StickerBox />
        <Spacer height={20} />
        <Foot />
      </ScrollView>
    </Container>
  );
};

export default EditProfile;
