import { View, ScrollView, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import styled from "react-native-styled-components";
import { avatarList } from "../../../../../assets/avatar";
import { moderateScale, verticalScale } from "react-native-size-matters";

const StickerBox = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AvatarBox>
        {avatarList.map((avatar) => (
          // <CustomImage src={avatar}/>
          <>
            <Avatar activeOpacity={0.6}>
              <Image source={avatar} />
            </Avatar>
          </>
        ))}
      </AvatarBox>
    </ScrollView>
  );
};

export default StickerBox;

const AvatarBox = styled(View, {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
});
const Avatar = styled(TouchableOpacity, {
  backgroundColor: "#fff",
  borderRadius: moderateScale(20),
  width: Dimensions.get("window").width / 3 - 35,
  justifyContent: "center",
  alignItems: "center",
  marginVertical: verticalScale(5),
  height: verticalScale(80),
});
