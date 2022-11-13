import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoinList from '../components/CoinList'
import MarketScreen from '../screens/MarketScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WalletScreen from '../screens/WalletScreen';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={
        {
          activeTintColor: "#696AC3",
          inactiveTintColor: "#C6DAF7",
        }
      }
    >
      <Tab.Screen name="Coins" component={CoinList} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Market" component={MarketScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
