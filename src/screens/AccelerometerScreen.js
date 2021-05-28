import React, {useEffect} from 'react';
import {Accelerometer} from 'expo-sensors';
import BaseContainer from "../components/BaseContainer";
import TextCenter from "../components/TextCenter";
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

  const {x, y, z} = coordinates;
  return (
    <BaseContainer>
      <TextCenter>Accelerometer: (in Gs where 1 G = 9.81 m s^-2)</TextCenter>
      <TextCenter>
        x: {round(x)} y: {round(y)} z: {round(z)}
      </TextCenter>
    </BaseContainer>
  );
}
