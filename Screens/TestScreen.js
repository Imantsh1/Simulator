// TestScreen.js
import React from 'react';
import { View } from 'react-native';
//import TestComponent from "../Components/TestComponent"
import RangeSlider from '../Components/RangeSlider';
import Constants from '../utils/Constants';
import Navbar from '../Components/Navbar';
import Touchable from "../Components/Touchable";

const TestScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <View style={{flex:4}}>
        <Navbar/>

      <RangeSlider
      min={Constants.MinMonthlyCC}
      max={Constants.MaxMonthlyCC}
      label="Monthly payment: "
      unit={Constants.Currency}
       />
       <RangeSlider/>
       <RangeSlider/>
       <RangeSlider/>
       <Touchable/>
      </View>
      
       
    </View>
  );
};

export default TestScreen;
