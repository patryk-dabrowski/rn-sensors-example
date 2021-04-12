import React, {useEffect} from 'react';
import {Gyroscope} from 'expo-sensors';
import SensorContainer from "../components/SensorContainer";
import TextCenter from "../components/TextCenter";
import BtnCenter from "../components/BtnCenter";
import BtnContainer from "../components/BtnContainer";
import {round} from "../utils";
import {useCoordinates} from "../hooks";

export default function GyroscopeScreen() {
  const [coordinates, setCoordinates] = useCoordinates();

  useEffect(() => {
    const subscribe = Gyroscope.addListener(gyroscopeData => {
      setCoordinates(gyroscopeData);
    });
    return () => subscribe.remove();
  }, []);

  const _slow = () => {
    Gyroscope.setUpdateInterval(1000);
  };
  const _fast = () => {
    Gyroscope.setUpdateInterval(16);
  };

  const {x, y, z} = coordinates;
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
