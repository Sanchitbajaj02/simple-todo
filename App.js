import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Main from "./src/Components/Main";
export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="light" backgroundColor="#668aff" />
      <Main />
    </React.Fragment>
  );
}
