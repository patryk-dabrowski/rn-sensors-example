import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const {width} = Dimensions.get('window');

export default function Home({actions}) {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.box} onPress={actions.switchToMagnetometer}>
          <Text>Magnetometer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={actions.switchToAccelerometer}>
          <Text>Accelerometer</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.box} onPress={actions.switchToBarometer}>
          <Text>Barometer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={actions.switchToGyroscope}>
          <Text>Gyroscope</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  box: {
    width: (width / 2) - 30,
    height: (width / 2) - 30,
    backgroundColor: '#fff',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
