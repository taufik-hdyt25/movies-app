/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import MainApp from "./src/navigation/Routes";
import "react-native-gesture-handler";

// MENINGKATKAN PERFORMA FLATLIST

const App: React.FC = (): JSX.Element => {
  return <MainApp />;
};

export default App;
