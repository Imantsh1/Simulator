import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import RangeSlider from '../Components/RangeSlider';
import Constants from '../utils/Constants';
import { TouchableOpacity } from 'react-native/Libraries/Components/Touchable/TouchableOpacity';
import Touchable from '../Components/Touchable';

const initialLayout = {width: 375}; // Adjust the initial width as needed

const TabScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Housing loan'},
    {key: 'second', title: 'Consumer credit'},
  ]);
  
 ////////////////////////////////////// 
  const [amountHL, setAmountHL] = useState(200000)
  const [rateHL, setRateHL]= useState(200000)
  const [durationHL,setDurationHL ]=useState(200000)
  const [deferredHL,setDeferredHL ]=useState(200000)
  const [MounthlyHL,setMounthlyHL ]=useState(200000)

  const onChangeAmountHL = (amountHL) => {
    setAmountHL(amountHL)
    console.log(amountHL)
    // SimulateMonthly()
  }
  const onChangeRateHL=(rateHL)=>{
    setRateHL(rateHL)
    // SimulateMonthly()
  }
  const onChangeDurationHL =(durationHL )=>{
    setDurationHL(durationHL)
  }
  const onChangeDeferredHL =(deferredHL )=>{
    setDeferredHL(deferredHL)
  }
  const onChangeMounthlyHL = (MounthlyHL) =>{
    setMounthlyHL(MounthlyHL)
  }

  
//////////////////////////////////////

  const [amountCC, setAmountCC] = useState(200000)
  const [rateCC, setRateCC]= useState(200000)
  const [durationCC,setDurationCC ]=useState(200000)
  const [deferredCC,setDeferredCC ]=useState(200000)
  const [MounthlyCC,setMounthlyCC ]=useState(200000)
  
  const onChangAmountCC=(amountCC)=> {
    setAmountCC(amountCC);
  }
  const onChangeRateCC =(rateCC)=>{
    setRateCC(rateCC );  //SimulateMonthly()
  }
  const onChangeDurationCC =(durationCC )=>{
    setDurationCC(durationCC)
  }
  const onChangeDeferredCC =(deferredCC )=>{
    setDeferredCC(deferredCC)
  }
  const onChangeMounthlyCC =(MounthlyCC )=>{
    setMounthlyCC(MounthlyCC)
  }






  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  function FirstRoute() {
    return (
      <ScrollView style={styles.scene}>
        <RangeSlider
          min={Constants.MinAmountHL}
          max={Constants.MaxAmountHL}
          label="Amount: "
          unit={Constants.Currency}
          Simulate={(amountHL) => onChangeAmountHL(amountHL)}
          value={amountHL}
          reference = {"amountHL"}
          ></RangeSlider>
        <RangeSlider
          min={Constants.MinRateHL}
          max={Constants.MaxRateHL}
          label="Rate: "
          unit={Constants.Percentage}
          Simulate={(rateHL) => onChangeRateHL(rateHL)}
          value={rateHL}
          reference = {"rateHL"}></RangeSlider>
        <RangeSlider
          min={Constants.MinDurationHL}
          max={Constants.MaxDurationHL}
          label="Duration: "
          unit={Constants.Month}
          Simulate={(durationHL) => onChangeDurationHL(durationHL)}
          value={durationHL}
          refrence='durationHL'></RangeSlider>
        <RangeSlider
          min={Constants.MinDeferredHL}
          max={Constants.MaxDefferedHL}
          label="Deferred: "
          unit={Constants.Month}
          Simulate={(deferredHL) => onChangeDeferredHL(deferredHL)}
          value={deferredHL}
          refrence='deferredHL'
          ></RangeSlider>
        <RangeSlider
          min={Constants.MinMonthlyHL}
          max={Constants.MaxMonthlyHL}
          label="Monthly payment: "
          unit={Constants.Currency}
          Simulate={(MounthlyHL) => onChangeMounthlyHL(MounthlyHL)}
          value={MounthlyHL}
          reference = {"monthlyHL"}></RangeSlider>
        <Touchable></Touchable>
        
      </ScrollView>
    );
  }
  
  function SecondRoute() {
    return (
      <ScrollView style={styles.scene}>
        <RangeSlider
          min={Constants.MinAmountHL}
          max={Constants.MaxAmountHL}
          label="Amount: "
          unit={Constants.Currency}
          Simulate={(amountCC) => onChangAmountCC(amountCC)}
          value={amountCC}
          reference = {"amountCC"}
          ></RangeSlider>
        <RangeSlider
          min={Constants.MinRateHL}
          max={Constants.MaxRateHL}
          label="Rate: "
          unit={Constants.Percentage}
          Simulate={(rateCC) => onChangeRateCC(rateCC)}
          value={rateHL}
          reference = {"rateCC"}></RangeSlider>
        <RangeSlider
          min={Constants.MinDurationHL}
          max={Constants.MaxDurationHL}
          label="Duration: "
          unit={Constants.Month}
          Simulate={(durationCC) => onChangeDurationCC(durationCC)}
          value={durationCC}
          refrence='durationCC'></RangeSlider>
        <RangeSlider
          min={Constants.MinDeferredHL}
          max={Constants.MaxDefferedHL}
          label="Deferred: "
          unit={Constants.Month}
          Simulate={(deferredCC) => onChangeDeferredCC(deferredCC)}
          value={deferredCC}
          refrence='deferredCC'
          ></RangeSlider>
        <RangeSlider
          min={Constants.MinMonthlyHL}
          max={Constants.MaxMonthlyHL}
          label="Monthly payment: "
          unit={Constants.Currency}
          Simulate={(MounthlyCC) => onChangeMounthlyCC(MounthlyCC)}
          value={MounthlyCC}
          reference = {"monthlyCC"}></RangeSlider>
        <Touchable></Touchable>
        
      </ScrollView>
    );
  }

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

    console.log("reference ",this.reference)
  };
  const SimulateAmount = () => {
    console.log("SimulateAmount")
  };

  //GIT TEST


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

    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white'
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
