import React, {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {Barometer} from 'expo-sensors';
import SensorContainer from "../components/SensorContainer";
import TextCenter from "../components/TextCenter";

export default function BarometerScreen() {
  const [data, setData] = useState({
    pressure: 0,
    relativeAltitude: 0,
  });

  useEffect(() => {
    const subscribe = Barometer.addListener(barometerData => {
      setData(barometerData);
    })
    return () => subscribe.remove();
  }, []);

  const {pressure, relativeAltitude} = data;
  return (
    <SensorContainer>
      <TextCenter>Barometer:</TextCenter>
      <TextCenter>Pressure: {pressure * 100} Pa</TextCenter>
      <TextCenter>
        Relative Altitude:{' '}
        {Platform.OS === 'ios' ? `${relativeAltitude} m` : `Only available on iOS`}
      </TextCenter>
    </SensorContainer>
  );
}
