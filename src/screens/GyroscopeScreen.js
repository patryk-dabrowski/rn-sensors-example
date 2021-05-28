import React, {useEffect} from 'react';
import {Gyroscope} from 'expo-sensors';
import BaseContainer from "../components/BaseContainer";
import TextCenter from "../components/TextCenter";
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

  const {x, y, z} = coordinates;
  return (
    <BaseContainer>
      <TextCenter>Gyroscope:</TextCenter>
      <TextCenter>
        x: {round(x)} y: {round(y)} z: {round(z)}
      </TextCenter>
    </BaseContainer>
  );
}
