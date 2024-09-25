import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

function WelcomePage() {
  return (
    <ImageBackground
      source={require('../assets/baiquan1.png')}
      style={styles.backgroundImage}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/yui2.png')} style={styles.logo} />
        <Text>Popular Anime</Text>
      </View>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  logoContainer: {
    position: 'absolute',
    top: 80,
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
});

export default WelcomePage;
