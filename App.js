import React, { useState } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import LogInScreen from './src/screens/LogInScreen';


const App = () => {
    return (
        <View style={styles.container}>
            <LogInScreen />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});

export default App;
