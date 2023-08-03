

import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
//import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
//import RangeSlider from '../Components/RangeSlider';
//import Constants from '../utils/Constants';
import { TouchableOpacity } from 'react-native';



// const onCheckedChanged = (checked, value) => {
//   if (this.state.currentTab === 0) 
//    { if (checked) { this.C4Immo = 10; }  else { this.C4Immo = 0; } } 
//   else if (this.state.currentTab === 1)
//    { if (checked) { this.C4Conso = 10; } else { this.C4Conso = 0; }
// } 
//      this.SimulateMonthly(); }


     const Touchable = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
    <View style={styles.container}>
      
      

      
      <TouchableOpacity onPress={handleCheckboxClick}>
        <View
          style={[
            styles.checkbox,
            isChecked ? styles.checkedBox : styles.uncheckedBox,
          ]}
        />
      </TouchableOpacity>
      <Text style={styles.termsText}>
        Include TVA (10%).
      </Text>
    </View>
    <View>
      {isChecked && (
        <TouchableOpacity style={styles.proceedButton}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
      )}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    
    
  },
  termsText: {
    fontSize: 16,
    // marginBottom: 10,
    color: "#7785AC",
    paddingBottom: 26

  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#A5E6BA',
    marginRight: 10,
  },
  checkedBox: {
    backgroundColor: '#A5E6BA',
  },
  uncheckedBox: {
    backgroundColor: 'white',
  },
  proceedButton: {
    // marginTop: 20,
    backgroundColor: '#5B2A86',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 70,
    
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },



  scene: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: '#5B2A86',
  },
  tabLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabIndicator: {
    backgroundColor: '#360568',
    height: 7,
  },
});

export default Touchable;
