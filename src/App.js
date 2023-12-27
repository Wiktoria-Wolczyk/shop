import logo from "./logo.svg";
import "./App.css";
import { MyList } from "./products-list/products-list1";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");

  const searchProducts = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <header className="App-header">
        <span className="search">Search:</span>

        <input onChange={searchProducts} className="search-panel"></input>
      </header>
      <main className="my-list">
        <p>Search text: {searchText}</p>
        <MyList dupa={searchText} />
      </main>
    </>
  );
}

export default App;
