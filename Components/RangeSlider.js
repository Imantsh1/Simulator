import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import { TouchableOpacity } from 'react-native';



export default RangSlider = ({ min, max, label, unit, reference, Simulate, value }) => {
  const [sliderValue, setSliderValue] = useState(value);
  const textInputRef = useRef(null);


  const handleInputChange = (value) => {
    const inputValue = parseInt(value);
    if (inputValue >= min && inputValue <= max) {
      setSliderValue(inputValue);
    }
  };

  const handleInputSubmit = () => {
    const inputValue = parseInt(textInputRef.current.value);
    if (inputValue >= min && inputValue <= max) {
      setSliderValue(inputValue);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Text to show slider value */}
        <View style={styles.inputContainer}>
          <View>
            <Text style={{ color: "#7785AC", marginBottom: -5 }}> {label}  </Text>
          </View>
          <TextInput
            ref={textInputRef} // Add ref attribute
            style={{
              marginTop: 4, height: 40, borderColor: '#5B2A86', color: "#5B2A86", borderStyle: 'solid',
              
              borderBottomWidth: 2,
            }}
            keyboardType="numeric"
            onChangeText={handleInputChange}
            defaultValue={sliderValue.toString()} // Update defaultValue to sliderValue.toString()
            selectTextOnFocus={true}
            onSubmitEditing={handleInputSubmit} // Add onSubmitEditing event handler
          />
        </View>
        {/* TextInput to input slider value */}

        <View style={styles.sliderContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text >
              <Text style={{ color: '#7785AC', fontSize: 15 }}  >{min} </Text>
              <Text style={{ color: '#9AC6C5', fontStyle: 'italic', fontSize: 12 }} > {unit}</Text>
            </Text>

            <Text >
              <Text style={{ color: '#7785AC', fontSize: 15 }}  >{max} </Text>
              <Text style={{ color: '#9AC6C5', fontStyle: 'italic', fontSize: 12 }} > {unit}</Text>
            </Text>
          </View>

          {/* Slider with max, min, step and initial value */}
          <Slider
            maximumValue={max}
            minimumValue={min}
            minimumTrackTintColor="#5B2A86"
            maximumTrackTintColor="#A5E6BA"
            thumbTintColor="#7785AC"
            step={1}
            value={sliderValue}
            onValueChange={(sliderValue) => {
              Simulate(sliderValue)
              setSliderValue(sliderValue)}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

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