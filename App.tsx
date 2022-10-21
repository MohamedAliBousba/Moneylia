import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, Text, View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import MainNavigationStack from './src/components/navigations/MainNavigationStack';
import Login from './src/screens/LoginScreen';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigationStack />
    </NavigationContainer>
  );
};

export default App;
