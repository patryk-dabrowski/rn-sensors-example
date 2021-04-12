import React, {useEffect, useState} from 'react';
import {Accelerometer} from 'expo-sensors';
import SensorContainer from "../components/SensorContainer";
import TextCenter from "../components/TextCenter";
import BtnCenter from "../components/BtnCenter";
import BtnContainer from "../components/BtnContainer";


export default function AccelerometerScreen() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    const subscribe = Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
    });
    return () => subscribe.remove();
  }, []);

  const _slow = () => {
    Accelerometer.setUpdateInterval(1000);
  };
  const _fast = () => {
    Accelerometer.setUpdateInterval(16);
  };

  const {x, y, z} = data;
  return (
    <SensorContainer>
      <TextCenter>Accelerometer: (in Gs where 1 G = 9.81 m s^-2)</TextCenter>
      <TextCenter>
        x: {round(x)} y: {round(y)} z: {round(z)}
      </TextCenter>
      <BtnContainer>
        <BtnCenter onPress={_slow}>Slow</BtnCenter>
        <BtnCenter onPress={_fast}>Fast</BtnCenter>
      </BtnContainer>
    </SensorContainer>
  );
}

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}
