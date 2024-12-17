import { useState } from "react";
import Navbar from "./Componets/Navbar";
import NewsBoard from "./Componets/NewsBoard";
const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}></Navbar>
      <NewsBoard category={category}></NewsBoard>
    </div>
  );
};

export default App;
