import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = ({ text }) => {
    return (
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>{text}</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#5B2A86', // You can change the background color to your preference
    padding: 24,
    alignItems: 'center',
  },
  navbarText: {
    color: 'white', // You can change the text color to your preference
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Navbar;
