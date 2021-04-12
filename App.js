import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import CompassScreen from './src/screens/CompassScreen';
import AccelerometerScreen from "./src/screens/AccelerometerScreen";
import BarometerScreen from "./src/screens/BarometerScreen";
import GyroscopeScreen from "./src/screens/GyroscopeScreen";


const OPTIONS = {
  HOME_SCREEN: 1,
  MAGNETOMETER_SCREEN: 2,
  ACCELEROMETER_SCREEN: 3,
  BAROMETER_SCREEN: 4,
  GYROSCOPE_SCREEN: 5,
};

const getScreen = (screen) => {
  const screens = {
    [OPTIONS.HOME_SCREEN]: HomeScreen,
    [OPTIONS.MAGNETOMETER_SCREEN]: CompassScreen,
    [OPTIONS.ACCELEROMETER_SCREEN]: AccelerometerScreen,
    [OPTIONS.BAROMETER_SCREEN]: BarometerScreen,
    [OPTIONS.GYROSCOPE_SCREEN]: GyroscopeScreen,
  }
  return screens[screen];
}

export default function App() {
  const [option, setOption] = useState(OPTIONS.HOME_SCREEN);

  const actions = {
    switchToHome: () => setOption(OPTIONS.HOME_SCREEN),
    switchToMagnetometer: () => setOption(OPTIONS.MAGNETOMETER_SCREEN),
    switchToAccelerometer: () => setOption(OPTIONS.ACCELEROMETER_SCREEN),
    switchToBarometer: () => setOption(OPTIONS.BAROMETER_SCREEN),
    switchToGyroscope: () => setOption(OPTIONS.GYROSCOPE_SCREEN),
  };

  const Screen = getScreen(option);

  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <TouchableOpacity onPress={actions.switchToHome} style={styles.button}>
        <Screen actions={actions}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
