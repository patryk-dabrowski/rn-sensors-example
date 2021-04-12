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

const getScreen = (screen, actions) => {
  switch (screen) {
    case OPTIONS.HOME_SCREEN:
      return <Home actions={actions}/>;
    case OPTIONS.MAGNETOMETER_SCREEN:
      return <Compass actions={actions}/>;
    case OPTIONS.ACCELEROMETER_SCREEN:
      return <Compass actions={actions}/>;
    case OPTIONS.BAROMETER_SCREEN:
      return <Compass actions={actions}/>;
    case OPTIONS.GYROSCOPE_SCREEN:
      return <Compass actions={actions}/>;
    default:
      return <Home actions={actions}/>;
  }
}

export default function App() {
  const [option, setOption] = useState();

  const actions = {
    switchToHome: () => setOption(OPTIONS.HOME_SCREEN),
    switchToMagnetometer: () => setOption(OPTIONS.MAGNETOMETER_SCREEN),
    switchToAccelerometer: () => setOption(OPTIONS.ACCELEROMETER_SCREEN),
    switchToBarometer: () => setOption(OPTIONS.BAROMETER_SCREEN),
    switchToGyroscope: () => setOption(OPTIONS.GYROSCOPE_SCREEN),
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <TouchableOpacity onPress={actions.switchToHome} style={styles.button}>
        {getScreen(option, actions)}
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
