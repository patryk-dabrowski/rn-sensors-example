import {Dimensions, StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";

const {width} = Dimensions.get('window');


export default function SensorCard({onPress, text}) {
  return <TouchableOpacity style={styles.box} onPress={onPress}>
    <Text>{text}</Text>
  </TouchableOpacity>;
};

const styles = StyleSheet.create({
  box: {
    width: (width / 2) - 30,
    height: (width / 2) - 30,
    backgroundColor: '#ddd',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
