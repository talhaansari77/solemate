import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Container } from "../profile/Profile";
import { Spacer } from "../../../components/Spacer";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/Colors";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import PictureBox from "./molecules/PictureBox";
import { Divider } from "react-native-elements";
import GenderContainer from "../../auth/AdditionInfo/molecules/GenderContainer";
import Header from "./molecules/Header";
import InputField from "./molecules/InputField";
import IceBreakQField from "./molecules/IceBreakQField";
import TagsField from "./molecules/TagsField";
import BirthdayField from "./molecules/BirthdayField";
import SelectBtn from "./molecules/SelectBtn";
import HeightField from "./molecules/HeightField";
import TextArea from "./molecules/TextArea";
import styled from "react-native-styled-components";
import CustomButton from "../../../components/CustomButton";
import { EditValidate } from "./UseEditProfile";

const questions = [
  { id: 1, question: "Want Kids" },
  { id: 2, question: "Has Kids" },
  { id: 3, question: "Willing Relocate" },
  { id: 4, question: "Job Status" },
  { id: 5, question: "Drinking" },
  { id: 6, question: "Smoking" },
];
const genders = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
];

const EditProfile = ({ navigation }) => {
  const [isSelect, setIsSelect] = useState(-1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aboutMe, setAboutMe] = useState("")

  const [submitError, setSubmitError] = useState({
    firstNameError: "",
    lastNameError: "",
    aboutError:""
  });

  // const [questions, setQuestions] = useState([
  //   { id: 1, question: "Want Kids" },
  //   { id: 2, question: "Has Kids" },
  //   { id: 3, question: "Willing Relocate" },
  //   { id: 4, question: "Job Status" },
  //   { id: 5, question: "Drinking" },
  //   { id: 6, question: "Smoking" },
  // ]);
  const onHandleSubmit = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      aboutMe:aboutMe
    };
    const response = EditValidate(data, submitError, setSubmitError);
    if (response) {
      console.log("ok");
    }
  };
  return (
    <Container>
      {/* Header */}
      <Header navigation={navigation} />
      <Divider />
      <Spacer height={10} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PictureBox />
        {/* <Spacer height={10}/> */}
        <View style={{ padding: moderateScale(5) }}>
          <CustomText
            label={"Bio"}
            color={colors.darkOrange}
            fontSize={16}
            fontFamily={"bold"}
            marginTop={verticalScale(5)}
          />
          <Spacer height={10} />

          <View style={{ padding: moderateScale(5) }}>
            {/* First Name */}
            <InputField
              label={"First Name"}
              arrow={false}
              value={firstName}
              onChangeText={(nam) => {
                setFirstName(nam),
                  setSubmitError({ ...submitError, firstNameError: "" });
              }}
              error={submitError.firstNameError}
            />
            <Spacer height={15} />
            {/* Last Name */}
            <InputField
              label={"Last Name"}
              arrow={false}
              value={lastName}
              onChangeText={(last) => {
                setLastName(last),
                  setSubmitError({ ...submitError, lastNameError: "" });
              }}
              error={submitError.lastNameError}
            />
            <Spacer height={15} />
            {/* About Me */}

            <TextArea label={"About Me"} 
              value={aboutMe}
              onChangeText={(about) => {
                setAboutMe(about),
                  setAboutMe({ ...submitError, aboutError: "" });
              }}
              error={submitError.aboutError}
            />

            <Spacer height={20} />
            {/* Ice Breaker Question */}
            <IceBreakQField />
            {/* Personality */}
            <Spacer height={10} />

            <TagsField title={"Personality"} />

            <Spacer height={20} />
            {/* Characteristics */}
            <TagsField title={"Characteristics"} />

            <Spacer height={20} />
            {/* Birthday */}
            <BirthdayField />
            {/* Demographics */}

            <Spacer height={10} />
            <View>
              <CustomText
                label={" Demographics"}
                color={colors.darkOrange}
                fontFamily={"bold"}
                fontSize={11}
              />
              {/* Family Origin */}
              <Spacer height={10} />
              <PH10>
                <InputField label={"Family Origin"} />
              </PH10>
              {/* Language */}
              <Spacer height={10} />
              <PH10>
                <InputField label={"Language"} />
              </PH10>
              {/* Gender */}
              <Spacer height={10} />
              <PH10>
                <CustomText
                  label={"Gender"}
                  color={colors.darkOrange}
                  fontFamily={"bold"}
                  fontSize={11}
                />
                <Spacer height={10} />
                <View
                  style={{
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  {genders.map((g, index) => (
                    <>
                      <GenderContainer
                        txt={g.name}
                        index={index}
                        isSelect={isSelect}
                        setIsSelect={setIsSelect}
                      />
                      <Spacer width={10} />
                    </>
                  ))}
                </View>
              </PH10>
              {/* Current Location */}
              <Spacer height={10} />
              <PH10>
                <InputField label={" Current Location"} />
              </PH10>
              {/* Height */}
              <Spacer height={10} />
              <HeightField />
            </View>
            {/* Education & Career */}

            <Spacer height={10} />
            <View>
              <CustomText
                label={"Education and Career"}
                color={colors.darkOrange}
                fontFamily={"bold"}
                fontSize={11}
              />
              {/* Employment */}
              <Spacer height={10} />
              <PH10>
                <InputField label={"Employment"} />
              </PH10>
              {/* Occupation */}
              <Spacer height={10} />
              <PH10>
                <InputField label={"Occupation"} />
              </PH10>
            </View>

            {/* Religiousness */}

            <Spacer height={10} />
            <View>
              <CustomText
                label={"Religiousness"}
                color={colors.darkOrange}
                fontFamily={"bold"}
                fontSize={11}
              />
              {/* Religion */}
              <Spacer height={10} />
              <PH10>
                <InputField label={"Religion"} />
              </PH10>
              {/* Religiousity */}
              <Spacer height={10} />
              <PH10>
                <InputField label={"Religiousity"} />
              </PH10>
              {/* Prayer Level */}
              <Spacer height={10} />
              <PH10>
                <InputField label={"Prayer Level"} />
              </PH10>
              {/* Sector */}
              <Spacer height={10} />
              <PH10>
                <InputField label={"Sector"} />
              </PH10>
            </View>

            {/* Partner Expectation */}

            <Spacer height={10} />
            <View>
              <CustomText
                label={"Partner Expectation"}
                color={colors.darkOrange}
                fontFamily={"bold"}
                fontSize={11}
              />
              {/* Marital History */}
              <Spacer height={10} />
              <PH10>
                <InputField label={"Marital History"} />
              </PH10>
              {/* Marital Timing */}
              <Spacer height={10} />
              <PH10>
                <InputField label={"Marital Timing"} />
              </PH10>
            </View>

            {/* Question */}
            {questions.map((q, index) => (
              <SelectBtn
                key={index}
                index={index}
                txt1={"Yes"}
                txt2={"No"}
                label={q.question}
              />
            ))}

            {/* End Container */}
            <Spacer height={40} />
          

            <Spacer height={10} />
          </View>
        </View>
      </ScrollView>
      <View style={{marginBottom:verticalScale(10)}}>
              <CustomButton
                title="Save"
                onPress={() => {
                  onHandleSubmit();
                }}
                backgroundColor={colors.darkOrange}
              />
            </View>
    </Container>
  );
};

export default EditProfile;

const PH10 = styled(View, {
  paddingHorizontal: scale(10),
});
