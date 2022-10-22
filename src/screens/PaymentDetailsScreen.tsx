import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/shared/CustomButton';

const PaymentDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={{...styles.flex, marginBottom: 20, marginTop: 10}}>
          <Text style={styles.title}>Payment notice</Text>
          <View style={styles.imageContainer}>
            <View style={{...styles.flex, justifyContent: 'center'}}>
              <Image source={require('../assets/images/logo.png')} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <Text style={styles.status}>Creditor</Text>
      <Text style={styles.value}>
        {`ENPACL\n Via del Caravaggio n. 78\n 00147 (RM)`}
      </Text>

      <View style={styles.divider} />
      <Text style={styles.status}>Causal</Text>
      <Text style={styles.value}>
        SUBJECTIVE AND SUPPLEMENTARY CONTRIBUTION YEAR 2021 EXPIRY 28-02-2022
      </Text>

      <View style={styles.divider} />
      <Text style={styles.status}>Expiry date</Text>
      <Text style={styles.value}>02/28/2022</Text>

      <View style={styles.divider} />
      <Text style={styles.status}>Creditor tax code</Text>
      <Text style={styles.value}>8011911704444</Text>

      <View style={styles.divider} />
      <Text style={styles.status}>Notice code</Text>
      <Text style={{...styles.value, flexGrow: 1}}>301000000014982222</Text>

      <View style={{height: 50}}>
        <View style={styles.flex}>
          <Text style={styles.totalDue}>Total due</Text>
          <Text style={styles.amount}>€ 1,234.99</Text>
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
  },
  title: {
    color: '#3A3B7B',
    fontSize: 20,
    fontWeight: '500',
    height: 24,
  },
  imageContainer: {
    backgroundColor: '#0066CC1A',
    width: 40,
    height: 40,
  },
  divider: {
    backgroundColor: '#EAEAEC',
    height: 1,
    marginBottom: 7,
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
    backgroundColor: "#BF7EE6"
  },
});
