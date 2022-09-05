import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { colors } from "../../../../utils/Colors";
import commonStyles from "../../../../utils/CommonStyles";
import profileImages from "../../../../../assets/Profile_images";
import styled from "react-native-styled-components";
import { scale, verticalScale } from "react-native-size-matters";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const UploadPicture = ({ height, width, marginLeft, editable = false }) => {
  
    
      const ProfileImg = styled(TouchableOpacity, (props) => ({
        height: verticalScale(props.height || 160),
        width: scale(props.width || 130),
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: colors.primary,
        // elevation: 8,
        justifyContent: "center",
        alignItems: "center",
        marginLeft:scale(props.marginLeft)||0
      }));
      
    return (
    <Center>
      <ProfileImg activeOpacity={0.7} marginLeft={marginLeft} height={height} width={width}>
        <Image source={profileImages.profile01} style={{ flex: 1 }} resizeMode="contain" />
      </ProfileImg>
      {editable ? (
        <EditBtn activeOpacity={0.7}>
          <MaterialIcons name="edit" size={scale(15)} color={colors.primary} />
        </EditBtn>
      ) : (
        <></>
      )}
    </Center>
  );
};

export default UploadPicture;

const Center = styled(View, {
    ...commonStyles.center,
  });
const EditBtn = styled(TouchableOpacity, {
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: colors.white,
    elevation: 9,
    zIndex: 99,
    position: "absolute",
    bottom: -10,
    right: 0,
  });