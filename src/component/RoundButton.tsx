import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function RoundButton({
  label,
  border = false,
  onPress,
  width,
  height,
}: {
  label: string;
  border?: boolean;
  onPress?: () => void;
  width?: number;
  height?: number;
}) {
  return (
    <TouchableOpacity onPress={() => onPress && onPress()}>
      <View
        style={[
          styles.container,
          border ? styles.signUpContainer : styles.loginContainer,
          {width: width, height: height},
        ]}>
        <Text
          style={[
            styles.button,
            border ? styles.signUpButton : styles.loginButton,
          ]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderColor: 'black',
    justifyContent: 'center',
  },
  signUpContainer: {
    borderWidth: 1,
    backgroundColor: 'white',
  },
  loginContainer: {
    borderWidth: 0,
    backgroundColor: '#034ef7',
  },
  button: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
  },
  loginButton: {
    color: 'white',
  },
  signUpButton: {
    color: 'black',
  },
});

export default RoundButton;
