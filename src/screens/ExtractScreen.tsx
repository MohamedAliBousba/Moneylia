import React from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import BottomTabsHeader from '../components/shared/BottomTabsHeader';

const ExtractScreen = () => {
  
  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor="#7476ED"
        barStyle='light-content'
      />
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
          <Text style={styles.title}>Extract Screen</Text>
        </View>
      </View>
    </View>
  );
};

export default ExtractScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '400',
    color: '#7476ED',
    marginLeft: 16,
  },
});
