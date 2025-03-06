import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './components/SplashScreen';
import OnboardingScreen from './components/OnboardingScreen';
import SignInScreen from './components/SignInScreen';
import PhoneNumberInputScreen from './components/PhoneNumberInputScreen'; 
import VerificationScreen from './components/VerificationScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const navigationRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (navigationRef.current) {
        navigationRef.current.navigate('Onboarding');
      }
    }, 3000);

    return () => clearTimeout(timer);
  },);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="PhoneNumberInput" component={PhoneNumberInputScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;