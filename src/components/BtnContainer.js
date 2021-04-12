import {StyleSheet, View} from "react-native";
import React from "react";

export default function BtnContainer({children}) {
  return (
    <View style={styles.buttonContainer}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
});
