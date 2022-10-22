import React from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';

const CustomDashboardCard = ({icon, status, value, valueColor}: any) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback>
        <View style={styles.containerCenter}>
          {icon}
          <Text style={styles.status}>{status}</Text>
          <Text style={{...styles.value, color: valueColor}}>{value}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default CustomDashboardCard;

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 105,
    borderRadius: 12,
    elevation: 2,
    backgroundColor: '#FFFFFF',
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    fontSize: 12,
    fontWeight: '400',
    color: '#83828E',
    marginTop: 7,
    marginBottom: 2,
  },
  value: {
    fontSize: 16,
    fontWeight: '400',
    color: '#F83E5A',
  },
});
