import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TEXT_COLOR, THEME_COLOR} from '../utils/colors';
import {SPLASH_TAGLINE} from '../utils/strings';
import {moderateScale} from 'react-native-size-matters';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ChoseUserType');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../images/logoImage.jpg')} style={styles.logo} />
      <Text style={styles.title}>{SPLASH_TAGLINE}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME_COLOR,
  },
  logo: {
    height: '30%',
    width: '50%',
  },
  title: {
    fontWeight: '600',
    fontSize: moderateScale(16),
    color: TEXT_COLOR,
  },
});
export default Splash;
