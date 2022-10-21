import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ChatIcon from '../../assets/icons/ChatIcon';
import Logo from '../../assets/icons/Logo';

const BottomTabsHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Logo />
        <ChatIcon />
      </View>
    </View>
  );
};

export default BottomTabsHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#7476ED',
    paddingLeft: 16,
    paddingRight: 16,
  },
  toolbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
