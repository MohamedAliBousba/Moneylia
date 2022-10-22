import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import PagePaScreen from '../../screens/PagePaScreen';
import PaymentDetailsScreen from '../../screens/PaymentDetailsScreen';

const Stack = createStackNavigator();

const PaymentStack = () => {
  return (
    <Stack.Navigator initialRouteName="PagePA">
      <Stack.Screen
        name="PagePA"
        component={PagePaScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentDetails"
        component={PaymentDetailsScreen}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PaymentStack;

const styles = StyleSheet.create({});
