import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import MagnetometerScreen from './src/screens/MagnetometerScreen';
import AccelerometerScreen from "./src/screens/AccelerometerScreen";
import BarometerScreen from "./src/screens/BarometerScreen";
import GyroscopeScreen from "./src/screens/GyroscopeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto'/>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home"}}/>
        <Stack.Screen name="Magnetometer" component={MagnetometerScreen} options={{title: "Magnetometer"}}/>
        <Stack.Screen name="Accelerometer" component={AccelerometerScreen} options={{title: "Accelerometer"}}/>
        <Stack.Screen name="Barometer" component={BarometerScreen} options={{title: "Barometer"}}/>
        <Stack.Screen name="Gyroscope" component={GyroscopeScreen} options={{title: "Gyroscope"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
