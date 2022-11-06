import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import LogInScreen from './src/screens/LogInScreen';
import CustomInput from './src/components/CustomInput';

const App = () => {
    return (
        <SafeAreaView style={styles.root}>
            <LogInScreen style={styles.root}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center'
    },
});

export default App;
