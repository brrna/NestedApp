import React from "react";
import { SafeAreaView } from "react-native";
import Router from "./src/pages/router/Router";

function App() {
  return(
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "red"
      }}>

        <Router />

    </SafeAreaView>
  )
}

export default App;