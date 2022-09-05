import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  moderateScale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
// import colors from '../../utils/colors';
import { colors } from '../utils/Colors';
// import images from '../assets/icons';
// import CustomText from 'components/CustomText';
import CustomText from './CustomText';

const CustomTextInput = ({eyeClick,password,setEyeClick,error,...props}) => {
  return (
    <View>

    <TouchableOpacity
      onPress={props.onPress}
      disabled={!props.onPress}
      style={[
        {
          width: props.width || '100%',
          height: props.height || verticalScale(40),
          borderRadius: props.borderRadius || moderateScale(20),
          backgroundColor: props.backgroundColor || colors.lightGray,
          marginTop: props.marginTop || verticalScale(0),
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: props.paddingLeft,
        },
      ]}>
      {props.icon ? (
        <Image
          style={{
            width: moderateScale(20),
            height: verticalScale(15),
            tintColor: colors.gray,
          }}
          resizeMode="contain"
          source={props.icon}
        />
      ) : null}
      <TextInput
        style={[
          {
            width: props.inputWidth || password ? '80%' : '89%',
            height: props.inputHeight || '100%',
            marginLeft: props.inputLeftMargin,
            paddingRight:props.paddingRight ||  10
          },
        ]}
        onChangeText={props.onChangeText}
        value={props.value}
        numberOfLines={props.numberOfLines}
        keyboardType={props.keyboardType}
        autoCapitalize="none"
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        secureTextEntry={props.secureTextEntry}
      
      
      />
      {password ? (
        <TouchableOpacity onPress={()=>{
          setEyeClick(!eyeClick)

        }}>
            {/* <Image style={styles.icon} source={eyeClick ? images.eye:images.hiddenEye } /> */}


        </TouchableOpacity>
        
      ) : null}
    </TouchableOpacity>
    {
      error?(
        <CustomText
        label={error }
        childern="*"
        
        fontSize={verticalScale(10)}
        color={colors.red}
        fontWeight="600"
        marginTop={verticalScale(5)}
      />

      ):null
    }
    
    </View>

  );
};
export default CustomTextInput;

const styles = ScaledSheet.create({
  icon: {
    width: '20@s',
    height: '15@vs',
    tintColor: colors.gray,
  },
});
