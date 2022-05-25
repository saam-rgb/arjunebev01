import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Colors, Images,} from '../constants';
import {Display} from '../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Signin');
    }, 2400);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_RED}
        translucenyat
      />
      <Image
        source={Images.WINEGLASS}
        resizeMode="cover"
        style={styles.image}
      />
      <Text style={styles.titleText}>E - B E V</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_RED,
  },
  image: {
    height: Display.setHeight(60),
    width: Display.setWidth(80),
  },
  titleText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 45,
    // fontFamily: Fonts.POPPINS_EXTRA_LIGHT,
  },
});
