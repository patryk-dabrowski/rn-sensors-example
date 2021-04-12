import React from 'react';
import {StyleSheet, View} from 'react-native';
import SensorCard from "../components/SensorCard";


export default function HomeScreen({actions}) {
  return (
    <>
      <View style={styles.container}>
        <SensorCard onPress={actions.switchToMagnetometer} text='Magnetometer'/>
        <SensorCard onPress={actions.switchToAccelerometer} text='Accelerometer'/>
      </View>
      <View style={styles.container}>
        <SensorCard onPress={actions.switchToBarometer} text='Barometer'/>
        <SensorCard onPress={actions.switchToGyroscope} text='Gyroscope'/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
