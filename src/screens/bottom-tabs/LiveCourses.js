import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {BG_COLOR, THEME_COLOR, WHITE} from '../../utils/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const LiveCourses = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.AddBtn}
        onPress={() => {
          navigation.navigate('AddCourse');
        }}>
        <Image
          source={require('../../images/plus.png')}
          style={styles.AddIcon}
        />
        <Text style={styles.AddText}>Add New Course</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  AddBtn: {
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: moderateScale(20),
    right: moderateScale(20),
    backgroundColor: THEME_COLOR,
    borderRadius: moderateScale(30),
    flexDirection: 'row',
    paddingRight: moderateScale(10),
    paddingLeft: moderateScale(10),
  },
  AddIcon: {
    width: scale(20),
    height: scale(20),
    tintColor: WHITE,
  },
  AddText: {
    color: WHITE,
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginLeft: moderateScale(10),
  },
});

export default LiveCourses;
