import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RootTabParamList} from "./types";
import Icon, {Icons} from "@src/components/Atoms/Icon";
import {TextCustom} from "@src/components/Atoms";
import {COLORS, fontsApp} from "@src/theme";
import {View} from "react-native";
import HomeScreen from "@src/screens/Home";
import MovieScreen from "@src/screens/Movies";
import FavoriteScreen from "@src/screens/Favorite";

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconType;

          if (route.name === "Home") {
            iconName = focused ? "home-circle" : "home-circle-outline";
            iconType = Icons.MaterialCommunityIcons;
          } else if (route.name === "Movies") {
            iconName = focused ? "movie-filter" : "movie-filter-outline";
            iconType = Icons.MaterialCommunityIcons;
          } else if (route.name) {
            iconName = focused ? "favorite" : "favorite-border";
            iconType = Icons.MaterialIcons;
          }

          return (
            <View
              style={{
                backgroundColor: focused ? COLORS.bgBadge : "transparent",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 100,
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Icon
                onPress={() => navigation.navigate(route.name)}
                type={iconType}
                name={iconName}
                size={size}
                color={color}
              />
              {focused && (
                <TextCustom value={route.name} fontWeight={fontsApp.semiBold} />
              )}
            </View>
          );
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Movies" component={MovieScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
