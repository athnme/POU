import React, { useState, useEffect, Fragment } from "react";
import * as Location from "expo-location";

function useUserLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      setLocation(location);
    })();
  }, []);

  return { location, errorMsg };
}

export default useUserLocation;

