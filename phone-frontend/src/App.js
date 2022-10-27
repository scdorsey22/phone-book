import React, { useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import fire from "./fire";
import Login from "./components/sessions/Login";
import ListAllNumbers from "./components/phonebook/ListAllNumbers";
import AddNumber from "./components/phonebook/AddNumber";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  console.log('logged in?', isLoggedIn)

  const signOut = () => {
    fire.auth().signOut()
  };

  return (
    <div className="App">
      <BrowserRouter>
      {!isLoggedIn ? (
        <>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        </>
      ) : (
        <>
        <span onClick={signOut}>
          <a href="#">Sign Out</a>
        </span>
        <Routes>
          <Route path="/add-number" element={<AddNumber />}/>
        </Routes>
        <Routes>
          <Route path="/" element={<ListAllNumbers />}/>
        </Routes>
        </>
      )}
      
      </BrowserRouter>
    </div>
  );
}
export default App;
