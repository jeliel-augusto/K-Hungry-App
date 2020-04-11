import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from "expo";
import MealsNavigator from "./src/navigation/MealsNavigator";
import { enableScreens } from "react-native-screens";
enableScreens(); //It's a good practice to use and enable native screens
const loadFonts = () => {
    return Font.loadAsync({
      'roboto-mono': require('./assets/fonts/RobotoMono-Regular.ttf'),
      'roboto-mono-bold': require('./assets/fonts/RobotoMono-Bold.ttf'),
      'roboto-mono-italic': require('./assets/fonts/RobotoMono-Italic.ttf')
    })
};
export default function App() {
  const [loading, setLoading] = useState(false);
  if(!loading){
    return (
        <AppLoading startAsync={loadFonts} onFinish={() => setLoading(true)}/>
    )
  }
  return (
      <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
