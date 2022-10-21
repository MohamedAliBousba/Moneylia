import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UserCircleIcon from '../../assets/icons/UserCircleIcon';

const UserCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <UserCircleIcon />
        <Text style={styles.title}>User summary</Text>
      </View>
      <View
        style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}
      >
        <View>
          <Text style={styles.detailsTitle}>Status</Text>
          <Text style={styles.detailsValue}>Subscribed</Text>
        </View>
        <View style={{width: 140}}>
          <Text style={styles.detailsTitle}>Birthday</Text>
          <Text style={styles.detailsValue}>26/01/1994</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 16,
        }}
      >
        <View>
          <Text style={styles.detailsTitle}>City</Text>
          <Text style={styles.detailsValue}>Barcelona</Text>
        </View>
        <View
          style={{
            width: 140,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text style={styles.detailsTitle}>Country</Text>
              <Text style={styles.detailsValue}>ES</Text>
            </View>
            <View>
              <Text style={styles.detailsTitle}>Number</Text>
              <Text style={styles.detailsValue}>100</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    height: 168,
    elevation: 2,
    marginRight: 16,
    marginLeft: 16,
    marginTop: -100,
    padding: 24,
  },
  title: {
    color: '#3A3B7B',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 10,
  },
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
  },
  detailsTitle: {
    color: '#6F6D7B',
    fontSize: 12,
    fontWeight: '400',
  },
  detailsValue: {
    color: '#312E43',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 4,
  },
});
