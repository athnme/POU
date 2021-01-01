import React, { Fragment } from "react";
import { StatusBar } from "expo-status-bar";

import BottomNav from "./components/routes/BottomNav";

export default function App() {
  return (
    <Fragment>
      <BottomNav />
      <StatusBar style="light" />
    </Fragment>
  );
}
