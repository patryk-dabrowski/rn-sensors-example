import React, {useEffect, useState} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
import {Barometer} from 'expo-sensors';

const {height, width} = Dimensions.get('window');

export default function BarometerScreen() {
  const [data, setData] = useState({});
  useEffect(() => {
    const subscribe = Barometer.addListener(barometerData => {
      setData(barometerData);
    })

    return () => {
      subscribe.remove;
    }
  }, []);

  const {pressure = 0, relativeAltitude = 0} = data;

  return (
    <View style={styles.sensor}>
      <Text>Barometer:</Text>
      <Text>Pressure: {pressure * 100} Pa</Text>
      <Text>
        Relative Altitude:{' '}
        {Platform.OS === 'ios' ? `${relativeAltitude} m` : `Only available on iOS`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sensor: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: height,
    width: width,
  },
});
