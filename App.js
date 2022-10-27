import React, { useState }from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import CustomInput from './src/components/CustomInput';


const App = () => {
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
    flex: 1,
  },
});

export default App;
