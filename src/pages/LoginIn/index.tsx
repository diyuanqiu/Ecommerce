import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import InputField from '../../component/InputField.tsx';
import RoundButton from '../../component/RoundButton.tsx';
import {NaviProps} from '../type.ts';
import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
function LoginInPage({navigation}: NaviProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await EncryptedStorage.getItem('authToken');
        if (token) {
          navigation.navigate('Main');
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkLoginStatus();
  }, [navigation]);

  const handleLoginIn = () => {
    const user = {
      email: email,
      password: password,
    };
    axios
      .post('http://localhost:8000/login', user)
      .then(response => {
        console.log(response);
        const token = response.data.token;
        EncryptedStorage.setItem('authToken', token);
        navigation.navigate('Main');
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Login Error', 'An error occurred when login!');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signUpText}>LoginIn</Text>
      <Text style={styles.attachText}>Login in here</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/baiquan3.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <KeyboardAvoidingView style={styles.inputContainer}>
        <View>
          <InputField
            placeholder="email"
            keyboardType="email-address"
            value={email}
            onChange={text => setEmail(text)}
          />
          <InputField
            placeholder="password"
            secureTextEntry={true}
            value={password}
            onChange={text => setPassword(text)}
          />
        </View>
        <View style={styles.choiceText}>
          <Text>Keep me logged in</Text>
          <Text style={styles.forgetPassword}>Forget Password</Text>
        </View>
        <View style={styles.buttonContainer}>
          <RoundButton
            label={'Login In'}
            width={300}
            height={40}
            onPress={handleLoginIn}
          />
        </View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.hintText}>
            Don't have an account? Sign Up here.
          </Text>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  signUpText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  attachText: {
    marginTop: 10,
    color: 'gray',
  },
  inputContainer: {
    flex: 1,
    marginTop: 25,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    marginTop: 25,
  },
  choiceText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgetPassword: {
    color: '#007FFF',
    fontWeight: '500',
  },
  hintText: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default LoginInPage;
