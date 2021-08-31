import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import MealsNavigator from "./navigation/MealsNavigator";
const App = () => {
  const fetchFonts = () => {
    Font.loadAsync({
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });
  };
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={setFontLoaded(true)} />
    );
  }
  return <MealsNavigator />;
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export default App;
