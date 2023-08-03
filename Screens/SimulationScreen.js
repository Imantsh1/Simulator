import React from 'react';
import {View, StyleSheet} from 'react-native';
import TabScreen from './TabScreen';
import Navbar from '../Components/Navbar';
//import Touchable from '../Components/Touchable';
//import { Scaling } from 'react-native-scaling';

//Scaling.getGlobalScale(20)

const Simulator = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.5}}>
        <Navbar text="Simulation" />
      </View>

      <View style={{flex: 5}}>
        <TabScreen />
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Simulator;
