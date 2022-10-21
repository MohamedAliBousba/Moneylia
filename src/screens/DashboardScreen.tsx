import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BankIcon from '../assets/icons/BankIcon';
import ChartPieIcon from '../assets/icons/ChartPieIcon';
import CreditCardIcon from '../assets/icons/CreditCardIcon';
import PiggybankIcon from '../assets/icons/PiggybankIcon';
import CustomDashboardCard from '../components/dashboard/CustomDashboardCard';
import UserSummaryCard from '../components/dashboard/UserSummaryCard';
import WelcomeSection from '../components/dashboard/WelcomeSection';
import BottomTabsHeader from '../components/shared/BottomTabsHeader';

const DashboardScreen = () => {
  return (
    <View>
      <BottomTabsHeader />
      <WelcomeSection />
      <UserSummaryCard />
      <Text style={styles.contributionsTitle}>Contributions of 2022</Text>
      <View style={styles.cardsCollection}>
        <CustomDashboardCard
          icon={<ChartPieIcon />}
          status="Paid"
          value="Unavailable"
          valueColor="#F83E5A"
        />
        <CustomDashboardCard
          icon={<CreditCardIcon />}
          status="Due"
          value="Unavailable"
          valueColor="#F83E5A"
        />
      </View>
      <View style={{...styles.cardsCollection, marginTop: 110}}>
        <CustomDashboardCard
          icon={<PiggybankIcon />}
          status="Advance payment"
          value="€ 1,230.00"
          valueColor="#3A3B7B"
        />
        <CustomDashboardCard
          icon={<BankIcon />}
          status="Modularity"
          value="€ 340.59"
          valueColor="#3A3B7B"
        />
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  contributionsTitle: {
    color: '#3A3B7B',
    fontWeight: '500',
    fontSize: 22,
    marginLeft: 16,
    marginTop: 8,
  },
  cardsCollection: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 13,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
