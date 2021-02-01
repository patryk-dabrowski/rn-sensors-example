import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Home from './src/Home';
import Compass from './src/Compass';


const OPTIONS = {
  HOME_SCREEN: 1,
  MAGNETOMETER_SCREEN: 2,
  ACCELEROMETER_SCREEN: 3,
  BAROMETER_SCREEN: 4,
  GYROSCOPE_SCREEN: 5,
};

export default function App() {
  const [option, setOption] = useState();

  const actions = {
    switchToHome: () => setOption(OPTIONS.HOME_SCREEN),
    switchToMagnetometer: () => setOption(OPTIONS.MAGNETOMETER_SCREEN),
    switchToAccelerometer: () => setOption(OPTIONS.ACCELEROMETER_SCREEN),
    switchToBarometer: () => setOption(OPTIONS.BAROMETER_SCREEN),
    switchToGyroscope: () => setOption(OPTIONS.GYROSCOPE_SCREEN),
  };

  let currentScreen;

  switch (option) {
    case OPTIONS.HOME_SCREEN:
      currentScreen = <Home actions={actions}/>;
      break;
    case OPTIONS.MAGNETOMETER_SCREEN:
      currentScreen = <Compass actions={actions}/>;
      break;
    case OPTIONS.ACCELEROMETER_SCREEN:
      currentScreen = <Compass actions={actions}/>;
      break;
    case OPTIONS.BAROMETER_SCREEN:
      currentScreen = <Compass actions={actions}/>;
      break;
    case OPTIONS.GYROSCOPE_SCREEN:
      currentScreen = <Compass actions={actions}/>;
      break;
    default:
      currentScreen = <Home actions={actions}/>;
      break;
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
      <TouchableOpacity onPress={actions.switchToHome}>
        {currentScreen}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
