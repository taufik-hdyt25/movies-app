import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DetailMovieScreen from "@src/screens/DetailMovie";
import SearchMovieScreen from "@src/screens/SearchMovie";
import {COLORS} from "@src/theme";
import {useTheme} from "@src/theme/ThemeProvider";
import TabNavigator from "./TabNavigator";
import {RootStackParamList} from "./types";
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  const {colors, isDarkMode} = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        statusBarColor: colors.background,
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
