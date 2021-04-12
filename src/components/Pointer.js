import {Dimensions, Image} from "react-native";
import React from "react";

const {height} = Dimensions.get('window');

export default function Pointer() {
  return (
    <Image
      source={require('../../assets/compass_pointer.png')}
      style={{height: height / 26, resizeMode: 'contain'}}
    />
  )
}
