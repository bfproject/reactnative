import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    useWindowDimensions,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import AndroidLogo from '../../assets/images/android_logo.png'

const LogInScreen = ({onButtonTapped}) => {

    const {height} = useWindowDimensions();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLogInPressed = () => {
        print(`Login button tapped ${username}, ${password}`);
        onButtonTapped();
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <View style={styles.root}>
                <Image
                    source={AndroidLogo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode="contain"
                />
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
                <CustomButton text="Log In" onPress={onLogInPressed} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
      },
});

export default LogInScreen;
