import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const MarketScreen = () => {
  return (
    <View style={styles.root}>
      <Text> Market </Text>
    </View>

  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  }
});

export default MarketScreen