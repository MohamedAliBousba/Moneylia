import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CustomButton = ({children, style, onPress}: any) => {
  return (
    <View style={{...styles.button, ...style}}>
      <TouchableOpacity style={styles.buttonContent} onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7476ED',
    borderRadius: 4,
    width: 260,
    height: 50,
  },
  buttonContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});
