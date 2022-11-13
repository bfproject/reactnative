import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import LogInScreen from '../screens/LogInScreen'

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (

    <Stack.Navigator screenOptions={{}} initialRouteName="Login">
      <Stack.Screen name="Login" component={LogInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;