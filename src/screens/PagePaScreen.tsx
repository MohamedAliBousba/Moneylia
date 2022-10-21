import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MovementsToPay from '../components/pagepa/MovementsToPay';
import TaxPayments from '../components/pagepa/TaxPayments';
import BottomTabsHeader from '../components/shared/BottomTabsHeader';

const PagePaScreen = () => {
  return (
    <View>
      <BottomTabsHeader color="#BF7EE6" />
      <TaxPayments />
      <View style={{marginLeft: 16, marginRight: 16}}>
        <MovementsToPay />
      </View>
    </View>
  );
};

export default PagePaScreen;

const styles = StyleSheet.create({});
