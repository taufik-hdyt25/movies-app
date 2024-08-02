/* eslint-disable prettier/prettier */
import {Icons} from "../components/atoms/Icon";
import HomeScreen from "../screens/Home";

export const Tabs = [
  {
    route: "HomeScreen",
    label: "Home",
    type: Icons.MaterialCommunityIcons,
    activeIcon: "gamepad-circle",
    inActiveIcon: "gamepad-circle-down",
    component: HomeScreen,
  },
  {
    route: "SettingScreen",
    label: "Settings",
    type: Icons.Ionicons,
    activeIcon: "person-circle",
    inActiveIcon: "person-circle-outline",
    // component: SettingScreen,
  },
];
