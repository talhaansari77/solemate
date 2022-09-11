import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import profileImages from "../../../../../assets/Profile_images";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import { moderateScale } from "react-native-size-matters";

const ProfileImage = ({ src,showName = true }) => {
  return (
    <>
      {/* ProfileImage */}
      <View style={{ height: Dimensions.get("window").height / 2.3 }}>
        <Image
          resizeMode="cover"
          source={src}
          style={{ height: "100%", width: "100%" }}
        />
        {showName ? (
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              padding: moderateScale(25),
            }}
          >
            <CustomText color={colors.white} fontFamily={"bold"} fontSize={14}>
              Samer -28
            </CustomText>
            <CustomText color={colors.white} fontFamily={"bold"} fontSize={14}>
              California
            </CustomText>
          </View>
        ) : (
          <></>
        )}
      </View>
    </>
  );
};

export default ProfileImage;
