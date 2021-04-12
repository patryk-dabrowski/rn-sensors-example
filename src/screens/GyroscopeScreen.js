import React, {useEffect, useState} from 'react';
import {Gyroscope} from 'expo-sensors';
import SensorContainer from "../components/SensorContainer";
import TextCenter from "../components/TextCenter";
import BtnCenter from "../components/BtnCenter";
import BtnContainer from "../components/BtnContainer";

export default function GyroscopeScreen() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    const subscribe = Gyroscope.addListener(gyroscopeData => {
      setData(gyroscopeData);
    });
    return () => subscribe.remove();
  }, []);

  const _slow = () => {
    Gyroscope.setUpdateInterval(1000);
  };
  const _fast = () => {
    Gyroscope.setUpdateInterval(16);
  };

  const {x, y, z} = data;
  return (
    <SensorContainer>
      <TextCenter>Gyroscope:</TextCenter>
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
