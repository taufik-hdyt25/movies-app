import {createContext, useContext, useEffect, useState} from "react";
import {Appearance, useColorScheme} from "react-native";
import {COLORS} from ".";

type Colors = {
  text: string;
  textAccent: string;
  background: string;
  btnPrimary: string;
  btnText: string;
  card: string;
};
const lightModeColors: Colors = {
  text: COLORS.textPrimary,
  textAccent: "#444",
  background: "#f5f5f5",
  btnPrimary: "#5D8AA8",
  btnText: "#fff",
  card: "white",
};

const darkModeColors: Colors = {
  text: "#fff",
  textAccent: "#ccc",
  background: "#222",
  btnPrimary: "#5D8AA8",
  btnText: "black",
  card: "#757575",
};

const ThemeContext = createContext({
  colors: lightModeColors,
  toggleTheme: () => {},
  isDarkMode: false,
});

export const ThemeProvider = ({children}: any) => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");
  const [colors, setColors] = useState(
    colorScheme === "dark" ? darkModeColors : lightModeColors
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setColors(!isDarkMode ? darkModeColors : lightModeColors);
  };

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setIsDarkMode(colorScheme === "dark");
      setColors(colorScheme === "dark" ? darkModeColors : lightModeColors);
    });

    return () => subscription.remove();
  }, []);

  return (
    <ThemeContext.Provider value={{colors, toggleTheme, isDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
