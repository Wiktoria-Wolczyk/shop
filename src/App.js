import logo from "./logo.svg";
import "./App.css";
import { MyList } from "./products-list/products-list1";
import { useState } from "react";
import { ProfilePhoto } from "./products-list/profile/profilePhoto.jsx";
import { MyToDoList } from "./products-list/profile/profile.jsx";
import { List } from "./products-list/profile/penguin-list3.jsx";

function App() {
  // const [searchText, setSearchText] = useState("");

  // const searchProducts = (event) => {
  //   setSearchText(event.target.value);
  // };
  const penguin = {
    name: "Penguin-Lola",
    theme: {
      backgroundColor: "green",
      color: "black",
    },
  };

  return (
    <>
      <main className="my-list">
        <h1>Super-Penguin!</h1>
        <ProfilePhoto />
        <div style={penguin.theme}>
          <h3>{penguin.name}</h3>
          <ul>
            <li>This is Lola</li>
          </ul>
        </div>
        <div className="avatar">
          <MyToDoList />
        </div>

        <List />

        {/* <MyInput/> */}
        {/* <p>Search text: {searchText}</p> */}
        {/* <MyList dupa={searchText} /> */}
      </main>
    </>
  );
}

export default App;
