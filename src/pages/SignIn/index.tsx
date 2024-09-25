import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import RoundButton from '../../component/RoundButton.tsx';
import MediaButton from '../../component/MediaButton.tsx';
import {NaviProps} from '../type.ts';

function SignInPage({navigation}: NaviProps) {
  return (
    <View style={styles.signInContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/baiquan2.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.resContainer}>
        <Text style={styles.helloText}>Hello</Text>
        <Text style={styles.welcomeText}>Welcome to our Ecommerce APP</Text>
        <View style={styles.button}>
          <RoundButton
            label="Login"
            onPress={() => navigation.navigate('LoginIn')}
            width={100}
          />
          <RoundButton
            label="Sign Up"
            border={true}
            onPress={() => navigation.navigate('SignUp')}
            width={100}
          />
        </View>
        <View style={styles.mediaContainer}>
          <Text>Or via social media account</Text>
          <View style={styles.mediaButton}>
            <MediaButton image={require('../../assets/baiquan2.png')} />
            <MediaButton image={require('../../assets/baiquan3.png')} />
            <MediaButton image={require('../../assets/baiquan4.png')} />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resContainer: {
    flex: 1,
  },
  helloText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 15,
    color: 'black',
  },
  welcomeText: {
    textAlign: 'center',
    paddingTop: 10,
    color: 'gray',
  },
  button: {
    marginTop: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  mediaContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: 20,
  },
  mediaButton: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

export default SignInPage;
