import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomModal from '../../../../components/CustomModal';
import commonStyles from '../../../../utils/CommonStyles';
import { colors } from '../../../../utils/Colors';
import CustomTextInput from '../../../../components/CustomTextInput';
import CustomButton from '../../../../components/CustomButton';
import { Spacer } from '../../../../components/Spacer';
import { verticalScale,moderateScale } from 'react-native-size-matters';
const PersonalityModal = ({personalityModal, setPersonalityModal,addMore,setAddMore}) => {

    // isVisible={discountModal}
    // onDisable={() => {
    //   setDiscountModal(false);

    //   setDiscountCode("");
    // }}
    // height={verticalScale(170)}
    // width={moderateScale(300)}
    // borderRadius={moderateScale(10)}
  return (
    <CustomModal
    transparent={true}
    isVisible={personalityModal}
    onDisable={() => {
      setPersonalityModal(false);

    }}
     height={verticalScale(170)}
    width={moderateScale(300)}
    borderRadius={moderateScale(10)}
   
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <CustomTextInput
          withLabel={"Add Personality"}
          height={52}
          value={addMore}
          onChangeText={(add) => setAddMore(add)}
          placeholder="Personality"
          onPress={() => {
            // {addItems}
            // console.log(addItems, "addItems");
          }}
        />

        <Spacer height={verticalScale(20)} />

        <CustomButton
          onPress={() => onSavePersonality()}
          title="Save"
        />

        <Spacer height={verticalScale(10)} />

        <CustomButton
          onPress={() => setPersonalityModal(!personalityModal)}
          title="Cancel"
          color={colors.black}
          backgroundColor={colors.white}
          borderColor={colors.black}
          borderWidth={0.5}
        />
      </View>
    </View>
  </CustomModal>
  )
}

export default PersonalityModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
      },
      modalView: {
        margin: 20,
        width: "90%",
        height: "35%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },

})