import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import EasyButton from '../Components/EasyButton';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/bcp-logo.png')} style={styles.logo} />

      <Text style={styles.text}>
        Welcome to our Credit Simulator App! Take control of your financial
        future with real-time credit simulations, personalized insights,
        goal-oriented planning, and credit monitoring. Empower yourself with
        valuable educational resources on credit management and debt reduction.
        Download now for a brighter financial tomorrow!
      </Text>

      <EasyButton onPress={handleDownloadButtonPress} text="Start" />
    </View>
  );
};

const handleDownloadButtonPress = () => {
  // Implement the action when the "Download Now" button is pressed
  console.log('Download Now button pressed!');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF9C9',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    color: '#862B0D',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
