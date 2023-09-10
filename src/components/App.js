import React from "react";
import Header from "./Header";
import Main from "./Main";
import HandleCard from "../utils/HandleCard";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <HandleCard />
    </div>
  );
}
export default App;
