import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import Onboarding from './src/Screens/onboardingScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screens/LoginSignup/LoginScreen.js';
import SignupScreen from './src/Screens/LoginSignup/SignupScreen.js';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen.js';
import 'react-native-gesture-handler'
import UserProfile from './src/compenents/UserProfile/UserProfile.js';

const Stack = createNativeStackNavigator();


export default App = () => {
  
  return (
    
    <NavigationContainer>
      <StatusBar style="auto" />

         

      <Stack.Navigator 
        initialRouteName="Onboarding"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});