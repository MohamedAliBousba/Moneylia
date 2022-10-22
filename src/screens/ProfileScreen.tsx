import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BottomTabsHeader from '../components/shared/BottomTabsHeader';

const ProfileScreen = () => {
  return (
    <View>
      <BottomTabsHeader />
      <Text style={styles.title}>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '400',
    color: '#7476ED',
    marginLeft: 16,
  },
});
