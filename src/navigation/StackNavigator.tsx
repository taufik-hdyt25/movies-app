import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DetailMovieScreen from "@src/screens/DetailMovie";
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
        statusBarColor: colors.text,
        statusBarStyle: isDarkMode ? "dark" : "light",
        statusBarAnimation: "fade",
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={TabNavigator} />
      <Stack.Screen name="DetailMovieScreen" component={DetailMovieScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
