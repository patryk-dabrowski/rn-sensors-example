import {Dimensions, ScrollView, StyleSheet, View} from "react-native";
import React from "react";

const {height, width} = Dimensions.get('window');

export default function SensorContainer({children}) {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        {children}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: height,
    width: width,
  },
});
