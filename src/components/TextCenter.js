import {StyleSheet, Text} from "react-native";
import React from "react";


export default function TextCenter({children}) {
  return <Text style={styles.text}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});
