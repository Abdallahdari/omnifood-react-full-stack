import "./App.css";
import Navber from "./Navber";
import Cart from "./cart";
import Header from "./header";
import Data from "./data";
import Contetn from "./coneten";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([]);
  function SavingForCard(item) {
    setItems((previus) => [...previus, item]);
  }
  function Ondelete(id) {
    setItems((item) => item.filter((item, index) => index !== id));
  }
  function ClearAll() {
    setItems([]);
  }
  return (
    <>
      <Navber />

      <Header />
      <Contetn Saving={SavingForCard} Data={Data} />
      <Cart ClearAll={ClearAll} Ondelete={Ondelete} items={items} />
    </>
  );
}

export default App;
