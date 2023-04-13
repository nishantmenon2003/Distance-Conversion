import "./App.css";
import React from "react";
import Conversion from "./Conversion";
import Calculate from "./Calculate";

import { Text } from "@chakra-ui/react";

function App() {
  // Code that is returned and displayed to webpage
  return (
    <>
      {/* -------------------
      Title Bar with my Name
      Converter for Miles and Kilometers
      -------------------- */}
      <div className="TitleBar">
        <header className="TitleBar-header">
          <Text fontSize="30px" color="white" as="underline">
            Nishant Menon's Distance Conversion and Arithmetic Tool
          </Text>
        </header>
      </div>

      {/* -------------------
      First Tool
      Converter for Miles and Kilometers
      -------------------- */}
      <Conversion />

      {/* -------------------
      Second Tool
      Arithmetic for Miles and Kilometers
      -------------------- */}
      <Calculate />

      <div classname="bottom">
        <header className="bottom-header"></header>
      </div>
    </>
  );
}

export default App;
