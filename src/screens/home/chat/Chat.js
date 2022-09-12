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
import {
  Feather,
  MaterialCommunityIcons,
  SimpleLineIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { Divider } from "react-native-elements";
import { ChatBody } from "../../../components/ChatBody";

const Chat = () => {
  const [textMessage, setTextMessage] = useState("");
  return (
    <SafeAreaView style={commonStyles.commonMain}>
      <View style={styles.mainContainer}>
        <View style={styles.Padding}>
          <ProfileNav
            RightSide={() => (
              <TouchableOpacity
                activeOpacity={0.6}
                style={{ alignItems: "flex-end", width: "100%" }}
              >
                <Feather
                  name="plus"
                  size={moderateScale(25)}
                  color={colors.black}
                />
              </TouchableOpacity>
            )}
          />
          <CustomText
            label="Chandler"
            fontFamily="bold"
            fontSize={verticalScale(15)}
            marginLeft={verticalScale(5)}
          />
        </View>
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
      </View>
    </SafeAreaView>
  );
};

export default Chat;
