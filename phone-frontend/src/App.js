import React, { useState} from "react";
import fire from "./fire";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  console.log('logged in?', isLoggedIn)

  return (
    <div className="App">
      Hello World!
    </div>
  );
}
export default App;
