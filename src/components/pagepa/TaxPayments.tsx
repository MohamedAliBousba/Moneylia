import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogoBianco from '../../assets/icons/LogoBianco';

const TaxPayments = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Text style={styles.title}>Tax payments</Text>
        <LogoBianco />
      </View>
    </View>
  );
};

export default TaxPayments;

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#BF7EE6',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingLeft: 16,
    paddingTop: 15,
    paddingRight: 16,
  },
  containerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
  },
});
