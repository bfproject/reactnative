import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import LogInScreen from './src/screens/LogInScreen';
import CoinList from './src/components/CoinList.jsx'

const App = () => {
    const [loginTapped, setLoginTapped] = useState(false);

    return (
        <SafeAreaView style={styles.root}>
            {loginTapped ? (
                <CoinList />
            ) : (
                <LogInScreen style={styles.root} onButtonTapped={() => {
                    setLoginTapped(true)
                }} />
            )}
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
