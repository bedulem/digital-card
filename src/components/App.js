import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [isRotated, setIsRotated] = useState(false);

  function handleOnClickCard(valor) {
    setIsRotated(valor);
  }

  return (
    <div className={isRotated ? "App rainbow-curtain" : "App black-curtain"}>
      <Card onClick={handleOnClickCard}></Card>
    </div>
  );
}

export default App;
