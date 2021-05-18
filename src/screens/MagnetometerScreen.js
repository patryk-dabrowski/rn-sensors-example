import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Magnetometer} from 'expo-sensors';
import BaseContainer from "../components/BaseContainer";
import {angle, degree, direction} from "../utils";
import Pointer from "../components/Pointer";
import Compass from "../components/Compass";

const {height} = Dimensions.get('window');

export default function MagnetometerScreen() {
  const [data, setData] = useState(0);

  Magnetometer.setUpdateInterval(200);

  useEffect(() => {
    const subscription = Magnetometer.addListener(result => {
      setData(angle(result));
    })
    return () => subscription.remove();
  }, []);

  return (
    <BaseContainer>
      <View style={styles.container}>
        <Pointer/>
        <Compass angle={data}/>
        <Text style={styles.degree}>{degree(data)}°</Text>
        <Text style={styles.direction}>{direction(degree(data))}</Text>
      </View>
    </BaseContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  degree: {
    color: '#fff',
    fontSize: height / 27,
    position: 'absolute',
  },
  direction: {
    color: '#fff',
    fontSize: height / 26,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: '20%',
  },
})
