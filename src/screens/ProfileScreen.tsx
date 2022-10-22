import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import BottomTabsHeader from '../components/shared/BottomTabsHeader';

const ProfileScreen = () => {
  return (
    <View>
      <BottomTabsHeader />
      <View style={{height: Dimensions.get('window').height - 100}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={styles.title}>Profile Screen</Text>
        </View>
      </View>
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
