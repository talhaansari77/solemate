import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ProfileNav from "../profile/molecules/ProfileNav";
import commonStyles from "../../../utils/CommonStyles";
import { styles } from "./styles";
import CustomText from "../../../components/CustomText";
import { verticalScale, moderateScale } from "react-native-size-matters";
import { Spacer } from "../../../components/Spacer";
import { colors } from "../../../utils/Colors";
import HeaderConatiner from "./request/Molecules/HeaderConatiner";
import {
  Feather,
  MaterialCommunityIcons,
  SimpleLineIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { Divider } from "react-native-elements";
import { ChatBody } from "../../../components/ChatBody";
import CustomModal from "../../../components/CustomModal";
import SettingModal from "./Molecules/SettingModal";
import CustomButton from "../../../components/CustomButton";

const Chat = ({ navigation }) => {
  const [textMessage, setTextMessage] = useState("");
  const [settingModal, setSettingModal] = useState(false);
  return (
    <SafeAreaView style={commonStyles.commonMain}>
      <View style={styles.mainContainer}>
        <HeaderConatiner
          label="Samer"
          back={() => {
            navigation.goBack();
          }}
          setting={() => {
            setSettingModal(!settingModal);
          }}
        />

        <Spacer height={verticalScale(8)} />
        <View style={styles.innerMainContainer}>
          <ChatBody />
        </View>

        <View style={styles.textInputContainer}>
          <View style={styles.addContainer}>
            <TouchableOpacity activeOpacity={0.6}>
              <Feather
                name="plus"
                size={moderateScale(18)}
                color={colors.white}
              />
            </TouchableOpacity>
          </View>
          <View style={{ width: verticalScale(20) }} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.textInputContainer1}>
              <TextInput
                placeholder="message"
                placeholderTextColor="#667085"
                style={{
                  fontSize: verticalScale(12),
                  width: "90%",
                  color: colors.black,
                  paddingHorizontal: verticalScale(10),
                }}
                value={textMessage}
                onChangeText={(value) => setTextMessage(value)}
              />
              <TouchableOpacity activeOpacity={0.6}>
                <SimpleLineIcons
                  name="emotsmile"
                  size={moderateScale(25)}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </View>
            <View style={{ width: verticalScale(5) }} />
            {textMessage ? (
              <TouchableOpacity activeOpacity={0.6}>
                <Feather
                  name="send"
                  size={moderateScale(25)}
                  color={colors.primary}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity activeOpacity={0.6}>
                <MaterialCommunityIcons
                  name="microphone-outline"
                  size={moderateScale(30)}
                  color={colors.primary}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {settingModal ? (
          <View>
            <View
              style={{
                width: "100%",
                height: verticalScale(150),
                backgroundColor: colors.white,
                top: verticalScale(-78),
                alignItems: "center",
              }}
            >
              <View
                style={{
                  paddingVertical: 30,
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <CustomButton
                  title={"View Samer's Profile"}
                  fontSize={verticalScale(18)}
                  borderRadius={25}
                  width="90%"
                  fontFamily="bold"
                />
              </View>
              <View style={{ width: "100%", alignItems: "center" }}>
                <CustomButton
                  backgroundColor={colors.darkOrange}
                  borderRadius={25}
                  fontSize={verticalScale(18)}
                  fontFamily="bold"
                  width="90%"
                  title={"End Conversation"}
                />
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: "70%",
                backgroundColor: colors.black,
                opacity: 0.1,
                marginTop: verticalScale(-80),
              }}
            ></View>
          </View>
        ) : (
          <></>
        )}

        {/* <SettingModal  settingModal={settingModal}setSettingModal={setSettingModal}/> */}
      </View>
    </SafeAreaView>
  );
};

export default Chat;
