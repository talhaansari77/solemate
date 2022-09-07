import React, { useState } from "react";
import commonStyles from "../../../utils/CommonStyles";
import SignupWithCon from "./SignupWithCon";
import CustomTextInput from "../../../components/CustomTextInput";
import { Spacer } from "../../../components/Spacer";
import { moderateScale, verticalScale } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";
import ConditionPassCon from "./molecules/ConditionPassCon";
import { View } from "react-native";
import CustomButton from "../../../components/CustomButton";
import { colors } from "../../../utils/Colors";
import { styles } from "../ViewPager/styles";

const passData = [
  { id: 1, txt1: "+ 8 characters ", txt2: "+ 1 symbols" },
  { id: 2, txt1: "+ 1 number", txt2: " get our password" },
];
const Login = ({navigation}) => {
  const [eyeClick, setEyeClick] = useState(true);

  return (
    <View
      style={[
        commonStyles.commonMain,
        {
          padding: 25,
        },
      ]}
    >
      <Spacer height={verticalScale(35)} />
      <CustomText
        label="Login"
        fontFamily="bold"
        // color={colors.facebookBlue}
        fontSize={verticalScale(15)}
      />
      <Spacer height={verticalScale(20)} />

      <SignupWithCon />
      <Spacer height={verticalScale(20)} />

      <CustomTextInput
        withLabel="Email adress"
        placeholder={"example@yourmail.com"}
      />
      <Spacer height={verticalScale(20)} />

      <CustomTextInput
        withLabel="Password"
        password
        secureTextEntry={eyeClick}
        eyeClick={eyeClick}
        setEyeClick={setEyeClick}
        placeholder={"password"}
      />
      <Spacer height={verticalScale(20)} />
      <View
        style={{
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {passData?.map((item) => {
          return <ConditionPassCon txt1={item.txt1} txt2={item.txt2} />;
        })}
      </View>

      {/* <View style={{ flex: 1, alignItems: "center" }}> */}
        <View
          style={{
            alignSelf: "center",
            padding: 10,
            position: "absolute",
            bottom: verticalScale(40),
            width:"100%"
          }}
        >
          <CustomButton
            title="Continue"
            fontFamily="bold"
            width="100%"
            opacity={0.4}
            color={colors.white}
            marginTop={verticalScale(10)}
            height={verticalScale(45)}
            borderRadius={moderateScale(15)}
            onPress={() => {
              onHandleSumbit();
            }}
          />

          <View style={styles.bottomConatiner}>
            <CustomText
              label="Already have an account?"
              fontFamily="regular"
              fontSize={verticalScale(12)}
            />
            <CustomText
              label="Sign up"
              fontFamily="bold"
              color={colors.black}
              marginLeft={verticalScale(5)}
              fontSize={verticalScale(12)}
              onPress={()=>navigation.navigate("ViewPager")}
            />
          {/* </View> */}
        </View>
      </View>
    </View>
  );
};

export default Login;
