import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigations/AppNavigator';

// TODO: Load initial screen base on user login status
// const {isAuthenticated} = useContext(AuthenticatioContext);

const App = () => {

  return (
    <NavigationContainer>{
      <AppNavigator />
    }</NavigationContainer>
  );
};

export default App;
