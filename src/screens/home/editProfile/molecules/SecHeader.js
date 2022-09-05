import { View, Text } from "react-native";
import CustomText from "../../../../components/CustomText";
import { Spacer } from "../../../../components/Spacer";
import { colors } from "../../../../utils/Colors";

const SecHeader = () => {
  return (
    <>
      <CustomText fontSize={24} color={colors.black} fontFamily={'bold'}>
        Choose Your
      </CustomText>
      <CustomText fontSize={24} color={colors.black} fontFamily={'bold'}>
        Personal Sticker
      </CustomText>
      <Spacer height={10} />
    </>
  );
};

export default SecHeader;
