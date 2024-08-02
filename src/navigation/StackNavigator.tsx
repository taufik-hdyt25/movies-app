import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "@src/screens/Home";
import {COLORS} from "@src/theme";
import {useTheme} from "@src/theme/ThemeProvider";
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        statusBarColor: COLORS.primary,
        statusBarStyle: "light",
        statusBarAnimation: "fade",
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      {/* <Stack.Screen name="SplashScreen" component={SplashHomeScreen} /> */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
