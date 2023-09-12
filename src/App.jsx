import { useState } from "react";
//Components
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [itemNumber, setItemNumber] = useState(0);
console.log(itemNumber)
  return (
    <>
      <Header itemNumber={itemNumber} setItemNumber={setItemNumber} />
      <Main itemNumber={itemNumber} setItemNumber={setItemNumber} />
    </>
  );
}

export default App;
