import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/Colors";
import commonStyles from "../../../utils/CommonStyles";
import styled from "react-native-styled-components";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../components/Spacer";
import ProfileNav from "./molecules/ProfileNav";
import ProfileDetail from "./molecules/ProfileDetail";
import ProfilePicture from "./molecules/ProfilePicture";
import CustomImage from "../../../components/CustomImage";
import profileImages from "../../../../assets/Profile_images";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { Divider } from "react-native-elements";
import CustomButton from "../../../components/CustomButton";

const traits = [
  { id: 1, trait: "Gamer" },
  { id: 2, trait: "Lover" },
  { id: 3, trait: "Sports" },
  { id: 4, trait: "Good Look" },
  { id: 5, trait: "Charming" },
  { id: 6, trait: "fit" },
];
const basicInfo = [
  {
    id: 1,
    title: "Current Location",
    label: "California, US",
    icon: "location",
  },
  { id: 2, title: "Family Origin", label: "Us", icon: "flag-o" },
  { id: 3, title: "Height", label: "5'6", icon: "height" },
  { id: 4, title: "Language", label: "English", icon: "language" },
];
const education = [
  { id: 1, title: "Current Location", label: "California, US" },
  { id: 2, title: "Family Origin", label: "Us" },
];
const religiousness = [
  { id: 1, title: "Current Location", label: "California, US" },
  { id: 2, title: "Family Origin", label: "Us" },
  { id: 3, title: "Height", label: "5'6" },
  { id: 4, title: "Language", label: "English" },
];
const expectation = [
  { id: 1, title: "Current Location", label: "California, US" },
  { id: 2, title: "Family Origin", label: "Us" },
  { id: 3, title: "Height", label: "5'6" },
  { id: 4, title: "Language", label: "English" },
  { id: 5, title: "Current Location", label: "California, US" },
  { id: 6, title: "Family Origin", label: "Us" },
  { id: 7, title: "Height", label: "5'6" },
  { id: 8, title: "Language", label: "English" },
];
const Profile = ({ navigation, actions = false, getApp = false }) => {
  return (
    <View
      style={{
        paddingVertical: verticalScale(25),
        paddingBottom: 0,
        flex: 1,
      }}
    >
      {/* Actions */}
      {actions ? (
        <View
          style={{
            backgroundColor: colors.white,
            paddingVertical: verticalScale(8),
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            position: "absolute",
            bottom: 0,
            zIndex: 2,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: colors.primary,
              height: 40,
              width: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo
              name="cross"
              size={moderateScale(25)}
              color={colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: colors.orange,
              height: 40,
              width: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome
              name="heart"
              size={moderateScale(15)}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}

      {/* Get The App */}
      {getApp ? (
        <View
          style={{
            backgroundColor: colors.white,
            paddingVertical: verticalScale(10),
            paddingHorizontal: scale(35),
            flexDirection: "row",
            width: "100%",
            position: "absolute",
            bottom: 0,
            zIndex: 2,
          }}
        >
          <CustomButton
            title={"Get the Solemate App"}
            fontFamily={"bold"}
            borderRadius={100}
          />
        </View>
      ) : (
        <></>
      )}

      {/* Header */}
      <Spacer height={15} />
      <ProfileNav
        RightSide={() => (
          <TouchableOpacity
            onPress={() => navigation.navigate("EditProfile")}
            activeOpacity={0.6}
            style={{ alignItems: "flex-end", width: "100%" }}
          >
            <CustomText
              fontSize={13}
              color={colors.black}
              fontFamily={"bold"}
              marginRight={20}
            >
              Edit Profile
            </CustomText>
          </TouchableOpacity>
        )}
      />
      <Spacer height={10} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <BlurView intensity={getApp ? 80 : 0}>
          {/* ProfileImage */}
          <View style={{ height: Dimensions.get("window").height / 2.3 }}>
            <Image
              resizeMode="cover"
              source={{
                uri: "https://w0.peakpx.com/wallpaper/121/369/HD-wallpaper-beautiful-girl-flower-aesthetic-ultra-girls-flower-girl-style-beautiful-portrait-woman-design-human-background-charming-young-face-female-beauty-model-gerbera-fashion-look-pretty.jpg",
              }}
              style={{ height: "100%", width: "100%" }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                padding: moderateScale(25),
              }}
            >
              <CustomText
                color={colors.white}
                fontFamily={"bold"}
                fontSize={14}
              >
                Samer -28
              </CustomText>
              <CustomText
                color={colors.white}
                fontFamily={"bold"}
                fontSize={14}
              >
                California
              </CustomText>
            </View>
          </View>

          {/* About Me */}
          <Spacer height={30} />
          <PaddingLeft>
            <View
              style={{
                paddingRight: scale(5),
              }}
            >
              <CustomText fontSize={14} color={colors.gray} fontFamily={"bold"}>
                About Me
              </CustomText>
              <View style={{ paddingVertical: verticalScale(5) }}>
                <CustomText
                  fontSize={13}
                  color={colors.black}
                  fontFamily={"bold"}
                >
                  Instagram is great when it comes to OOTDs—outfit of the
                  day—and quick style inspirations, but blogs are where the
                  serious fashionistas go to write about trends, advice, and the
                  latest fashion innovations. Not feeling particularly stylish
                  today? Fashion blogs can give you inspiration for dressing
                  well even on those lazy mornings. Got your eye on this
                  season’s hottest trends? These blogs are great for helping you
                  figure out which clothing pieces and colors suit your frame.
                  They can also provide you with ideas about mixing and matching
                  pieces to create a dozen perfect looks without breaking the
                  bank.
                </CustomText>
              </View>
            </View>
          </PaddingLeft>
          <Spacer height={20} />
          <Divider />
          {/* Ice Breaker Question */}
          <Spacer height={20} />
          <PaddingLeft>
            <View
              style={{
                paddingRight: scale(5),
              }}
            >
              <CustomText fontSize={14} color={colors.gray} fontFamily={"bold"}>
                Ice Breaker Question
              </CustomText>
              <View style={{ paddingVertical: verticalScale(5) }}>
                <CustomText
                  fontSize={13}
                  color={colors.black}
                  fontFamily={"bold"}
                >
                  Instagram is great when it comes to OOTDs—outfit of the
                  day—and quick style inspirations,
                </CustomText>
              </View>
            </View>
          </PaddingLeft>
          <Spacer height={20} />
          <Divider />

          {/* ProfileImage */}
          <View style={{ height: Dimensions.get("window").height / 2.3 }}>
            <Image
              resizeMode="cover"
              source={{
                uri: "https://w0.peakpx.com/wallpaper/121/369/HD-wallpaper-beautiful-girl-flower-aesthetic-ultra-girls-flower-girl-style-beautiful-portrait-woman-design-human-background-charming-young-face-female-beauty-model-gerbera-fashion-look-pretty.jpg",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>

          <Spacer height={10} />
          {/* Personality */}
          <View
            style={{
              width: "100%",
              padding: moderateScale(25),
              paddingRight: scale(5),
            }}
          >
            <CustomText fontSize={14} color={colors.gray} fontFamily={"bold"}>
              Personality
            </CustomText>
            <Spacer height={10} />
            <View
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
              }}
            >
              {traits.map((person) => (
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={{
                    paddingVertical: verticalScale(6),
                    paddingHorizontal: scale(10),
                    backgroundColor: colors.primary,
                    borderRadius: moderateScale(20),
                    margin: moderateScale(5),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CustomText color={colors.white}>Gamer</CustomText>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <Divider />

          {/* BasicINFO */}
          <View
            style={{
              width: "100%",
              padding: moderateScale(25),
              // paddingRight: scale(5),
            }}
          >
            <CustomText fontSize={14} color={colors.gray} fontFamily={"bold"}>
              Basic Info
            </CustomText>
            <Spacer height={10} />

            <View
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {basicInfo.map((info) => (
                <View
                  style={{
                    // alignItems: "center",
                    width: Dimensions.get("window").width / 2.5,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Ionicons name="ios-location" />
                    <CustomText color={colors.orange}>{info.title}</CustomText>
                  </View>
                  <CustomText marginTop={5} marginLeft={15}>
                    {info.label}{" "}
                  </CustomText>
                  <Spacer height={20} />
                </View>
              ))}
            </View>
          </View>

          {/* ProfileImage */}
          <View style={{ height: Dimensions.get("window").height / 2.3 }}>
            <Image
              resizeMode="cover"
              source={{
                uri: "https://w0.peakpx.com/wallpaper/121/369/HD-wallpaper-beautiful-girl-flower-aesthetic-ultra-girls-flower-girl-style-beautiful-portrait-woman-design-human-background-charming-young-face-female-beauty-model-gerbera-fashion-look-pretty.jpg",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          {/* Fav Food */}
          <Spacer height={20} />
          <PaddingLeft>
            <View
              style={{
                paddingRight: scale(5),
              }}
            >
              <CustomText fontSize={14} color={colors.gray} fontFamily={"bold"}>
                My favorite food is
              </CustomText>
              <View style={{ padding: moderateScale(20) }}>
                <CustomText
                  fontSize={13}
                  color={colors.black}
                  fontFamily={"bold"}
                >
                  Instagram is great when it comes to OOTDs—outfit of the
                  day—and quick style inspirations,
                </CustomText>
              </View>
            </View>
          </PaddingLeft>
          <Divider />

          {/* Education and Career */}
          <View
            style={{
              width: "100%",
              padding: moderateScale(25),
              // paddingRight: scale(5),
            }}
          >
            <CustomText fontSize={14} color={colors.gray} fontFamily={"bold"}>
              Education and Career
            </CustomText>
            <Spacer height={10} />

            <View
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {education.map((info) => (
                <View
                  style={{
                    // alignItems: "center",
                    width: Dimensions.get("window").width / 2.5,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Ionicons name="ios-location" />
                    <CustomText color={colors.orange}>{info.title}</CustomText>
                  </View>
                  <CustomText marginTop={5} marginLeft={15}>
                    {info.label}{" "}
                  </CustomText>
                  <Spacer height={20} />
                </View>
              ))}
            </View>
          </View>
          {/* ProfileImage */}
          <View style={{ height: Dimensions.get("window").height / 2.3 }}>
            <Image
              resizeMode="cover"
              source={{
                uri: "https://w0.peakpx.com/wallpaper/121/369/HD-wallpaper-beautiful-girl-flower-aesthetic-ultra-girls-flower-girl-style-beautiful-portrait-woman-design-human-background-charming-young-face-female-beauty-model-gerbera-fashion-look-pretty.jpg",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          {/* Religiousness */}
          <View
            style={{
              width: "100%",
              padding: moderateScale(25),
              // paddingRight: scale(5),
            }}
          >
            <CustomText fontSize={14} color={colors.gray} fontFamily={"bold"}>
              Religiousness
            </CustomText>
            <Spacer height={10} />

            <View
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {religiousness.map((info) => (
                <View
                  style={{
                    // alignItems: "center",
                    width: Dimensions.get("window").width / 2.5,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Ionicons name="ios-location" />
                    <CustomText color={colors.orange}>{info.title}</CustomText>
                  </View>
                  <CustomText marginTop={5} marginLeft={15}>
                    {info.label}{" "}
                  </CustomText>
                  <Spacer height={20} />
                </View>
              ))}
            </View>
          </View>
          <Divider />
          {/* Characteristics */}
          <View
            style={{
              width: "100%",
              padding: moderateScale(20),
              // paddingRight: scale(5),
            }}
          >
            <CustomText fontSize={14} color={colors.gray} fontFamily={"bold"}>
              Characteristics
            </CustomText>
            <Spacer height={10} />
            <View
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
              }}
            >
              {traits.map((person) => (
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={{
                    paddingVertical: verticalScale(6),
                    paddingHorizontal: scale(10),
                    backgroundColor: colors.primary,
                    borderRadius: moderateScale(20),
                    margin: moderateScale(5),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CustomText color={colors.white}>Gamer</CustomText>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <Divider />
          {/* Partner Expectation */}
          <View
            style={{
              width: "100%",
              padding: moderateScale(25),
              // paddingRight: scale(5),
            }}
          >
            <CustomText fontSize={14} color={colors.gray} fontFamily={"bold"}>
              Religiousness
            </CustomText>
            <Spacer height={10} />

            <View
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {expectation.map((info) => (
                <View
                  style={{
                    // alignItems: "center",
                    width: Dimensions.get("window").width / 2.5,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Ionicons name="ios-location" />
                    <CustomText color={colors.orange}>{info.title}</CustomText>
                  </View>
                  <CustomText marginTop={5} marginLeft={15}>
                    {info.label}{" "}
                  </CustomText>
                  <Spacer height={20} />
                </View>
              ))}
            </View>
          </View>
        </BlurView>
        {/* End */}
      </ScrollView>
    </View>
  );
};

export default Profile;

export const Container = styled(View, {
  width: "100%",
  padding: moderateScale(20),
  paddingBottom: 0,
  flex: 1,
});
const PaddingLeft = styled(View, {
  paddingLeft: scale(25),
});
