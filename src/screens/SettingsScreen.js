import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const SettingsScreen = () => {
  return (
    <View style={styles.root}>
      <Text> Settings </Text>
    </View>

  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  }
});

export default SettingsScreen