import * as eva from "@eva-design/eva";
import {NavigationContainer} from "@react-navigation/native";
import {ThemeProvider} from "@src/theme/ThemeProvider";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ApplicationProvider} from "@ui-kitten/components";
import React from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";
import StackNavigator from "./StackNavigator";
const queryClient = new QueryClient();

const MainApp: React.FC = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <ApplicationProvider {...eva} theme={eva.light}>
              <StackNavigator />
            </ApplicationProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainApp;
