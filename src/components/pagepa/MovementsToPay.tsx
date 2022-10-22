import React from 'react';
import {
    Dimensions,
  FlatList,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PaymentListItem from './PaymentListItem';

const MovementsToPay = () => {
  
  const renderItem = ({item}: any) => (
    <PaymentListItem title={item.title} date={item.date} amount={item.amount} />
  );

  return (
    <View>
      <Text style={styles.title}>Movements to pay</Text>
      <Text style={styles.description}>
        View pending transactions for the past two years and proceed to payment.
      </Text>
      <View style={{height: Dimensions.get('window').height - 335}}>
        <FlatList data={listItems} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default MovementsToPay;

const styles = StyleSheet.create({
  title: {
    marginTop: 24,
    color: '#3A3B7B',
    fontWeight: '600',
    fontSize: 24,
  },
  description: {
    marginTop: 8,
    color: '#6F6D7B',
    fontWeight: '400',
    fontSize: 14,
    marginBottom: 10
  },
});

const listItems = [
  {
    id: 1,
    title: 'SUBJECTIVE AND SUPPLEMENTARY CONTRIBUTION YEAR 2021 EXPIRES ...',
    date: '02/28/2022',
    amount: '€ 1,234.99',
  },
  {
    id: 2,
    title: 'PAYMENT ON DEPOSIT',
    date: '31/01/2022',
    amount: '€ 234.99',
  },
  {
    id: 3,
    title: 'PAYMENT ON DEPOSIT',
    date: '31/05/2021',
    amount: '€ 634.99',
  },
  {
    id: 4,
    title: 'SUBJECTIVE AND SUPPLEMENTARY CONTRIBUTION YEAR 2020 EXPIRES ...',
    date: '02/28/2021',
    amount: '€ 1,434.94',
  },
  {
    id: 5,
    title: 'PAYMENT ON DEPOSIT',
    date: '31/01/2021',
    amount: '€ 1,104.39',
  },
  {
    id: 6,
    title: 'PAYMENT ON DEPOSIT',
    date: '31/05/2021',
    amount: '€ 634.99',
  },
  {
    id: 7,
    title: 'SUBJECTIVE AND SUPPLEMENTARY CONTRIBUTION YEAR 2020 EXPIRES ...',
    date: '02/28/2021',
    amount: '€ 1,434.94',
  },
  {
    id: 8,
    title: 'PAYMENT ON DEPOSIT',
    date: '31/01/2021',
    amount: '€ 1,104.39',
  },
];
