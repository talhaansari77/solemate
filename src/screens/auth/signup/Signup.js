import { View, Text } from "react-native";
import React, { useState } from "react";
import commonStyles from "../../../utils/CommonStyles";
import SignupWithCon from "./SignupWithCon";
import CustomTextInput from "../../../components/CustomTextInput";
import { Spacer } from "../../../components/Spacer";
import { verticalScale,moderateScale } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";
import ConditionPassCon from "./molecules/ConditionPassCon";
import CustomButton from "../../../components/CustomButton";
import { colors } from "../../../utils/Colors";
import { styles } from "./styles";

const passData = [
  { id: 1, txt1: "+ 8 characters ", txt2: "+ 1 symbols" },
  { id: 2, txt1: "+ 1 number", txt2: " get our password" },
];

const Signup = ({navigation}) => {
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
      <Spacer height={verticalScale(30)} />
      <CustomText
        label="Sign up"
        fontFamily="bold"
        // color={colors.facebookBlue}
        fontSize={verticalScale(15)}
      />
      <Spacer height={verticalScale(15)} />

      <SignupWithCon />
      <Spacer height={verticalScale(20)} />

      <CustomTextInput withLabel="Email adress" placeholder={'example@yourmail.com'} />
      <Spacer height={verticalScale(20)} />

      <CustomTextInput
        withLabel="Password"
        password
        secureTextEntry={eyeClick}
        eyeClick={eyeClick}
        setEyeClick={setEyeClick}
        placeholder={'password'}
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


      <View style={{ alignItems: "center", padding: 10,flex:1,justifyContent:"flex-end" }}>
        <CustomButton
          title="Continue"
          fontFamily="bold"
          // width="90%"
          opacity={0.4}
          color={colors.white}
          backgroundColor={colors.primary}
          height={verticalScale(45)}
          borderRadius={moderateScale(15)}
          onPress={() => {
            navigation.navigate("MainStack")
            // onHandleSumbit();
          }}
        />
          <View  style={styles.bottomConatiner}>
            <CustomText
              label="Already have an account?"
              fontFamily="regular"
              fontSize={verticalScale(12)}
            />
            <CustomText
              label="Login"
              fontFamily="bold"
              color={colors.black}
              marginLeft={verticalScale(5)}
              fontSize={verticalScale(12)}
              onPress={()=>navigation.navigate("Login")}
            />
          </View>
    
      </View>
    </View>
  );
};

export default Signup;
