import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {BG_COLOR, TEXT_COLOR, THEME_COLOR, WHITE} from '../utils/colors';
import {LEARNER_TITLE, SELECT_USER, TUTOR_TITLE} from '../utils/strings';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import BgButton from '../components/BgButton';
import BorderButton from '../components/BorderButton';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'react-native-screens';

const ChoseUserType = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/logobanner.jpeg')}
        style={styles.banner}
      />
      <Text style={styles.heading}>{SELECT_USER}</Text>
      <BgButton
        title={TUTOR_TITLE}
        color={WHITE}
        onClick={() => {
          navigation.navigate('Login', {screen: 'tutor'});
        }}
      />
      <BorderButton
        title={LEARNER_TITLE}
        color={THEME_COLOR}
        onClick={() => {
          navigation.navigate('Login', {
            Screen: 'learners',
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  banner: {
    width: '100%',
    height: '40%',
  },
  heading: {
    color: TEXT_COLOR,
    fontSize: moderateScale(18),
    fontWeight: '700',
    marginTop: moderateVerticalScale(20),
    alignSelf: 'center',
  },
});
export default ChoseUserType;
