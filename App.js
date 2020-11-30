/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomScreen from './src/screens/homescreen/HomScreen';
import SignIn from './src/screens/startup_screen/SignIn';
import Styles from './src/styles/sign_styles';
const App = () => {
  return (
    <SafeAreaView style={Styles.app}>
      {/* <SignIn/> */}
      <HomScreen />
    </SafeAreaView>
  );
};
export default App;
