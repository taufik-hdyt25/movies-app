import {NavigationContainer} from "@react-navigation/native";
import {ThemeProvider} from "@src/theme/ThemeProvider";
import React from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";
import StackNavigator from "./StackNavigator";
import * as eva from "@eva-design/eva";
import {ApplicationProvider, Layout, Text} from "@ui-kitten/components";

const MainApp: React.FC = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider>
          <ApplicationProvider {...eva} theme={eva.light}>
            <StackNavigator />
          </ApplicationProvider>
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainApp;
