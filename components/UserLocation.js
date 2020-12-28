import React, { useState, useEffect, Fragment } from "react";
import * as Location from "expo-location";

function UserLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let userCoords = "Waiting..";
  if (errorMsg) {
    userCoords = errorMsg;
  } else if (location) {
    userCoords = location.coords;
  }

  return userCoords;
}

const userLong = UserLocation.longitude;
const userLat = UserLocation.latitude;

export { userLong, userLat };
