import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/LoginScreen';
import BottomNavigationBar from './BottomNavigationBar';

const Stack = createStackNavigator();

const MainNavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="BottomNavigation" component={BottomNavigationBar} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default MainNavigationStack;

const styles = StyleSheet.create({});
