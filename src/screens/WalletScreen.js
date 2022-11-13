import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const WalletScreen = () => {
  return (
    <View style={styles.root}>
      <Text> Wallet </Text>
    </View>

  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  }
});

export default WalletScreen