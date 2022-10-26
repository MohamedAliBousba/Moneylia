import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/shared/CustomButton';

interface IPaymentDetailsScreen {
  route: {
    params: {
      amount: string;
      date: string;
      title: string;
    };
  };
}

const PaymentDetailsScreen: React.FC<IPaymentDetailsScreen> = ({route}) => {
  const {amount, date, title} = route.params;

  return (
    <View style={styles.container}>
      <View>
        <View style={{...styles.flex, marginBottom: 20, marginTop: 16}}>
          <Text style={styles.title}>Payment notice</Text>
          <View style={styles.imageContainer}>
            <View style={{...styles.flex, justifyContent: 'center'}}>
              <Image
                source={require('../assets/images/logo.png')}
                style={{height: 38, width: 38}}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <Text style={styles.status}>Creditor</Text>
      <Text style={styles.value}>
        {`ENPACL\nVia del Caravaggio n. 78\n00147 (RM)`}
      </Text>

      <View style={styles.divider} />
      <Text style={styles.status}>Causal</Text>
      <Text style={styles.value}>{title}</Text>

      <View style={styles.divider} />
      <Text style={styles.status}>Expiry date</Text>
      <Text style={styles.value}>{date}</Text>

      <View style={styles.divider} />
      <Text style={styles.status}>Creditor tax code</Text>
      <Text style={styles.value}>8011911704444</Text>

      <View style={styles.divider} />
      <Text style={styles.status}>Notice code</Text>
      <Text style={{...styles.value, flexGrow: 1}}>301000000014982222</Text>

      <View style={{height: 50}}>
        <View style={styles.divider} />
        <View style={styles.flex}>
          <Text style={styles.totalDue}>Total due</Text>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
      <CustomButton style={styles.button}>Pay now</CustomButton>
    </View>
  );
};

export default PaymentDetailsScreen;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    paddingRight: 16,
    paddingTop: 14,
    paddingLeft: 16,
    paddingBottom: 16,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
  },
  title: {
    color: '#3A3B7B',
    fontSize: 20,
    fontWeight: '500',
    height: 24,
  },
  imageContainer: {
    backgroundColor: '#0066CC1A',
    width: 45,
    height: 45,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  divider: {
    backgroundColor: '#EAEAEC',
    height: 1.5,
    marginBottom: 10,
    marginTop: 10,
  },
  status: {
    color: '#312E43',
    fontSize: 16,
    fontWeight: '600',
  },
  value: {
    color: '#6F6D7B',
    fontSize: 16,
    fontWeight: '400',
  },
  totalDue: {
    color: '#312E43',
    fontSize: 20,
    fontWeight: '600',
  },
  amount: {
    color: '#F83E5A',
    fontWeight: '400',
    fontSize: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#BF7EE6',
    marginTop: 5,
  },
});
