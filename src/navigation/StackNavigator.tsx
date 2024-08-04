import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DetailMovieScreen from "@src/screens/DetailMovie";
import {useTheme} from "@src/theme/ThemeProvider";
import TabNavigator from "./TabNavigator";
import {RootStackParamList} from "./types";
import SearchMovieScreen from "@src/screens/SearchMovie";
import {connectionDevice} from "@src/utils/Connection";
import ErrorScreen from "@src/screens/ErrorScreen";
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  const {colors, isDarkMode} = useTheme();

  const isConnected = connectionDevice();
  console.log(isConnected);

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        statusBarColor: colors.text,
        statusBarStyle: isDarkMode ? "dark" : "light",
        statusBarAnimation: "fade",
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      {!isConnected ? (
        <Stack.Screen name="ErrorScreen" component={ErrorScreen} />
      ) : (
        <Stack.Group>
          <Stack.Screen name="HomeScreen" component={TabNavigator} />
          <Stack.Screen
            name="DetailMovieScreen"
            component={DetailMovieScreen}
          />
          <Stack.Screen
            name="SearchMovieScreen"
            component={SearchMovieScreen}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
