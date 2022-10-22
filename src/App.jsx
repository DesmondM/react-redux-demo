import { useState } from "react";

import "./App.css";
import ChangeColor from "./components/ChangeColor";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Testing</h1>

      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
