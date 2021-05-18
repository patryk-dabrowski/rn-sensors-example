import React from 'react';
import {StyleSheet, View} from 'react-native';
import SensorCard from "../components/SensorCard";
import BaseContainer from "../components/BaseContainer";


export default function HomeScreen({navigation}) {
  return (
    <BaseContainer>
      <View style={styles.container}>
        <SensorCard onPress={() => navigation.navigate('Magnetometer')} text='Magnetometer'/>
        <SensorCard onPress={() => navigation.navigate('Accelerometer')} text='Accelerometer'/>
      </View>
      <View style={styles.container}>
        <SensorCard onPress={() => navigation.navigate('Barometer')} text='Barometer'/>
        <SensorCard onPress={() => navigation.navigate('Gyroscope')} text='Gyroscope'/>
      </View>
    </BaseContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
