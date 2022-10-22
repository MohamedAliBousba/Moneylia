import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from "@react-navigation/native";
import MainNavigationStack from './src/components/navigations/MainNavigationStack';
import Login from './src/screens/LoginScreen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  
  return (
    <NavigationContainer>
      <MainNavigationStack />
    </NavigationContainer>
  );
};

export default App;
