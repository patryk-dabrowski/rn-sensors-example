import {Dimensions, Image} from "react-native";
import React from "react";

const {width} = Dimensions.get('window');

export default function Compass({angle}) {
  return (
    <Image
      source={require('../../assets/compass_bg.png')}
      style={{
        resizeMode: 'contain',
        height: width - 80,
        transform: [
          {rotate: 360 - angle + "deg"}
        ],
      }}
    />
  )
}
