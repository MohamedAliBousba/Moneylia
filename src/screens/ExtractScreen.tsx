import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BottomTabsHeader from '../components/shared/BottomTabsHeader';

const ExtractScreen = () => {
  return (
    <View>
      <BottomTabsHeader />
      <Text style={styles.title}>Extract Screen</Text>
    </View>
  );
};

export default ExtractScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '400',
    color: '#7476ED',
    marginLeft: 16
  },
});
