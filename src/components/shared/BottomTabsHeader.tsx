import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import ChatIcon from '../../assets/icons/ChatIcon';
import Logo from '../../assets/icons/Logo';

interface IBottomTabsHeader {
  color?: string;
}

const BottomTabsHeader: React.FC<IBottomTabsHeader> = ({color}) => {
  return (
    <View
      style={{...styles.container, ...{backgroundColor: color || '#7476ED'}}}
    >
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
