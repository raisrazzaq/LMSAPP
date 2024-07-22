import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {BG_COLOR, TEXT_COLOR, WHITE} from '../../utils/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {LOGIN_WITH, USER_WITH} from '../../utils/strings';
import {useNavigation, useRoute} from '@react-navigation/native';

const Login = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const handleLoginPress = () => {
    if (route.params && route.params.screen == 'tutor') {
      navigation.navigate('TutorHome');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../images/baner.jpeg')} style={styles.baner} />
      <Text style={styles.heading}>{USER_WITH}</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLoginPress}>
        <Image
          source={require('../../images/google.png')}
          style={styles.googlelogo}
        />
        <Text style={styles.btnText}>{LOGIN_WITH}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  baner: {
    width: '100%',
    height: verticalScale(200),
  },
  heading: {
    color: TEXT_COLOR,
    fontSize: moderateScale(18),
    fontWeight: '500',
    marginLeft: moderateScale(20),
    marginTop: moderateScale(20),
  },
  loginBtn: {
    width: '90%',
    height: verticalScale(50),
    alignSelf: 'center',
    backgroundColor: WHITE,
    elevation: 5,
    marginTop: moderateScale(20),
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    justifyContent: 'center',
    gap:20
  },
  googlelogo: {
    height: scale(24),
    width: scale(24),
  },
  btnText: {
    fontSize: moderateScale(18),
    marginLeft: moderateScale(10),
    color: TEXT_COLOR,
  },
});

export default Login;
