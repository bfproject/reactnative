import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';


const App: () => Node = () => {
  return (
    <SafeAreaView style = {styles.root}>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: { 
    flex: 1,
  },
});

export default App;
