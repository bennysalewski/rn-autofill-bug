/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  StatusBar,
  View,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';

/*
 * Setting this to true help only once. If you press login and navigate back the autofill doesn't work anymore.
 * Event after restarting the mobile app.
 * */
enableScreens(true);

const LoginScreen = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <TextInput
            style={{fontSize: 20}}
            autoCompleteType={'username'}
            importantForAutofill={'yes'}
            placeholder={'Username'}
          />
          <TextInput
            style={{fontSize: 20}}
            autoCompleteType={'password'}
            importantForAutofill={'yes'}
            placeholder={'Password'}
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={() => props.navigation.replace('Home')}
            style={{
              height: 60,
              backgroundColor: 'red',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>LOGIN</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>
        Hello. Welcome. You should now be prompted to save your credentials.
      </Text>
    </View>
  );
};

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
});
