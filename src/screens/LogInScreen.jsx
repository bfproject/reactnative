import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';
import CustomInput from '../components/CustomInput';

const LogInScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>

                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
});

export default LogInScreen;
