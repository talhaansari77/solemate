import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Container } from "../profile/Profile";
import { Spacer } from "../../../components/Spacer";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/Colors";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import PictureBox from "./molecules/PictureBox";
import { Divider, ListItem } from "react-native-elements";
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

const genders = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
];

const EditProfile = ({ navigation }) => {
  const [isSelect, setIsSelect] = useState(-1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [familyOrigin, setfamilyOrigin] = useState("");
  const [language, setLanguage] = useState("");
  const [employment, setEmployment] = useState("");
  const [occupation, setOccupation] = useState("");
  const [religion, setReligion] = useState("");
  const [religiousity, setReligiousity] = useState("");
  const [prayerLevel, setPrayerLevel] = useState("");
  const [sector, setSector] = useState("");
  const [martialHistory, setMartialHistory] = useState("");
  const [martialTimming, setMartialTimming] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [feetHeight, setFeetHeight] = useState("");
  const [inchesHeight, setInchesHeight] = useState("");
  const [whatKids, setWhatKids] = useState("");
  const [hasKids, setHasKids] = useState("");
  const [willRelocate, setWillRelocate] = useState("");
  const [jobStatus, setJobStatus] = useState("");
  const [drinking, setDrinking] = useState("");
  const [smoking, setSmoking] = useState("");
  const [personality, setperSonality] = useState([
    {id:1,label:"ckdncdk"}

  ]);

  console.log("whatKids", whatKids);

  const [editLocation, setEditLocation] = useState("");
  console.log("aboutMe", aboutMe);

  const questions = [
    { id: 1, question: "Want Kids", onValue: setWhatKids },
    { id: 2, question: "Has Kids", onValue: setHasKids },
    { id: 3, question: "Willing Relocate", onValue: setWillRelocate },
    { id: 4, question: "Job Status", onValue: setJobStatus },
    { id: 5, question: "Drinking", onValue: setDrinking },
    { id: 6, question: "Smoking", onValue: setSmoking },
  ];

  const [submitError, setSubmitError] = useState({
    firstNameError: "",
    lastNameError: "",
    aboutError: "",
    birthdayError: "",
    familyError: "",
    genderError: "",
    languageError: "",
    heightError: "",
    employmentError: "",
    editlocationError: "",
    occupationError: "",
    religionError: "",
    religiousityError: "",
    prayerLevelError: "",
    sectorError: "",
    martialHistoryError: "",
    martialTimmingError: "",
  });

  const onHandleSubmit = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      aboutMe: aboutMe,
      dob: birthday,
      familyOrigin: familyOrigin,
      language: language,
      gender: gender,
      location: editLocation,
      height: feetHeight + inchesHeight,
      employment: employment,
      occupation: occupation,
      religion: religion,
      religiousity: religiousity,
      prayerLevel: prayerLevel,
      sector: sector,
      whatKids: whatKids,
      hasKids: hasKids,
      willRelocate: willRelocate,
      jobStatus: jobStatus,
      drinking: drinking,
      smoking: smoking,
      martialHistory: martialHistory,
      martialTimming: martialTimming,
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

            <TextArea
              label={"About Me"}
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
            {/* <CustomText
              label={"Personality"}
              color={colors.darkOrange}
              fontFamily={"medium"}
              fontSize={11}
            /> */}

            {personality.map((item) => {
              return <TagsField  title={"Personality"} label={item.label} />;
            })}

            <Spacer height={20} />
            {/* Characteristics */}
            <TagsField title={"Characteristics"} />

            <Spacer height={20} />
            {/* Birthday */}
            <BirthdayField
              birthday={birthday}
              setBirthday={setBirthday}
              submitError={submitError}
              setSubmitError={setSubmitError}
              error={submitError.birthdayError}
            />
            {/* Demographics */}

            <Spacer height={10} />
            <View>
              <CustomText
                label={" Demographics"}
                color={colors.darkOrange}
                fontFamily={"medium"}
                fontSize={12}
              />
              {/* Family Origin */}
              <Spacer height={10} />
              <PH10>
                <InputField
                  label={"Family Origin"}
                  value={familyOrigin}
                  onChangeText={(family) => {
                    setfamilyOrigin(family),
                      setSubmitError({ ...submitError, familyError: "" });
                  }}
                  error={submitError.familyError}
                />
              </PH10>
              {/* Language */}
              <Spacer height={10} />
              <PH10>
                <InputField
                  label={"Language"}
                  value={language}
                  onChangeText={(lang) => {
                    setLanguage(lang),
                      setSubmitError({ ...submitError, languageError: "" });
                  }}
                  error={submitError.languageError}
                />
              </PH10>
              {/* Gender */}
              <Spacer height={10} />
              <PH10>
                <CustomText
                  label={"Gender"}
                  color={colors.darkOrange}
                  fontFamily={"regular"}
                  marginTop={verticalScale(7)}
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
                        gender={gender}
                        setGender={setGender}
                        index={index}
                        setSubmitError={setSubmitError}
                        submitError={submitError}
                        error={submitError.genderError}
                        isSelect={isSelect}
                        setIsSelect={setIsSelect}
                      />
                      <Spacer width={10} />
                    </>
                  ))}
                </View>
                {submitError.genderError ? (
                  <CustomText
                    color={colors.red}
                    fontFamily={"medium"}
                    fontSize={11}
                    marginTop={4}
                  >
                    * {submitError.genderError}
                  </CustomText>
                ) : null}
              </PH10>
              {/* Current Location */}
              <Spacer height={15} />
              <PH10>
                <InputField
                  label={"Current Location"}
                  // arrow={false}
                  value={editLocation}
                  onChangeText={(nam) => {
                    setEditLocation(nam),
                      setSubmitError({ ...submitError, editlocationError: "" });
                  }}
                  error={submitError.editlocationError}
                />
              </PH10>
              {/* Height */}
              <Spacer height={15} />
              <HeightField
                inchesHeight={inchesHeight}
                setInchesHeight={setInchesHeight}
                feetHeight={feetHeight}
                submitError={submitError}
                setSubmitError={setSubmitError}
                setFeetHeight={setFeetHeight}
                error={submitError.heightError}
              />
              {submitError.heightError ? (
                <CustomText
                  color={colors.red}
                  fontFamily={"medium"}
                  fontSize={11}
                  marginTop={4}
                >
                  * {submitError.heightError}
                </CustomText>
              ) : null}
            </View>
            {/* Education & Career */}

            <Spacer height={20} />
            <View>
              <CustomText
                label={"Education and Career"}
                color={colors.darkOrange}
                fontFamily={"medium"}
                fontSize={12}
              />
              {/* Employment */}
              <Spacer height={10} />
              <PH10>
                <InputField
                  label={"Employment"}
                  onChangeText={(emp) => {
                    setEmployment(emp),
                      setSubmitError({ ...submitError, employmentError: "" });
                  }}
                  error={submitError.employmentError}
                />
              </PH10>
              {/* Occupation */}
              <Spacer height={15} />
              <PH10>
                <InputField
                  label={"Occupation"}
                  onChangeText={(occ) => {
                    setOccupation(occ),
                      setSubmitError({ ...submitError, occupationError: "" });
                  }}
                  error={submitError.occupationError}
                />
              </PH10>
            </View>

            {/* Religiousness */}

            <Spacer height={10} />
            <View>
              <CustomText
                label={"Religiousness"}
                color={colors.darkOrange}
                fontFamily={"medium"}
                fontSize={12}
              />
              {/* Religion */}
              <Spacer height={10} />
              <PH10>
                <InputField
                  label={"Religion"}
                  onChangeText={(rel) => {
                    setReligion(rel),
                      setSubmitError({ ...submitError, religionError: "" });
                  }}
                  error={submitError.religionError}
                />
              </PH10>
              {/* Religiousity */}
              <Spacer height={15} />
              <PH10>
                <InputField
                  label={"Religiousity"}
                  onChangeText={(relg) => {
                    setReligiousity(relg),
                      setSubmitError({ ...submitError, religiousityError: "" });
                  }}
                  error={submitError.religiousityError}
                />
              </PH10>
              {/* Prayer Level */}
              <Spacer height={15} />
              <PH10>
                <InputField
                  label={"Prayer Level"}
                  onChangeText={(pry) => {
                    setPrayerLevel(pry),
                      setSubmitError({ ...submitError, prayerLevelError: "" });
                  }}
                  error={submitError.prayerLevelError}
                />
              </PH10>
              {/* Sector */}
              <Spacer height={15} />
              <PH10>
                <InputField
                  label={"Sector"}
                  onChangeText={(sec) => {
                    setSector(sec),
                      setSubmitError({ ...submitError, sectorError: "" });
                  }}
                  error={submitError.sectorError}
                />
              </PH10>
            </View>

            {/* Partner Expectation */}

            <Spacer height={10} />
            <View>
              <CustomText
                label={"Partner Expectation"}
                color={colors.darkOrange}
                fontFamily={"medium"}
                fontSize={12}
              />
              {/* Marital History */}
              <Spacer height={10} />
              <PH10>
                <InputField
                  label={"Marital History"}
                  onChangeText={(marh) => {
                    setMartialHistory(marh),
                      setSubmitError({
                        ...submitError,
                        martialHistoryError: "",
                      });
                  }}
                  error={submitError.martialHistoryError}
                />
              </PH10>
              {/* Marital Timing */}
              <Spacer height={15} />
              <PH10>
                <InputField
                  label={"Marital Timing"}
                  onChangeText={(mart) => {
                    setMartialTimming(mart),
                      setSubmitError({
                        ...submitError,
                        martialTimmingError: "",
                      });
                  }}
                  error={submitError.martialTimmingError}
                />
              </PH10>
            </View>
            <Spacer height={10} />

            {/* Question */}
            {questions.map((q, index) => (
              <SelectBtn
                key={index}
                index={index}
                onValue={q.onValue}
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
      <View style={{ marginBottom: verticalScale(10) }}>
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
  paddingHorizontal: scale(7),
});
