import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {TEXT_COLOR, THEME_COLOR} from '../utils/colors';

const BorderButton = ({bg, title, onClick, color}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, {borderColor: bg ? bg : THEME_COLOR}]}
      onPress={onClick}>
      <Text style={[styles.title, {color: color ? color : TEXT_COLOR}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '90%',
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(30),
    borderRadius: moderateScale(10),
    alignSelf: 'center',
    borderWidth: 1,
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});
export default BorderButton;
