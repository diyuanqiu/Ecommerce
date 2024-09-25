/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SplashPages from './src/pages/Splash';
import {NavigationContainer} from '@react-navigation/native';
import SignInPage from './src/pages/SignIn';
import SignUpPage from './src/pages/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNavigation from './src/navigation/StackNavigation.tsx';

function App(): React.JSX.Element {
  // return <WelcomePage />;
  return (
      <SafeAreaView style={styles.safeContainer}>
        <StackNavigation />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  safeView: {
    backgroundColor: 'blue',
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeView1: {
    height: '100%',
  },
});

export default App;
