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
  TextInput,
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
import { Divider } from "react-native-elements";
import CustomTextInput from "../../../components/CustomTextInput";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import GenderContainer from "../../auth/AdditionInfo/molecules/GenderContainer";

const questions = [
  { id: 1, question: "Want Kids" },
  { id: 2, question: "Has Kids" },
  { id: 3, question: "Willing Relocate" },
  { id: 4, question: "Job Status" },
  { id: 5, question: "Drinking" },
  { id: 6, question: "Smoking" },
];

const EditProfile = () => {
  return (
    <Container>
      {/* Header */}
      <Spacer height={15} />
      <ProfileNav
        title={"Edit Profile"}
        RightSide={() => (
          <TouchableOpacity activeOpacity={0.6}>
            <CustomText fontSize={13} color={colors.black} fontFamily={"bold"}>
              Cancel
            </CustomText>
          </TouchableOpacity>
        )}
        LeftSide={() => (
          <TouchableOpacity activeOpacity={0.6}>
            <CustomText fontSize={13} color={colors.black} fontFamily={"bold"}>
              Save
            </CustomText>
          </TouchableOpacity>
        )}
        Center={() => (
          <CustomText fontSize={16} color={colors.black} fontFamily={"bold"}>
            Edit Profile
          </CustomText>
        )}
      />
      <Spacer height={10} />
      <Divider />
      <Spacer height={10} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <PictureBox />
        {/* <Spacer height={10}/> */}
        <View style={{ padding: moderateScale(15) }}>
          <CustomText color={colors.orange} fontSize={16} fontFamily={"bold"}>
            Bio
          </CustomText>
          <View style={{ padding: moderateScale(5) }}>
            {/* First Name */}
            <View>
              <CustomText
                color={colors.orange}
                fontFamily={"bold"}
                fontSize={11}
              >
                First Name
              </CustomText>
              <Spacer height={10} />
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  paddingVertical: verticalScale(5),
                }}
              />
            </View>
            <Spacer height={10} />
            {/* Last Name */}
            <View>
              <CustomText
                color={colors.orange}
                fontFamily={"bold"}
                fontSize={11}
              >
                Last Name
              </CustomText>
              <Spacer height={10} />
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  paddingVertical: verticalScale(5),
                }}
              />
            </View>
            <Spacer height={10} />
            {/* About Me */}
            <View>
              <CustomText
                color={colors.orange}
                fontFamily={"bold"}
                fontSize={11}
              >
                About Me
              </CustomText>
              <Spacer height={10} />
              <TextInput
                multiline={true}
                numberOfLines={5}
                
                style={{
                  borderWidth: 1,
                  padding: moderateScale(5),
                  borderRadius: moderateScale(10),
                  color:colors.gray
                }}
              />
            </View>
            <Spacer height={10} />
            {/* Ice Breaker Question */}
            <View>
              <CustomText
                color={colors.orange}
                fontFamily={"bold"}
                fontSize={11}
              >
                Ice Breaker Question
              </CustomText>
              <Spacer height={10} />

              <View>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    borderWidth: 1,
                    padding: moderateScale(15),
                    borderRadius: moderateScale(10),
                    borderStyle: "dashed",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <CustomText fontSize={12}>
                      The Last Time I Cried Was!
                    </CustomText>
                    <CustomText color={colors.gray}>
                      The Last Time I Cried My Heat Out!
                    </CustomText>
                  </View>
                  <View
                    style={{
                      backgroundColor: colors.primary,
                      height: 20,
                      width: 20,
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesomeIcon name="plus" color={colors.white} />
                  </View>
                </TouchableOpacity>
                <Spacer height={10} />

                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    borderWidth: 1,
                    padding: moderateScale(15),
                    borderRadius: moderateScale(10),
                    borderStyle: "dashed",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <CustomText fontSize={12}>
                      The Last Time I Cried Was!
                    </CustomText>
                    <CustomText color={colors.gray}>
                      The Last Time I Cried My Heat Out!
                    </CustomText>
                  </View>
                  <View
                    style={{
                      backgroundColor: colors.primary,
                      height: 20,
                      width: 20,
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesomeIcon name="plus" color={colors.white} />
                  </View>
                </TouchableOpacity>
                <Spacer height={10} />

                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    borderWidth: 1,
                    padding: moderateScale(15),
                    borderRadius: moderateScale(10),
                    borderStyle: "dashed",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <CustomText fontSize={12}>
                      The Last Time I Cried Was!
                    </CustomText>
                    <CustomText color={colors.gray}>
                      The Last Time I Cried My Heat Out!
                    </CustomText>
                  </View>
                  <View
                    style={{
                      backgroundColor: colors.primary,
                      height: 20,
                      width: 20,
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesomeIcon name="plus" color={colors.white} />
                  </View>
                </TouchableOpacity>
                <Spacer height={10} />
              </View>
            </View>
            {/* Personality */}
            <View>
              <CustomText
                color={colors.orange}
                fontFamily={"bold"}
                fontSize={11}
              >
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
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={{
                    paddingVertical: verticalScale(6),
                    paddingHorizontal: scale(10),
                    backgroundColor: colors.primary,
                    borderRadius: moderateScale(20),

                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CustomText color={colors.white}>Gamer</CustomText>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    paddingVertical: verticalScale(6),
                    paddingHorizontal: scale(10),
                    borderRadius: moderateScale(15),
                    borderStyle: "dashed",
                    borderColor: colors.primary,
                    borderWidth: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: scale(5),
                  }}
                >
                  <CustomText color={colors.primary} fontFamily={"bold"}>
                    Add More
                  </CustomText>
                  <Spacer width={5} />
                  <View
                    style={{
                      backgroundColor: colors.primary,
                      height: 20,
                      width: 20,
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesomeIcon name="plus" color={colors.white} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <Spacer height={10} />
            {/* Characteristics */}
            <View>
              <CustomText
                color={colors.orange}
                fontFamily={"bold"}
                fontSize={11}
              >
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
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={{
                    paddingVertical: verticalScale(6),
                    paddingHorizontal: scale(20),
                    backgroundColor: colors.primary,
                    borderRadius: moderateScale(20),

                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CustomText color={colors.white}>Honest</CustomText>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    paddingVertical: verticalScale(6),
                    paddingHorizontal: scale(20),
                    borderRadius: moderateScale(15),
                    borderStyle: "dashed",
                    borderColor: colors.primary,
                    borderWidth: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: scale(5),
                  }}
                >
                  <CustomText color={colors.primary} fontFamily={"bold"}>
                    Add More
                  </CustomText>
                  <Spacer width={5} />
                  <View
                    style={{
                      backgroundColor: colors.primary,
                      height: 20,
                      width: 20,
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesomeIcon name="plus" color={colors.white} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <Spacer height={10} />
            {/* Birthday */}
            <View>
              <CustomText
                color={colors.orange}
                fontFamily={"bold"}
                fontSize={11}
              >
                Birthday
              </CustomText>
              <Spacer height={10} />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingHorizontal: scale(10),
                  // justifyContent: "space-between",
                }}
              >
                <View style={{ flex: 5 }}>
                  <CustomText>Month</CustomText>
                  <View
                    style={{
                      borderWidth: 1,
                      padding: moderateScale(2),
                      borderRadius: moderateScale(10),
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <TextInput style={{ width: "70%" }} />
                    <View>
                      <FontAwesomeIcon name="chevron-down" />
                    </View>
                  </View>
                </View>
                <Spacer width={10} />
                <View style={{ flex: 2 }}>
                  <CustomText>Day</CustomText>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      padding: moderateScale(2),
                      borderRadius: moderateScale(10),
                    }}
                  />
                </View>
                <Spacer width={10} />
                <View style={{ flex: 3 }}>
                  <CustomText>Year</CustomText>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      padding: moderateScale(2),
                      borderRadius: moderateScale(10),
                    }}
                  />
                </View>
              </View>
            </View>
            {/* Demographics */}

            <Spacer height={10} />
            <View>
              <CustomText
                color={colors.orange}
                fontFamily={"bold"}
                fontSize={11}
              >
                Demographics
              </CustomText>
              {/* Family Origin */}
              <Spacer height={10} />
              <View style={{ paddingHorizontal: scale(10) }}>
                <CustomText
                  color={colors.orange}
                  fontFamily={"bold"}
                  fontSize={11}
                >
                  Family Origin
                </CustomText>
                <View
                  style={{
                    borderBottomWidth: 1,
                    paddingVertical: verticalScale(5),
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TextInput style={{ width: "80%" }} />
                  <View>
                    <FontAwesomeIcon name="chevron-right" />
                  </View>
                </View>
              </View>
              {/* Language */}
              <Spacer height={10} />
              <View style={{ paddingHorizontal: scale(10) }}>
                <CustomText
                  color={colors.orange}
                  fontFamily={"bold"}
                  fontSize={11}
                >
                  Language
                </CustomText>
                <View
                  style={{
                    borderBottomWidth: 1,
                    paddingVertical: verticalScale(5),
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TextInput style={{ width: "80%" }} />
                  <View>
                    <FontAwesomeIcon name="chevron-right" />
                  </View>
                </View>
              </View>
              {/* Gender */}
              <Spacer height={10} />
              <View style={{ paddingHorizontal: scale(10) }}>
                <CustomText
                  color={colors.orange}
                  fontFamily={"bold"}
                  fontSize={11}
                >
                  Gender
                </CustomText>
                <Spacer height={10} />
                <View
                  style={{
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <GenderContainer txt={"Male"} index={"Male"} />
                  <Spacer width={10} />
                  <GenderContainer txt={"Female"} index={"Female"} />
                </View>
              </View>
              {/* Current Location */}
              <Spacer height={10} />
              <View style={{ paddingHorizontal: scale(10) }}>
                <CustomText
                  color={colors.orange}
                  fontFamily={"bold"}
                  fontSize={11}
                >
                  Current Location
                </CustomText>
                <View
                  style={{
                    borderBottomWidth: 1,
                    paddingVertical: verticalScale(5),
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TextInput style={{ width: "80%" }} />
                  <View>
                    <FontAwesomeIcon name="chevron-right" />
                  </View>
                </View>
              </View>
              {/* Height */}
              <Spacer height={10} />
              <View style={{ paddingHorizontal: scale(10) }}>
                <CustomText
                  color={colors.orange}
                  fontFamily={"bold"}
                  fontSize={11}
                >
                  Height
                </CustomText>
                <Spacer height={10} />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingHorizontal: scale(20),
                    // justifyContent: "space-between",
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <CustomText>Feet</CustomText>
                    <View
                      style={{
                        borderWidth: 1,
                        padding: moderateScale(2),
                        borderRadius: moderateScale(10),
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View style={{ width: "80%", alignItems: "center" }}>
                        <TextInput
                          placeholder={"6"}
                          style={{ marginLeft: scale(20) }}
                        />
                      </View>
                      <View>
                        <FontAwesomeIcon name="chevron-down" />
                      </View>
                    </View>
                  </View>

                  <Spacer width={10} />
                  <View style={{ flex: 1 }}>
                    <CustomText>Inches</CustomText>
                    <View
                      style={{
                        borderWidth: 1,
                        padding: moderateScale(2),
                        borderRadius: moderateScale(10),
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View style={{ width: "80%", alignItems: "center" }}>
                        <TextInput
                          placeholder={"6 "}
                          style={{ marginLeft: scale(20) }}
                        />
                      </View>
                      <View>
                        <FontAwesomeIcon name="chevron-down" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/* Education & Career */}

            <Spacer height={10} />
            <View>
              <CustomText
                color={colors.orange}
                fontFamily={"bold"}
                fontSize={11}
              >
                Education and Career
              </CustomText>
              {/* Employment */}
              <Spacer height={10} />
              <View style={{ paddingHorizontal: scale(10) }}>
                <CustomText
                  color={colors.orange}
                  fontFamily={"bold"}
                  fontSize={11}
                >
                  Employment
                </CustomText>
                <View
                  style={{
                    borderBottomWidth: 1,
                    paddingVertical: verticalScale(5),
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TextInput style={{ width: "80%" }} />
                  <View>
                    <FontAwesomeIcon name="chevron-right" />
                  </View>
                </View>
              </View>
              {/* Occupation */}
              <Spacer height={10} />
              <View style={{ paddingHorizontal: scale(10) }}>
                <CustomText
                  color={colors.orange}
                  fontFamily={"bold"}
                  fontSize={11}
                >
                  Occupation
                </CustomText>
                <View
                  style={{
                    borderBottomWidth: 1,
                    paddingVertical: verticalScale(5),
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TextInput style={{ width: "80%" }} />
                  <View>
                    <FontAwesomeIcon name="chevron-right" />
                  </View>
                </View>
              </View>
            </View>

            {/* Religiousness */}

            <Spacer height={10} />
            <View>
              <CustomText
                color={colors.orange}
                fontFamily={"bold"}
                fontSize={11}
              >
                Religiousness
              </CustomText>
              {/* Religion */}
              <Spacer height={10} />
              <View style={{ paddingHorizontal: scale(10) }}>
                <CustomText
                  color={colors.orange}
                  fontFamily={"bold"}
                  fontSize={11}
                >
                  Religion
                </CustomText>
                <View
                  style={{
                    borderBottomWidth: 1,
                    paddingVertical: verticalScale(5),
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TextInput style={{ width: "80%" }} />
                  <View>
                    <FontAwesomeIcon name="chevron-right" />
                  </View>
                </View>
              </View>
              {/* Religiousity */}
              <Spacer height={10} />
              <View style={{ paddingHorizontal: scale(10) }}>
                <CustomText
                  color={colors.orange}
                  fontFamily={"bold"}
                  fontSize={11}
                >
                  Religiousity
                </CustomText>
                <View
                  style={{
                    borderBottomWidth: 1,
                    paddingVertical: verticalScale(5),
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TextInput style={{ width: "80%" }} />
                  <View>
                    <FontAwesomeIcon name="chevron-right" />
                  </View>
                </View>
              </View>
              {/* Prayer Level */}
              <Spacer height={10} />
              <View style={{ paddingHorizontal: scale(10) }}>
                <CustomText
                  color={colors.orange}
                  fontFamily={"bold"}
                  fontSize={11}
                >
                  Prayer Level
                </CustomText>
                <View
                  style={{
                    borderBottomWidth: 1,
                    paddingVertical: verticalScale(5),
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TextInput style={{ width: "80%" }} />
                  <View>
                    <FontAwesomeIcon name="chevron-right" />
                  </View>
                </View>
              </View>
              {/* Sector */}
              <Spacer height={10} />
              <View style={{ paddingHorizontal: scale(10) }}>
                <CustomText
                  color={colors.orange}
                  fontFamily={"bold"}
                  fontSize={11}
                >
                  Sector
                </CustomText>
                <View
                  style={{
                    borderBottomWidth: 1,
                    paddingVertical: verticalScale(5),
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TextInput style={{ width: "80%" }} />
                  <View>
                    <FontAwesomeIcon name="chevron-right" />
                  </View>
                </View>
              </View>
            </View>

            {/* Partner Expectation */}

            <Spacer height={10} />
            <View>
              <CustomText
                color={colors.orange}
                fontFamily={"bold"}
                fontSize={11}
              >
                Partner Expectation
              </CustomText>
              {/* Marital History */}
              <Spacer height={10} />
              <View style={{ paddingHorizontal: scale(10) }}>
                <CustomText
                  color={colors.orange}
                  fontFamily={"bold"}
                  fontSize={11}
                >
                  Marital History
                </CustomText>
                <View
                  style={{
                    borderBottomWidth: 1,
                    paddingVertical: verticalScale(5),
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TextInput style={{ width: "80%" }} />
                  <View>
                    <FontAwesomeIcon name="chevron-right" />
                  </View>
                </View>
              </View>
              {/* Marital Timing */}
              <Spacer height={10} />
              <View style={{ paddingHorizontal: scale(10) }}>
                <CustomText
                  color={colors.orange}
                  fontFamily={"bold"}
                  fontSize={11}
                >
                  Marital Timing
                </CustomText>
                <View
                  style={{
                    borderBottomWidth: 1,
                    paddingVertical: verticalScale(5),
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TextInput style={{ width: "80%" }} />
                  <View>
                    <FontAwesomeIcon name="chevron-right" />
                  </View>
                </View>
              </View>
            </View>

            {/* Question */}
            {questions.map((q) => (
              <>
                <Spacer height={10} />
                <View style={{}}>
                  <CustomText
                    color={colors.orange}
                    fontFamily={"bold"}
                    fontSize={11}
                  >
                    {q.question}
                  </CustomText>
                  <Spacer height={10} />
                  <View
                    style={{
                      justifyContent: "center",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <GenderContainer txt={"Yes"} index={"Yes"} />
                    <Spacer width={10} />
                    <GenderContainer txt={"No"} index={"No"} />
                  </View>
                </View>
              </>
            ))}

            {/* End Container */}
          </View>
        </View>
      </ScrollView>
      {/* <Spacer height={30} />
        <SecHeader />
        <StickerBox />
        <Spacer height={20} />
        <Foot /> */}
    </Container>
  );
};

export default EditProfile;
