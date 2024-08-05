import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import {RootStackParamList} from "./types";
import DetailMovieScreen from "@src/screens/DetailMovie";
import SearchMovieScreen from "@src/screens/SearchMovie";
import {useTheme} from "@src/theme/ThemeProvider";
import {COLORS} from "@src/theme";
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  const {colors, isDarkMode} = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        statusBarColor: COLORS.white,
        statusBarStyle: "dark",
        statusBarAnimation: "fade",
        contentStyle: {
          backgroundColor: COLORS.white,
        },
      }}
    >
      <Stack.Group>
        <Stack.Screen name="HomeScreen" component={TabNavigator} />
        <Stack.Screen name="DetailMovieScreen" component={DetailMovieScreen} />
        <Stack.Screen name="SearchMovieScreen" component={SearchMovieScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
