import React from 'react';
import {View} from 'react-native';
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
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#7476ED',
      }}
    >
      {tabBarList.map(({name, component, icon: Icon}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarIcon: ({color, focused}) => (
              <View
                style={
                  focused ? {borderTopColor: '#7476ED', borderTopWidth: 2} : {}
                }
              >
                <Icon color={color} />
              </View>
            ),
            headerShown: false,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const tabBarList = [
  {name: 'Dashboard', component: DashboardScreen, icon: HomeIcon},
  {name: 'Extract', component: ExtractScreen, icon: ExtractIcon},
  {name: 'PagePaScreen', component: PagePaScreen, icon: PagePaIcon},
  {name: 'Profile', component: ProfileScreen, icon: ProfileIcon},
];

export default BottomNavigationBar;