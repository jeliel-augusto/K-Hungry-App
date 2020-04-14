import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from "expo";
import MealsNavigator from "./src/navigation/MealsNavigator";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./src/store/reducers/meals";

import { enableScreens } from "react-native-screens";

const rootReducer = combineReducers({
  meals: mealsReducer
});
const store = createStore(rootReducer);

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
      <Provider store={store}>
        <MealsNavigator />
      </Provider>
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
