import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from '../../screens/DashboardScreen';
import HomeIcon from '../../assets/icons/HomeIcon';
import ExtractScreen from '../../screens/ExtractScreen';
import ExtractIcon from '../../assets/icons/ExtractIcon';
import PagePaScreen from '../../screens/PagePaScreen';
import PagePaIcon from '../../assets/icons/PagePaIcon';
import ProfileScreen from '../../screens/ProfileScreen';
import ProfileIcon from '../../assets/icons/ProfileIcon';

const Tab = createBottomTabNavigator();

const BottomNavigationBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Extract"
        component={ExtractScreen}
        options={{
          tabBarIcon: ({color}) => <ExtractIcon color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="PagePaScreen"
        component={PagePaScreen}
        options={{
          tabBarIcon: ({color}) => <PagePaIcon color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => <ProfileIcon color={color} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigationBar;

const styles = StyleSheet.create({});
