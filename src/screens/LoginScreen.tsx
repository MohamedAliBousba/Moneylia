import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/shared/CustomButton';

const Login = ({navigation}: any) => {

  const loginHandler = () => {
    navigation.push("BottomNavigation")
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/login-svg.png")}/>
      <Text style={styles.title}>Save your money</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est in quis
        erat a sit.
      </Text>
      <CustomButton style={styles.button} onPress={() => loginHandler()}>Join for free</CustomButton>
      <Text onPress={loginHandler} style={styles.link}>Don't have SPID or CIE? Find out more</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: '#3A3B7B',
    fontWeight: '600',
    marginTop: 24,
    fontSize: 32,
  },
  description: {
    color: '#6F6D7B',
    fontWeight: '400',
    fontSize: 14,
    marginTop: 8,
    width: 264,
    textAlign: 'center',
  },
  button: {
    marginTop: 30,
  },
  link: {
    fontSize: 14,
    fontWeight: '400',
    color: '#3A3B7B',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});
