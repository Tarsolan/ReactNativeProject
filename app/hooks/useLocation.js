import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const result = await Location.requestBackgroundPermissionsAsync();
      if (!result.granted) return;
      const position = await Location.getLastKnownPositionAsync();
      const {
        coords: { latitude, longitude },
      } = position;
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
