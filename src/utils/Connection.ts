import {useFocusEffect} from "@react-navigation/native";
import {useEffect, useState} from "react";

export const connectionDevice = () => {
  const [isConnected, setIsConnected] = useState(false);

  useFocusEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await fetch("https://www.google.com");
        if (response.ok) {
          setIsConnected(true);
        } else {
          setIsConnected(false);
        }
      } catch (error) {
        setIsConnected(false);
      }
    };

    checkConnection();
  });

  return isConnected;
};
