import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  SafeAreaView,
} from 'react-native';

const SignInScreen = props => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>heyan</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={onChangeEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="rgba(255,255,255, 0.2)"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="rgba(255,255,255, 0.2)"
        />
      </View>
      <View style={{alignItems: 'center', margin: 20}}>
        <TouchableOpacity
          disabled={email !== '' && password !== '' ? false : true}
          onPress={() => {
            if (props.navigation.canGoBack()) {
              props.navigation.goBack();
            } else {
              props.navigation.navigate('HomeStack');
            }
          }}
          style={styles.signIn}>
          <Text
            style={
              email !== '' && password !== ''
                ? {fontSize: 18, color: 'black'}
                : {fontSize: 18, color: 'gray'}
            }>
            SIGN IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (props.navigation.canGoBack()) {
              props.navigation.goBack();
            } else {
              props.navigation.navigate('HomeStack');
            }
          }}
          style={styles.signUp}>
          <Text style={{fontSize: 18, color: 'white'}}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#324755',
  },
  text: {
    margin: 10,
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '300',
    fontFamily: 'HelveticaNeue-Medium',
    letterSpacing: 2,
  },
  headerTitle: {
    alignItems: 'center',
    marginTop: 100,
  },
  headerText: {
    fontSize: 45,
    fontFamily: 'PoiretOne-Regular',
    color: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderBottomColor: 'white',
    borderColor: 'transparent',
    padding: 10,
  },
  signIn: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: 295,
    height: 50,
    justifyContent: 'center',
    borderRadius: 50,
    shadowRadius: 8,
    shadowOpacity: 0.5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  signUp: {
    margin: 20,
    alignItems: 'center',
    width: 295,
    height: 50,
    justifyContent: 'center',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
  },
});

export default SignInScreen;
