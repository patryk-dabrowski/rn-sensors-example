import React, {useEffect, useState} from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import {Magnetometer} from 'expo-sensors';
import LPF from 'lpf';

const {height, width} = Dimensions.get('window');

export default function Compass() {
  const [data, setData] = useState(0);

  Magnetometer.setUpdateInterval(200);

  useEffect(() => {
    LPF.init([]);
    LPF.smoothing = 0.2;
  }, []);

  useEffect(() => {
    const subscription = Magnetometer.addListener(result => {
      setData(angle(result));
    })
    return () => subscription.remove();
  }, []);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View
        style={{
          height: height,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '20%',
          }}>
          <Text
            style={{
              fontSize: height / 26,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            {direction(data)}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/compass_pointer.png')}
            style={{height: height / 26, resizeMode: 'contain'}}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: height / 27,
              width: width,
              position: 'absolute',
              textAlign: 'center',
            }}>
            {degree(data)}°
          </Text>
          <Image
            source={require('../assets/compass_bg.png')}
            style={{
              resizeMode: 'contain',
              height: width - 80,
              transform: [
                {rotate: 360 - data + "deg"}
              ]
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const angle = magnetometer => {
  let angle = 0;
  if (magnetometer) {
    let {x, y} = magnetometer;
    if (Math.atan2(y, x) >= 0) {
      angle = Math.atan2(y, x) * (180 / Math.PI);
    } else {
      angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
    }
  }
  // return Math.round(LPF.next(angle));
  return Math.round(angle);
};

const direction = degree => {
  if (degree >= 22.5 && degree < 67.5) {
    return "NE";
  } else if (degree >= 67.5 && degree < 112.5) {
    return "E";
  } else if (degree >= 112.5 && degree < 157.5) {
    return "SE";
  } else if (degree >= 157.5 && degree < 202.5) {
    return "S";
  } else if (degree >= 202.5 && degree < 247.5) {
    return "SW";
  } else if (degree >= 247.5 && degree < 292.5) {
    return "W";
  } else if (degree >= 292.5 && degree < 337.5) {
    return "NW";
  } else {
    return "N";
  }
};

const degree = n => {
  return n - 90 >= 0 ? n - 90 : n + 271;
}
