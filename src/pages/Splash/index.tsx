import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {NaviProps} from '../type.ts';

function SplashPages({navigation}: NaviProps) {
  setTimeout(() => {
    navigation.navigate('SignIn');
  }, 2000);
  return (
    <>
      <ImageBackground
        source={require('../../assets/baiquan1.png')}
        style={styles.background}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/yui2.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Ecommerce APP</Text>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    top: 80,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default SplashPages;
