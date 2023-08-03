import React, { useState, useRef } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    height: 100,
    width: 350,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
  },
  sliderContainer: {
    flex: 0.8,
    paddingLeft: 4,
    justifyContent : 'flex-end',
    
  },
  inputContainer: {
    flex: 0.4,
    paddingLeft : 2,
    paddingRight: 8,
    justifyContent : 'flex-end',
    paddingBottom: 4

  }

});

export default TestComponent = ({ min, max, label, unit, value, onInputChangeRef, userRef }) => {
  const [sliderValue, setSliderValue] = useState(value || 1);
  const inputRef = useRef(null); // Create a ref for the input element

  const handleInputChange = (inputValue) => {
    const parsedValue = parseInt(inputValue);
    if (!isNaN(parsedValue) && parsedValue >= min && parsedValue <= max) {
      setSliderValue(parsedValue);
      // Update the userRef value when the input is changed
      if (userRef) {
        userRef.current = parsedValue;
      }
    }
  };

  // Pass the inputRef to the parent component
  if (onInputChangeRef) {
    onInputChangeRef(inputRef);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sliderContainer}>
        {/*Slider with max, min, step and initial value*/}
        <Slider
          maximumValue={max}
          minimumValue={min}
          minimumTrackTintColor="#5B2A86"
          maximumTrackTintColor="#A5E6BA"
          thumbTintColor="#7785AC"
          step={1}
          value={sliderValue}
          onValueChange={(sliderValue) => setSliderValue(sliderValue)}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text>
            <Text style={{ color: '#7785AC', fontSize: 15 }}>{min} </Text>
            <Text style={{ color: '#9AC6C5', fontStyle: 'italic', fontSize: 12 }}>{unit}</Text>
          </Text>

          <Text>
            <Text style={{ color: '#7785AC', fontSize: 15 }}>{max} </Text>
            <Text style={{ color: '#9AC6C5', fontStyle: 'italic', fontSize: 12 }}>{unit}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        {/*Text to show slider value*/}
        <Text style={{ color: '#7785AC', marginBottom: -5 }}> {label} </Text>
        <TextInput
          ref={inputRef}
          style={{
            marginTop: 4,
            height: 40,
            borderColor: '#5B2A86',
            color: '#5B2A86',
            borderStyle: 'solid',
          }}
          keyboardType="numeric"
          onChangeText={handleInputChange}
          defaultValue={sliderValue.toString()} // use defaultValue instead of value
          selectTextOnFocus={true}
        />
      </View>
    </SafeAreaView>
  );
};