import {Dimensions, SafeAreaView, StyleSheet} from "react-native";
import React from "react";

const {height, width} = Dimensions.get('window');

export default function BaseContainer({children}) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: height,
    width: width,
  },
});
