/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import SimulationScreen from "./Screens/SimulationScreen"
//import TestScreen from "../simulator/Screens/TestScreen";

AppRegistry.registerComponent(appName, () =>SimulationScreen);
