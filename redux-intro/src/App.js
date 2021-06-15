import React from "react";

// Components
import Counter from "./components/Counter";
import IncreaseCounter from "./components/IncreaseCounter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTowCounter from "./components/IncreaseByTowCounter";

function App() {
  return (
    <div >
      <Counter/>
      <IncreaseCounter/>
      <DecreaseCounter/>
      <IncreaseByTowCounter/>
    </div>
  );
}

export default App;
