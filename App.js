import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from './src/screens/LogInScreen';
import CoinList from './src/components/CoinList.jsx'

const Stack = createNativeStackNavigator();

const App = () => {

    return (
        <NavigationContainer>{
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LogInScreen} />
                <Stack.Screen name="CoinList" component={CoinList} options={{ title: 'Coins' }} />
            </Stack.Navigator>
        }</NavigationContainer>
    );
};

export default App;
