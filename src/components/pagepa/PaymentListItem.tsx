import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon';

const PaymentListItem = ({title, date, amount}: any) => {
  const navigation: any = useNavigation();

  const gotToDetails = () => {
    navigation.push('PaymentDetails', {
      title,
      date,
      amount,
    });
  };

  return (
    <TouchableNativeFeedback onPress={gotToDetails}>
      <View style={styles.container}>
        <View style={styles.containerContent}>
          <View style={styles.imageContainer}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image source={require('../../assets/images/logo.png')} />
            </View>
          </View>
          <View style={{width: 220, marginLeft: 7, marginRight: 8}}>
            <Text style={styles.primaryText}>{title}</Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.amount}>{amount}</Text>
            </View>
          </View>
          <ArrowRightIcon />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default PaymentListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    elevation: 3,
    height: 80,
    borderRadius: 8,
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    paddingLeft: 8,
    marginBottom: 10,
  },
  containerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: '#0066CC1A',
    height: 56,
    width: 56,
  },
  primaryText: {
    color: '#312E43',
    fontSize: 12.5,
    fontWeight: '400',
    textTransform: 'uppercase',
  },
  date: {
    color: '#A5A5AA',
    fontSize: 14,
    fontWeight: '400',
  },
  amount: {
    color: '#F83E5A',
    fontSize: 14,
    fontWeight: '400',
  },
});
