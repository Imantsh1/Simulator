import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import RangeSlider from '../Components/RangeSlider';
import Constants from '../utils/Constants';
import { TouchableOpacity } from 'react-native/Libraries/Components/Touchable/TouchableOpacity';
import Touchable from '../Components/Touchable';

const initialLayout = { width: 375 }; // Adjust the initial width as needed

const TabScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Housing loan' },
    { key: 'second', title: 'Consumer credit' },
  ]);

  const [isFirstRender, setIsFirstRender] = useState(true);


  const [amountHL, setAmountHL] = useState(1000000);
  const [rateHL, setRateHL] = useState(5.5);
  const [durationHL, setDurationHL] = useState(180);
  const [deferredHL, setDeferredHL] = useState(0);
  const [monthlyHL, setMonthlyHL] = useState(8170.83);

  const [amountCC, setAmountCC] = useState(200000);
  const [rateCC, setRateCC] = useState(5.5);
  const [durationCC, setDurationCC] = useState(60);
  const [deferredCC, setDeferredCC] = useState(0);
  const [monthlyCC, setMonthlyCC] = useState(3871.21);

  const [C4Immo, setC4Immo] = useState(0);
  const [C4Conso, setC4Conso] = useState(0);

  const [activeTVA, setActiveTVA] = useState(false);

  // useEffect(() => {
  //   console.log("TabScreen activeTVA :",activeTVA)
  // }, [activeTVA] );


  useEffect(() => {
    setIsFirstRender(false)
  }, [isFirstRender]);

  useEffect(() => {
    !isFirstRender && SimulateMonthly()
  }, [amountHL, rateHL, durationHL, deferredHL, activeTVA]);

  useEffect(() => {
    !isFirstRender &&  SimulateAmount()
  }, [monthlyHL]);

  const onCheckedChanged = () => {
    setActiveTVA(!activeTVA)
    if (index === 0) {
      if (activeTVA) {
        setC4Immo(10)
      } else {
        setC4Immo(0)
      }
    } else if (index === 1) {
      if (activeTVA) {
        setC4Conso(10)
      } else {
        setC4Conso(0)
      }
    }
  };

  const SimulateMonthly = () => {
    let C2 = 0;
    let C3 = 0;
    let F2 = 0;
    let F3 = 1;
    let C5 = 0;
    let C4 = 0;

    if (index === 0) {
      C2 = Number(amountHL);
      C3 = Number(rateHL);
      F2 = Number(deferredHL);
      C5 = Number(durationHL);
      C4 = C4Immo;
    } else {
      C2 = Number(amountCC);
      C3 = Number(rateCC);
      F2 = Number(deferredCC);
      C5 = Number(durationCC);
      C4 = C4Conso;
    }

    let C7 = C2 * C3 * F2 * (1 + (C4 / 100)) / 1200;
    let C8 = C2 + C7;
    let C9 = C8 * ((C3 * F3 / 1200) / (1 - Math.pow((1 + C3 * F3 / 1200), (-(C5 - F2)))));
    let C10 = C8 * ((C3 * F3 * (100 + C4) / 120000) / (1 - Math.pow((1 + C3 * F3 * (100 + C4) / 120000), (F2 - C5))));
    if (index === 0) {
      setMonthlyHL(+C10.toFixed(2))
    } else {
      setMonthlyCC(+C10.toFixed(2))
    }
  }

  const SimulateAmount = () => {

    let C3 = 0;
    let F3 = 1;
    let F2 = 0;
    let C5 = 0;
    let C10 = 0;
    let C4 = 0;
    if (index === 0) {
      C3 = Number(rateHL);
      F2 = Number(deferredHL);
      C5 = Number(durationHL);
      C10 = Number(monthlyHL);
      C4 = C4Immo;
    } else {
      C3 = Number(rateCC);
      F2 = Number(deferredCC);
      C5 = Number(durationCC);
      C10 = Number(monthlyCC);
      C4 = C4Conso;
    }


    let C8 = C10 / ((C3 * F3 * (100 + C4) / 120000) / (1 - Math.pow((1 + C3 * F3 * (100 + C4) / 120000), (F2 - C5))));

    let C2 = C8 / (1 + C3 * F2 / 1200);
    if (index === 0) {
      setAmountHL(+C2.toFixed(2));
    } else {
      setAmountCC(+C2.toFixed(2));
    }


  }

  const onChange = (value, ref) => {
    switch (ref) {
      case "amountHL":
        setAmountHL(value)
        break;
      case "rateHL":
        setRateHL(value)
        break;
      case "durationHL":
        setDurationHL(value)
        break;
      case "deferredHL":
        setDeferredHL(value)
        break;
      case "monthlyHL":
        setMonthlyHL(value)
        break;

      default:
        break;
    }
  }

  function FirstRoute() {
    return (
      <ScrollView style={styles.scene}>
        <RangeSlider
          min={Constants.MinAmountHL}
          max={Constants.MaxAmountHL}
          label="Amount: "
          unit={Constants.Currency}
          Simulate={(val, ref) => onChange(val, ref)}
          value={amountHL}
          reference={"amountHL"}
        />
        <RangeSlider
          min={Constants.MinRateHL}
          max={Constants.MaxRateHL}
          label="Rate: "
          unit={Constants.Percentage}
          Simulate={(val, ref) => onChange(val, ref)}
          value={rateHL}
          reference={"rateHL"} />
        <RangeSlider
          min={Constants.MinDurationHL}
          max={Constants.MaxDurationHL}
          label="Duration: "
          unit={Constants.Month}
          Simulate={(val, ref) => onChange(val, ref)}
          value={durationHL}
          refrence={"durationHL"} />
        <RangeSlider
          min={Constants.MinDeferredHL}
          max={Constants.MaxDefferedHL}
          label="Deferred: "
          unit={Constants.Month}
          Simulate={(val, ref) => onChange(val, ref)}
          value={deferredHL}
          refrence={"deferredHL"}
        />
        <RangeSlider
          min={Constants.MinMonthlyHL}
          max={Constants.MaxMonthlyHL}
          label="Monthly payment: "
          unit={Constants.Currency}
          Simulate={(val, ref) => onChange(val, ref)}
          value={monthlyHL}
          reference={"monthlyHL"} />
        <Touchable 
            isChecked={activeTVA}
            onChecked={() => onCheckedChanged()} 
        />

      </ScrollView>
    );
  }

  function SecondRoute() {
    return (
      <ScrollView style={styles.scene}>
        <RangeSlider
          min={Constants.MinAmountCC}
          max={Constants.MaxAmountCC}
          label="Amount :"
          unit={Constants.Currency}
          Simulate={() => SimulateMonthly()}
          value={200000}
          reference={amountCC} />
        <RangeSlider
          min={Constants.MinRateCC}
          max={Constants.MaxRateCC}
          label="Rate: "
          unit={Constants.Percentage}
          Simulate={() => SimulateMonthly()}
          value={5.5}
          reference={rateCC} />
        <RangeSlider
          min={Constants.MinDurationCC}
          max={Constants.MaxDurationCC}
          label="Duration: "
          unit={Constants.Month}
          Simulate={() => SimulateMonthly()}
          value={60}
          reference={durationCC} />
        <RangeSlider
          min={Constants.MinDeferredCC}
          max={Constants.MaxDefferedCC}
          label="Deferred: "
          unit={Constants.Month}
          Simulate={() => SimulateMonthly()}
          value={0}
          reference={deferredCC} />
        <RangeSlider
          min={Constants.MinMonthlyCC}
          max={Constants.MaxMonthlyCC}
          label="Monthly payment: "
          unit={Constants.Currency}
          Simulate={() => SimulateAmount()}
          value={3871.21}
          reference={monthlyCC} />
        <Touchable 
            isChecked={activeTVA}
            onChecked={() => onCheckedChanged()} 
        />
      </ScrollView>
    );
  }

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
      navigationState={{ index, routes }}
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
