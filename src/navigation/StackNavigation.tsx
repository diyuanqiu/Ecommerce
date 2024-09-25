import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashPages from '../pages/Splash';
import SignInPage from '../pages/SignIn';
import SignUpPage from '../pages/SignUp';
import LoginInPage from '../pages/LoginIn';
import HomePage from '../pages/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProductInfo from '../pages/ProductInfo';

function TabBarIcon({name, focused}: {name: string; focused: boolean}) {
  return (
    <AntDesign name={name} size={24} color={focused ? '#008E97' : 'black'} />
  );
}

function BottomTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {color: '#008E97'},
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <TabBarIcon name="home" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomePage}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <TabBarIcon name="user" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={HomePage}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({focused}) => (
            <TabBarIcon name="shoppingcart" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashPages}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginIn"
          component={LoginInPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductInfo"
          component={ProductInfo}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
