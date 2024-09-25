import React, {useState} from 'react';
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

function SignUpPage({navigation}: NaviProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignUp = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };
    // send a post the backend API
    axios
      .post('http://localhost:8000/register', user)
      .then(response => {
        console.log(response);
        Alert.alert(
          'Registration Successfully',
          'You have registered successfully!',
        );
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch(err => {
        console.log(err);
        Alert.alert(
          'Registration Failed',
          'An error occurred when registration!',
        );
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signUpText}>Sign Up</Text>
      <Text style={styles.attachText}>Sign up here</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/baiquan4.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <KeyboardAvoidingView style={styles.inputContainer}>
        <View>
          <InputField
            placeholder="name"
            value={name}
            onChange={text => setName(text)}
          />
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
            label={'Sign Up'}
            width={300}
            height={40}
            onPress={handleSignUp}
          />
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('LoginIn')}>
          <Text style={styles.hintText}>
            Already have an account? Login in here.
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

export default SignUpPage;
