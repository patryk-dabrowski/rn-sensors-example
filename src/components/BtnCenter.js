import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";

export default function BtnCenter({onPress, children}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});
