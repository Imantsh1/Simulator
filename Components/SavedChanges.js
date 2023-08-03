import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import RangeSlider from '../Components/RangeSlider';
import Constants from '../utils/Constants';
import { TouchableOpacity } from 'react-native/Libraries/Components/Touchable/TouchableOpacity';
function FirstRoute() {
  return (
    <View style={[styles.scene, {backgroundColor: 'white'}]}>
      <RangeSlider
        min={Constants.MinAmountHL}
        max={Constants.MaxAmountHL}
        label="Amount: "
        unit={Constants.Currency}
        Simulate={() => SimulateMonthly()}
        value={200000}></RangeSlider>
      <RangeSlider
        min={Constants.MinRateHL}
        max={Constants.MaxRateHL}
        label="Rate: "
        unit={Constants.Percentage}
        Simulate={() => SimulateMonthly()}
        value={200000}></RangeSlider>
      <RangeSlider
        min={Constants.MinDurationHL}
        max={Constants.MaxDurationHL}
        label="Duration: "
        unit={Constants.Month}
        Simulate={() => SimulateMonthly()}
        value={200000}></RangeSlider>
      <RangeSlider
        min={Constants.MinDeferredHL}
        max={Constants.MaxDefferedHL}
        label="Deferred: "
        unit={Constants.Month}
        Simulate={() => SimulateMonthly()}
        value={200000}></RangeSlider>
      <RangeSlider
        min={Constants.MinMonthlyHL}
        max={Constants.MaxMonthlyHL}
        label="Monthly payment: "
        unit={Constants.Currency}
        Simulate={() => SimulateAmount()}
        value={200000}></RangeSlider>
        <View style= {{flex: 3}}>
           <Touchable/>
        </View>
    </View>
  );
}

function SecondRoute() {
  return (
    <View style={[styles.scene, {backgroundColor: 'white'}]}>
      <RangeSlider
        min={Constants.MinAmountCC}
        max={Constants.MaxAmountCC}
        label="Amount :"
        unit={Constants.Currency}
        Simulate={() => SimulateMonthly()}
        value={200000}></RangeSlider>
      <RangeSlider
        min={Constants.MinRateCC}
        max={Constants.MaxRateCC}
        label="Rate: "
        unit={Constants.Percentage}
        Simulate={() => SimulateMonthly()}
        value={200000}></RangeSlider>
      <RangeSlider
        min={Constants.MinDurationCC}
        max={Constants.MaxDurationCC}
        label="Duration: "
        unit={Constants.Month}
        Simulate={() => SimulateMonthly()}
        value={200000}></RangeSlider>
      <RangeSlider
        min={Constants.MinDeferredCC}
        max={Constants.MaxDefferedCC}
        label="Deferred: "
        unit={Constants.Month}
        Simulate={() => SimulateMonthly()}
        value={200000}></RangeSlider>
      <RangeSlider
        min={Constants.MinMonthlyCC}
        max={Constants.MaxMonthlyCC}
        label="Monthly payment: "
        unit={Constants.Currency}
        Simulate={() => SimulateAmount()}
        value={200000}></RangeSlider>
        
        <View style= {{flex: 3}}>
           <Touchable/>
        </View>
       

    </View>
  );
}
const initialLayout = {width: 375}; // Adjust the initial width as needed

const TabScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Housing loan'},
    {key: 'second', title: 'Consumer credit'},
  ]);

  const onCheckedChanged = (checked, value) => {
    if (index === 0) {
      if (checked) {
        C4Immo = 10;
      } else {
        C4Immo = 0;
      }
    } else if (state.currentTab === 1) {
      if (checked) {
        C4Conso = 10;
      } else {
        C4Conso = 0;
      }
    }
    SimulateMonthly();
  };

  const SimulateMonthly = () => {
    let C2 = 0;
    let C3 = 0;
    let F2 = 0;
    let F3 = 1;
    let C5 = 0;
    let C4 = 0;

    if (index === 0) {
      C2 = Number(amountImmo.getValue()); //  amountImmo.getValue() : pour recuperer la val input
      C3 = Number(rateImmo.getValue());
      F2 = Number(delayImmo.getValue());
      C5 = Number(durationImmo.getValue());
      C4 = C4Immo;
    } else {
      C2 = Number(amountConso.getValue());
      C3 = Number(rateConso.getValue());
      F2 = Number(delayConso.getValue());
      C5 = Number(durationConso.getValue());
      C4 = C4Conso;
    }
    let C7 = (C2 * C3 * F2 * (1 + C4 / 100)) / 1200;
    let C8 = C2 + C7;
    let C9 =
      C8 *
      ((C3 * F3) / 1200 / (1 - Math.pow(1 + (C3 * F3) / 1200, -(C5 - F2))));
    let C10 =
      C8 *
      ((C3 * F3 * (100 + C4)) /
        120000 /
        (1 - Math.pow(1 + (C3 * F3 * (100 + C4)) / 120000, F2 - C5)));
    if (state.currentTab === 0) {
      monthlyImmo. useState(C10.toFixed(2) + '');
    } else {
      monthlyConso. useState(C10.toFixed(2) + '');
    }
  };
  const SimulateAmount = () => {
    let C3 = 0;
    let F3 = 1;
    let F2 = 0;
    let C5 = 0;
    let C10 = 0;
    let C4 = 0;
    if (state.currentTab === 0) {
      C3 = Number(rateImmo.getValue());
      F2 = Number(delayImmo.getValue());
      C5 = Number(durationImmo.getValue());
      C10 = Number(monthlyImmo.getValue());
      C4 = C4Immo;
    } else {
      C3 = Number(rateConso.getValue());
      F2 = Number(delayConso.getValue());
      C5 = Number(durationConso.getValue());
      C10 = Number(monthlyConso.getValue());
      C4 = C4Conso;
    }
    let C8 =
      C10 /
      ((C3 * F3 * (100 + C4)) /
        120000 /
        (1 - Math.pow(1 + (C3 * F3 * (100 + C4)) / 120000, F2 - C5)));
    let C2 = C8 / (1 + (C3 * F2) / 1200);
    if (state.currentTab === 0) {
      amountImmo.useState(C2.toFixed(2) + ''); //  useState => usesState
    } else {
      amountConso.useState(C2.toFixed(2) + '');
    }
  };

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.tabIndicator}
      style={styles.tabBar}
      labelStyle={styles.tabLabel}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
};


const onCheckedChanged = (checked, value) => {
  if (this.state.currentTab === 0) 
   { if (checked) { this.C4Immo = 10; }  else { this.C4Immo = 0; } } 
  else if (this.state.currentTab === 1)
   { if (checked) { this.C4Conso = 10; } else { this.C4Conso = 0; }
} 
     this.SimulateMonthly(); }
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

export default TabScreen;
