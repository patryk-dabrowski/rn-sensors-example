import React, {useEffect} from 'react';
import {Accelerometer} from 'expo-sensors';
import BaseContainer from "../components/BaseContainer";
import TextCenter from "../components/TextCenter";
import BtnCenter from "../components/BtnCenter";
import BtnContainer from "../components/BtnContainer";
import {round} from "../utils";
import {useCoordinates} from "../hooks";


export default function AccelerometerScreen() {
  const [coordinates, setCoordinates] = useCoordinates();

  useEffect(() => {
    const subscribe = Accelerometer.addListener(accelerometerData => {
      setCoordinates(accelerometerData);
    });
    return () => subscribe.remove();
  }, []);

  const _slow = () => {
    Accelerometer.setUpdateInterval(1000);
  };
  const _fast = () => {
    Accelerometer.setUpdateInterval(16);
  };

  const {x, y, z} = coordinates;
  return (
    <BaseContainer>
      <TextCenter>Accelerometer: (in Gs where 1 G = 9.81 m s^-2)</TextCenter>
      <TextCenter>
        x: {round(x)} y: {round(y)} z: {round(z)}
      </TextCenter>
      <BtnContainer>
        <BtnCenter onPress={_slow}>Slow</BtnCenter>
        <BtnCenter onPress={_fast}>Fast</BtnCenter>
      </BtnContainer>
    </BaseContainer>
  );
}
